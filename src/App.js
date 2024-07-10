import React from "react";
import avatar from "./avatar.png";
import logo from "./logo.png";

import notificationSound from "./mixkit-software-interface-start-2574.wav";

function App() {
  const playNotificationSound = () => {
    const audio = new Audio(notificationSound);
    audio.play().catch((error) => {
      console.error("Error playing sound:", error);
    });
  };

  const showNotification = (options) => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notification = new Notification(options.title, options);
        playNotificationSound();

        setTimeout(() => {
          notification.close();
        }, options.duration || 5000);

        notification.onclick = (e) => {
          e.preventDefault();
          window.open(options?.navigator?.url, options?.navigator?.target);
          notification.close();
        };
      } else if (permission === "denied") {
        alert(
          "Notification permission has been denied. Please enable notifications in your browser settings. Here’s how:\n\n1. Click the lock icon next to the URL in the address bar.\n2. Select 'Site settings'.\n3. In the 'Permissions' section, find 'Notifications' and select 'Allow'."
        );
      } else {
        alert(
          "Notification permission is required to show notifications. Please enable notifications in your browser settings. Here’s how:\n\n1. Click the lock icon next to the URL in the address bar.\n2. Select 'Site settings'.\n3. In the 'Permissions' section, find 'Notifications' and select 'Allow'."
        );
      }
    });
  };

  const clickToNotify = () => {
    const options = {
      title: "Hey everyone",
      body: "Hey, how are you?",
      icon: avatar,
      badges: logo,
      requireInteraction: true,
      data: { hello: "world" },
      vibrate: [200, 100, 200],
      duration: 10000,
      silent: false,
      navigator: { url: "https://www.youtube.com/", target: "_blank" },
    };
    showNotification(options);
  };

  return (
    <div className="App">
      <h1>React Push Notifications Example</h1>
      <button onClick={clickToNotify}>Enable Push Notifications</button>
    </div>
  );
}

export default App;
