import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Usuarios from "./components/Usuarios.jsx";
// Here we will import our userList.
import {userList} from "./assets/fichero.js";
import { useState } from "react";

const App = () => {
  let [notificationState, setNotificationState] = useState(7);
  const [markAll, setMarkAll] = useState(false);

  const listUser = userList;

  // I decided to remove your useEffect

  return (
    <>
      <section className="section">
        <Header
          notificationState={notificationState}
          setNotificationState={setNotificationState}
          setMarkAll={setMarkAll}
        />
        {
          listUser.map((user,index) => (
            <Usuarios 
            key={index} 
            markAll={markAll}
            setNotificationState={setNotificationState}
            notificationState={notificationState}
            // Below I used a Spread Operator, to make this component, less verbous.
            {...user}
            
            />
          ))
        }
        <Footer />
      </section>
    </>
  );
};

export default App;