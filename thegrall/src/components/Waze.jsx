import "../styles/Waze.css";
<link href="https://fonts.googleapis.com/css?family=Varela" rel="stylesheet" type="text/css"></link>;

const WazeWidget = () => {
  return (
    <div className="wazeContainer">
      <div className="textWazeContainer">
        <h1>Camelot Navigation</h1>
        <h3 className="animated-text">
          <span className="text-1">🏰 Bientôt 🏰</span>
          <span className="text-2">🏰 Disponible 🏰</span> <br />
          <h4>
            Tu pourras être guidé directement <br /> vers le lieu choisi
          </h4>
        </h3>
      </div>
      <iframe
        src="https://embed.waze.com/iframe?zoom=14&lat=48.858844&lon=2.294351"
        width="100%"
        height="600"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WazeWidget;
