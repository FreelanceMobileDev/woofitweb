'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';
import styles from './Login.module.css';
import DashBoradimg from '../../../public/Images/Dashboardimg';
import Scheduleimg from '../../../public/Images/Scheduleimg';
import Clientimg from '../../../public/Images/Clientsimg';
import Coachesimg from '../../../public/Images/Coachesimg';
import Paymentsimg from '../../../public/Images/Paymentsimg';
import Reportsimg from '../../../public/Images/Reportsimg';
import Settingsimg from '../../../public/Images/Settingsimg';
import LogoWoofit from '../../../public/Images/LogoWoofit';

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Function to handle item clicks
  const handleItemClick = (item) => {
    router.push(`/${item}`);
  };

  // Determine if a path matches the current pathname
  const isActive = (url) => {
    return pathname === `/${url}` || pathname.startsWith(`/${url}/`);
  };

  const navItems = [
    { id: 1, icon: <DashBoradimg />, label: "Dashboard", url: "dashboard" },
    { id: 2, icon: <Scheduleimg />, label: "Schedule", url: "schedule" },
    { id: 3, icon: <Clientimg />, label: "Clients", url: "Clients" },
    { id: 4, icon: <Coachesimg />, label: "Coaches", url: "coaches" },
    { id: 5, icon: <Paymentsimg />, label: "Payments", url: "payments" },
    { id: 6, icon: <Reportsimg />, label: "Reports", url: "reports" },
    { id: 7, icon: <Settingsimg />, label: "Settings", url: "settings/profile" },
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
            className={`${styles.navItem} ${isActive(item.url) ? styles.selected : ''}`}
            onClick={() => handleItemClick(item.url)}
          >
            <div>
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
