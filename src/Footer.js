import React from 'react';

const Footer = () => {

 
  return  (
    <footer className="footer" style={{textAlign: 'center'}}>
      <div className="footer-col-1">
        <strong>
          <span>
            Developed by
            {' '}
            <a href="https://github.com/nayana-thapa" style={{color: 'white'}}> Nayana Thapa</a>
          </span>
        </strong>
      </div>
      <div className="footer-col-2">
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
      <div className="footer-col-3">
        <strong>
          <span>
            Fork this project &nbsp;
            <a href="https://github.com/nayana-thapa/react-expenses-tracker" style={{color: 'white'}}>HERE</a>
          </span>
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
