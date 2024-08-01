# Task Management App

This is a task management application built using the MERN stack (MongoDB, Express, React, Node.js). The frontend is bundled using Vite and is located in the `client` folder, while the backend server is in the `server` folder.

## Features

- **Task Creation:** Add new tasks with details.
- **Task Management:** Edit, delete, and update task statuses.
- **Drag and Drop:** Rearrange tasks
- **User Authentication:** Secure login and registration.


## Environment Variables

The application requires the following environment variables:

- **PORT:** The port number on which the backend server will run.
- **TOKEN_SECRET:** A secret key for JWT token signing.
- **MONGO_URL:** The MongoDB connection string.

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/d-passionate-coder/task-management.git
   cd task-management

2. **Navigate to the server directory and install dependencies:**
   ```bash
   cd server
   npm install

3. **Set up environment variables:**
   
   Create a .env file in the server directory with the following content:
   ```bash  
   PORT=5000
   TOKEN_SECRET=your_jwt_secret
   MONGO_URL=mongodb://localhost:27017/your_database_name

4. **Start the backend server:**
   ```bash
   npm start

5. **Navigate to the client directory and install dependencies:**
   ```bash
   cd ../client
   npm install

6. **Start the frontend development server:**
   ```bash
   npm run dev

## Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.








   
