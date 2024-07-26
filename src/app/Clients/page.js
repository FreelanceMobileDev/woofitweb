'use client';
import { ArchivedIcon, FilterIcon, SearchIcon } from '../../../public';
import { getClinent } from '../../api/helper';
import ClientsData from '../_components/ClientsData';
import GroupData from '../_components/GroupData';
import styles from '../_components/Login.module.css';
import React, { useState } from 'react';
import Header from '../_components/HeaderDashborad'
import Sidebar from '../_components/SidebarDashborad'
import DeshBorad from '../dashboard/DashCompoent';

function page() {
  const [activeTab, setActiveTab] = useState('Clients');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  console.log(activeTab, '====activeTab')
  return (
    <>
      <DeshBorad>
        <div className={styles.DashboardContent} style={{ paddingTop: 10, flexDirection: 'column' }}>
          <div style={{ padding: 20, }}>
            <div className={styles.clientsHeaderdiv}>
              <div className={styles.clientstxtt}>{activeTab == "Clients" ? "Clients" : (activeTab == "ArchivedClients" ? "Archived Clients" : "Groups")}</div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ArchivedIcon />
                <div className={styles.Archived_Clients} onClick={() => { handleTabClick('ArchivedClients') }}>Archived Clients</div>
                <div className={styles.Add_Client}>Add a Client</div>
              </div>
            </div>
            <div className={styles.Groups_Clients} >
              <div style={{ display: 'flex', }}>
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
              <div style={{ display: 'flex' }}>
                <SearchIcon />
                <div style={{ width: 40 }} />
                <FilterIcon />
              </div>
            </div>
          </div>
          {(activeTab === 'Clients' || activeTab === "ArchivedClients") && <ClientsData activeTab={activeTab} />}
          {activeTab === 'Groups' && <div style={{ height: '100vh' }}><GroupData /></div>}
        </div>
      </DeshBorad>
    </>
  )
}

export default page