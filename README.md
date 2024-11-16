# Email Scheduler API

## Description
This API allows users to schedule emails to be sent after 1 hour using Agenda and Nodemailer.

---

## Features
- Schedule emails after 1 hour.
- Input validation to ensure valid data.

---

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- MongoDB

---

### Installation
- Clone the repository:
```bash
   git clone https://github.com/falgunmahajan/EmailSchedulerBackend.git
```

- Install dependencies:
```bash
   npm install
```

- Set up the .env file:
```bash
   PORT=3000
   DBURL=dbUrl
   USER=your_email@gmail.com
   PASS=App_password_for_gmail
```

- Start the server:
```bash
  npm start
```

---

### API Endpoint
POST  /api/v1/getemail

- Request
```json
{
  "emailAddress": "example@example.com",
  "emailBody": "This is a test email",
  "subject": "Test Subject",
  "time": "hh:mm:ss"
}
```

- Response
```json
{
  "message": "Email scheduled successfully"
}
```


