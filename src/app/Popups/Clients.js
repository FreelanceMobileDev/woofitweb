"use client"
import React, { useState } from 'react';
import styles from './Popups.module.css';
import { CrossIcon, LeftArrow } from '../../../public';
import OpticityButton from '../_reuseableComponent/OpicityButton';
import AddClients from './AddClients'
import Image from 'next/image';
import profilepicture from '../../../public/Images/profilepic.png'

const Clients = ({ show, handleClose }) => {
  const [clientsopen, setclientsopen] = useState(false);
    
  const closePopup = () => {
    setclientsopen(false);
  };

const handleSave = () => {
  setclientsopen(false);
    setclientsopen(true);
};

  const data = [
    { name: 'Eloise Robinson', avatar: profilepicture, },
    { name: 'Franky Williamson', avatar: profilepicture, },
    { name: 'Bronson Glass', avatar: profilepicture, },
    { name: 'Monroe Benjamin', avatar: profilepicture, },
    { name: 'Morgan Warren', avatar: profilepicture, },
  ]
  return (
    <div>
    <div className={show ? styles.popupDisplay : styles.popupHide}>
      <div className={styles.popupContent} style={{ marginTop: 35 }}>
        <div className={styles.space_div} style={{ marginBottom: 20 }}>
          <div style={{ width: 60 }} ><LeftArrow /></div>
          <div className={styles.popheadertxt}>Edit Rate</div>
          <div onClick={handleClose} className={styles.greycrossicon}><CrossIcon /></div>

        </div>
        <div className={styles.countingClient}>5 Clients</div>
        <div style={{ marginTop: 30 }}>
          {data.map((item, index) => (
            <div key={index} className={styles.space_div} style={{ marginBottom: 20, marginTop: 15 }} >
              <div className={styles.row}>
                <Image width={40} height={40}  src={item.avatar} />
                <div className={styles.Clientsname} style={{ marginLeft: 16 }}>{item.name}</div>
              </div>
              <CrossIcon />
            </div>
          ))}

        </div>
        <OpticityButton
          onClick={handleSave}
          name={'Add Clients'}
          txtstyle={{ color: '#FFF' }}
          additionalMainDivClassName={styles.AddClientButton}
        />
      </div>
     
    </div>
    {clientsopen && <AddClients show={clientsopen} handleClose={closePopup} />}
    </div>
  )
}

export default Clients