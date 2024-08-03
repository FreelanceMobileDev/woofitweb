'use client';
import React, { useEffect, useState } from 'react';
import styles from './Popups.module.css';
import { CrossIcon, FilterIcon, LeftArrow, SearchIcon } from '../../../public';
import OpticityButton from '../_reuseableComponent/OpicityButton';
import Image from 'next/image';
import profilepicture from '../../../public/Images/profilepic.png'


const AddClients = ({ handleClose, setSelectclients,selectClients,clientDatas }) => {
  console.log(clientDatas,'===clientDatas?????????')
  const [clientData, setclientData] = useState(clientDatas)
  const [selectedClients, setSelectedClients] = useState(selectClients);


  const group1 = [
    { id: 1, name: 'Eloise Robinson', avatar: profilepicture },
    { id: 2, name: 'Franky Williamson', avatar: profilepicture },
    { id: 3, name: 'Bronson Glass', avatar: profilepicture },
    { id: 4, name: 'Monroe Benjamin', avatar: profilepicture },
  ];

  const group2 = [
    { id: 5, name: 'Samuel O\'Brien', avatar: profilepicture },
    { id: 6, name: 'Morgan Warren', avatar: profilepicture },
  ];

  const group3 = [
    { id: 7, name: 'Jonathan Andrews', avatar: profilepicture },
  ];

  const SelectClients = ()=>{
    setSelectclients(selectedClients)
    handleClose()
  }

  const handleToggleClient = (client) => {
    setSelectedClients((prevSelected) => {
      const isClientSelected = prevSelected.some(
        (selectedClient) => selectedClient._id === client._id
      );
      return isClientSelected
        ? prevSelected.filter(
            (selectedClient) => selectedClient._id !== client._id
          )
        : [...prevSelected, client]; 
    });
  };
  const renderClientGroup = (clients) => (
    clients.length>0 ? clients.map((client) => (
      <div key={client.id} className={styles.clientItem}>
        <Image height={35} width={35} src={client.clientImage ? client.clientImage : profilepicture} alt={client.name} className={styles.avatar} />
        <div className={styles.clientInfo}>
          <span className={styles.Clientsname}>{client.name}</span>
          <input
            type="checkbox"
            checked={selectedClients?.some(clientObj => clientObj?._id === client?._id)}
            onChange={() => handleToggleClient(client)}
          />
        </div>
      </div>
    )):"No Data "
  );
  return (
    <div className={styles.popupDisplay}>
      <div className={styles.popupContent}>
        <div className={styles.space_div}>
          <div style={{ width: 100 }} onClick={handleClose}><LeftArrow /></div>
          <div className={styles.popheadertxt}>Add Clients</div>
          <div className={styles.row} ><SearchIcon /><div style={{ width: 30 }} /> <FilterIcon /></div>
        </div>

        <div className={styles.clientList}>
          {/* <div className={styles.albhabate_txt2}>A</div> */}
          {renderClientGroup(clientData)}
          {/* <div className={styles.albhabate_txt}>B</div>
          {renderClientGroup(group2)}
          <div className={styles.albhabate_txt}>C</div>
          {renderClientGroup(group3)} */}
        </div>
        <OpticityButton
        onClick={SelectClients}
          name="Select Clients"
          txtstyle={{ color: '#FFF' }}
          additionalMainDivClassName={styles.AddClientButton}
        />
      </div>
    </div>
  )
}

export default AddClients