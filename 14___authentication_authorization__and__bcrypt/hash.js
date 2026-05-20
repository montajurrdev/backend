// bcrypt kivabe use korte hoy for password encryption and decryption

const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.get("/", function (req, res) {
  // bcrypt.genSalt(saltRounds, function (err, salt) {
  //   bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
  //     // Store hash in your password DB.
  //   });
  // });
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("password", salt, function (err, hash) {
      console.log(hash);
    });
  });
});

app.get("/compare", function (req, res) {
  //     // Load hash from your password DB.
  // bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
  //     // result == true
  // });
  // bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
  //     // result == false
  // });

  bcrypt.compare(
    "password",
    "$2b$10$AG8FPR5U1TCAfBhPxvZvh.TjOvuR/dVbr1DpTcuq2cw/UBLtex7Ui",
    function (err, result) {
      console.log(result);
    },
  );
  bcrypt.compare(
    "passwor",
    "$2b$10$AG8FPR5U1TCAfBhPxvZvh.TjOvuR/dVbr1DpTcuq2cw/UBLtex7Ui",
    function (err, result) {
      console.log(result);
    },
  );
});

app.listen(3000);

// encryption => kono srting ke, akta algorithm  er maddhome new string a change kora
// password (readable) => encrypt => sowdrap
// but it is very week

// that's why we will use bcrypt

// bcrypt → password => encrypt => glfsdahfoyrfurif784683jhhashdfcacj
// convert to long non-readable string

// salt concept
// we can mixed a another (number,string) with our password at encryption time
// this is called salt.
// we give salt level (10), bcrypt generate a long non-readable salt string
// then mixed it to password at hashing time

// whole process is called bcrypt encryption

// decryption:
// encrypt kora password ke decrypt kora jay na

// we can just compare this hash.
// though generate a new hash with same password,salt level
