# Person REST API Documentation
This documentation provides information on how to use the Person REST API for performing CRUD (Create, Read, Update, Delete) operations on person records. The API is built using Express.js and MongoDB.

## API Base URL
The base URL for the API is `http://localhost:3000/api`.

### Person Object Schema
- name (String): The name of the person.
-  age (Number): The age of the person.

### Error Response Format
In case of an error, the API returns a JSON response with an error message:

`
{
  "error": "Error message here"
}`

### CREATE (POST /api)
Create a new person record.

#### Request:

- Method: POST
- URL: /api
- Body (JSON):
`
{
  "name": "John Doe",
  "age": 30,
  
}`
#### Response (201 Created):

- Body (JSON):
`
{
  "_id": "person_id_here",
  "name": "John Doe",
  "age": 30,

}`

### READ (GET /api:person_id)
Retrieve details of a specific person by ID.

#### Request:

-  Method: GET
- URL: `/api/:person_id`

#### Response (200 OK):

- Body (JSON):
`
{
  "_id": "person_id_here",
  "name": "John Doe",
  "age": 30,
  
}`
### UPDATE (PUT /api:person_id)
Update details of an existing person by ID.

#### Request:

- Method: PUT
- URL: /api/:person_id
- Body (JSON):
`{
  "name": "Updated Name",
  "age": 31,
  "email": "updated@example.com"
}`
#### Response (200 OK):

- Body (JSON):

`{
  "_id": "person_id_here",
  "name": "Updated Name",
  "age": 31,

}`
### DELETE (DELETE /api/:person_id)
Remove a person record by ID.

#### Request:

- Method: DELETE
- URL: /`/api/:person_id`
`Response (204 No Content):`

No content is returned on successful deletion.

## Known Limitations
- The API assumes that MongoDB is correctly configured and running.
- Error handling for database connection issues is minimal and should be enhanced for production use.

## Local Setup and Deployment
1. Clone the GitHub repository: `git clone https://github.com/zeddymuge/person-resource-api.git`

2. Install Node.js dependencies: npm install

3. Configure MongoDB connection details in the .env file.

4. Start the API locally: npm start

The API will be accessible at http://localhost:3000/api.

