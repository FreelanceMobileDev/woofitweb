'use client';
import DeshBorad from "./DashCompoent";
import React, { useEffect, useState } from 'react';
import CheckIcon from '../../../public/Images/CheckIcon';
import ClockCalender from '../../../public/Images/ClockCalender';
import CrossIcon from '../../../public/Images/CrossIcon';
import Downarrow from '../../../public/Images/Downarrow';
import EarningsIcon from '../../../public/Images/EarningsIcon';
import LeftArrow from '../../../public/Images/LeftArrow';
import NewClients from '../../../public/Images/NewClients';
import PlayIcon from '../../../public/Images/PlayIcon';
import PlusIcon from '../../../public/Images/PlusIcon';
import Rightarrow from '../../../public/Images/Rightarrow';
import Sessionsimg from '../../../public/Images/Sessionsimg';
import styles from '../_components/Login.module.css';
import profilepicture from '../../../public/Images/profilepic.png'
import Image from 'next/image'
import { DashboardData, getTranningSession } from "../../api/helper";
import Loader from "../_components/Loader";
import moment from "moment";
import profileiconn from '../../../public/Images/addProfile@2x.png'


const DashContant = () => {
  const newClients = [
    { name: 'Eloise Robinson', avatar: profilepicture },
    { name: 'Franky Williamson', avatar: profilepicture },
    { name: 'Bronson Glass', avatar: profilepicture },
    { name: 'Monroe Benjamin', avatar: profilepicture },
  ];
  const recentActivities = [
    { name: 'Eloise Robinson', action: 'purchased the', item: 'Yearly Subscription', time: '1 hour ago', avatar: profilepicture },
    { name: 'Frank Williamson', action: 'has completed his training.', item: '', time: '2 hours ago', avatar: profilepicture },
    { name: 'Glass Bronson', action: 'has completed his training.', item: '', time: '2 hours ago', avatar: profilepicture },
    { name: 'Monroe Benjamin', action: 'purchased the', item: 'Monthly Subscription', time: '3 hours ago', avatar: profilepicture },
  ];
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false);
  const [getTranningData, setTranningData] = useState([])

  



  const dashbardCountData = async (payload) => {
    try {
      setLoading(true)
      const response = await DashboardData(payload)
      setData(response.data.data)
      // console.log(response.data.data, '===response')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    dashbardCountData()
  }, [])


  function convertTo12Hour(time24) {
    const time = moment(time24, 'HH:mm');
    return time.format('h:mm A');
  }

  const getTranningSessions = async (data) => {
    try {
      setLoading(true)
      const getData = await getTranningSession(data)
      const groupedByDateArray = groupDataByDate(getData?.data?.data?.data);
      setTranningData(groupedByDateArray)
    } catch (error) {
      console.log(error, '====error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getTranningSessions()
  }, [])

  const seletFilter = (period) => {
    let startDate, endDate;
    switch (period) {
      case 'monthly':
        startDate = moment().startOf('month').format('YYYY-MM-DD');
        endDate = moment().endOf('month').format('YYYY-MM-DD');
        break;
      case 'yearly':
        startDate = moment().startOf('year').format('YYYY-MM-DD');
        endDate = moment().endOf('year').format('YYYY-MM-DD');
        break;
      default:
    }
    dashbardCountData(`startDate=${startDate}&endDate=${endDate}`)
  }

  function groupDataByDate(data) {
    const groupedData = {};
    data.forEach(item => {
      const startDate = moment(item.startDate);
      const formattedDate = startDate.format('MMMM D'); // Format like "August 19"

      if (!groupedData[formattedDate]) {
        groupedData[formattedDate] = [];
      }
      groupedData[formattedDate].push(item);
    });

    const resultArray = Object.keys(groupedData).map(date => ({
      date,
      events: groupedData[date]
    }));

    resultArray.sort((a, b) => {
      const today = moment().format('MMMM D');
      if (a.date === today) return -1;
      if (b.date === today) return 1;
      return moment(a.date, 'MMMM D').diff(moment(b.date, 'MMMM D'));
    });

    return resultArray;
  }

  const backgroundColor = [
    { id: 0, backgroundColor: '#FFE0E0', icon: <CrossIcon />, status: "canceled" },
    { id: 1, backgroundColor: '#E0F7FF', icon: <PlayIcon />, status: "pending" },
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
    <DeshBorad >
      <Loader loading={loading} />
      <div className={styles.DashboardContenttwo}>
        <div className={styles.summary}>
          <div className={styles.headerdashboardContent}>
            <div style={{ display: 'flex', alignItems: 'center', }}><LeftArrow /> <h2 className={styles.month_year_txt}>August 2024</h2>
              <Rightarrow />
            </div>

            <div className={styles.dateSelector}>
              <div className={styles.Monthlytxt} onClick={()=>seletFilter("monthly")} >Monthly</div> <Downarrow />
            </div>
          </div>

          <div className={styles.summarydashboard}>
            <div className={styles.summaryCarddashboard} style={{ backgroundColor: '#E3FACF' }}>
              <div className={styles.Total_Earnings_card}>
                <p className={styles.Total_Earnings} style={{ color: '#67C537' }} >Total Earnings</p>
                <EarningsIcon />
              </div>
              <div className={styles.Eraning_price}>${data?.totalEarning}</div>
            </div>
            <div className={styles.summaryCarddashboard} style={{ backgroundColor: '#CFF3FD' }}>
              <div className={styles.Total_Earnings_card}>
                <div className={styles.Total_Earnings} style={{ color: '#14AED1' }} >New Clients</div>
                <NewClients />
              </div>
              <div className={styles.Eraning_price}>{data?.clientsCount}</div>
            </div>
            <div className={styles.summaryCarddashboard} style={{ backgroundColor: '#E0EAFE' }}>
              <div className={styles.Total_Earnings_card}>
                <div className={styles.Total_Earnings} style={{ color: '#5465F0' }} >Sessions</div>
                <Sessionsimg />
              </div>
              <div className={styles.Eraning_price}>{data?.sessionsCount}</div>
            </div>
          </div>

          <div className={styles.upcomingSessions}>
            <h4>Upcoming Sessions</h4>
            <div className={styles.session}>
              {/* <div className={styles.Todayline}>
                <span>Today</span>
                <PlusIcon />
              </div> */}



{
          getTranningData.length > 0 ? getTranningData && getTranningData.map((ele) =>
            <>
              <div className={styles.session}>
                <div className={styles.TodayTxtdiv}>
                  <span>{ele.date == moment().format('MMMM D') ? "Today" : ele.date}</span>
                  <PlusIcon />
                </div>
                <div className={styles.sessionDetails}>
                  {ele?.events?.sort((a, b) => {
                    const startDateA = moment(a?.startDate);
                    const startTimeA = moment(a?.schedule[0]?.startTime, 'HH:mm');
                    const combinedDateTimeA = startDateA.set({
                      hour: startTimeA.hour(),
                      minute: startTimeA.minute(),
                      second: startTimeA.second(),
                      millisecond: startTimeA.millisecond()
                    });

                    const startDateB = moment(b?.startDate);
                    const startTimeB = moment(b?.schedule[0]?.startTime, 'HH:mm');
                    const combinedDateTimeB = startDateB.set({
                      hour: startTimeB.hour(),
                      minute: startTimeB.minute(),
                      second: startTimeB.second(),
                      millisecond: startTimeB.millisecond()
                    });

                    return combinedDateTimeA - combinedDateTimeB;
                  })?.map((session, index) => (
                    <>
                      {
                        (session?.clients.length > 0 || session?.group.length > 0) ?
                          (<div className={styles.sessionCard2}    >
                            <p style={{ marginBottom: 20, width: 120 }}>{convertTo12Hour(session?.schedule[0]?.startTime)}</p>
                            <div key={index} className={styles.sessionCard}
                              style={{ backgroundColor: backColor(session.status), cursor: "pointer" }}
                              onClick={() => editTrainingsession(session)}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', }}>
                                {backIcon(session.status)}
                                {/* {session?.group.length > 0 ? session?.group[0].clients.map((img) =>
                                  <Image src={img?.clientImage.length > 0 ? img?.clientImage : profilepicture} style={{ borderRadius: 60 }} height={25} width={25} className={styles.avatarimagee} />)
                                  : <Image src={session?.clients[0]?.clientImage} height={25} width={25} className={styles.avatarimagee} />} */}
                                <Image src={session?.group.length > 0 ? session?.group[0]?.clientImage || profileiconn : session?.clients[0]?.clientImage || profileiconn} height={25} width={25} className={styles.avatarimagee} />
                                <p style={{ marginLeft: 10 }}>{session?.group.length > 0 ? session?.group[0]?.name : session?.clients[0]?.name}</p>
                                {/* session?.clients[0]?.clientImage */}
                              </div>
                              <Rightarrow />
                            </div>
                          </div>) : <p>No Trainings</p>
                      }
                    </>
                  ))}
                </div>
              </div>
            </>
          ) : <p>No Trainings</p>
        }
            </div>


          </div>
        </div>
        <div className={styles.newclientSidebar}>
          <div className={styles.newClients}>
            <h3>New Clients</h3>
            <ul>
              {newClients.map((client, index) => (
                <li key={index} className={styles.clientItem}>
                  <Image src={client.avatar} height={40} width={40} alt={client.name} className={styles.avatar} />
                  <span>{client.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.recentActivities}>
            <h3>Recent Activities</h3>
            <ul>
              {recentActivities.map((activity, index) => (
                <li key={index} className={styles.activityItem}>
                  <Image src={activity.avatar} height={40} width={40} alt={activity.name} className={styles.avatar} />
                  <div className={styles.activityText}>
                    <span className={styles.clientName}>{activity.name}</span>
                    <span className={styles.actionText}> {activity.action} </span>
                    <span className={styles.itemText}>{activity.item}</span>
                    <div className={styles.timeText}>{activity.time}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </DeshBorad>
  )
}

export default DashContant