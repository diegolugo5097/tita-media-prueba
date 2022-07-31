import { useState, useEffect } from "react";
import getProfile from "../../api/getProfile";
import "./style/ModalProfile.css";

const ModalProfile = ({ id, isOpenProfile }) => {
  const [data, setData] = useState([]);

  const setError = (err) => {
    setData(err);
  };
  const setResponse = (res) => {
    setData(res.data);
  };

  useEffect(() => {
    if (isOpenProfile) {
      getProfile(id, setResponse, setError);
    }
  }, [id, isOpenProfile]);

  return (
    <>
      <div className="card_profile">
        <img className="card_picture" src={data.picture} alt="John" />
        <h1>
          {data.firstName} {data.lastName}
        </h1>
        <p className="title">Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
        <p>Register date: {data.registerDate}</p>
      </div>
    </>
  );
};

export default ModalProfile;
