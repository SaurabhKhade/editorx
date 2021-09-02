importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAbH8HzY5VwgSM0OBNjymkgGexS6z8qHE8",
  authDomain: "editorx-28163.firebaseapp.com",
  projectId: "editorx-28163",
  storageBucket: "editorx-28163.appspot.com",
  messagingSenderId: "42380724238",
  appId: "1:42380724238:web:b8b34272b57a9c46ccd45f",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  let {
    body, title
  } = payload.notification;
  if (Notification.permission === 'granted') {
    self.registration.showNotification(title,
      {
        body,
        icon: 'https://editorx.vercel.app/static/icon/favicon-96x96.png',
        badge: 'https://editorx.vercel.app/static/icon/badge.png',
        vibrate: [100, 50, 100],
        actions: [{
          action: 'visit',
          title: 'Visit'
        },
          {
            action: 'close',
            title: 'Close'
          },
        ]
      });
    self.addEventListener('notificationclick', e => {
      let notification = e.notification;
      let action = e.action;

      if (action === 'close') {
        notification.close();
      } else {
        clients.openWindow('https://editorx.vercel.app');
        notification.close();
      }
    });
  }
});