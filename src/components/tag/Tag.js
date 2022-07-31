import { useCallback, useEffect, useState } from "react";
import getTags from "../../api/getTags";
import "./style/Tag.css";
import { useRecoilState } from "recoil";
import { stateTag } from "./../../recoil/atoms";

const Tag = () => {
  const [data, setData] = useState([]);
  const [control, setControl] = useState(false);
  const [, setIsTag] = useRecoilState(stateTag);

  const setResponse = useCallback((res) => {
    if (res.data.data) {
      setControl(true);
      setData(res.data.data.slice(res.data.data.length - 100));
    }
  }, []);

  const setError = (err) => {
    return err;
  };

  const handleGetTag = (tag) => {
    setIsTag(tag);
  };

  useEffect(() => {
    if (!control) {
      getTags(setResponse, setError);
    }
  }, [control, setResponse]);

  return (
    <div className="tag-list">
      {data.map((tag, index) => {
        return (
          <span onClick={() => handleGetTag(tag)} key={index} className="tag">
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default Tag;
