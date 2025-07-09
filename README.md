# Property Dealing Web App

A full-stack web application for managing property listings, built with the MERN stack (React, Node.js, Express) and a SQL database.



## Features

- View all available properties.
- Add a new property to the list.
- Update details of an existing property.
- Delete a property from the list.
- User-friendly and responsive interface.

## Tech Stack

- **Frontend:** React, Vite, CSS
- **Backend:** Node.js, Express.js
- **Database:** MySQL (or any other SQL flavor you used)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js installed on your machine.
- A running instance of a SQL server.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/NoorMustafa4556/Property-Dealing-React-Vite.git
    cd Property-Dealing-React-Vite
    ```

2.  **Setup Backend:**
    ```sh
    cd backend
    npm install
    ```
    - Create a `.env` file in the `backend` folder and add your database credentials:
      ```
      DB_HOST=localhost
      DB_USER=root
      DB_PASSWORD=your_password
      DB_NAME=property_dealing
      ```
    - Run the `property_dealing.sql` file in your SQL database to create the necessary tables.
    - Start the backend server:
      ```sh
      npm start
      ```

3.  **Setup Frontend:**
    ```sh
    cd ../frontend
    npm install
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173` (or whatever port Vite shows).
