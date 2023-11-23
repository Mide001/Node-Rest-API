# Node.js REST API

This is a basic Node.js REST API project that provides a foundation for building scalable and efficient web applications. The API supports user authentication using JSON Web Tokens (JWT) and includes routes for managing blog posts.

## Features

- **User Authentication:** Secure your application with user authentication using JWT.
- **Blog Management:** Implement CRUD (Create, Read, Update, Delete) operations for managing blog posts.
- **Error Handling:** Handle common errors gracefully with proper HTTP status codes.
- **Database Connectivity:** Connect to MongoDB to store and retrieve data efficiently.

## Technologies Used

- **Node.js:** JavaScript runtime for server-side development.
- **Express:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing data.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JSON Web Tokens (JWT):** Securely authenticate users and authorize API requests.

## Project Setup

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure environment variables:**

    Create a `.env` file in the project root and set the following variables:

    ```env
    PORT=3000
    DATABASE=mongodb://localhost/your_database_name
    ```

    Adjust the `DATABASE` variable based on your MongoDB configuration.

4. **Run the application:**

    ```bash
    npm start
    ```

    The API will be accessible at `http://localhost:3000`.

## API Endpoints

### User Authentication

- **POST /users/register:**
  - Register a new user.
  - Request:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "status": "success",
      "message": "User added successfully",
      "data": null
    }
    ```

- **POST /users/authenticate:**
  - Authenticate and receive a JWT token.
  - Request:
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "status": "success",
      "message": "User Found",
      "data": {
        "user": { /* User information */ },
        "token": "eyJhbGciOiJIUzI1NiIsIn... (JWT Token)"
      }
    }
    ```

### Blog Management

- **GET /api/blogs:**
  - Retrieve all blog posts.

- **POST /api/blogs:**
  - Create a new blog post (requires authentication).
  - Request:
    ```json
    {
      "title": "New Blog Post",
      "body": "This is the content of the blog post."
    }
    ```
  - Response:
    ```json
    {
      "status": "success",
      "message": "Blog post created successfully",
      "data": { /* Created blog post information */ }
    }
    ```

- **GET /api/blogs/:id:**
  - Retrieve a specific blog post.

- **PUT /api/blogs/:id:**
  - Update a specific blog post (requires authentication).
  - Request:
    ```json
    {
      "title": "Updated Blog Post",
      "body": "This is the updated content of the blog post."
    }
    ```
  - Response:
    ```json
    {
      "status": "success",
      "message": "Blog post updated successfully",
      "data": { /* Updated blog post information */ }
    }
    ```

- **DELETE /api/blogs/:id:**
  - Delete a specific blog post (requires authentication).
  - Response:
    ```json
    {
      "status": "success",
      "message": "Blog post deleted successfully",
      "data": null
    }
    ```

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your contributions are highly appreciated!

## License

This project is licensed under the [MIT License](LICENSE).
