"use client"
import React, { useEffect, useState } from 'react';
import styles from './ClientPage.module.css';
import { CheckIcon, ClockCalender, CrossIcon, DownBlueArrow, PlayIcon, Rightarrow } from '../../../public';
import profilepicture from '../../../public/Images/profilepic.png'
import { useSearchParams } from 'next/navigation';
import { getClientTrainingSession } from '../../api/helper';
import moment from 'moment';
import Loader from '../_components/Loader';

const Trainings = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [trainingData, setTrainingData] = useState([])
  const [loading, setLoading] = useState(false);


  const sessions = [
    { day: 'fri', date: '26', name: '02:00 pm - 03:00 pm', backgroundColor: '#FFE0E0', icon: <CrossIcon /> },
    { day: 'Wed', date: '23', name: '02:00 pm - 03:00 pm', backgroundColor: '#E0F7FF', avatar2: profilepicture, icon: <ClockCalender /> },
    { day: 'Thu', date: '17', name: "02:00 pm - 03:00 pm", backgroundColor: '#E0FFE1', icon: <CheckIcon /> },
  ];

  const getClientSession = async () => {
    try {
      setLoading(true)
      const response = await getClientTrainingSession(id)
      let data = groupDataByMonth(response.data.data.data)
      setTrainingData(data)
    } catch (error) {
      console.log(error, '===error')
    }finally{
      setLoading(false)
    }
  }
  // console.log(trainingData,'===trainingData')

  useEffect(() => {
    getClientSession()
  }, [])

  function groupDataByMonth(data) {
    const groupedData = {};
    data.forEach(item => {
      const startDate = moment(item.startDate);
      const formattedMonth = startDate.format('MMMM'); // Format like "August"

      if (!groupedData[formattedMonth]) {
        groupedData[formattedMonth] = [];
      }
      groupedData[formattedMonth].push(item);
    });

    const resultArray = Object.keys(groupedData).map(month => ({
      month,
      events: groupedData[month]
    }));

    resultArray.sort((a, b) => {
      return moment(a.month, 'MMMM').diff(moment(b.month, 'MMMM'));
    });

    return resultArray;
  }

  const backgroundColor = [
    { id: 0, backgroundColor: '#FFE0E0', icon: <CrossIcon />, status: "canceled" },
    { id: 1, backgroundColor: '#E0F7FF', icon: <ClockCalender />, status: "pending" },
    { id: 2, backgroundColor: '#E0FFE1', icon: <CheckIcon />, status: "complete" },
  ]


  function backColor(id) {
    const item = backgroundColor.find(item => item.status === id);
    return item ? item.backgroundColor : "#E0FFE1";
  }

  function backIcon(id) {
    const item = backgroundColor.find(item => item.status === id);
    return item ? item.icon : <CheckIcon />;
  }




  return (
    <div className={styles.measurements}>
      <div className={styles.tabs2}>
        {/* <button className={`${styles.tab} ${styles.activeTab2}`}>Current</button> */}
        {/* <button className={styles.tab}>22 Aug</button>
        <button className={styles.tab}>10 Aug</button>
        <button className={styles.tab}>28 Jul</button>
        <button className={styles.tab}>12 Jul</button> */}
      </div>
      <Loader loading={loading} />

      { trainingData && trainingData.length > 0 ?  trainingData && trainingData.map((ele) =>
        <div className={styles.session}>
          <div className={styles.Todayline}>
            <span>{ele.month}</span>
            <div className={styles.row}>
              {/* <div style={{ marginRight: 10 }}>4 Trainings</div> */}
              <DownBlueArrow />
            </div>
          </div>
          <div className={styles.sessionDetails}>
            {ele && ele?.events?.map((session, index) => (
              <div className={styles.sessionCard2} >
                <div style={{ width: 110, display: 'flex', alignItems: 'center' }}>
                  <div className={styles.date_background}>{moment(session?.startDate).format('D')}</div>
                  <div>{moment(session.schedule[0]?.day, "ddd").format('ddd')}</div>
                </div>
                <div key={index} className={styles.sessionCard} style={{ backgroundColor: backColor(session.status)  }}>
                  <div style={{ display: 'flex', alignItems: 'center', }}>
                    {backIcon(session.status)}

                    <p style={{ marginLeft: 10 }}>{moment(session.schedule[0]?.startTime, 'HH:mm').format('hh:mm a')} - {moment(session.schedule[0]?.endTime, 'HH:mm').format('hh:mm a')} </p>
                  </div>
                  <Rightarrow />
                </div>
              </div>
            ))}
          </div>
        </div>
      ):"No Training session"}

      {/* <div className={styles.session}>
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

      </div> */}


    </div>
  )
}

export default Trainings;
