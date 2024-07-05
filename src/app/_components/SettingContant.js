'use client';
import {  FAQsIcon, IntegrationsIcon, NotificationIcon, ProfileIcon, Rightarrow, ServicesIcon, SupportIcon, UploadimgIcon } from '../../../public';
import styles from './Login.module.css';
import ProfileScreen from '../SettingScreens/ProfileScreen';
import ServicesScreen from '../SettingScreens/ServicesScreen';
import NotificationsScreen from '../SettingScreens/NotificationsScreen';
import IntegrationsScreen from '../SettingScreens/IntegrationsScreen';
import FAQsScreen from '../SettingScreens/FAQsScreen';
import SupportScreen from '../SettingScreens/SupportScreen';
import React, { useState } from 'react';

const SettingContant = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const navItems = [
    { id: 1, icon: <ProfileIcon />, label: "Profile" },
    { id: 2, icon: <ServicesIcon />, label: "Services" },
    { id: 3, icon: <NotificationIcon />, label: "Notifications" },
    { id: 4, icon: <IntegrationsIcon />, label: "Integrations" },
    { id: 5, icon: <FAQsIcon />, label: "FAQs" },
    { id: 6, icon: <SupportIcon />, label: "Support" }
  ];
  

  
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <div className={styles.Setting_texttt}>Settings</div>
      <div className={styles.settingScreenContainer}>

        <div className={styles.settingSidebar}>

          <ul className={styles.navList}>
            {navItems.map(item => (
              <li key={item.id} 
              className={`${styles.navItem} ${activeTab === item.label ? styles.activeNavItem : ''}`}
              onClick={() => handleTabClick(item.label)}
              >
                <div className={styles.navItemContent}>
                  <div className={styles.icon_and_namee}>
                    {item.icon}
                    <span className={styles.navItemLabel}>{item.label}</span>
                  </div>
                  <Rightarrow />
                </div>
              </li>
            ))}
          </ul>
        </div>

{activeTab === 'Profile' && <ProfileScreen/>}
{activeTab === 'Services' && <ServicesScreen />}
{activeTab === 'Notifications' && <NotificationsScreen/>}
{activeTab === 'Integrations' && <IntegrationsScreen />}
{activeTab === 'FAQs' && <FAQsScreen/>}
{activeTab === 'Support' && <SupportScreen />}
      </div>
    </div>
  );
}

export default SettingContant;
