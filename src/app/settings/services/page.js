'use client';
import DeshBorad from '../../dashboard/DashCompoent'
import SettingSidebar from '../settingSidebar'
import { Rightarrow } from '../../../../public'
import styles from '../Setting.module.css'
import React, { useEffect, useState } from 'react';
import RateEdit from '../../Popups/RateEdit'
import { getRates } from '../../../api/helper';
import Loader from '../../_components/Loader';

function page() {
  const [popupIsOpen, setShowPopup] = useState(false);
  const [catchId, setCoachId] = useState()
  const [getRetes, setGetRates] = useState([])
  const [rateData,setRateData]= useState()
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      let ddata = localStorage.getItem("id");
      setCoachId(ddata)
    }
  },[])

  const getRateData =async()=>{
    try {
      setLoading(true)
      const resoponse= await getRates(catchId)
       setGetRates(resoponse?.data?.data)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
 
  }
  useEffect(() => {
    if (catchId) {
      getRateData(catchId)
    }
  }, [catchId])



  const openPopup = (data) => {
    setRateData(data)
    setShowPopup(true);
  };

  const closePopup = () => {
    console.log("close popups")
    setShowPopup(false);
    getRateData(catchId)
  };

  console.log(getRetes,'===getRetes')

  return (
    <>
      <DeshBorad>
        <SettingSidebar >
        <Loader loading={loading} />
          <div className={styles.right_div_data}>
            <div className={styles.space_div} style={{ marginTop: 30 }}>
              <div className={styles.total_rate}>{getRetes?.pagination?.totalItems} Rates</div>
              <div className={styles.add_rate} style={{cursor:"pointer"}} onClick={openPopup}>Add Rate</div>
            </div>
            <div style={{ marginTop: 20 }} />
            {   getRetes?.getAllRatesData && getRetes?.getAllRatesData?.map((item, index) => (
              <div key={index} style={{ marginTop: 20 }} className={styles.rates_div} onClick={()=>openPopup(item)}>
                <div className={styles.rate_txtt}>{item.name}</div>
                <div className={styles.row}>
                  <div className={styles.rate_amount}>${item.priceForTraining}</div>
                  <Rightarrow />
                </div>
              </div>
            ))|| "No Data" }
           {popupIsOpen && (
              <RateEdit show={popupIsOpen} handleClose={closePopup} rateData={rateData} catchId={catchId} />
            )} 
            </div>
            
        </SettingSidebar>
      </DeshBorad>
    </>
  )
}

export default page