import React from 'react';
import styles from './Coaches.module.css';
import { CheckIcon, ClockCalender, CrossIcon, DownBlueArrow, Rightarrow } from '../../../public';

const TrainingsCoach = () => {
  const sessions = [
    { day: 'fri', date: '26', time: '02:00 pm - 03:00 pm', backgroundColor: '#FFE0E0', icon: <CrossIcon />, name:'Gabe Woodward',avatar: '/images/profilepic.png', },
    { day: 'Wed', date: '23', time: '02:00 pm - 03:00 pm', backgroundColor: '#E0F7FF', avatar2: '/images/profilepic.png', icon: <ClockCalender/>, name:'Gabe Woodward',avatar: '/images/profilepic.png', },
    { day: 'Thu', date: '17', time: "02:00 pm - 03:00 pm", backgroundColor: '#E0FFE1', icon: <CheckIcon />, name:'Gabe Woodward',avatar: '/images/profilepic.png', },
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
<img src={session.avatar} className={styles.avatarimagee}/>
{session.avatar2 && <img src={session.avatar2} className={styles.avatar2imagee} />}
                  <p style={{ marginLeft: 10 }}>{session.name}</p>
                </div>
                <div className={styles.row}>
                  <div className={styles.time_txt}>{session.time}</div>
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
<img src={session.avatar} className={styles.avatarimagee}/>
{session.avatar2 && <img src={session.avatar2} className={styles.avatar2imagee} />}
                  <p style={{ marginLeft: 10 }}>{session.name}</p>
                </div>
                <div className={styles.row}>
                  <div className={styles.time_txt}>{session.time}</div>
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

export default TrainingsCoach;
