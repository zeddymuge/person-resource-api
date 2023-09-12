# person-resource-api

## Project Description

This repository contains a simple REST API built with Express.js and MongoDB for managing "person" resources.

## Setup Instructions

1. Clone the repository.
2. Install dependencies: `npm install`.
3. install nodemon : `npm install -g nodemon`.
4. Configure your MongoDB connection in `index.js`.
5. Run the API: `nodemon start`.

## API Usage

### Create a new person

POST `/api`

### Retrieve person details by ID

GET `/api/{user_id}`

### Update existing person information

PUT `/api/{user_id}`

### Delete a person

DELETE `/api/{user_id}`

### Search for persons by name

GET `/api/search?name={name}`

## UML Diagrams

+-------------------+        +-------------------+        +----------------+
|     Express       |        |      Person       |        |   mongodb    Database    |
|      Router       |  ----> |     Model         | <----  |                |
|                   |        |                   |        |                |
+-------------------+        +-------------------+        +----------------+
|                   |        |                   |        |                |
|   POST /          |        |   save()          |        |                |
|   GET /           |        |   find()          |        |             |
|   GET /:id        |        |   findById()     |        |                |
|   PUT /:id        |        |   findByIdAndUpdate()|     |                |
|   DELETE /:id     |        |   findByIdAndDelete()|     |                |
|   GET /search     |        |                   |        |                |
|                   |        |                   |        |                |
+-------------------+        +-------------------+        +----------------+


## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the [MIT License](LICENSE).
