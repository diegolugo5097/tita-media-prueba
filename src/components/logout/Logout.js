import "./style/Logout.css";
import { GoogleLogout } from "react-google-login";
import { useRecoilValue } from "recoil";
import { selectAuth } from "./../../recoil/selectors";

const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const Logout = () => {
  const onSuccess = () => {
    localStorage.clear();
    window.location.reload();
    return;
  };

  let isAuth = useRecoilValue(selectAuth);

  return (
    <>
      <div hidden={!isAuth}>
        <GoogleLogout
          clientId={clientId}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="LogoutButton"
            >
              Logout
            </button>
          )}
          buttonText="Logout"
          onLogoutSuccess={onSuccess}
        />
      </div>
    </>
  );
};

export default Logout;
