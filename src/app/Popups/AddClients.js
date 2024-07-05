'use client';
import React, { useState } from 'react';
import styles from './Popups.module.css';
import { CrossIcon, FilterIcon, LeftArrow, SearchIcon } from '../../../public';
import OpticityButton from '../_reuseableComponent/OpicityButton';
const AddClients = ({ show, handleClose }) => {

  const group1 = [
    { id: 1, name: 'Eloise Robinson', avatar: '/images/profilepic.png' },
    { id: 2, name: 'Franky Williamson', avatar: '/images/profilepic.png' },
    { id: 3, name: 'Bronson Glass', avatar: '/images/profilepic.png' },
    { id: 4, name: 'Monroe Benjamin', avatar: '/images/profilepic.png' },
  ];
  
  const group2 = [
    { id: 5, name: 'Samuel O\'Brien', avatar: '/images/profilepic.png' },
    { id: 6, name: 'Morgan Warren', avatar: '/images/profilepic.png' },
  ];
  
  const group3 = [
    { id: 7, name: 'Jonathan Andrews', avatar: '/images/profilepic.png' },
  ];
  
  const [selectedClients, setSelectedClients] = useState([]);

  const handleToggleClient = (id) => {
    setSelectedClients((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((clientId) => clientId !== id)
        : [...prevSelected, id]
    );
  };
  const renderClientGroup = (clients) => (
    clients.map((client) => (
      <div key={client.id} className={styles.clientItem}>
        <img src={client.avatar} alt={client.name} className={styles.avatar} />
        <div className={styles.clientInfo}>
          <span className={styles.Clientsname}>{client.name}</span>
          <input
            type="checkbox"
            checked={selectedClients.includes(client.id)}
            onChange={() => handleToggleClient(client.id)}
          />
        </div>
      </div>
    ))
  );
  return (
    <div className={styles.popupDisplay}>
      <div className={styles.popupContent}>
      
      <div className={styles.space_div}>
      <div style={{width:100}} onClick={handleClose}><LeftArrow/></div>
          <div className={styles.popheadertxt}>Add Clients</div>
          <div className={styles.row} ><SearchIcon/><div style={{width:30}}/> <FilterIcon/></div>
        </div>

        <div className={styles.clientList}>
          <div className={styles.albhabate_txt2}>A</div>
          {renderClientGroup(group1)}
          <div className={styles.albhabate_txt}>B</div>
          {renderClientGroup(group2)}
          <div className={styles.albhabate_txt}>C</div>
          {renderClientGroup(group3)}
        </div>
      <OpticityButton
      name="Select Clients"
      txtstyle={{color:'#FFF'}}
                    additionalMainDivClassName={styles.AddClientButton}
      />
      </div>
    </div>
  )
}

export default AddClients