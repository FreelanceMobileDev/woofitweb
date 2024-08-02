'use client';
import React, { useEffect, useState } from 'react';
import styles from './Popups.module.css';
import { CrossIcon, FilterIcon, LeftArrow, SearchIcon } from '../../../public';
import OpticityButton from '../_reuseableComponent/OpicityButton';
import Image from 'next/image';
import profilepicture from '../../../public/Images/profilepic.png'
import { getClinent } from '../../api/helper';
import Loader from '../_components/Loader';

const AddClients = ({  handleClose,setSelectclients }) => {
  const [clientData, setclientData] = useState([])
  const [loading, setLoading] = useState(false);
  const [selectedClients, setSelectedClients] = useState([]);
  console.log(selectedClients,'===selectedClients')

  const getApiClinent = async (data) => {
    try {
      setLoading(true)
      const getData = await getClinent(data,`&sort=asc`)
      // console.log(getData.data.data.getAllClientData,'=====hereee')
      setclientData(getData.data.data.getAllClientData)
    } catch (error) {
      console.log(error, '====error')
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    getApiClinent(0)
    return () => {}
  }, [])
  

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
  

  const handleToggleClient = (id) => {
    setSelectclients((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((clientId) => clientId !== id)
        : [...prevSelected, id]
    );
    setSelectedClients((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((clientId) => clientId !== id)
        : [...prevSelected, id]
    );
  };
  const renderClientGroup = (clients) => (
    clients.map((client) => (
      <div key={client.id} className={styles.clientItem}>
        <Image height={35} width={35} src={client.clientImage?client.clientImage:profilepicture} alt={client.name} className={styles.avatar} />
        <div className={styles.clientInfo}>
          <span className={styles.Clientsname}>{client.name}</span>
          <input
            type="checkbox"
            checked={selectedClients.includes(client._id)}
            onChange={() => handleToggleClient(client._id)}
          />
        </div>
      </div>
    ))
  );
  return (
    <div className={styles.popupDisplay}>
      <div className={styles.popupContent}>
      <Loader loading={loading} />
      
      <div className={styles.space_div}>
      <div style={{width:100}} onClick={handleClose}><LeftArrow/></div>
          <div className={styles.popheadertxt}>Add Clients</div>
          <div className={styles.row} ><SearchIcon/><div style={{width:30}}/> <FilterIcon/></div>
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
      name="Select Clients"
      txtstyle={{color:'#FFF'}}
                    additionalMainDivClassName={styles.AddClientButton}
      />
      </div>
    </div>
  )
}

export default AddClients