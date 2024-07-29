const WeatherWidget = () => {
  return (
    <iframe
      title="weather"
      src="https://forecast7.com/fr/48d12n1d68/rennes/"
      style={{
        width: "100%",
        height: "200px",
        border: "none",
        overflow: "hidden",
      }}
    ></iframe>
  );
};

export default WeatherWidget;
