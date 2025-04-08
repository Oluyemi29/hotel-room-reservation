const EmailHtmlTemplate = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .header {
            background: #2c3e50;
            color: #ffffff;
            text-align: center;
            padding: 20px;
            font-size: 24px;
        }
        .content {
            padding: 20px;
        }
        .room-image {
            width: 100%;
            height: auto;
            border-bottom: 2px solid #ddd;
        }
        .room-details {
            margin: 20px 0;
            padding: 15px;
            background: #f9f9f9;
            border-radius: 5px;
        }
        .footer {
            text-align: center;
            padding: 15px;
            font-size: 14px;
            background: #2c3e50;
            color: #ffffff;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            Booking Confirmation
        </div>
        <div class="content">
            <img src="{{roomimage}}" alt="Room Image" class="room-image">
            <h2>Dear {{username}},</h2>
            <p>Thank you for choosing our hotel! Here are the details of your booking:</p>
            <div class="room-details">
                <p><strong>Room Name:</strong> {{roomname}}</p>
                <p><strong>Price per Night:</strong> #{{roompricepernight}}</p>
                <p><strong>Bed Type:</strong> {{bedtype}}</p>
                <p><strong>Room Size:</strong> {{roomsize}}</p>
                <p><strong>Max Occupancy:</strong> {{maxoccupancy}} guests</p>
                <p><strong>Amenities:</strong> {{amenites}}</p>
                <p><strong>Check-in Date:</strong> {{startdate}}</p>
                <p><strong>Check-out Date:</strong> {{enddate}}</p>
                <p><strong>Total Price:</strong> #{{totalprice}}</p>
            </div>
            <p>If you have any questions, feel free to contact us.</p>
        </div>
        <div class="footer">
            &copy; 2025 Dev Oluyemi. All Rights Reserved.
        </div>
    </div>
</body>
</html>
`;

export default EmailHtmlTemplate;
