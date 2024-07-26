import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../components/ButtonSite.css";

const MapPoint = ({ src, btnLink, alt, top, left, dataInfo, onClick }) => {
	return (
		<Link to={btnLink}>
			<img
				src={src}
				alt={alt}
				className="map-point"
				style={{ top: `${top}%`, left: `${left}%` }}
				data-info={dataInfo}
				onClick={onClick}
			/>
		</Link>
	);
};

MapPoint.propTypes = {
	src: PropTypes.string.isRequired,
	btnLink: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	top: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
	dataInfo: PropTypes.string,
	onClick: PropTypes.func,
};

export default MapPoint;
