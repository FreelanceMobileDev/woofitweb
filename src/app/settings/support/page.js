'use client';
import { AboutusIcon, EmailIcon, PrivecyIcon, Rightarrow, TermsIcon } from '../../../../public'
import ContectPopup from './ContectPopup';
import styles from '../Setting.module.css'
import React, { useState } from 'react';
import DeshBorad from "../../dashboard/DashCompoent";
import SettingSidebar from "../settingSidebar";


function page() {
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
    <>
      <DeshBorad>
        <SettingSidebar >
          <div className={styles?.right_div_data}>
            <div className={styles?.ContachUstxt}>Contact Us</div>
            <div className={styles?.Email_div} onClick={handleEmailClick}>
              <div className={styles?.row}>
                <EmailIcon /> <div className={styles?.emailtxtt}>Email</div>
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
            <ContectPopup show={showPopup} handleClose={closePopup} />
          </div>
        </SettingSidebar>
      </DeshBorad>
    </>
  )
}

export default page