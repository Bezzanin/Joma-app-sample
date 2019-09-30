import * as firebase from "firebase";
import moment from 'moment';
var _ = require('lodash');

class fireFunctions {

    static checkUserAuthStatus() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user == null) {
                // let initialView = "LoginScreen";
                // let uid = "No UID";
                // callback(initialView, uid);
                console.log('No user')
            }
            else {
                // let initialView = "HomeScreen";
                // let uid = user.uid;
                // callback(initialView, uid);
                console.log(user)
            }           
          })
    }

    static registerUserPhone(phoneNumber, callback) {
    firebase.auth().signInWithPhoneNumber(phoneNumber)
    .then(confirmResult => callback(confirmResult))// save confirm result to use with the manual verification code)
    .catch(error => error);
    }
}

module.exports = fireFunctions;