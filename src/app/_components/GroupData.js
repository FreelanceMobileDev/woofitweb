
'use client';
import React, { useState } from 'react';
import { EditIcon, DeleteIcon } from '../../../public'; // Adjust the import paths accordingly
import styles from './Login.module.css';
import GroupEdit from '../Popups/GroupEdit'
import Image from 'next/image';
import profilepicture from '../../../public/Images/profilepic.png'

const groupsData = [
  {
    title: 'Academic Tutors',
    clients: 6,
    images: [profilepicture, profilepicture, profilepicture],
    additionalClients: 3,
  },
  {
    title: 'Teaching Assistants',
    clients: 2,
    images: [profilepicture, profilepicture],
    additionalClients: 0,
  },
  {
    title: 'English Team',
    clients: 6,
    images: [profilepicture, profilepicture, profilepicture],
    additionalClients: 3,
  },
  {
    title: 'Pastoral Staff',
    clients: 6,
    images: [profilepicture, profilepicture, profilepicture],
    additionalClients: 3,
  },
  {
    title: 'Heads Of Year',
    clients: 6,
    images: [profilepicture, profilepicture, profilepicture],
    additionalClients: 3,
  },
  {
    title: 'Heads Of Houses',
    clients: 6,
    images: [profilepicture, profilepicture, profilepicture],
    additionalClients: 3,
  },
];

const GroupItem = ({ title, clients, images, additionalClients, }) => {
  const [popupIsOpen, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className={styles.groupItem}>
    <div className={styles.groupContent}>
      <div className={styles.groupTitle}>{title}</div>
      <div style={{display:'flex',marginTop:25,alignItems: 'center',}}>
      <div className={styles.groupClients}>{clients} Clients</div>
      <div className={styles.groupImages}>
        {images.map((img, index) => (
          <Image key={index} height={30} width={30} src={`${img}`} alt={`Client ${index}`} className={styles.clientImage} />
        ))}
        {additionalClients > 0 && <span className={styles.additionalClients}>+{additionalClients}</span>}
      </div>
    </div>
    </div>
    <div className={styles.groupActions}>
      <div onClick={openPopup}>
      <EditIcon className={styles.actionIcon} />
      </div>
      <div style={{width:20}}/>
      <div>
      <DeleteIcon className={styles.actionIcon} />
      </div>
    </div>
       {popupIsOpen && <GroupEdit show={popupIsOpen} handleClose={closePopup} />}
  </div>
  );
};

const GroupData = () => {

  return (
    <div className={styles.groupsContainer}>
    {groupsData.map((group, index) => (
      <GroupItem key={index} {...group} />
    ))}
    
  </div>
  );
};

export default GroupData;
