import React from "react";
import addNotification from "react-push-notification";
import logo from "./logo.png";

function App() {
  // const clickToNotify = () => {
  //   if (Notification.permission !== "granted") {
  //     Notification.requestPermission().then((permission) => {
  //       if (permission === "granted") {
  //         showNotification();
  //       }
  //     });
  //   } else {
  //     showNotification();
  //   }
  // };

  // const showNotification = () => {
  //   addNotification({
  //     title: "First Push Notification",
  //     subtitle: "subtitle",
  //     message: "Hello folks, this is my first notification",
  //     // theme: "red",
  //     // backgroundTop: "green",
  //     // backgroundBottom: "darkgreen", //optional, background color of bottom container.
  //     // colorTop: "green", //optional, font color of top container.
  //     // closeButton: "Go away",
  //     duration: 4000,
  //     icon: logo,
  //     native: true,
  //     onClick: () => (window.location = "https://www.youtube.com/"),
  //     vibrate: [100, 200, 300],
  //     silent: false,
  //   });
  // };

  const clickToNotify = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("Notification", {
          title: "push Notification",
          body: "hey how are you man",
          // data: {
          //   hello: "world",
          // },
          icon: logo,
          onClick: (e) => window.open("https://www.youtube"),
        });

        // notification.addEventListener("click", (e) => {
        //   e.preventDefault();
        //   window.open("https://www.youtube.com/");
        // });
      }
    });
  };

  return (
    <div className="App">
      <h1>React Push Notifications Example</h1>
      <button onClick={clickToNotify}>Enable Push Notifications</button>
    </div>
  );
}

export default App;
