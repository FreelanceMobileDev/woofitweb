'use client';
import { CalenderIcon, CashIcon, CheckIcon, ClockCalender, ClockIcon, CrossIcon, LeftArrow, PlayIcon, PlusIcon, Rightarrow, } from '../../../public';
import OpticityButton from '../_reuseableComponent/OpicityButton';
import styles from './Login.module.css';
import React, { useState,useEffect } from 'react';
import { format, addDays, subDays, addWeeks, subWeeks } from 'date-fns'
import NewPayment from '../Popups/NewPayment';
import NewTraining from '../Popups/NewTraining';
import EditTraining from '../Popups/EditTraining';
import Image from 'next/image';
// 
const ScheduleContant = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
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
        const centerSelectedDate = () => {
            const selectedElement = document.querySelector(`.${styles.selected}`);
            if (selectedElement) {
                selectedElement.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            }
        };
        centerSelectedDate();
    }, [selectedDate]);

 const handlePrevWeek = () => {
        setCurrentDate(subWeeks(currentDate, 1));
    };

    const handleNextWeek = () => {
        setCurrentDate(addWeeks(currentDate, 1));
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const startOfWeek = subDays(currentDate, currentDate.getDay() - 1);
    const endOfWeek = addDays(startOfWeek, 6);
    const days = [];
    for (let date = startOfWeek; date <= endOfWeek; date = addDays(date, 1)) {
        days.push(new Date(date));
    }
  const newClients = [
    { name: 'Eloise Robinson', avatar: '/images/profilepic.png' },
    { name: 'Franky Williamson', avatar: '/images/profilepic.png' },
    { name: 'Bronson Glass', avatar: '/images/profilepic.png' },
  ];
  const sessions = [
    { time: '10:00 AM', name: 'Gabe Woodward', backgroundColor: '#FFE0E0', avatar: '/images/profilepic.png', icon: <CrossIcon /> },
    { time: '11:00 AM', name: 'Academic Team', backgroundColor: '#E0F7FF', avatar: '/images/profilepic.png', avatar2: '/images/profilepic.png', icon: <PlayIcon /> },
    { time: '11:20 AM', name: "Samuel O'Brien", backgroundColor: '#E0FFE1', avatar: '/images/profilepic.png', icon: <CheckIcon /> },
  ];
  const sessionssecond = [
    { time: '11:00 AM', name: 'Academic Team', backgroundColor: '#E0EAFE', avatar: '/images/profilepic.png', avatar2: '/images/profilepic.png', icon: <PlayIcon /> },
    { time: '11:20 AM', name: "Samuel O'Brien", backgroundColor: '#E0FFE1', avatar: '/images/profilepic.png', icon: <CheckIcon /> },
  ];
  const Augestdata = [
    { time: '11:00 AM', name: 'Academic Team', backgroundColor: '#E0F7FF', avatar: '/images/profilepic.png', icon: <ClockCalender /> },
  ];

  return (
    <div className={styles.DashboardContent}>
      <div className={styles.summarySecedule}>
      <div className={styles.calendarContainer}>
            <div className={styles.headercalender}>
                <div className={styles.monthname}>{format(currentDate, 'MMMM yyyy')}</div>
                <div className={styles.buttons}>
                    <button className={styles.actionButton} onClick={openPopup} >New Payment</button>
                    <button className={styles.actionButton} onClick={openTraning}>Schedule a Training</button>
                </div>
            </div>
            <div className={styles.navigation}>
              <div onClick={handlePrevWeek}>
                <LeftArrow/>
                </div>
               
                <div className={styles.weekContainer}>
                    {/* {days.map((date) => (
                        <div
                            key={date}
                            className={`${styles.day} ${date.toDateString() === selectedDate.toDateString() ? styles.selected : ''}`}
                            onClick={() => handleDateClick(date)}
                        >
                            <div className={styles.date} style={{ color: date.toDateString() === selectedDate.toDateString() ? 'white' : '#697585' }}>{format(date, 'd')}</div>
                            <div className={styles.label} style={{ color: date.toDateString() === selectedDate.toDateString() ? 'white' : '#697585' }}>{format(date, 'EEE')}</div>
                        </div>
                    ))} */}
                </div>
                <div onClick={handleNextWeek}>
                  <Rightarrow/>
                </div>
              
            </div>
        </div>

       {popupIsOpen && <NewPayment show={popupIsOpen} handleClose={closePopup} />}

{newTrainingpop&& <NewTraining show={newTrainingpop} handleClose={closeopenTraning}/>}
{/* editpopup */}
{editpopup && <EditTraining show={editpopup} handleClose={closeEditPopup}/> }

        <div className={styles.session}>
          <div className={styles.TodayTxtdiv}>
            <span>Today</span>
            <PlusIcon />
          </div>

          <div className={styles.sessionDetails}>
            {sessions.map((session, index) => (
              <div className={styles.sessionCard2} >
                <p style={{ marginBottom: 20, width: 120 }}>{session.time}</p>
                <div key={index} className={styles.sessionCard} style={{ backgroundColor: session.backgroundColor }}>
                  <div style={{ display: 'flex', alignItems: 'center', }}>
                    {session.icon}
                    <Image src={session.avatar} height={25} width={25} className={styles.avatarimagee} />
                    {session.avatar2 && <Image src={session.avatar2} height={25} width={25} className={styles.avatar2imagee} />}
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
            <span>August 18</span>
            <PlusIcon />
          </div>
          <p>No Trainings</p>
        </div>
        <div className={styles.session}>
          <div className={styles.TodayTxtdiv}>
            <span>August 18</span>
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
            <span>Today</span>
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

        </div>
      </div>
      <div className={styles.newclientSidebar} style={{ marginTop: 30 }}>
        <div className={styles.space_between}>
          <div />
          <div>Training</div>
          <CrossIcon className={styles.greycrossicon} />
        </div>
        <div className={styles.CalenderIcon_div}>
          <CalenderIcon />
          <div className={styles.calender_date}>
            14 Mar 2022
            <div className={styles.day_monday_txt}>Monday</div>
          </div>
        </div>
        <div className={styles.CalenderIcon_div}>
          <ClockIcon />
          <div className={styles.time_txt}>02:30 pm - 04:30 pm</div>
        </div>

        <div>
<div className={styles.clientslist}>
        Clients
        </div>
        
            {newClients.map((client, index) => (
              <div key={index} className={styles.newclientItem}>
                <Image height={40} width={40} src={client.avatar} alt={client.name} className={styles.avatar} />
                <span>{client.name}</span>
              </div>
            ))}
         
          </div>
          <div className={styles.clientslist}>
          Comment
        </div>
        <div>
        Aliquam pulvinar vestibulum blandit. Donec sed nisl libero.
        </div>
        <div className={styles.clientslist}>
        Type of Payment
        </div>
        <div className={styles.cashIcon_txt}>
          <CashIcon/> <div style={{marginLeft:10}}>Cash</div>
        </div>
        <OpticityButton
        style={{backgroundColor:'#CFF3FD'}}
        txtstyle={{color:'#14AED1'}}
        name={"Edit"}
        onClick={openEditPopup}
        />
         <OpticityButton
        style={{backgroundColor:'#FFE6D7'}}
        txtstyle={{color:'#FE4726'}}
        name={"Cancel"}
        />
      </div>
     
    </div>

  )
}

export default ScheduleContant