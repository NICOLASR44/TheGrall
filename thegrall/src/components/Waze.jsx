const WazeWidget = () => {
  return (
    <div>
      <h1>Waze Navigation</h1>
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
