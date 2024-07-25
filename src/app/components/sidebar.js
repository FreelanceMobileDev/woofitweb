'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './style.css';
import DashBoradimg from '../../../public/Images/Dashboardimg';
import Scheduleimg from '../../../public/Images/Scheduleimg';
import Clientimg from '../../../public/Images/Clientsimg';
import Coachesimg from '../../../public/Images/Coachesimg';
import Paymentsimg from '../../../public/Images/Paymentsimg';
import Reportsimg from '../../../public/Images/Reportsimg';
import Settingsimg from '../../../public/Images/Settingsimg';
import LogoWoofit from '../../../public/Images/LogoWoofit';


const Sidebar = ({ onItemSelected,setSelectedItem,selectedItem}) => {


  const handleItemClick = (item) => {
    console.log(item,'===item')
    setSelectedItem(item);
    // onItemSelected(item); 
  };
  const navItems = [
    { id: 1, icon: <DashBoradimg
      //  className={}
    />, label: "Dashboard", },
    { id: 2, icon: <Scheduleimg 
     //  className={}
    />, label: "Schedule",},
    { id: 3, icon: <Clientimg 
     //  className={}
    />, label: "Clients",},
    { id: 4, icon: <Coachesimg 
     //  className={}
    />, label: "Coaches",  },
    { id: 5, icon: <Paymentsimg 
     //  className={}
    />, label: "Payments",  },
    { id: 6, icon: <Reportsimg 
     //  className={}
    />, label: "Reports",  },
    { id: 7, icon: <Settingsimg 
     //  className={}
    />, label: "Settings",  },
  ];
  
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <LogoWoofit/>
      </div>
      <ul className={styles.navList}>
      {navItems.map(item => (
           <li key={item.id}
           className={`${styles.navItem} ${selectedItem === item.label ? styles.selected : ''}`}
             onClick={() => handleItemClick(item.label)}>
            <div >
              <div className={styles.dashboradimage}>
                {item.icon}
                <span className={styles.navLabel}>{item.label}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Sidebar;
