import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import Login from "./components/login/Login";
import { useRecoilValue } from "recoil";
import { selectAuth } from "./recoil/selectors";
import Card from "./components/cardPost/Card";

const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  let isAuth = useRecoilValue(selectAuth);

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", start);
  });

  if (!isAuth) {
    return <Login />;
  }

  return (
    <div className="App">
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
