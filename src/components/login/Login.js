import { GoogleLogin } from "react-google-login";
import { stateAuth, stateProfile } from "./../../recoil/atoms";
import { useRecoilState } from "recoil";
import "./style/Login.css";

const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const Login = () => {
  const [isAuth, setIsAuth] = useRecoilState(stateAuth);
  const [, setProfile] = useRecoilState(stateProfile);

  const onSuccess = (res) => {
    if (res.accessToken) {
      const infoProfile = {
        name: res.profileObj.name,
        imageUrl: res.profileObj.imageUrl,
      };
      localStorage.setItem("auth", true);
      localStorage.setItem("infoProfile", JSON.stringify(infoProfile));
      setIsAuth(true);
      setProfile(res.profileObj);
    } else {
      setIsAuth(false);
    }
  };

  const onFailure = (res) => {
    return res;
  };

  return (
    <>
      <div className="container">
        <div id="singInButton" hidden={isAuth}>
          <h2 className="title">Login</h2>
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="googleButton"
              >
                Sign in with Google
              </button>
            )}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
