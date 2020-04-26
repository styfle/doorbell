const https = require('https');

module.exports = (req, res) => {
  const notification = `${req.query.name || 'Someone'} rang the doorbell.`;
  const accessCode = process.env.ALEXA_ACCESS_CODE;
  if (!accessCode) {
    throw new Error('Did you forget to assign ALEXA_ACCESS_CODE?');
  }
  console.log(notification);

  const url = new URL('https://api.notifymyecho.com/v1/NotifyMe');
  url.searchParams.append('notification', notification);
  url.searchParams.append('accessCode', accessCode);

  https.get(url, ({ statusCode }) => {
    if ([200, 201, 202].includes(statusCode)) {
      res.statusCode = 307;
      res.setHeader('Location', '/success.html');
    } else {
      res.statusCode = 307;
      res.setHeader('Location', '/failure.html');
    }
  });
}
