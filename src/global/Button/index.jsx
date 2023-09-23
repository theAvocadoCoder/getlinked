import PropTypes from "prop-types";

function Button(props) {
  return (
    <button className={`${(props.default || !props.className) ? "bg-gradient-gl px-12 py-3 rounded-sm text-[.875rem] lg:text-[1rem]":""} ${props.className ? props.className:""}`}
      onClick={props.clickHandler}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  clickHandler: PropTypes.func,
  default: PropTypes.bool,
  children: PropTypes.string.isRequired,
}

export default Button