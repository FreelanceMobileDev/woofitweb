'use client';
import { ArchivedIcon, FilterIcon, SearchIcon } from '../../../public';
import ClientsData from '../_components/ClientsData';
import GroupData from '../_components/GroupData';
import styles from '../_components/Login.module.css';
import React, { useEffect, useState } from 'react';
import DeshBorad from '../dashboard/DashCompoent';
import { useRouter } from 'next/navigation';
import GroupEdit from '../Popups/GroupEdit';
import TextWithButton from '../_reuseableComponent/TextWithButton';
import Inputfield from '../_reuseableComponent/Inputfield';
import OpticityButton from '../_reuseableComponent/OpicityButton';

function page() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('Clients');
  const [popupIsOpen, setShowPopup] = useState(false);
  const [updateGroup , setUpdateGroup ]= useState(false)
  const [search, serSearch] = useState()
  const [searchClick , setSearchClick]= useState(false)

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const closePopup = () => {
    setShowPopup(false);
    setUpdateGroup(true)
  };

  
  const handleChange =(e)=>{
    const {value} =e.target;
    serSearch(value)
  }
  useEffect(()=>{},[search])


const Grouppopups = ({ show, handleClose }) => {
    const handleSave = () => {
        handleClose();
    };

    return (
        <div className={show ? styles.popupDisplay : styles.popupHide}>
            <div className={styles.popupContent}>
                <div className={styles.space_div}>
                    <div style={{ width: 60 }} />
                    <div className={styles.popheadertxt}>Edit Group</div>
                    {/* <div onClick={handleClose} className={styles.greycrossicon}><CrossIcon /></div> */}
                </div>
                <TextWithButton
                    label={"Group Name"}
                    additionalcontainer={styles.TextWithButtonstyle}
                    text={'Academic Tutors'}
                />
                <div style={{ marginLeft: 10 }}>
                    <div className={styles.space_div} style={{ marginTop: 18 }}>
                        <div className={styles.Clientaddtxt}>Groups</div>
                        <div className={styles.add_buttn}>Add</div>
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
    );
}


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
               {searchClick && <input type='text' name="search" onChange={handleChange} style={{borderRadius:10}} /> } 
              <div onClick={()=>setSearchClick(!searchClick)} style={{cursor:"pointer"}} >
                <SearchIcon   />
              </div>
                <div style={{ width: 40 }} />
                <div>
                <FilterIcon />
                </div>
              </div>
            </div>
          </div>
          {(activeTab === 'Clients' || activeTab === "ArchivedClients") && <ClientsData activeTab={activeTab}  search={search} />}
          {activeTab === 'Groups' && <div style={{ height: '100vh' }}><GroupData updateGroup={updateGroup}  setUpdateGroup={setUpdateGroup} search={search} /></div>}
          {popupIsOpen && (  <GroupEdit  show={popupIsOpen} handleClose={closePopup} />)}
        </div>
      </DeshBorad>
    </>
  )
}

export default page