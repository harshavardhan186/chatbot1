1.Install Node.js
   - Check version: 
     node -v
     npm -v
   - Node v18+ recommended

2️.Navigate to project folder:
   cd C:\Users\nhvc2\Desktop\Chatbot

3️.Install dependencies:
   npm install express mongoose dotenv bcrypt cors node-fetch jsonwebtoken

4️.Create a .env file in root:
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret
   OPENAI_API_KEY=your_openai_api_key
   PORT=5000

5.Run the backend server:
   - Using nodemon (auto-restart on changes):
     npx nodemon src/index.js
   - Or using node directly:
     node src/index.js

6️.Test APIs (Postman / Insomnia):
   Base URL: http://localhost:5000/api

   #Auth Routes:
     - Register: POST /auth/register
       Body:
       {
         "email": "user@example.com",
         "password": "password123"
       }
     - Login: POST /auth/login
       Body:
       {
         "email": "user@example.com",
         "password": "password123"
       }
       → Returns JWT token

   #Project Routes (use Authorization: Bearer <JWT_TOKEN>):
     - Create Project: POST /projects
       Body: { "name": "My Chatbot Project" }
     - Add Prompt: POST /projects/:projectId/prompts
       Body: { "text": "Hello, how are you?" }
     - Chat with LLM: POST /projects/:projectId/chat
       Body: { "message": "Hello!" }
