# Med-Store-API Project

## Tech stack

**Server:** NodeJS, ExpressJS, MongoDB, JWT

# API Features

- Authentication & Authorization
- User can login or Signup
- User can create medicine
- User can update medicine
- User can search for medicine
- User can delete a medicine

# End-points

- [API Authentication](#API-Authentication)

- [User](#User-API-Reference)

  - [Register a new user](#Register-a-new-user)
  - [Login](#User-Login)

- [Medicine](#Medicine-API-Reference)

  - [Get all medicine](#Get-medicines)
  - [Add medicine](#Add-medicine)
  - [Edit medicine](#Edit-medicine)
  - [Search medicine](#Search-medicine)
  - [Delete medicine](#Delete-medicine)

# Run locally

Clone the Project

```
git clone https://github.com/its-sarath28/med-store-api.git
```

Go to project directory

```
cd [folder_name]
```

Install dependencies

```
npm install
```

Create a .env file and add

```
PORT=

MONGO_URL=

JWT_KEY=
```

Start the server

```
npm start
```

# API Authentication

Some endpoints may require authentication for example. To create a create/delete/update medicine, you need to register your API client and obtain an access token.

The endpoints that require authentication expect a bearer token sent in the `Authorization header`.

**Example:**

`Authorization: Bearer YOUR_TOKEN`

# Register a new user

```
POST  /api/v1/users/register
```

The request body needs to be in JSON format.

| Parameter    | Type     | Description   | Required |
| :----------- | :------- | :------------ | :------- |
| `First name` | `string` | Your token    | Yes      |
| `Last name`  | `string` | Your token    | Yes      |
| `email     ` | `string` | Your email    | Yes      |
| `password  ` | `string` | Your password | Yes      |

Example request body:

```
{
    "firstName": "your_firstName",
    "lastName": "your_lastName",
    "email":"your_email",
    "password":"your_password"
}
```

## User Login

```
POST  /api/v1/users/login
```

| Parameter        | Type     | Description   | Required |
| :--------------- | :------- | :------------ | :------- |
| `authentication` | `string` | Your token    | No       |
| `email         ` | `string` | Your email    | Yes      |
| `password      ` | `string` | Your password | Yes      |

Example request body:

```
{
  "email":"your_email",
  "password":"your_password"
}
```

# Medicine API Reference

## Get medicines

```
GET  /api/v1/medicine/show
```

| Parameter        | Type     | Description | Required |
| :--------------- | :------- | :---------- | :------- |
| `authentication` | `string` | Your token  | Yes      |

## Add medicine

```
POST  /api/v1/medicine/add-medicine
```

| Parameter        | Type     | Description          | Required |
| :--------------- | :------- | :------------------- | :------- |
| `authentication` | `string` | Your token           | Yes      |
| `medicineName  ` | `string` | Name of medicine     | Yes      |
| `price         ` | `string` | Price of medicine    | Yes      |
| `category      ` | `string` | Category of medicine | Yes      |

## Edit medicine

```
PUT  /api/v1/medicine/edit-medicine/:id
```

| Parameter        | Type     | Description        | Required |
| :--------------- | :------- | :----------------- | :------- |
| `authentication` | `string` | Your token         | Yes      |
| `id`             | `string` | Id of the medicine | Yes      |

## Search medicine

```
GET  /api/v1/medicine/search-medicine?medicineName=
```

| Parameter        | Type     | Description          | Required |
| :--------------- | :------- | :------------------- | :------- |
| `authentication` | `string` | Your token           | Yes      |
| `medicineName`   | `string` | Name of the medicine | Yes      |

## Delete medicine

```
DELETE  /api/v1/medicine/delete-medicine/:id
```

| Parameter        | Type     | Description                           | Required |
| :--------------- | :------- | :------------------------------------ | :------- |
| `authentication` | `string` | Your token                            | Yes      |
| `id`             | `string` | ID of the medicine you want to delete | Yes      |
