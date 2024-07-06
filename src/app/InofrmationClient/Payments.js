

import React from 'react';
import styles from './ClientPage.module.css';
import { CashIcon, DownBlueArrow, Rightarrow } from '../../../public';
import CardIcon from '../../../public/Images/CardIcon';

const Payments = () => {
  const sessions = [
    { day: 'fri', date: '26', name: '02:00 pm', icon: <CashIcon /> ,amount:'$45' },
    { day: 'Wed', date: '23', name: '02:00 pm', icon: <CardIcon /> ,amount:'$45'},
    { day: 'Thu', date: '17', name: "02:00 pm", icon: <CardIcon /> ,amount:'$45'},
  ];
  return (


    <div className={styles.measurements}>
      <div className={styles.tabs2}>
        <button className={`${styles.tab} ${styles.activeTab2}`}>Current</button>
        <button className={styles.tab}>22 Aug</button>
        <button className={styles.tab}>10 Aug</button>
        <button className={styles.tab}>28 Jul</button>
        <button className={styles.tab}>12 Jul</button>
      </div>
      <div className={styles.session}>
        <div className={styles.Todayline}>
          <span>August</span>
          <div className={styles.row}>
            <div style={{ marginRight: 10 }}>$160</div>
            <DownBlueArrow />
          </div>

        </div>

        <div className={styles.sessionDetails}>
          {sessions.map((session, index) => (
            <div className={styles.sessionCard2} >
              <div style={{ width: 110, display: 'flex', alignItems: 'center' }}>
                <div className={styles.date_background}>{session.date}</div>
                <div>{session.day}</div>
              </div>
              <div key={index} className={styles.sessionCard} style={{ backgroundColor: '#6975850D' }}>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                  {session.icon}

                  <p style={{ marginLeft: 10 }}>{session.name}</p>
                </div>
                <div className={styles.row}>
                  <div className={styles.amount_txt}>{session.amount}</div>
                  <Rightarrow />
                </div>
              
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className={styles.session}>
        <div className={styles.Todayline}>
          <span>July</span>
          <div className={styles.row}>
            <div style={{ marginRight: 10 }}>$160</div>
            <DownBlueArrow />
          </div>

        </div>

        <div className={styles.sessionDetails}>
          {sessions.map((session, index) => (
            <div className={styles.sessionCard2} >
              <div style={{ width: 110, display: 'flex', alignItems: 'center' }}>
                <div className={styles.date_background}>{session.date}</div>
                <div>{session.day}</div>
              </div>
              <div key={index} className={styles.sessionCard} style={{ backgroundColor: '#6975850D' }}>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                  {session.icon}

                  <p style={{ marginLeft: 10 }}>{session.name}</p>
                </div>
                <div className={styles.row}>
                  <div className={styles.amount_txt}>{session.amount}</div>
                  <Rightarrow />
                </div>
              </div>
            </div>
          ))}
          
        </div>

      </div>
    </div>
  )
}

export default Payments;
