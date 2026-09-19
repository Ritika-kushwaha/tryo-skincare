const http = require('https');
const data = JSON.stringify({
  service_id: 'service_d5w4qrw',
  template_id: 'template_5n9hbcw',
  user_id: 'j6UbbGaexJGEmPokg',
  template_params: {
    name: 'AI Test',
    email: 'ritikakushwaha62@gmail.com',
    title: 'Test Email',
    time: 'Now',
    message: 'This is a test from the AI'
  }
});
const options = {
  hostname: 'api.emailjs.com',
  port: 443,
  path: '/api/v1.0/email/send',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};
const req = http.request(options, res => {
  console.log('STATUS:', res.statusCode);
  res.on('data', d => process.stdout.write(d));
});
req.on('error', e => console.error(e));
req.write(data);
req.end();
