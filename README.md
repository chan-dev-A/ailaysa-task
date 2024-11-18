# ailaysa-task
Ailaysa Task for fullstack angular

Fullstack App
This project is a full-stack application built with an Angular frontend and a Node.js backend. The app demonstrates basic CRUD operations with a functional backend and a dynamic user interface.

# Features

Backend: Node.js with Express.js for API endpoints.

Frontend: Angular for the user interface.

Database: MySQL (example queries provided for box management).

Development Tools: Nodemon for automatic server restarts during development.

# Prerequisites

Before running the application, ensure you have the following installed:

Node.js (version 16 or later recommended)

Angular CLI (compatible with Angular 14)

MySQL (or any compatible database)

A package manager: npm (default with Node.js)

# Installation

Clone the Repository:

Install Dependencies:

Install root-level dependencies:

npm install

Install backend dependencies:

cd backend

npm install

cd ..

Install frontend dependencies:

cd client

npm install

cd ..

Frontend: Modify the environment.ts file in the Angular project (client/src/environments) to set the API base URL:

typescript

export const environment = {

  production: false,
  
  apiUrl: 'http://localhost:5000/api/',
  
};

# Usage

Start the Application:

Run the following command in the root directory:

npm start

This will start both the backend (on http://localhost:5000) and the frontend (on http://localhost:4200) simultaneously.

Access the Application:

Open your browser and navigate to http://localhost:4200.

Project Structure

fullstack-app/

├── backend/               # Node.js backend

│   ├── config/            # Database configuration

│   ├── routes/            # API route handlers

│   ├── server.js          # Backend entry point

│   └── package.json       # Backend dependencies

├── client/                # Angular frontend

│   ├── src/               # Frontend source files

│   ├── angular.json       # Angular configuration

│   └── package.json       # Frontend dependencies

├── package.json           # Root scripts and dependencies

└── README.md              # Project documentation


# Scripts

npm start: Starts both the backend and frontend servers.

npm run start:backend: Starts only the backend server with nodemon.

npm run start:client: Starts only the Angular development server.


# API Endpoints

Method	Endpoint	Description

GET	/api/getAll	Fetch all boxes.

GET	/api/getById/:id	Fetch a box by ID.

POST	/api/add	Add a new box.

DELETE	/api/remove/:id	Delete a box by ID.

