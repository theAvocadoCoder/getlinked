import PropTypes from "prop-types";

function Button(props) {
  return (
    <button className={props.className || "bg-gradient-gl px-12 py-3 rounded-sm"}
      onClick={props.clickHandler}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  clickHandler: PropTypes.func,
  children: PropTypes.string.isRequired,
}

export default Button