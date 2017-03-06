'use strict';

// [START imports]
var firebase = require('firebase-admin');
// [END imports]

var Promise = require('promise');
var escape = require('escape-html');


var serviceAccount = require("./myKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://hatplay.firebaseio.com'
});
// [END initialize]

var db = firebase.database();
var ref = db.ref("root");
ref.once("value", function (snapshot) {
  console.log(snapshot.val());
});


