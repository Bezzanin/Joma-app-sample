import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        try {
            firebase.initializeApp({
                apiKey: "",
                authDomain: "",
                databaseURL: "",
                projectId: "",
                storageBucket: "",
                messagingSenderId: ""
            });
        } catch (err) {
            if (!/already exists/.test(err.message)) {
                console.error('Firebase initialization error', err.stack)
            }
        }

    }

}

module.exports = Firebase;