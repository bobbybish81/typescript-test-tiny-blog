import React from 'react'
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer-text'>Tiny Blog • 2023</p>
        <a href='https://github.com/bobbybish81'>
        <img className="footer-img" src={require("../images/github-logo.png")} alt="github logo"/>
        </a>
      <p className='footer-text'>Website developed by 
        <a href='https://robertbishwebdeveloper.com'
          target="_blank"
          rel="noreferrer">
          <b className='footer-link'>Robert Bish</b>
        </a>
      </p>
    </footer>
  )
}

export default Footer