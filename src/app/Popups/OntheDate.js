"use client"
import React, { useState } from 'react';
import { CalenderIcon, CashSecondIcon, ClockIcon, GroupIcon, NonCashIcon, Rightarrow, Userimg } from "../../../public"
import OpticityButton from "../_reuseableComponent/OpicityButton";
import TextWithButton from "../_reuseableComponent/TextWithButton"
import styles from './Popups.module.css';
import Inputfield from '../_reuseableComponent/Inputfield';
import AddClients from './AddClients'
import Groups from './Groups'


const OntheDate = ({  handleClose }) => {
  const [popupIsOpen, setShowPopup] = useState(false);
  const [groupdata, setgroupdata] = useState(false);
  const [selected, setSelected] = useState('cash');
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  const opengroupPopUp = () => {
    setgroupdata(true);
  };

  const closegroupPopUp = () => {
    setgroupdata(false);
  };
  const handleToggle = (selection) => {
    setSelected(selection);
  };
  return (
    <div>
      <TextWithButton
        label={"Date"}
        RightIcon={CalenderIcon}
        additionalcontainer={styles.TextWithButtonstyle}
        text={'14 Mar 2002'}
      />
     <div className={styles.row_div}>
     <TextWithButton
        label={"Select"}
        LeftIcon={Userimg}
        RightIcon={Rightarrow}
        additionalcontainer={styles.TextWithButtonstyle}
        text={'Client'}
        onClick={openPopup}
      />
      <div style={{width:30}}/>
       <TextWithButton
        space
        LeftIcon={GroupIcon}
        RightIcon={Rightarrow}
        additionalcontainer={styles.TextWithButtonstyle}
        text={'Group'}
        onClick={opengroupPopUp}
      />
      </div>
      <div className={styles.row_div}>
     <TextWithButton
        label={"Start"}
        RightIcon={ClockIcon}
        additionalcontainer={styles.TextWithButtonstyle}
        text={'6:30 pm'}
      />
      <div style={{width:30}}/>
       <TextWithButton
        label={"End"}
        RightIcon={ClockIcon}
        additionalcontainer={styles.TextWithButtonstyle}
        text={'8:30 pm'}
      />
      </div>
      <div className={styles.paymentTypetxt}>Type of Payment</div>
                <div className={styles.row_div} style={{ justifyContent: 'space-between' }}>
                    <div   className={`${selected === 'cash' ? styles.cashDiv : styles.noncash}`}
        onClick={() => handleToggle('cash')}>
                        <CashSecondIcon className={selected === 'cash' ? styles.selectedIcon : styles.unselectedIcon}/>
                        <div className={` ${selected === 'cash' ? styles.Cashtxt : styles.noncashtxt}`}>Cash</div>
                        </div>
                    <div   className={` ${selected === 'noncash' ? styles.cashDiv : styles.noncash}`}
        onClick={() => handleToggle('noncash')}>
                        <NonCashIcon className={selected === 'noncash' ? styles.selectedIcon : styles.unselectedIcon}/>
                        <div className={`${selected === 'noncash' ? styles.Cashtxt : styles.noncashtxt}`}>Non-Cash</div>
                    </div>
                </div>
                <Inputfield
                name={'Comment'}
                additionalMainDivClassName={styles.comment_div_2}
                />
                <OpticityButton
                onClick={handleClose}
                name={'Save'}
                txtstyle={{color:'#FFF'}}
                    additionalMainDivClassName={styles.SaveButton}
                />
                 {popupIsOpen && <AddClients show={popupIsOpen} handleClose={closePopup} />}
                 {groupdata && <Groups show={groupdata} handleClose={closegroupPopUp} />}
                 
    </div>
  )
}

export default OntheDate