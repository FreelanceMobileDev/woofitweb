
'use client';
import React, { useState } from 'react';
import styles from './Coaches.module.css';
import { ArchivedIcon, CallIcon, LeftArrow, MessageIcon } from '../../../public';
import PaymentCoachs from './PaymentCoachs';
import TrainingsCoach from './TrainingsCoach';
import ProfessionalInfo from './ProfessionalInfo';
import Image from 'next/image';
import profileiconn from '../../../public/Images/profileee.png'
import { useRouter } from 'next/navigation';

const Coachsinfo = ({setSelectedItem}) => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('Professional Info');
  return (

    <div className={styles.containor}>
      <div className={styles.headerr}>
        <div className={styles.clietdiv}>
          <div onClick={()=>router.push("/Clients")} style={{cursor:'pointer'}}>
          <LeftArrow />
          </div>
          <div className={styles.ClientStyle}>Coach</div>
        </div>
        <div className={styles.clietdiv}>
          <ArchivedIcon />
          <div className={styles.archive_div}>Add to Archive</div>
        </div>
      </div>
      <div className={styles.main_div__}>
        <div className={styles.left_div_profile}>
          <Image
          height={107} width={107}
            src={profileiconn}
          />
          <h1 className={styles.usernamee}>Eloise Robinson</h1>
          <div className={styles.clietdiv}>
            <div className={styles.gender_age}>36 Years old</div>
            <div className={styles.lineee} />
            <div className={styles.gender_age}>Male</div>
          </div>
          <div className={styles.clietdiv} style={{ marginTop: 30, marginBottom: 30 }}>
            <div className={styles.callicon_background}><CallIcon /></div>
            <div className={styles.callicon_background}><MessageIcon /></div>
          </div>
          <div className={styles.EditProfilee_buttoon}onClick={()=>{router.push('/coaches/editProfile')}}>
            Edit Profile
          </div>
        </div>
        <div className={styles.right_div_data}>
          <div className={styles.tabs}>
            {['Professional Info', 'Trainings', 'Payments'].map((tab) => (
              <div
                key={tab}
                className={activeTab === tab ? styles.activeTab : styles.tabdiv}
                onClick={() => setActiveTab(tab)}
              >
                <div className={activeTab === tab ? styles.activeTabtext : styles.tabtxt}>{tab}</div>
              </div>
            ))}
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'Professional Info' && <ProfessionalInfo />}
            {activeTab === 'Trainings' && <TrainingsCoach />}
            {activeTab === 'Payments' && <PaymentCoachs />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coachsinfo