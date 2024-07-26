"use client"
import React, { useState } from 'react';
import styles from '../_components/Login.module.css';
import { FAQsIcon, IntegrationsIcon, NotificationIcon, ProfileIcon, Rightarrow, ServicesIcon, SupportIcon } from '../../../public';
import { useRouter } from 'next/navigation';

const SettingSidebar = ({ children }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('/settings/profile');
  const handleNavigation = (route) => {
    if (route === "Logout") {
      let confirmed = window.confirm("Are you sure you want to logout?");
      if (confirmed) {
        console.log("User clicked OK, logging out...");
        localStorage.clear()
        router.push('/')
      }
    } else {
      router.push(`/settings/${route}`);
    }
  };
  const navItems = [
    { id: 1, icon: <ProfileIcon />, label: "Profile", url: "profile" },
    { id: 2, icon: <ServicesIcon />, label: "Services", url: "services" },
    { id: 3, icon: <NotificationIcon />, label: "Notifications", url: "notifications" },
    { id: 4, icon: <IntegrationsIcon />, label: "Integrations", url: "integrations" },
    { id: 5, icon: <FAQsIcon />, label: "FAQs", url: "faq" },
    { id: 6, icon: <SupportIcon />, label: "Support", url: "support" },
    { id: 7, icon: <SupportIcon />, label: "Logout", url: "Logout" }
  ];

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <div className={styles.Setting_texttt}>Settings</div>
      <div className={styles.settingScreenContainer}>
        <div className={styles.settingSidebar}>
          <ul className={styles.navList}>
            {navItems.map(item => (
              <li key={item.id}
                className={`${styles.navItem}${activeTab === item.label ? styles.activeNavItem : ''}`}
                onClick={() => handleNavigation(item.url)}
              >
                <div className={styles.navItemContent}>
                  <div className={styles.icon_and_namee}>
                    {item.icon}
                    <span className={styles.navItemLabel}>{item.label}</span>
                  </div>
                  {item.id == 7 ? "" : <Rightarrow />}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SettingSidebar;
