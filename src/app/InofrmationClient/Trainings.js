import React from 'react';
import styles from './ClientPage.module.css';
import { CheckIcon, ClockCalender, CrossIcon, DownBlueArrow,  Rightarrow } from '../../../public';
import profilepicture from '../../../public/Images/profilepic.png'

const Trainings = () => {
  const sessions = [
    { day: 'fri', date: '26', name: '02:00 pm - 03:00 pm', backgroundColor: '#FFE0E0', icon: <CrossIcon /> },
    { day: 'Wed', date: '23', name: '02:00 pm - 03:00 pm', backgroundColor: '#E0F7FF', avatar2: profilepicture, icon: <ClockCalender /> },
    { day: 'Thu', date: '17', name: "02:00 pm - 03:00 pm", backgroundColor: '#E0FFE1', icon: <CheckIcon /> },
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
            <div style={{ marginRight: 10 }}>4 Trainings</div>
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
              <div key={index} className={styles.sessionCard} style={{ backgroundColor: session.backgroundColor }}>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                  {session.icon}

                  <p style={{ marginLeft: 10 }}>{session.name}</p>
                </div>
                <Rightarrow />
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className={styles.session}>
        <div className={styles.Todayline}>
          <span>July</span>
          <div className={styles.row}>
            <div style={{ marginRight: 10 }}>4 Trainings</div>
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
              <div key={index} className={styles.sessionCard} style={{ backgroundColor: session.backgroundColor }}>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                  {session.icon}

                  <p style={{ marginLeft: 10 }}>{session.name}</p>
                </div>
                <Rightarrow />
              </div>
            </div>
          ))}
          
        </div>

      </div>
    </div>
  )
}

export default Trainings;
