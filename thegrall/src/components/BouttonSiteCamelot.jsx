import "../components/ButtonSite.css";

const CamelotPoint = ({ src, alt, top, left, dataInfo, onClick }) => {
	return (
		<img
			src={src}
			alt={alt}
			className="map-point"
			style={{ top: `${top}%`, left: `${left}%` }}
			data-info={dataInfo}
			onClick={onClick}
		/>
	);
};

export default CamelotPoint;
