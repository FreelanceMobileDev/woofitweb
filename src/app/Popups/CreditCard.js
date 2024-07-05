"use client"
import React, { useState } from 'react';
import styles from './Popups.module.css';
import { CrossIcon, VisaIcon } from '../../../public';
import Inputfield from '../_reuseableComponent/Inputfield';
import OpticityButton from '../_reuseableComponent/OpicityButton';

const CreditCard = ({ show, handleClose }) => {

    const handleSave = () => {
        handleClose();
    };
    return (
        <div className={show ? styles.popupDisplay2 : styles.popupHide}>

            <div className={styles.popupContent} style={{ marginTop: 80 }}>
                <div className={styles.space_div}>
                    <div style={{ width: 60 }} />
                    <div className={styles.popheadertxt}>Credit Card</div>
                    <div onClick={handleClose} className={styles.greycrossicon}><CrossIcon /></div>

                </div>
                <Inputfield
                    name={"Card Holder Name"}
                    placeholder={"Eloise Robinson"}
                />
                <Inputfield
                    name={"Card Number"}
                    img5={VisaIcon}
                    placeholder={"0000   0000    0000     0000"}
                />
                <div className={styles.space_div} style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Inputfield
                        name={"Expiry Date"}
                        placeholder={"MM/YY"}
                        inputtxt={styles.cvvcodetxt}
                    /><Inputfield
                    placeholder={"000"}
                        name={"CVV code"}
                        inputtxt={styles.cvvcodetxt}
                    />
                </div>
                <OpticityButton
                    name={"Save"}
                    txtstyle={{ color: '#FFF' }}
                    onClick={handleSave}
                    additionalMainDivClassName={styles.AddClientButton} />
            </div>
        </div>
    )
}

export default CreditCard