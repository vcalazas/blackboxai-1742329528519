import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Test the API:
  1. Register: POST http://localhost:${port}/api/auth/register
     Body: { "email": "user@example.com", "password": "password123" }
     
  2. Login: POST http://localhost:${port}/api/auth/login
     Body: { "email": "user@example.com", "password": "password123" }
     
  3. Profile (Protected): GET http://localhost:${port}/api/auth/profile
     Headers: Authorization: Bearer <your_token>`);
});