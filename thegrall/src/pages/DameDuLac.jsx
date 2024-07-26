import { Link } from "react-router-dom";
import { useState } from "react";
import ModalDame from "../components/ModalDame";
import ScrollDame from "../components/ScrollDame";
import "../styles/DameDuLac.css";

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
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <Link to="/carte" className="button-text">
            COMMENCER
          </Link>
        </button>
      </div>
      <ModalDame isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
