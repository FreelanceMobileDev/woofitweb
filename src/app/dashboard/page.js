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
import { DashboardData, getClinent, getTranningSession } from "../../api/helper";
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
  const [clientList, setClientList] = useState([])


  const getApiClinent = async (data, search) => {
    try {
      setLoading(true)
      const getData = await getClinent(data, search)
      setClientList(getData.data.data.getAllClientData)
    } catch (error) {
      console.log(error, '====error')
    } finally {
      setLoading(false)
    }
  }


  const dashbardCountData = async (payload="") => {
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
    getApiClinent(0)
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
    // console.log(period,'==period')
    let startDate, endDate;
    switch (period) {
      case 'All':
        return dashbardCountData()
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
            <div style={{ display: 'flex', alignItems: 'center', }}><LeftArrow /> <h2 className={styles.month_year_txt}>{moment().format('MMMM YYYY')}</h2>
              <Rightarrow />
            </div>

            <div className={styles.dateSelector}>
              <select className={styles.Monthlytxt} style={{ border: "none" }} onChange={(e) => seletFilter(e.target.value)} >
                <option value={"All"}>All</option>
                <option value={"monthly"}>Monthly</option>
                <option value={"yearly"} >Yearly</option>
              </select>
            </div>
          </div>

          <div className={styles.summarydashboard}>
            <div className={styles.summaryCarddashboard} style={{ backgroundColor: '#E3FACF' }}>
              <div className={styles.Total_Earnings_card}>
                <p className={styles.Total_Earnings} style={{ color: '#67C537' }} >Total Earnings</p>
                <EarningsIcon />
              </div>
              <div className={styles.Eraning_price}>${data?.Earning}</div>
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
                                      {session.group.length > 0 ?
                                        session?.group[0]?.clients.map((e) =>
                                          <Image src={e.clientImage || profileiconn} height={25} width={25} className={styles.avatarimagee} style={{ borderRadius: 60 }} />
                                        )
                                        :
                                        <Image src={session?.clients[0]?.clientImage || profileiconn} height={25} width={25} className={styles.avatarimagee} style={{ borderRadius: 60 }} />
                                      }
                                      {/* <Image src={session?.group.length > 0 ? session?.group[0]?.clientImage || profileiconn : session?.clients[0]?.clientImage || profileiconn} height={25} width={25} className={styles.avatarimagee} style={{borderRadius:60}} /> */}
                                      <p style={{ marginLeft: 10 }}>{session?.group.length > 0 ? session?.group[0]?.name : session?.clients[0]?.name}</p>
                                    </div>
                                    <Rightarrow />
                                  </div>
                                </div>) : <div style={{ height: "67vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  No Data
                                </div>
                            }
                          </>
                        ))}
                      </div>
                    </div>
                  </>
                ) : <div style={{ height: "67vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  No Data
                </div>
              }
            </div>


          </div>
        </div>
        <div className={styles.newclientSidebar}>

          {clientList.length > 0 &&
            <div className={styles.newClients}>
              <h3>New Clients</h3>
              <ul>
                {clientList.length > 0 && clientList.map((client, index) => (
                  <li key={index} className={styles.clientItem}>
                    {client.clientImage ?
                      <Image src={client.clientImage} height={40} width={40} alt={client.name} className={styles.avatar} /> :
                      <Image src={profileiconn} height={40} width={40} alt={client.name} className={styles.avatar} />
                    }
                    <span>{client.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
          {
            clientList && clientList.length > 0 &&
            <div className={styles.recentActivities}>
              <h3>Recent Activities</h3>
              <ul>
                {clientList && clientList.length > 0 && clientList.map((activity, index) => (
                  <li key={index} className={styles.activityItem}>
                    {activity.clientImage ?
                      <Image src={activity?.clientImage} height={40} width={40} alt={activity?.name} className={styles.avatar} /> :
                      <Image src={profileiconn} height={40} width={40} alt={activity?.name} className={styles.avatar} />
                    }
                    <div className={styles.activityText}>
                      <span className={styles.clientName}>{activity?.name}</span>
                      <span className={styles.actionText}> {recentActivities[index]?.action} </span>
                      <span className={styles.itemText}>{recentActivities[index]?.item}</span>
                      <div className={styles.timeText}>{recentActivities[index]?.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
      </div>

    </DeshBorad>
  )
}

export default DashContant