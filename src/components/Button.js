import PropTypes from 'prop-types';

const Button = ({ onClick, text, className }) => (
  <button className={className} type="button" onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
