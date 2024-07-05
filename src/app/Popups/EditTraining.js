"use client"
import React, { useState } from 'react';
import styles from './Popups.module.css';
import { CalenderIcon, CashSecondIcon, ClockIcon, CrossIcon, GroupIcon, NonCashIcon, Rightarrow, Userimg } from '../../../public';
import TextWithButton from '../_reuseableComponent/TextWithButton';
import OpticityButton from '../_reuseableComponent/OpicityButton';
import Inputfield from '../_reuseableComponent/Inputfield';

const Clientsdata = [
    { name: 'Eloise Robinson', avatar: '/images/profilepic.png' },
    { name: 'Franky Williamson', avatar: '/images/profilepic.png' },
    { name: 'Bronson Glass', avatar: '/images/profilepic.png' },
   
]

const EditTraining = ({ show, handleClose }) => {
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
                    <div style={{width:60}}/>
                    <div className={styles.popheadertxt}>Edit Training</div>
                    <div onClick={handleClose} className={styles.greycrossicon}><CrossIcon /></div>

                </div>
                <TextWithButton
                    label={"Date"}
                    RightIcon={CalenderIcon}
                    additionalcontainer={styles.TextWithButtonstyle}
                    text={'14 Mar 2002'}
                />
                <div className={styles.row_div}>
                    <TextWithButton
                        label={"Start"}
                        RightIcon={ClockIcon}
                        additionalcontainer={styles.TextWithButtonstyle}
                        text={'6:30 pm'}
                    />
                    <div style={{ width: 30 }} />
                    <TextWithButton
                        label={"End"}
                        RightIcon={ClockIcon}
                        additionalcontainer={styles.TextWithButtonstyle}
                        text={'8:30 pm'}
                    />
                </div>
                <div style={{ marginLeft: 10 }}>
                    <div className={styles.space_div} style={{ marginTop: 8 }}>
                        <div className={styles.Clientaddtxt}>Client</div>
                        <div className={styles.add_buttn}>Add</div>
                    </div>

                    {Clientsdata.map((item, index) => (
        <div key={index} className={styles.space_div} style={{marginBottom:10,marginTop:10}} >
            <div className={styles.row_div}>
            <img src={item.avatar}/>
         <div className={styles.client_name_style}>{item.name}</div>
         </div>
         <div>
            <CrossIcon/>
         </div>
        </div>
      ))}



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

                </div>
                <Inputfield
                    name={'Comment'}
                    additionalMainDivClassName={styles.comment_div_2}
                />
                <OpticityButton
                    onClick={handleClose}
                    name={'Save'}
                    txtstyle={{ color: '#FFF' }}
                    additionalMainDivClassName={styles.SaveButton}
                />
            </div>
        </div>
    )
}

export default EditTraining