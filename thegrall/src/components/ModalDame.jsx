import "../styles/ModalDame.css";

export default function ModalDame({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Bonjour Arthur</h1>
        <p>
          Cet objet inconnu que tu tiens dans tes mains, vient du futur.
          <br />
          Il va pouvoir t&apos;aider dans ta quête du Graal.
          <br />
          Appuie sur le bouton ci-dessous pour commencer ta quête 2.0
          <br />
          Ah oui, tu ne sais pas ce que cela veut dire mais fais-moi confiance,
          tu seras époustoufflé.
        </p>
        <button className="modal-button" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
}
