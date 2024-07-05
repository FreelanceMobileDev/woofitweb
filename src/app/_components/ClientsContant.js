'use client';

import { ArchivedIcon,  FilterIcon, SearchIcon } from '../../../public';
import ClientsData from './ClientsData';
import GroupData from './GroupData';
import styles from './Login.module.css';
import React, { useState } from 'react';
const ClientsContant = ({setSelectedItem}) => {
  const [activeTab, setActiveTab] = useState('Clients');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className={styles.DashboardContent} style={{  paddingTop: 10, flexDirection: 'column' }}>
      <div style={{padding: 20,}}>
      <div className={styles.clientsHeaderdiv}>
        <div className={styles.clientstxtt}>Clients</div>
        <ArchivedIcon />
        <div className={styles.Archived_Clients}onClick={()=>{setSelectedItem('ArchivedClients')}}>Archived Clients</div>
        <div className={styles.Add_Client}>Add a Client</div>
      </div>
      <div className={styles.Groups_Clients} >
        <div style={{display:'flex',}}>
        <div 
         className={activeTab === 'Clients' ? styles.clientsButton : styles.groups_Button}
         onClick={() => handleTabClick('Clients')}
        >
          Clients
        </div>
        <div 
          className={activeTab === 'Groups' ? styles.clientsButton : styles.groups_Button}
          onClick={() => handleTabClick('Groups')}
        >
          Groups
        </div>
        </div>
        <div style={{display:'flex'}}>
        <SearchIcon/>
        <div style={{width:40}}/>
        <FilterIcon/>
        </div>
      </div>
      </div>
      {activeTab === 'Clients' && <ClientsData setSelectedItem={setSelectedItem}/>}
      {activeTab === 'Groups' && <GroupData />}
    </div>
  )
}

export default ClientsContant