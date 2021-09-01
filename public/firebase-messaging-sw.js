importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '42380724238'
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    image: '/static/icon/favicon-96x96.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  self.registration.showNotification("foreground");
});