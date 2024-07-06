'use client';
import { GoogleCalender, MailchimpIcon, SlackIcon, Stripe, TelegramIcon } from '../../../public';
import styles from './Setting.module.css'
import React from 'react';
const IntegrationsScreen = () => {
  const integrationsData = [
    { name: 'Google Calendar', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', connected: false, buttonText: 'Connect', imageUrl: <GoogleCalender/>},
    { name: 'Slack', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', connected: true, buttonText: 'Disconnect', imageUrl: <SlackIcon/> },
    { name: 'Telegram', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', connected: false, buttonText: 'Connect', imageUrl: <TelegramIcon/> },
    { name: 'Mailchimp', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', connected: false, buttonText: 'Connect', imageUrl: <MailchimpIcon/> },
    { name: 'Stripe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', connected: false, buttonText: 'Connect', imageUrl: <Stripe/> }
  ];
  return (
    <div className={styles.right_div_data}>
       <div className={styles.container}>
      {integrationsData.map((item, index) => (
        <div key={index} className={styles.integrationItem}>
          <div className={styles.integrationInfo}>
          {item.imageUrl}
            {/* <img src={item.imageUrl} alt={item.name} className={styles.icon} /> */}
            <div className={styles.textContainer}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.description}>{item.description}</div>
            </div>
          </div>
          <div className={styles.actions}>
            <button className={`${styles.button} ${item.connected ? styles.disconnectButton : styles.connectButton}`}>
              {item.buttonText}
            </button>
            <label className={styles.switch}>
              <input type="checkbox" checked={item.connected} />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default IntegrationsScreen