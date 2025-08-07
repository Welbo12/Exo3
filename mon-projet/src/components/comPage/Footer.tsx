import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const iconStyle = {
  backgroundColor: '#0DB760',
  borderRadius: '5px',
  padding: '5px',
  color: 'white',
};

const Footer: React.FC = () => {
  return (
    <div className="footer-line">

    <div className='FOOTER'>
      <div><p>@2022. All rights reserved</p></div>
      <div><p>Design by  AFLOU Welborn</p></div>

      <IconContext.Provider value={{ size: '15px', style: iconStyle }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
          <FaFacebook />
        </div>
      </IconContext.Provider>
    </div>
    </div>
  );
};

export default Footer;
