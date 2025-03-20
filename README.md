# Vajram Vivera - Digital Marketing Lead Generation

A web platform designed to capture and manage leads from Google Discovery campaigns and Facebook advertising for the Vajram Vivera project.

## Overview

This repository contains a responsive lead generation system built for Vajram Vivera's digital marketing initiatives. The platform is designed to efficiently capture, validate, and process leads from various digital marketing channels, primarily Google Discovery campaigns and Facebook ads.

## Features

- **Responsive Design**: Built with Bootstrap to ensure a seamless experience across all devices
- **Lead Capture Forms**: Optimized forms with field validation
- **Captcha Integration**: Security measures to prevent spam submissions
- **CRM Integration**: Automated lead forwarding to the CRM system
- **Analytics Tracking**: Integration with marketing platforms for conversion tracking
- **Thank You Pages**: Customized post-submission experience
- **Admin Dashboard**: For monitoring lead statistics and performance

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript/jQuery
- PHP
- MySQL Database

## Requirements

- PHP 7.4 or higher
- MySQL 5.7 or higher
- Web server (Apache/Nginx)

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/Vajram_Vivera.git
```

2. Configure the database connection in `config.php`
```php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'your_username');
define('DB_PASSWORD', 'your_password');
define('DB_NAME', 'vajram_vivera_db');
```

3. Import the database schema
```bash
mysql -u username -p database_name < database/schema.sql
```

4. Configure your CRM API credentials in `crm_config.php`

5. Set up your captcha credentials in `captcha_config.php`

## Project Structure

```
├── assets/
│   ├── css/
│   ├── images/
│   ├── js/
│   └── fonts/
├── includes/
│   ├── config.php
│   ├── db_connect.php
│   ├── functions.php
│   └── captcha_config.php
├── crm/
│   └── send_to_crm.php
├── thankyou.php
├── index.php
├── savecon.php
└── README.md
```

## Usage

1. Edit the form fields in `index.php` to match your requirements
2. Customize the thank you page in `thankyou.php`
3. Adjust the CRM integration in `crm/send_to_crm.php`
4. Configure Google Analytics or Facebook Pixel in the relevant sections
5. Test the form submission process and CRM integration

## Form Validation

The project includes client-side and server-side validation:

```javascript
$("form").each(function() {
  var form = $(this);
  if (form.length) {
    form.validate({
      rules: {
        phone: {
          required: true,
          number: true,
        },
        email: {
          required: true,
          email: true,
        },
      },
      // Additional validation rules...
    });
  }
});
```

## Lead Processing

Leads are processed through the following flow:

1. Form submission triggers AJAX request to `savecon.php`
2. Server-side validation occurs
3. Captcha verification ensures authentic submissions
4. Data is saved to the database
5. Lead information is forwarded to the CRM via API
6. User is redirected to the thank you page

## Common Issues & Troubleshooting

- **Captcha Errors**: Ensure your captcha keys are correctly configured
- **Form Submission Failures**: Check browser console for JavaScript errors
- **CRM Integration Issues**: Verify API credentials and formatting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Bootstrap for the responsive framework
- jQuery for DOM manipulation
- jQuery Validation Plugin for form validation
- OhSnap.js for notifications
