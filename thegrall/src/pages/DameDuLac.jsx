import { Link } from "react-router-dom";
import "../styles/DameDuLac.css";
import { useState } from "react";
import ModalDame from "../components/ModalDame";
import ScrollDame from "../components/ScrollDame";

export default function DameDuLac() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ScrollDame />
      <div className="dameContainer" onClick={handleClick}>
        {/* <h1 className="dameTitle">Bonjour Arthur</h1> */}
        <button className="dameButton">
          <Link to="/carte" className="linkToCarte">
            COMMENCER MA QUETE
          </Link>
        </button>
      </div>
      <ModalDame isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
