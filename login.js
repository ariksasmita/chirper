var passport = require('passport');
var LocalStrategy= require('passport-local');

// Create local DB
var LocallyDB = require('locallydb');
var db = new LocallyDB('./.data');
var users = db.collection('users');
