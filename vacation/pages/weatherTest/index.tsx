import axios from "axios";

const weatherBaseUrl =
  "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0";

const WeatherTest = () => {
  const check = async () => {
    let response;
    try {
      alert("잠시만 기다려주세요");
      response = await axios({
        method: "get",
        url: `${weatherBaseUrl}/getUltraSrtNcst`,
        headers: {
          "Access-Control-Allow-Origin": "http://apis.data.go.kr",
          //   "Content-Type": "application/xml; charset=utf-8",
        },
        params: {
          ServiceKey:
            "tnxaU61RODWYD3y+TvM/QZ8UTwQ9OHhg78mt5M8Aa0XcaTtkqwBvQBVmAKLkweLf2fw+JELB3smab1OhDrkWBQ==",
          pageNo: "1",
          numOfRows: "1000",
          dataType: "XML",
          base_date: "20210628",
          base_time: "0600",
          nx: "55",
          ny: "127",
        },
      });
      response = response.data.response.body.items.item;
      alert("성공??");
      return response;
      //   console.log(response);
    } catch (error) {
      alert("error");
      console.log(error);
    }
  };
  return (
    <>
      <button onClick={check}>확인하기</button>
    </>
  );
};

export default WeatherTest;
