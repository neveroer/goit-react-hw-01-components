import PropTypes from "prop-types";
import s from "./Stats.module.css";

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={s.item} key={id}>
            <span>{label}:</span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
