# Project Name:- node-api-using-express-js-and-mysql-database
### Explain:- This project demonstrates a simple backend server built with **Node.js**, **Express**, and **MySQL 8.0+**. It includes:

- express 5.1.0
- MySQL database connection using `mysql2:3.14.2`
- RESTful API endpoint for user sign-up

---

## 🏗️ Make sure you install below dependencies 

- Node.js (v23.10.0 or above)
- MySQL Server 8.0+
- npm
- Make sure you created a database named `node_api(any-name)` in MySQL

---

### 🚀 How you can setup - Clone the Repository

```bash
git clone https://github.com/rohitash-eng/node-api-using-express-js-and-mysql-database.git
cd node-api-using-express-js-and-mysql-database
then run npm install
then edit the database name and password in your `DataBaseConfig.js` file
then node server.js
open Postman or bruno and test the endpoints using postman or any other API testing tool
EX- http://localhost:3000/signup
use json like 
{
  "firstName": "John",
  "lastName": "Doe",
  "dob": "1990-01-01",
  "phone": "9876543210",
  "email": "john.doe@example.com",
  "password": "secure123"
}
```
