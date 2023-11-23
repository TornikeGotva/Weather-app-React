export default function WeatherInfo({ display }) {
  return (
    <>
      {display?.current ? (
        <section className="info-container">
          <img
            src={display.current.condition.icon}
            alt={display.current.condition.text}
          />
          <p>Temp :°C {display.current.temp_c}</p>
          <p>Cloud:{display.current.cloud}%</p>
          <p>Humidity:{display.current.humidity}%</p>
          <p>UV:{display.current.uv}%</p>
          <p>Wind: {display.current.wind_kph}km/h</p>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
