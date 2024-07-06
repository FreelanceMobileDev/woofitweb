import React from 'react';
import styles from './Componet.module.css'

const TextWithButton = ({ label, text, buttonText, RightIcon, LeftIcon,props,RightBox,space,onClick }) => {
    return (
        <div style={props?.style} className={`${styles.container} ${props?.additionalcontainer}`}>
            <label className={styles.label}>{label}</label>
            {space&& <dev  style={{marginTop:16}}></dev>}
            <div className={`${styles.content} ${props?.additionalcontent}`} onClick={onClick}>
                {LeftIcon && <LeftIcon className={styles.icon} />}
                <span  className={styles.text}>{text}</span>
               {buttonText && <div className={`${styles.button} ${props?.additionalbuttontext}`}>{buttonText}</div>} 
                {RightIcon && <RightIcon className={styles.icon} />}
                {RightBox && 
                <div className={styles.rightboxdiv}>
                   <RightBox/>
                    </div>}
            </div>
        </div>
    );
};

export default TextWithButton;