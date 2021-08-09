import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initialiseLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const handelGoogleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const { displayName, email, password } = result.user;
      const signedUser = {
        isSigned: true,
        name: displayName,
        email: email,
        password: password,
        message: "Signed in Successfully",
      };
      return signedUser;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      const signedUser = {
        isSigned: false,
        name: " ",
        email: " ",
        password: " ",
        message: { errorMessage },
      };
    });
};

export const handleGoogleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      const signout = {
        isSigned: false,
        name: " ",
        email: " ",
        password: " ",
        message: "User Signed In Successfully!",
      };
      return signout;
    })
    .catch((error) => {});
};

export const createUserWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      // Signed in
      const user = res.user;
      const userInfo = {
        isSigned: true,
        name: user.displayName,
        email: user.email,
        password: user.password,
        message: "User Signed Successfully!",
      };
      console.log(userInfo);
      return userInfo;
    })
    .catch((error) => {
      var errorMessage = error.message;
      const userInfo = {
        isSigned: false,
        name: " ",
        email: " ",
        password: " ",
        message: errorMessage,
      };
      console.log(userInfo);
      return userInfo;
      // ..
    });
};

export const signInwithEmailandPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const user = res.user;
      const userInfo = {
        isSigned: true,
        name: user.displayName,
        email: user.email,
        password: user.password,
        message: "User Signed Successfully!",
      };
      console.log(userInfo);
      return userInfo;
    })
    .catch((error) => {
      // var errorCode = error.code;
      var errorMessage = error.message;
      const userInfo = {
        isSigned: false,
        name: " ",
        email: " ",
        password: " ",
        message: errorMessage,
      };
      console.log(userInfo);
      return userInfo;
    });
};
