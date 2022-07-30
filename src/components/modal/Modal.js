/* eslint-disable array-callback-return */
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { stateIsOpenModal } from "./../../recoil/atoms";
import { useRecoilState } from "recoil";
import close from "./../../assets/images/close.png";
import comments from "../../api/getComments";
import ModalComments from "../modalComments/ModalComments";
import ModalProfile from "../modalProfile/ModalProfile";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "20%",
    left: "25%",
    width: "50%",
    height: "70%",
    borderRadius: "15px",
    overflow: "visible",
    background: "transparent",
    border: "none",
  },
};

const ModalPost = ({
  id,
  isOpen,
  isOpenProfile,
  setIsOpenProfile,
  idOwner,
}) => {
  const [isOpenModal, setIsOpenModal] = useRecoilState(stateIsOpenModal);
  const [data, setData] = useState([]);
  const [isComments, setIsComments] = useState(false);

  useEffect(() => {
    if (isOpenModal) {
      const setError = (err) => {
        return err;
      };

      const setResponse = (res) => {
        if (res.data.data.length === 0) {
          setIsComments(true);
        } else {
          setIsComments(false);
        }
        setData(res.data.data);
      };
      comments(id, setResponse, setError);
    }
  }, [id, isOpenModal, isComments]);

  const closeModal = () => {
    setIsOpenModal(false);
    setIsOpenProfile(false);
  };

  return (
    <>
      <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <span className="close_modal" onClick={closeModal}>
            <img className="close_icon" src={close} alt="close" />
          </span>
          <div>
            {isOpenProfile ? (
              <ModalProfile id={idOwner} isOpenProfile={isOpenProfile} />
            ) : (
              <ModalComments data={data} isComments={isComments} />
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};
export default ModalPost;
