import PropTypes from 'prop-types';

function SkillList({src, skill}) {
  return (
    <span>
        {typeof src === 'string' ? <img src={src} alt={`${skill} icon`} /> : src}
        <br/>
        <p>{skill}</p>
    </span>
  );
}

SkillList.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  skill: PropTypes.string.isRequired,
};

export default SkillList