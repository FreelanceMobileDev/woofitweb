'use client';
import { ArchivedIcon, FilterIcon, SearchIcon, CrossIcon } from '../../../public';
import ClientsData from '../_components/ClientsData';
import GroupData from '../_components/GroupData';
import styles from '../_components/Login.module.css';
import React, { useEffect, useState } from 'react';
import DeshBorad from '../dashboard/DashCompoent';
import { useRouter } from 'next/navigation';
import GroupEdit from '../Popups/GroupEdit';
import FilterClients from '../Popups/FilterClients';
import { getRates } from '../../api/helper';
import { updateQueryString } from '../../api/helperFunction'

function page() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('Clients');
  const [popupIsOpen, setShowPopup] = useState(false);
  const [updateGroup, setUpdateGroup] = useState(false)
  const [search, serSearch] = useState()
  const [searchClick, setSearchClick] = useState(false)
  const [filter, setFilter] = useState(false)
  const [catchId, setCoachId] = useState()
  const [getRetes, setGetRates] = useState([])
  const [loading, setLoading] = useState(false);
  const [filterData, setFilterData] = useState("&search=&rate=&sort=")
  const [preFilter, setPreFilter] = useState({})
  const [showHide, setShowHide]= useState(false)


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let ddata = localStorage.getItem("id");
      setCoachId(ddata)
    }
  }, [])

  // const getRates= 
  const getRateData = async () => {
    try {
      setLoading(true)
      const resoponse = await getRates(catchId)
      setGetRates(resoponse?.data?.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

  }
  useEffect(() => {
    if (catchId) {
      getRateData(catchId)
    }
  }, [catchId])


  const closePopup = () => {
    setShowPopup(false);
    setUpdateGroup(true)
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const data = updateQueryString(filterData, "search", value)
    setFilterData(data)
  }
  useEffect(() => { }, [search, filterData, preFilter,setFilterData])

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
                <div className={styles.Add_Client} style={{ cursor: "pointer" }} onClick={() => (activeTab === 'Clients' || activeTab === "ArchivedClients") ? router.push('Clients/edit') : setShowPopup(true)}  >{(activeTab === 'Clients' || activeTab === "ArchivedClients") ? "Add a client" : "Add Groups"}</div>
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
              {showHide &&
                <div style={{ display: 'flex' }}>
                {  searchClick && <input type='text' name="search" onChange={handleChange} style={{ borderRadius: 10 }} />}
                {searchClick ?
                  <div onClick={() => setSearchClick(!searchClick)} style={{ cursor: "pointer" }} >
                    <CrossIcon />
                  </div>
                  :
                  <div onClick={() => setSearchClick(!searchClick)} style={{ cursor: "pointer" }} >
                    <SearchIcon />
                  </div>
                }
                <div style={{ width: 40 }} />
                <div onClick={() => setFilter(true)}>
                  <FilterIcon />
                </div>
              </div>
              }
            
            </div>
          </div>
          {(activeTab === 'Clients' || activeTab === "ArchivedClients") && <ClientsData activeTab={activeTab} search={search} filterData={filterData} setShowHide={setShowHide} />}
          {activeTab === 'Groups' && <div style={{ height: '100vh' }}><GroupData updateGroup={updateGroup} setUpdateGroup={setUpdateGroup} search={search} filterData={filterData} setShowHide={setShowHide} /></div>}
          {popupIsOpen && (<GroupEdit show={popupIsOpen} handleClose={closePopup} />)}
          {filter && <FilterClients setFilter={setFilter} getRetes={getRetes} setFilterData={setFilterData} setPreFilter={setPreFilter} preFilter={preFilter} />}
        </div>
      </DeshBorad>
    </>
  )
}

export default page