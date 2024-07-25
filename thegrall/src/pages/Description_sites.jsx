// import InfoLieux from "../components/InfoLieux";
// import WazeWidget from "../components/Waze";

// function DescriptionSite() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <InfoLieux />
//         <WazeWidget />
//       </header>
//     </div>
//   );
// }

// export default DescriptionSite;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import WazeWidget from "../components/Waze";

function DescriptionSite() {
  const { id } = useParams();
  const [lieu, setLieu] = useState(null);

  useEffect(() => {
    const getLieu = async () => {
      const result = await axios.get(`http://localhost:4242/lieux/${id}`);
      setLieu(result.data);
    };
    getLieu();
  }, [id]);

  if (!lieu) return <div>Loading...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>{lieu.nom}</h1>
        <p>{lieu.description}</p>
        <img src={lieu.image} alt="imageLieu" />

        <WazeWidget />
      </header>
    </div>
  );
}

export default DescriptionSite;
