import axios from "axios";

const FlightTest = () => {
  //   const xhr = new XMLHttpRequest();
  //   const url =
  //     "http://openapi.tago.go.kr/openapi/service/DmstcFlightNvgInfoService/getFlightOpratInfoList"; /* URL */
  //   let queryParams =
  //     "?" +
  //     encodeURIComponent("serviceKey") +
  //     "=" +
  //     "tnxaU61RODWYD3y%2BTvM%2FQZ8UTwQ9OHhg78mt5M8Aa0XcaTtkqwBvQBVmAKLkweLf2fw%2BJELB3smab1OhDrkWBQ%3D%3D"; /* Service Key */
  //   queryParams +=
  //     "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /**/
  //   queryParams +=
  //     "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
  //   queryParams +=
  //     "&" +
  //     encodeURIComponent("depAirportId") +
  //     "=" +
  //     encodeURIComponent("NAARKJJ"); /**/
  //   queryParams +=
  //     "&" +
  //     encodeURIComponent("arrAirportId") +
  //     "=" +
  //     encodeURIComponent("NAARKPC"); /**/
  //   queryParams +=
  //     "&" +
  //     encodeURIComponent("depPlandTime") +
  //     "=" +
  //     encodeURIComponent("20201201"); /**/
  //   queryParams +=
  //     "&" +
  //     encodeURIComponent("airlineId") +
  //     "=" +
  //     encodeURIComponent("AAR"); /**/
  //   xhr.open("GET", url + queryParams);
  //   xhr.onreadystatechange = function () {
  //     if (this.readyState === 4) {
  //       alert(
  //         "Status: " +
  //           this.status +
  //           "nHeaders: " +
  //           JSON.stringify(this.getAllResponseHeaders()) +
  //           "nBody: " +
  //           this.responseText
  //       );
  //     }
  //   };

  //   xhr.send("");

  const getFlight = async () => {
    const result = await axios.get(
      "http://openapi.tago.go.kr/openapi/service/DmstcFlightNvgInfoService/getFlightOpratInfoList"
    );
    console.log(result);
  };

  return (
    <>
      <button onClick={getFlight}>가져오기</button>
    </>
  );
};

export default FlightTest;
