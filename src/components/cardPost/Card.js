import "./style/Card.css";
import "./../modal/style/Modal.css";
import posting from "../../api/getPost";
import { useCallback, useEffect, useState } from "react";
import like from "./../../assets/images/thumb-up.png";
import Tag from "../tag/Tag";
import Modal from "../modal/Modal";
import { stateIsOpenModal, stateTag } from "./../../recoil/atoms";
import { useRecoilState } from "recoil";
import getPostByTag from "../../api/getPostByTag";

const Card = () => {
  const [data, setData] = useState([]);
  const [control, setControl] = useState(false);
  const [id, setId] = useState();
  const [idOwner, setIdOwner] = useState();
  const [isOpen, setIsOpen] = useRecoilState(stateIsOpenModal);
  const [isTag] = useRecoilState(stateTag);
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const setResponse = useCallback((res) => {
    if (res.data.data.length > 0) {
      setControl(true);
      setData(res.data.data);
    } else {
      console.log("No hay informacion");
    }
  }, []);

  useEffect(() => {
    if (!control) {
      posting(setResponse, setError);
    }
  }, [control, setResponse]);

  useEffect(() => {
    if (isTag !== false) {
      getPostByTag(isTag, setResponse, setError);
    }
  }, [isTag, setResponse]);

  const setError = (err) => {
    return err;
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const openModalProfile = () => {
    setIsOpenProfile(true);
  };

  return (
    <>
      <Tag />
      <div className="main">
        <ul className="cards">
          {data.map((post, index) => (
            <li key={index} className="cards_item">
              <div
                className="card"
                onClick={() => {
                  setId(post.id);
                  openModal();
                }}
              >
                <div className="card_image">
                  <img
                    width={400}
                    height={400}
                    src={post.image}
                    alt={post.name}
                  />
                </div>
                <div className="card_content">
                  <div>
                    <img
                      width={50}
                      height={50}
                      onClick={() => {
                        setIdOwner(post.owner.id);
                        openModalProfile();
                      }}
                      className="card_owner_picture"
                      src={post.owner.picture}
                      alt={post.owner.name}
                    />
                  </div>
                  <h2 className="card_title">
                    {post.owner.firstName} {post.owner.lastName}
                  </h2>
                  <p className="card_text">{post.text}</p>
                  <img width={20} height={20} src={like} alt="likes" />
                  <span className="card_like">{post.likes}</span>
                  <p id="tag_title">TAGS: </p>
                  <button className="btn card_btn">
                    {post.tags.map((tags, index) => (
                      <span key={index} className="tags-item">
                        {tags}
                      </span>
                    ))}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Modal
          id={id}
          isOpen={isOpen}
          isOpenProfile={isOpenProfile}
          setIsOpenProfile={setIsOpenProfile}
          idOwner={idOwner}
        />
      </div>
    </>
  );
};

export default Card;
