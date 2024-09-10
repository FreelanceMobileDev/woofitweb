import React, { useEffect, useState } from 'react';
import styles from './ClientPage.module.css';
import { CashIcon, DownBlueArrow, Rightarrow } from '../../../public';
import CardIcon from '../../../public/Images/CardIcon';
import NewPayment from '../Popups/NewPayment';
import { getClientPayments, getClinent } from '../../api/helper';
import Loader from '../_components/Loader';
import { useSearchParams } from 'next/navigation';
import moment from 'moment';

const Payments = ({ catchId, id,priceForTraining}) => {

  const [popupIsOpen, setShowPopup] = useState(false);
  const [getdata, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [List, setList]= useState([])
  const searchParams = useSearchParams()
  const clientId = searchParams.get('id')
// console.log(clientId,'===-id',id)
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    getClientPayment()
  };

  const getApiClinent = async (data) => {
    try {
      setLoading(true)
      const getData = await getClinent(data)
      setData(getData.data.data.getAllClientData)
    } catch (error) {
      console.log(error, '====error')
    } finally {
      setLoading(false)
    }
  }

  console.log(id,'===id')

const getClientPayment = async()=>{
  const respone =await getClientPayments(`?clientId=${id}`)
  // console.log(respone.data,'===respone')
  setList(respone.data.data.payments)
}


  useEffect(() => {
    getApiClinent(0)
    getClientPayment()
  }, [])

  const sessions = [
    { day: 'fri', date: '26', name: '02:00 pm', icon: <CashIcon /> ,amount:'$45' },
    { day: 'Wed', date: '23', name: '02:00 pm', icon: <CardIcon /> ,amount:'$45'},
    { day: 'Thu', date: '17', name: "02:00 pm", icon: <CardIcon /> ,amount:'$45'},
  ];

  const groupByMonth = (data) => {
    const grouped = data.reduce((acc, item) => {
        const date = moment(item.date);
        const monthYear = date.format('YYYY-MM'); // '2024-09'
        const monthName = date.format('MMMM YYYY'); // 'September 2024'

        if (!acc[monthYear]) {
            acc[monthYear] = { monthName, data: [] };
        }
        acc[monthYear].data.push(item);

        return acc;
    }, {});

    // Convert grouped object to an array of month-wise data
    return Object.values(grouped);
};
// if(List.length>0){
//   const result = groupByMonth(List);
//   console.log(result);
// }

const dateAndTimeFormate=(date,format)=>{
  return moment(date).format(format)
}



  return (
    <div className={styles.measurements}>
      <div className={styles.tabs2}>
        {loading &&  <Loader loading={loading} />}
     
        <button className={`${styles.tab} ${styles.activeTab2}`} onClick={openPopup}>New Payment</button>
        {/* <button className={styles.tab}>22 Aug</button>
        <button className={styles.tab}>10 Aug</button>
        <button className={styles.tab}>28 Jul</button>
        <button className={styles.tab}>12 Jul</button> */}
      </div>
      {popupIsOpen && <NewPayment catchId={catchId} show={popupIsOpen} handleClose={closePopup} id={id} clientData={getdata} priceForTraining={priceForTraining} />}
     
     
     {List && List.length > 0 ? List && groupByMonth(List).map((item, index)=>
    <div className={styles.session} key={index}>
    <div className={styles.Todayline}>
      <span>{item.monthName}</span>
      <div className={styles.row}>
        {/* <div style={{ marginRight: 10 }}>$160</div> */}
        {/* <DownBlueArrow /> */}
      </div>
    </div>

    <div className={styles.sessionDetails}>
      { item.data.map((session, index) => (
        <div className={styles.sessionCard2} >
          <div style={{ width: 110, display: 'flex', alignItems: 'center' }}>
            <div className={styles.date_background}>{dateAndTimeFormate(session.createdAt,'DD')}</div>
            <div>{dateAndTimeFormate(session.createdAt,'ddd')}</div>
          </div>
          <div key={index} className={styles.sessionCard} style={{ backgroundColor: '#6975850D' }}>
            <div style={{ display: 'flex', alignItems: 'center', }}>
              {session.paymentMode=="cash"?<CashIcon />:<CardIcon />}
              <p style={{ marginLeft: 10 }}>{dateAndTimeFormate(session.createdAt,'HH:mm A')}</p>
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
    ):"No Payments Found"}
      




      {/* <div className={styles.session}>
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

      </div> */}
    </div>
  )
}

export default Payments;
