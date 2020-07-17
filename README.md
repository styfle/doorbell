

# Doorbell

<img alt="QR Code" src="https://user-images.githubusercontent.com/229881/80325450-2b3e3d00-8803-11ea-8c63-ef629a82e46e.png" width=150 height=150 align="right" />

This is a web application used to notify your Amazon Alexa device when someone rings this virtual doorbell.

You can print your deployment URL as a QR code so someone who arrives to your door can scan and ring the bell.

## Getting Started

1. Fork this repo by clicking the button in the top right.
2. Add the [NotifyMe](https://www.thomptronics.com/about/notify-me) skill to your Alexa device.
3. Add your NotifyMe Access Code as an [environment variable](https://vercel.com/blog/environment-variables-ui) called `ALEXA_ACCESS_CODE`.
4. Deploy to [Vercel](http://vercel.com/import) so that `/api/ring.js` can be executed as a Serverless Function in the cloud.
5. Add a [custom domain name](https://vercel.com/docs/v2/custom-domains).
6. Create a QR code by visiting `https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fexample.com&chs=500x500&choe=UTF-8&chld=L|2` and replace `example.com` with your domain so your visitors will recognize this is your doorbell.
7. Print your QR Code, laminate it, and post it outside of your door(s).
8. Wait for someone to visit and ring your [unique doorbell](https://vimeo.com/307547803).
