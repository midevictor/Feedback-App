import PropTypes from 'prop-types'
//I used impt to import prop types


function Header({text, bgColor, textcolor}) {
//Created a function  that adds stylig to the header component
  const HeaderStyles = {
    backgroundColor: bgColor, 
  }
  return (
    <header style={HeaderStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div> 
    </header>
  )
}
Header.defaultProps = { 
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.5)',
  textcolor: '#ff6a95',
}
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textcolor: PropTypes.string,
}

export default Header
