'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import React, { useState } from 'react';
import styles from './Login.module.css';
import DashBoradimg from '../../../public/Images/Dashboardimg';
import Scheduleimg from '../../../public/Images/Scheduleimg';
import Clientimg from '../../../public/Images/Clientsimg';
import Coachesimg from '../../../public/Images/Coachesimg';
import Paymentsimg from '../../../public/Images/Paymentsimg';
import Reportsimg from '../../../public/Images/Reportsimg';
import Settingsimg from '../../../public/Images/Settingsimg';
import LogoWoofit from '../../../public/Images/LogoWoofit';
import DashboradBlue from '../../../public/Images/DashboardBlue';
import ScheduleimgBlue from '../../../public/Images/ScheduleimgBlue';
import ClientsBlue from '../../../public/Images/ClientsimgBlue';
import PaymentsimgBlue from '../../../public/Images/PaymentimgBlue';
import ReportsimgBlue from '../../../public/Images/ReportsimgBlue';
import SettingsimgBlue from '../../../public/Images/SettingsimgBlue';
const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
 const [hover, setHover]=useState('')
  // Function to handle item clicks
  const handleItemClick = (item) => {
    router.push(`/${item}`);
  };

  const isActive = (url) => {
    return pathname.startsWith(`/${url}/`) || pathname === `/${url}`;
  };
  const navItems = [
    { id: 1, icon: <DashBoradimg />, slected:<DashboradBlue/>, label: "Dashboard", url: "dashboard" },
    { id: 2, icon: <Scheduleimg />,slected:<ScheduleimgBlue/>, label: "Schedule", url: "schedule" },
    { id: 3, icon: <Clientimg />,slected:<ClientsBlue/>, label: "Clients", url: "Clients" },
    // { id: 4, icon: <Coachesimg />, label: "Coaches", url: "coaches" },
    { id: 5, icon: <Paymentsimg />,slected:<PaymentsimgBlue/>, label: "Payments", url: "payments" },
    { id: 6, icon: <Reportsimg />,slected:<ReportsimgBlue/>, label: "Reports", url: "reports" },
    { id: 7, icon: <Settingsimg />,slected:<SettingsimgBlue/>, label: "Settings", url: "settings" },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <LogoWoofit />
      </div>
      <ul className={styles.navList}>
        {navItems.map(item => (
          <li
            key={item.id}
            className={`${styles.navItem} `}
            onClick={() => handleItemClick(item.url)}
          >
            <div onMouseEnter={()=>{setHover(item.label)}} onMouseLeave={()=>{setHover('')}} >
              <div className={styles.dashboradimage}>
                {isActive(item.url) || hover === item.label ? item?.slected : item.icon}
                <span style={{color: isActive(item.url) ? "#14AED1" : "" }} className={`${styles.navLabel},${isActive(item.url) ? styles.selected : ""}  `}>{item.label}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
