'use client';
import React, { useEffect, useState } from 'react';
import OverallInfo from './OverallInfo';
import Measurements from './Measurements';
import Trainings from './Trainings';
import Payments from './Payments';
import styles from './ClientPage.module.css';
import { ArchivedIcon, CallIcon, LeftArrow, MessageIcon } from '../../../public';
import Image from 'next/image';
import profileiconn from '../../../public/Images/profileee.png'
import { useRouter, useSearchParams } from 'next/navigation';
import { getClientDetails, getRates } from '../../api/helper';
import { formatDOB, calculateAge } from '../../util/common'
import {genderData,experienceOptions,specializationOptions} from '../../util/staticData'


const Clientinformation = ({ setSelectedItem }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [activeTab, setActiveTab] = useState('Overall Info');
  const [catchId, setCoachId] = useState()
  const [getData, setGetData] = useState()
  const [getRetes, setGetRates] = useState([])


  const getClientDetail = async () => {
    const respone = await getClientDetails(id)
    setGetData(respone.data)
  }
  const getRateData = async (catchId) => {
    const response = await getRates(catchId)
    setGetRates(response?.data?.data)
  }

  useEffect(() => {
    getClientDetail()
    if (typeof window !== 'undefined') {
      let ddata = localStorage.getItem("id");
      setCoachId(ddata)
    }
  }, [id])
  useEffect(() => {
    if (catchId) {
      getRateData(catchId)
    }
  }, [catchId])




  return (
    <>
    <div className={styles.containor}>
      <div className={styles.headerr}>
        <div className={styles.clietdiv}>
          <div onClick={() => router.push('/clients')} style={{ cursor: 'pointer' }}>
            <LeftArrow />
          </div>
          <div className={styles.ClientStyle}>Client</div>
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
            src={getData?.clientDetails?.clientImage}
            style={{ borderRadius: 60 }}
          />
          <h1 className={styles.usernamee}>{getData?.clientDetails?.name}</h1>
          <div className={styles.clietdiv}>
            <div className={styles.gender_age}>{calculateAge(getData?.clientDetails?.DOB)} Years old</div>
            <div className={styles.lineee} />
            <div className={styles.gender_age}>{ genderData?.find((ele)=>ele._id==getData?.clientDetails?.gender)?.name }</div>
          </div>
          <div className={styles.clietdiv} style={{ marginTop: 30, marginBottom: 30 }}>
            <div className={styles.callicon_background}><CallIcon /></div>
            <div className={styles.callicon_background}><MessageIcon /></div>
          </div>
          <div className={styles.EditProfilee_buttoon} onClick={() => router.push(`/clients/edit?id=${id}`)}>
            Edit Profile
          </div>
        </div>

        <div className={styles.right_div_data}>

          <div className={styles.tabs}>
            {['Overall Info', 'Measurements', 'Trainings', 'Payments'].map((tab) => (
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
            {activeTab === 'Overall Info' && <OverallInfo info={getData} getRetes={getRetes} />}
            {activeTab === 'Measurements' && <Measurements />}
            {activeTab === 'Trainings' && <Trainings />}
            {activeTab === 'Payments' && <Payments />}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Clientinformation