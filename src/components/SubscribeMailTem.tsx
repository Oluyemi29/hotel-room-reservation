const SubscribeMailTem = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Subscription Confirmation</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f5f7fa;
      color: #333;
    }
    .email-wrapper {
      max-width: 600px;
      margin: auto;
      background-color: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .email-header {
      background-color: #2a9d8f;
      color: #fff;
      text-align: center;
      padding: 30px 20px;
    }
    .email-header h1 {
      margin: 0;
      font-size: 24px;
    }
    .email-body {
      padding: 30px 20px;
      text-align: center;
    }
    .email-body p {
      font-size: 16px;
      line-height: 1.6;
    }
    .highlight {
      color: #2a9d8f;
      font-weight: bold;
    }
    .button {
      margin-top: 20px;
      display: inline-block;
      padding: 12px 25px;
      background-color: #2a9d8f;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-size: 16px;
    }
    .email-footer {
      background-color: #f0f0f0;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-header">
      <h1>Thank You for Subscribing!</h1>
    </div>
    <div class="email-body">
      <p>Hello 👋</p>
      <p>You've successfully subscribed to our <span class="highlight">HOTEL ROOM UPDATES</span></p>
      <p>We'll keep you posted on our latest room offers, deals, and special discounts.</p>
      <a href="{{siteLink}}" class="button">Visit Our Website</a>
    </div>
    <div class="email-footer">
      &copy; 2025 Dev Oluyemi - All rights reserved.
    </div>
  </div>
</body>
</html>
`;

export default SubscribeMailTem;
