import PropTypes from 'prop-types'
//I used impt to import prop types


function Header({text, bgColor, textcolor}) {
//Created a function  that adds styling to the header component
  const HeaderStyles = {
    backgroundColor: bgColor, 
  }
  return (
    //called the function in the header component
    <header style={HeaderStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div> 
    </header>
  )
}
//Set the default props for the header component
Header.defaultProps = { 
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.5)',
  textcolor: '#ff6a95',
}
//Set the differnt types of props for the header component
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textcolor: PropTypes.string,
}

export default Header
