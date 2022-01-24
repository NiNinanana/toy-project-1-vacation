import axios from "axios";
import { useState } from "react";

const KoreanjosnTest = () => {
  const [userInfo, setUserInfo] = useState(null);

  const getPost = async () => {
    // axios
    //   .post("https://reqres.in/api/users", {
    //     name: "아아",
    //   })
    //   .then((response) => {
    //     setUserInfo(response.data?.data?.name);
    //   });
    const result = await axios.post("https://reqres.in/api/users", {
      name: "아아",
    });
    setUserInfo(result.data);
    // setUserInfo(result.data.data?.name);
    // console.log(result.data.data?.name);
    // console.log(result);
  };
  const getUser = async () => {
    // axios.get("https://koreanjson.com/users").then((response) => {
    //   setUserInfo(response.data);
    // });
    const result = await axios.get("https://koreanjson.com/users");
    setUserInfo(result.data);
    // console.log(result.data);
  };
  const getTest = () => {
    console.log(userInfo);
  };

  return (
    <>
      <button onClick={getPost}>코리안제이슨 post 1 가져오기</button>
      <button onClick={getUser}>코리안제이슨 user 목록 가져오기</button>
      <button onClick={getTest}>테스트</button>
    </>
  );
};

export default KoreanjosnTest;
