import React from 'react';
import styles from './Setting.module.css'
import { CrossIcon } from '../../../public';
import Inputfield from '../_reuseableComponent/Inputfield';
import OpticityButton from '../_reuseableComponent/OpicityButton';

const ContactusPopup = ({ show, handleClose }) => {
  return (
    <div className={show ? styles.popupDisplay : styles.popupHide}>
      <div className={styles.popupContent}>
      <div className={styles.space_div}>
                    <div />
                    <div className={styles.popheadertxt}>Contact Us</div>
                    <div onClick={handleClose} className={styles.greycrossicon}><CrossIcon /></div>

                </div>
       <Inputfield
       name={"Title"}
       placeholder={"Enter your title here"}
       additionalMainDivClassName={styles.Title_div_2}
       />
       <Inputfield
        name={"Message"}
                additionalMainDivClassName={styles.comment_div_2}
/>
       <OpticityButton
       name={"Submit"}
        txtstyle={{color:'#FFF'}}
        additionalMainDivClassName={styles.AddClientButton}
        />
      </div>
    </div>
  );
};

export default ContactusPopup;
