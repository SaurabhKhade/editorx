import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-messaging";
import { onBackgroundMessage } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-messaging-sw";

const app = initializeApp({
  messagingSenderId: "42380724238"
});

const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const title = 'Background Message Title';
  const body = 'Background Message body.';
  
  notify(title,body);
});

function notify(title,body) {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration()
    .then(reg => {
      var options = {
        body,
        icon: '/static/icon/favicon-96x96.png',
        badge: '/static/icon/badge.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now()
        }
      };
      reg.showNotification(title, options);
    })
    .catch(e=>console.log(e));
  }
}