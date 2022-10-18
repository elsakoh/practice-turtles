# Verify Number

## Prerequisites

See `.env.sample` and create `.env` at the root of the repository with relevant credentials
Program will not run if credentials are not set

## Running the code

```sh
yarn && yarn start
```

## Testing the code

```sh
curl --request GET \
  --url 'http://localhost:3000/verify?=&number=14158586273'
```

should return

```json
{
  "valid": true,
  "result": {
    "carrier": "AT&T Mobility LLC",
    "country": "United States of America",
    "location": "Novato",
    "lineType": "mobile"
  }
}
```

running it again should result in the program reading from the db (can see a log message in the logs)
