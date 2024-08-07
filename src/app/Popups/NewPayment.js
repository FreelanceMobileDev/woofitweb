"use client"
import React, { useState } from 'react';
import styles from './Popups.module.css';
import { CalenderIcon, CashSecondIcon, CrossIcon, NonCashIcon, Rightarrow, Userimg } from '../../../public';
import Inputfield from '../_reuseableComponent/Inputfield';
import TextWithButton from '../_reuseableComponent/TextWithButton';
import OpticityButton from '../_reuseableComponent/OpicityButton';

const NewPayment = ({ show, handleClose }) => {
    const [selected, setSelected] = useState('cash');

    const handleToggle = (selection) => {
        setSelected(selection);
    };


    const handleSave = () => {
        handleClose();
    };

    return (
        <div className={show ? styles.popupDisplay : styles.popupHide}>

            <div className={styles.popupContent}>
                <div className={styles.space_div}>
                    <div />
                    <div className={styles.popheadertxt}>New Payment</div>
                    <div onClick={handleClose} className={styles.greycrossicon}><CrossIcon /></div>

                </div>
                <TextWithButton
                    label={"Select a Client"}
                    LeftIcon={Userimg}
                    RightIcon={Rightarrow}
                    input_parent_div_prop={styles.TextWithButtonstyle}
                    text={'Client'}
                />
                <TextWithButton
                    label={"Date"}
                    RightIcon={CalenderIcon}
                    input_parent_div_prop={styles.TextWithButtonstyle}
                    text={'14 Mar 2002'}
                />
                <Inputfield
                    img3
                    name={'Price for Training'}
                    input_parent_div_prop={styles.UsdInput}
                />
                <div className={styles.row_div} style={{ marginTop: 20 }}>
                    <Inputfield
                        input_parent_div_prop={styles.calender_input}
                        additionalMainDivClassName={styles.additionalMainDiv}
                        additionalinput_field={styles.additionalInputField}
                        inputtxt={styles.invoicenumber}
                        name="Number of Trainings"
                        placeholder={"4"}
                    />
                    <div style={{ width: 40 }} />
                    <Inputfield
                        img3
                        input_parent_div_prop={styles.calender_input}
                        additionalMainDivClassName={styles.additionalMainDiv}
                        additionalinput_field={styles.additionalInputField}
                        inputtxt={styles.invoicenumber}
                        name="Amount"

                    />
                </div>
                <div className={styles.paymentTypetxt}>Type of Payment</div>
                <div className={styles.row_div} style={{ justifyContent: 'space-between' }}>
                    <div className={`${selected === 'cash' ? styles.cashDiv : styles.noncash}`}
                        onClick={() => handleToggle('cash')}>
                        <CashSecondIcon className={selected === 'cash' ? styles.selectedIcon : styles.unselectedIcon} />
                        <div className={` ${selected === 'cash' ? styles.Cashtxt : styles.noncashtxt}`}>Cash</div>
                    </div>
                    <div className={` ${selected === 'noncash' ? styles.cashDiv : styles.noncash}`}
                        onClick={() => handleToggle('noncash')}>
                        <NonCashIcon className={selected === 'noncash' ? styles.selectedIcon : styles.unselectedIcon} />
                        <div className={`${selected === 'noncash' ? styles.Cashtxt : styles.noncashtxt}`}>Non-Cash</div>
                    </div>
                </div>
                <OpticityButton
                    onClick={handleClose}
                    name={'Save'}
                    txtstyle={{ color: '#FFF' }}
                    additionalMainDivClassName={styles.SaveButton}
                />
            </div>
        </div>
    );
};

export default NewPayment;

