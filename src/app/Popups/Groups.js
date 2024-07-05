
'use client';
import React, { useState } from 'react';
import styles from './Popups.module.css';
import { CrossIcon, FilterIcon, LeftArrow, SearchIcon } from '../../../public';
import OpticityButton from '../_reuseableComponent/OpicityButton';
import Image from 'next/image';
const Groups = ({ show, handleClose }) => {

    const group1 = [
        { id: 1,count:'+3', name: 'Eloise Robinson', avatar: '/images/profilepic.png', avatar1: '/images/profilepic.png', avatar2: '/images/profilepic.png', },
        { id: 2, name: 'Franky Williamson', avatar: '/images/profilepic.png', avatar1: '/images/profilepic.png', },
        { id: 3,count:'+3', name: 'Bronson Glass', avatar: '/images/profilepic.png', avatar1: '/images/profilepic.png', avatar2: '/images/profilepic.png', },
        { id: 4, name: 'Monroe Benjamin', avatar: '/images/profilepic.png', avatar1: '/images/profilepic.png', },
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
                <div className={styles.clientInfo}>
                    <span className={styles.Clientsname}>{client.name}</span>
                    <div className={styles.row}>
                        <Image height={35} width={35} src={client.avatar} alt={client.name} className={styles.avatargroup} />
                        <Image height={35} width={35} src={client.avatar1} alt={client.name} className={styles.avatargroup} />
                        {client.avatar2 &&  <Image height={35} width={35} src={client.avatar2} alt={client.name} className={styles.avatargroup} />}
                        {client.count&&<div className={styles.group_count}>+3</div>}
                      <div style={{marginLeft:20}}>
                        <input
                            type="checkbox"
                            checked={selectedClients.includes(client.id)}
                            onChange={() => handleToggleClient(client.id)}
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

                    {renderClientGroup(group1)}

                </div>
                <OpticityButton
                    name="Select Group"
                    txtstyle={{ color: '#FFF' }}
                    additionalMainDivClassName={styles.Select_GroupButton}
                />
            </div>
        </div>
    )
}

export default Groups