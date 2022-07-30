import { useRecoilValue } from "recoil";
import "./style/profile.css";
import { selectAuth } from "../../recoil/selectors";

const Profile = () => {
  let isAuth = useRecoilValue(selectAuth);
  const infoProfile = JSON.parse(localStorage.getItem("infoProfile"));

  return (
    isAuth && (
      <>
        <div className="infoProfile">
          <h2 className="nameProfile">{infoProfile.name}</h2>
          <img
            width={60}
            height={60}
            className="pitureProfile"
            src={infoProfile.imageUrl}
            alt={infoProfile.name}
          />
        </div>
      </>
    )
  );
};

export default Profile;
