import { useState } from "react";
import "../styles/Usuarios.css";

const Usuarios = ({
    name,post,reaction,
    time,avatar,message,
    imgChest, markAll,

    setNotificationState, notificationState
}) => {

    const [enable, setEnable] = useState(true)

    // Removed useEffect
    // Changed clickHandler to readToggle

    const readToggle = () => {
        setNotificationState(notificationState-=1)
        setEnable(false)
    }

  return (
    <>
      {enable ? <div className="post" onClick={()=>{readToggle()}}>
        <img className="image" src={avatar} alt="avatar" />
        <div className="allText">
          <p>
            <span className="name">{name}</span>
            <span>{post}</span>
            <span className="reaction">{reaction}</span>
            <span
              className={`status ${markAll===false ? "not-read" : ""}`}
            ></span>
          </p>
          <p className="time">{time}</p>

          {typeof message !== "undefined" && (
            <div className="message-container">
              <p className="message">{message}</p>
            </div>
          )}
        </div>

        {typeof imgChest !== "undefined" && (
          <img className="imageChest" src={imgChest} alt="avatar" />
        )}
      </div>
      :
      <div className="post">
        <img className="image" src={avatar} alt="avatar" />
        <div className="allText">
          <p>
            <span className="name">{name}</span>
            <span>{post}</span>
            <span className="reaction">{reaction}</span>
            <span
              className={`status ${markAll===false && enable ? "not-read" : ""}`}
            ></span>
          </p>
          <p className="time">{time}</p>

          {typeof message !== "undefined" && (
            <div className="message-container">
              <p className="message">{message}</p>
            </div>
          )}
        </div>

        {typeof imgChest !== "undefined" && (
          <img className="imageChest" src={imgChest} alt="avatar" />
        )}
      </div>
      }
    </>
  );
};

export default Usuarios;