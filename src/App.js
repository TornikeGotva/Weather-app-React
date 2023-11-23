import { useState, useEffect } from "react";
import FormBox from "./Formbox";
import WeatherInfo from "./Weatherinfo";
import InfoBox from "./Infobox";

const API = "4e78ffb4c4694ec288790748232311";

export default function App() {
  const [getVal, setGetVal] = useState("");
  const [display, setDisplay] = useState({});

  function handleDefault(e) {
    e.preventDefault();
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function getApi() {
        try {
          const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${API}&q=${getVal}`,
            { signal: controller.signal }
          );
          const data = await res.json();

          setDisplay(data);

          console.log(data);
        } catch (e) {
          alert(e);
        }

        return function () {
          controller.abort();
        };
      }
      getApi();
    },
    [getVal]
  );

  return (
    <Main>
      <FormBox
        getVal={getVal}
        handleDefault={handleDefault}
        setGetVal={setGetVal}
      ></FormBox>
      <InfoBox display={display}>
        <WeatherInfo display={display} />
      </InfoBox>
    </Main>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}
