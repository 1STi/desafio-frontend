import "../../styles/CardMin.css";

const CardMin = ({ name, max, min }) => {
  return (
    <div className="container__week__day">
      <p className="week_day_title">{name}</p>
      <div className="container__week__day__info">
        <p>{min}°</p>
        <p>{max}°</p>
      </div>
    </div>
  );
};

export default CardMin;
