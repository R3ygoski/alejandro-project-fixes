import "../styles/Header.css";
const Header = ({ notificationState, setNotificationState, setMarkAll }) => {
  const handleClick = () => {
    setNotificationState(0);
    setMarkAll(true);
  };
  return (
    <>
      <header>
        <div className="notification">
          <h3 className="title">
            Notifications<span className="number">{notificationState}</span>
          </h3>
          <p className="mark" onClick={handleClick}>
            Mark all as read
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;