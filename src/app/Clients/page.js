'use client';
import { ArchivedIcon, FilterIcon, SearchIcon } from '../../../public';
import ClientsData from '../_components/ClientsData';
import GroupData from '../_components/GroupData';
import styles from '../_components/Login.module.css';
import React, { useState } from 'react';
import DeshBorad from '../dashboard/DashCompoent';
import { useRouter } from 'next/navigation';
import GroupEdit from '../Popups/GroupEdit';

function page() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('Clients');
  const [popupIsOpen, setShowPopup] = useState(false);
  const [updateGroup , setUpdateGroup ]= useState(false)

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const closePopup = () => {
    setShowPopup(false);
    setUpdateGroup(true)
  };
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
                <div className={styles.Add_Client} style={{cursor:"pointer"}} onClick={()=>(activeTab === 'Clients' || activeTab === "ArchivedClients") ?router.push('Clients/edit'):setShowPopup(true)}  >{(activeTab === 'Clients' || activeTab === "ArchivedClients")  ? "Add a client" :  "Add Groups"}</div>
                {/* Clients/edit */}
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
          {activeTab === 'Groups' && <div style={{ height: '100vh' }}><GroupData updateGroup={updateGroup}  setUpdateGroup={setUpdateGroup} /></div>}
          {popupIsOpen && (  <GroupEdit  show={popupIsOpen} handleClose={closePopup} />)}
        </div>
      </DeshBorad>
    </>
  )
}

export default page