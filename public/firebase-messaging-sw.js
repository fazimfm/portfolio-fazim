importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyC-fw82deIFzhINNZlTMBuwzcS2ex18RJw",
  authDomain: "message-115e1.firebaseapp.com",
  projectId: "message-115e1",
  storageBucket: "message-115e1.firebasestorage.app",
  messagingSenderId: "116563259946",
  appId: "1:116563259946:web:60b97129ca013e7b2c0953"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});