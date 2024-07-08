'use client';
import { AboutusIcon, EmailIcon, PrivecyIcon, Rightarrow, TermsIcon } from '../../../public'
import ContactusPopup from './ContactusPopup';
import styles from './Setting.module.css'
import React, { useState } from 'react';

const SupportScreen = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleEmailClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const items = [
    { name: 'About Us', icon: <AboutusIcon /> },
    { name: 'Terms of Use', icon: <TermsIcon /> },
    { name: 'Privacy Policy', icon: <PrivecyIcon /> },
  ];
  return (

    <div className={styles?.right_div_data}>
      <div className={styles?.ContachUstxt}>Contact Us</div>
      <div className={styles?.Email_div} onClick={handleEmailClick}>
        <div className={styles?.row}>
         <EmailIcon/> <div className={styles?.emailtxtt}>Email</div>
        </div>
        <Rightarrow />
      </div>
      <div className={styles?.ContachUstxt}>Other</div>
      {items && items?.map((item, index) => (
        <div key={index} className={styles?.Email_div}>
          <div className={styles?.row}>
            {item.icon}
            <div className={styles?.emailtxtt}>{item.name}</div>
          </div>
          <Rightarrow />
        </div>
      ))}
       <ContactusPopup show={showPopup} handleClose={closePopup} />
    </div>
  )
}

export default SupportScreen