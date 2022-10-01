//This was a global function component
// Imported the proptypes for the button component
import PropTypes from 'prop-types'
function Button({children, version, type, isDisabled}) {
  return (
    <button type ={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
    
  )
}
//Default props for the button component
Button.defaultProps ={
  //The default value for the button is primary
  version: 'primary',
  type: 'button',
  isDisabled: false
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default Button