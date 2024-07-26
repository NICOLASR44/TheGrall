import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Parallax } from "react-parallax";
import WazeWidget from "../components/Waze";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";
import "../styles/Description_sites.css";

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
    <>
      <div className="siteContainer">
        <Parallax bgImage={lieu.image} strength={500}>
          <div className="App-header">
            <BackButton />
            <h1>{lieu.nom}</h1>
            <p>{lieu.description}</p>
          </div>
        </Parallax>
      </div>
      <WazeWidget />
      <button className="wazeButtonContainer">
        <Link to="/over" className="waze-button-text">
          JE VEUX MON GRAAL
        </Link>
      </button>
    </>
  );
}

export default DescriptionSite;
