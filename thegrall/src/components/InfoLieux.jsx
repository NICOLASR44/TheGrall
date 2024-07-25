// import { useEffect, useState } from "react";
// import axios from "axios";

// const InfoLieux = () => {
//   const [lieux, setLieux] = useState([]);
//   useEffect(() => {
//     const getData = async () => {
//       const result = await axios.get("http://localhost:4242/lieux");
//       console.log(result.data);
//       setLieux(result.data);
//     };
//     getData();
//   }, []);

//   return (
//     <div>
//       {lieux.map((lieu, index) => (
//         <p key={index}>{lieu.nom}</p>
//       ))}
//     </div>
//   );
// };

// export default InfoLieux;

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const InfoLieux = () => {
  const [lieux, setLieux] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get("http://localhost:4242/lieux");
      setLieux(result.data);
    };
    getData();
  }, []);

  return (
    <div>
      {lieux.map((lieu) => (
        <p key={lieu.id}>
          <Link to={`/description/${lieu.id}`}>{lieu.nom}</Link>
        </p>
      ))}
    </div>
  );
};

export default InfoLieux;
