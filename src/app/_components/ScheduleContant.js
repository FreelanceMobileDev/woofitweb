'use client';
import { CalenderIcon, CashIcon, CheckIcon, ClockCalender, ClockIcon, CrossIcon, LeftArrow, PlayIcon, PlusIcon, Rightarrow, } from '../../../public';
import OpticityButton from '../_reuseableComponent/OpicityButton';
import styles from './Login.module.css';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { extendMoment } from 'moment-range';
import NewPayment from '../Popups/NewPayment';
import NewTraining from '../Popups/NewTraining';
import EditTraining from '../Popups/EditTraining';
import Image from 'next/image';
import profilepicture from '../../../public/Images/profilepic.png'
import { getClinent, getTranningSession } from '../../api/helper';

const extendedMoment = extendMoment(moment);
const ScheduleContant = () => {
  const [currentDate, setCurrentDate] = useState(extendedMoment());
  const [selectedDate, setSelectedDate] = useState(extendedMoment());
  const [popupIsOpen, setShowPopup] = useState(false);
  const [newTrainingpop, setNewTrainingpop] = useState(false);
  const [editpopup, seteditpopup] = useState(false);

  const openEditPopup = () => {
    seteditpopup(true);
  };

  const closeEditPopup = () => {
    seteditpopup(false);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const openTraning = () => {
    setNewTrainingpop(true);
  };

  const closeopenTraning = () => {
    setNewTrainingpop(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const centerSelectedDate = () => {
        const selectedElement = document.querySelector(`.${styles.selected}`);
        if (selectedElement) {
          selectedElement.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
      };
      centerSelectedDate();
    }
  }, [selectedDate]);

  const handlePrevWeek = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'weeks'));
  };

  const handleNextWeek = () => {
    setCurrentDate(currentDate.clone().add(1, 'weeks'));
  };

  const handleDateClick = (date) => {
    const formattedDate = date.format('YYYY-MM-DD');
    getTranningSessions(`fromDate=${formattedDate}`)
    setSelectedDate(date);  
  };

  const startOfWeek = currentDate.clone().startOf('isoWeek');
  const endOfWeek = currentDate.clone().endOf('isoWeek');
  const range = extendedMoment.range(startOfWeek, endOfWeek);
  const days = Array.from(range.by('day'));

  const backgroundColor = [
    { id: 0, backgroundColor: '#FFE0E0', icon: <CrossIcon /> },
    { id: 1, backgroundColor: '#E0F7FF', icon: <PlayIcon /> },
    { id: 2, backgroundColor: '#E0FFE1', icon: <CheckIcon /> },
  ]


  function backColor(id) {
    const item = backgroundColor.find(item => item.id === id);
    return item ? item.backgroundColor : "#E0FFE1";
  }

  function backIcon(id) {
    const item = backgroundColor.find(item => item.id === id);
    return item ? item.icon : <CheckIcon />;
  }


  const sessions = [
    { time: '10:00 AM', name: 'Gabe Woodward', backgroundColor: '#FFE0E0', avatar: profilepicture, icon: <CrossIcon /> },
    { time: '11:00 AM', name: 'Academic Team', backgroundColor: '#E0F7FF', avatar: profilepicture, avatar2: profilepicture, icon: <PlayIcon /> },
    { time: '11:20 AM', name: "Samuel O'Brien", backgroundColor: '#E0FFE1', avatar: profilepicture, icon: <CheckIcon /> },
  ];

  const sessionssecond = [
    { time: '11:00 AM', name: 'Academic Team', backgroundColor: '#E0EAFE', avatar: profilepicture, avatar2: profilepicture, icon: <PlayIcon /> },
    { time: '11:20 AM', name: "Samuel O'Brien", backgroundColor: '#E0FFE1', avatar: profilepicture, icon: <CheckIcon /> },
  ];

  const Augestdata = [
    { time: '11:00 AM', name: 'Academic Team', backgroundColor: '#E0F7FF', avatar: profilepicture, icon: <ClockCalender /> },
  ];

  const [getdata, setData] = useState([])
  const [getSession, setSessing] = useState([])
  const [getTranningData, setTranningData] = useState([])

  const getApiClinent = async (data) => {
    try {
      const getData = await getClinent(data)
      setData(getData.data.data.getAllClientData)
    } catch (error) {
      console.log(error, '====error')
    }
  }

  const getTranningSessions = async (data) => {
    try {
      const getData = await getTranningSession(data)
      setSessing(getData?.data?.data?.data)
      const groupedByDateArray = groupDataByDate(getData?.data?.data?.data);
      setTranningData(groupedByDateArray)
      console.log('Grouped Data by Date in Array Format:', groupedByDateArray);
      // setData(getData.data.data.getAllClientData)
    } catch (error) {
      console.log(error, '====error')
    }
  }

  useEffect(() => {
    getApiClinent(0)
    getTranningSessions()
  }, [])


  function convertTo12Hour(time24) {
    const time = moment(time24, 'HH:mm');
    return time.format('h:mm A');
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





  return (
    <div className={styles.DashboardContenttwo}>
      <div className={styles.summarySecedule}>
        <div className={styles.calendarContainer}>
          <div className={styles.headercalender}>
            <div className={styles.monthname}>{currentDate.format('MMMM YYYY')}</div>
            <div className={styles.buttons}>
              <button className={styles.actionButton} onClick={openPopup}>New Payment</button>
              <button className={styles.actionButton} onClick={openTraning}>Schedule a Training</button>
            </div>
          </div>
          <div className={styles.navigation}>
            <div onClick={handlePrevWeek}>
              <LeftArrow />
            </div>
            <div className={styles.weekContainer}>
              {days.map((date) => (
                <div
                  key={date.format('YYYY-MM-DD')}
                  className={`${styles.day} ${date.isSame(selectedDate, 'day') ? styles.selected : ''}`}
                  onClick={() => handleDateClick(date)}
                >
                  <div className={styles.date} style={{ color: date.isSame(selectedDate, 'day') ? 'white' : '#697585' }}>{date.format('D')}</div>
                  <div className={styles.label} style={{ color: date.isSame(selectedDate, 'day') ? 'white' : '#697585' }}>{date.format('ddd')}</div>
                </div>
              ))}
              {/* <div className={styles.calendar_container}>
                <div className={styles.daytwo}>
                  <div className={styles.datetwo}>13</div>
                  <div className={styles.labeltwo}>Mon</div>
                </div>
                <div className={styles.daytwo}>
                  <div className={styles.datetwo}>14</div>
                  <div className={styles.labeltwo}>Tue</div>
                </div>
                <div className={styles.daytwo}>
                  <div className={styles.datetwo}>15</div>
                  <div className={styles.labeltwo}>Wed</div>
                </div>
                <div className={styles.selectedtwo}>
                  <div className={styles.selecteddatetxt}>16</div>
                  <div className={styles.selecteddaytxt}>Thu</div>
                </div>
                <div className={styles.daytwo}>
                  <div className={styles.datetwo}>17</div>
                  <div className={styles.labeltwo}>Fri</div>
                </div>
                <div className={styles.daytwo}>
                  <div className={styles.datetwo}>18</div>
                  <div className={styles.labeltwo}>Sat</div>
                </div>
                <div className={styles.daytwo}>
                  <div className={styles.datetwo}>19</div>
                  <div className={styles.labeltwo}>Sun</div>
                </div>
              </div> */}
            </div>
            <div onClick={handleNextWeek}>
              <Rightarrow />
            </div>
          </div>
        </div>

        {popupIsOpen && <NewPayment show={popupIsOpen} handleClose={closePopup} />}
        {newTrainingpop && <NewTraining show={newTrainingpop} handleClose={closeopenTraning} />}
        {editpopup && <EditTraining show={editpopup} handleClose={closeEditPopup} />}

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
                          (<div className={styles.sessionCard2} >
                            <p style={{ marginBottom: 20, width: 120 }}>{convertTo12Hour(session?.schedule[0]?.startTime)}</p>
                            <div key={index} className={styles.sessionCard} style={{ backgroundColor: backColor(index) }}>
                              <div style={{ display: 'flex', alignItems: 'center', }}>
                                {backIcon(index)}
                                {session?.group.length > 0 ? session?.group[0].clients.map((img) =>
                                  <Image src={img?.clientImage.length > 0 ? img?.clientImage : profilepicture} style={{ borderRadius: 60 }} height={25} width={25} className={styles.avatarimagee} />)
                                  : <Image src={session?.clients[0]?.clientImage} height={25} width={25} className={styles.avatarimagee} />}
                                <p style={{ marginLeft: 10 }}>{session?.group.length > 0 ? session?.group[0]?.name : session?.clients[0]?.name}</p>
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

        {/* <div className={styles.session}>
          <div className={styles.TodayTxtdiv}>
            <span>Today</span>
            <PlusIcon />
          </div>
          <div className={styles.sessionDetails}>
            {getSession.map((session, index) => (
              <>
                {
                  (session?.clients.length > 0 || session?.group.length > 0) &&
                  (<div className={styles.sessionCard2} >
                    <p style={{ marginBottom: 20, width: 120 }}>{convertTo12Hour(session?.schedule[0]?.startTime)}</p>
                    <div key={index} className={styles.sessionCard} style={{ backgroundColor: backColor(index) }}>
                      <div style={{ display: 'flex', alignItems: 'center', }}>
                        {backIcon(index)}
                        {session?.group.length > 0 ? session?.group[0].clients.map((img) =>
                          <Image src={img?.clientImage.length > 0 ? img?.clientImage : profilepicture} style={{ borderRadius: 60 }} height={25} width={25} className={styles.avatarimagee} />)
                          : <Image src={session?.clients[0]?.clientImage} height={25} width={25} className={styles.avatarimagee} />}
                        <p style={{ marginLeft: 10 }}>{session?.group.length > 0 ? session?.group[0]?.name : session?.clients[0]?.name}</p>
                      </div>
                      <Rightarrow />
                    </div>
                  </div>)
                }

              </>
            ))}
          </div>
        </div>

        <div className={styles.session}>
          <div className={styles.TodayTxtdiv}>
            <span>August 18</span>
            <PlusIcon />
          </div>
          <p>No Trainings</p>
        </div>
        <div className={styles.session}>
          <div className={styles.TodayTxtdiv}>
            <span>August 19</span>
            <PlusIcon />
          </div>
          <div className={styles.sessionDetails}>
            {Augestdata.map((session, index) => (
              <div className={styles.sessionCard2} >
                <p style={{ marginBottom: 20, width: 120 }}>{session.time}</p>
                <div key={index} className={styles.sessionCard} style={{ backgroundColor: session.backgroundColor }}>
                  <div style={{ display: 'flex', alignItems: 'center', }}>
                    {session.icon}
                    <Image height={40} width={40} src={session.avatar} className={styles.avatarimagee} />
                    <p style={{ marginLeft: 10 }}>{session.name}</p>
                  </div>
                  <Rightarrow />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.session}>
          <div className={styles.TodayTxtdiv}>
            <span>August 20</span>
            <PlusIcon />
          </div>

          <div className={styles.sessionDetails}>
            {sessionssecond.map((session, index) => (
              <div className={styles.sessionCard2} >
                <p style={{ marginBottom: 20, width: 120 }}>{session.time}</p>
                <div key={index} className={styles.sessionCard} style={{ backgroundColor: session.backgroundColor }}>
                  <div style={{ display: 'flex', alignItems: 'center', }}>
                    {session.icon}
                    <Image height={25} width={25} src={session.avatar} className={styles.avatarimagee} />
                    {session.avatar2 && <Image height={25} width={25} src={session.avatar2} className={styles.avatar2imagee} />}
                    <p style={{ marginLeft: 10 }}>{session.name}</p>
                  </div>
                  <Rightarrow />
                </div>
              </div>
            ))}
          </div>

        </div> */}
      </div>
      <div className={styles.newclientSidebar} style={{ marginTop: 30 }}>
        <div className={styles.space_between}>
          <div />
          {/* <div>Training</div>
          <CrossIcon className={styles.greycrossicon} /> */}
        </div>
        {/* <div className={styles.CalenderIcon_div}>
          <CalenderIcon />
          <div className={styles.calender_date}>
            14 Mar 2022
            <div className={styles.day_monday_txt}>Monday</div>
          </div>
        </div> */}
        {/* <div className={styles.CalenderIcon_div}>
          <ClockIcon />
          <div className={styles.time_txt}>02:30 pm - 04:30 pm</div>
        </div> */}

        <div>
          <div className={styles.clientslist}>
            Clients
          </div>

          {getdata?.map((client, index) => (
            <div key={index} className={styles.newclientItem}>
              <Image height={40} width={40} src={client?.clientImage ? client?.clientImage : profilepicture} alt={profilepicture} className={styles.avatar} />
              <span>{client.name}</span>
            </div>
          ))}

        </div>
        {/* <div className={styles.clientslist}>
          Comment
        </div> */}
        {/* <div>
          Aliquam pulvinar vestibulum blandit. Donec sed nisl libero.
        </div> */}
        {/* <div className={styles.clientslist}>
          Type of Payment
        </div> */}
        {/* <div className={styles.cashIcon_txt}>
          <CashIcon /> <div style={{ marginLeft: 10 }}>Cash</div>
        </div> */}
        {/* <OpticityButton
          style={{ backgroundColor: '#CFF3FD' }}
          txtstyle={{ color: '#14AED1' }}
          name={"Edit"}
          onClick={openEditPopup}
        /> */}
        {/* <OpticityButton
          style={{ backgroundColor: '#FFE6D7' }}
          txtstyle={{ color: '#FE4726' }}
          name={"Cancel"}
        /> */}
      </div>

    </div>

  )
}

export default ScheduleContant