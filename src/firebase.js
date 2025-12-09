// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-fw82deIFzhINNZlTMBuwzcS2ex18RJw",
  authDomain: "message-115e1.firebaseapp.com",
  projectId: "message-115e1",
  storageBucket: "message-115e1.firebasestorage.app",
  messagingSenderId: "116563259946",
  appId: "1:116563259946:web:60b97129ca013e7b2c0953",
  measurementId: "G-EBNSC8R8BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('SW registered: ', registration);
    })
    .catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
}

const messaging = getMessaging(app);

export const generateToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: 'BCpBDNDm2pMmHkgOGQhgbxdhuS_shbW0aDYVpHIM5vcJpp4drHlflHXTN2ay6XGoKz5eMt3mEa7-lb-cZ2fs0kE',
        serviceWorkerRegistration: await navigator.serviceWorker.getRegistration('/firebase-messaging-sw.js')
      });
      console.log('FCM Token:', token);
      return token;
    }
  } catch (error) {
    console.error('Error generating token:', error);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });