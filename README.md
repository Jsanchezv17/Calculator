# Calculator | Basic Operations implementation

As a technical interviewer, I want to evaluate a candidate's ability to implement basic calculator
operations, So that I can assess their backend development and problem-solving skills

Acceptance Criteria:

  • Implement an API endpoint that accepts two numbers and an operation type

  • Support basic arithmetic operations:

    - Addition (+)

    - Subtraction (-)

    - Multiplication (*)

    - Division (/)

  • Implement proper error handling.

  • Return results in a consistent JSON format:

    - Operation performed

    - Input values

    - Result

    - Timestamp

  • Include input validation

  • Implement proper HTTP status codes for responses

# EndPoint

The API is executed on localhost through an endpoint get by the route http://localhost:3000/operation and the parameters are passed through the url.

Example: http://localhost:3000/operation/10.5/15/subtraction

# Ejecution

The API is executed via docker with docker-compose by running "docker-compose up" with the previously configured .yml file