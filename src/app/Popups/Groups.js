
'use client';
import React, { useState } from 'react';
import styles from './Popups.module.css';
import { CrossIcon, FilterIcon, LeftArrow, SearchIcon } from '../../../public';
import OpticityButton from '../_reuseableComponent/OpicityButton';
import Image from 'next/image';
import profilepicture from '../../../public/Images/profilepic.png'
import profileiconn from '../../../public/Images/addProfile@2x.png'


const Groups = ({ handleClose, groupDatas,selectdGroup,setSelectedGroup }) => {

    const group1 = [
        { id: 1, count: '+3', name: 'Eloise Robinson', avatar: profilepicture, avatar1: profilepicture, avatar2: profilepicture, },
        { id: 2, name: 'Franky Williamson', avatar: profilepicture, avatar1: profilepicture, },
        { id: 3, count: '+3', name: 'Bronson Glass', avatar: profilepicture, avatar1: profilepicture, avatar2: profilepicture, },
        { id: 4, name: 'Monroe Benjamin', avatar: profilepicture, avatar1: profilepicture, },
    ];

    const [selectedClients, setSelectedClients] = useState(selectdGroup);
    const handleToggleClient = (client) => {
        setSelectedClients((prevSelected) => {
          const isClientSelected = prevSelected?.some(
            (selectedClient) => selectedClient?._id === client?._id
          );
          return isClientSelected
            ? prevSelected?.filter(
                (selectedClient) => selectedClient?._id !== client?._id
              )
            : [...prevSelected, client]; 
        });
      };
      const SelectClients = ()=>{
        setSelectedGroup(selectedClients)
        handleClose()
      }

    // const handleToggleClient = (id) => {
    //     setSelectedClients((prevSelected) =>
    //         prevSelected.includes(id)
    //             ? prevSelected.filter((clientId) => clientId !== id)
    //             : [...prevSelected, id]
    //     );
    // };
    const renderClientGroup = (clients) => (
        clients.map((client) => (
            <div key={client.id} className={styles.clientItem}>
                <div className={styles.clientInfo}>
                    <span className={styles.Clientsname}>{client.name} sdasd</span>
                    <div className={styles.row}>
                        {client.clients.map((e) =>
                            <Image height={35} width={35} src={e.clientImage ? e.clientImage : profileiconn} alt={""} className={styles.avatargroup} />
                        )}
                        {/* <Image height={35} width={35} src={client.avatar} alt={client.name} className={styles.avatargroup} />
                        <Image height={35} width={35} src={client.avatar1} alt={client.name} className={styles.avatargroup} /> */}
                        {/* {client.avatar2 && <Image height={35} width={35} src={client.avatar2} alt={client.name} className={styles.avatargroup} />} */}
                        {/* {client.count && <div className={styles.group_count}>+3</div>} */}
                        <div style={{ marginLeft: 20 }}>
                            <input
                                type="checkbox"
                                checked={selectedClients?.some(clientObj => clientObj?._id === client?._id)}
                                onChange={() => handleToggleClient(client)}
                            />
                        </div>
                    </div>

                </div>
            </div>
        ))
    );
    return (
        <div className={styles.popupDisplay} style={{ height: '100%' }}>
            <div className={styles.popupContent} style={{ height: '91%' }}>

                <div className={styles.space_div}>
                    <div style={{ width: 100 }} onClick={handleClose}><LeftArrow /></div>
                    <div className={styles.popheadertxt}>Groups</div>
                    <div className={styles.row} ><SearchIcon /><div style={{ width: 30 }} /> <FilterIcon /></div>
                </div>

                <div className={styles.clientList}>

                    {renderClientGroup(groupDatas)}

                </div>
                <OpticityButton
                 onClick={SelectClients}
                    name="Select Group"
                    txtstyle={{ color: '#FFF' }}
                    additionalMainDivClassName={styles.Select_GroupButton}
                />
            </div>
        </div>
    )
}

export default Groups