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

const GroupEdit = ({ show, handleClose }) => {



    const handleSave = () => {
        handleClose();
    };
    return (
        <div className={show ? styles.popupDisplay : styles.popupHide}>
            <div className={styles.popupContent}>
                <div className={styles.space_div}>
                    <div style={{width:60}}/>
                    <div className={styles.popheadertxt}>Edit Group</div>
                    <div onClick={handleClose} className={styles.greycrossicon}><CrossIcon /></div>

                </div>
                <TextWithButton
                    label={"Group Name"}
                    // RightIcon={CalenderIcon}
                    additionalcontainer={styles.TextWithButtonstyle}
                    text={'Academic Tutors'}
                />
               
                <div style={{ marginLeft: 10 }}>
                    <div className={styles.space_div} style={{ marginTop: 18 }}>
                        <div className={styles.Clientaddtxt}>Groups</div>
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

export default GroupEdit