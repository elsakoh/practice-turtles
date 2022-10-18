## **Verify Phone Number**

Returns json data about a phone number if it is valid.

- **URL**

  /verify

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `number=[integer]`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ "valid": true, "result": { "carrier": "AT&T Mobility LLC", "country": "United States of America", "location": "Novato", "lineType": "mobile" } }`

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "statusCode": 400, "message": "2342342 is not a valid number", "error": "Bad Request" }`

  OR

  - **Code:** 500 BAD GATEWAY <br />
    **Content:** `{ error : "You have reached the limit of your free subscription" }`
