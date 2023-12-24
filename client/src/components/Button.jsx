import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link className="w-full text-white hover:text-slate-50 active:text-slate-50 px-[1.2rem] py-[.6rem] from-yellow-400 to-yellow-600 bg-gradient-to-br rounded-full my-2 hover:from-yellow-500 hover:to-yellow-600 active:from-yellow-600 active:to-yellow-700 focus:from-yellow-500 focus:to-yellow-600 text-center" to={props.link}>
      <button className={`${props.class === "" ? props.class : "max-[400px]:text-base text-lg  text-white font-bold font-['AlJazeeraFontBold'] "}`} type={props.type}>
        {props.title}
      </button>
    </Link>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.string,
  class: PropTypes.string
};

export default Button;