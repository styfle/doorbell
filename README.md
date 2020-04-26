# Doorbell

This is a web application used to notify your Amazon Alexa device when someone rings this virtual doorbell.

You can print your deployment URL as a QR code so someone who arrives to your door can scan and ring the bell.

## Getting Started

1. Add the [NotifyMe](https://www.thomptronics.com/about/notify-me) skill to your Alexa device.
2. Add your NotifyMe Access Code as an [environment variable](https://vercel.com/blog/environment-variables-ui) called `ALEXA_ACCESS_CODE`.
3. Deploy to [Vercel](http://vercel.com/import).
4. Add a [custom domain name](https://vercel.com/docs/v2/custom-domains).
5. Create a QR code by visiting `https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fexample.com&chs=500x500&choe=UTF-8&chld=L|2` and replace `example.com` with your domain.