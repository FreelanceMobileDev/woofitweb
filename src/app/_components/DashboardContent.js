import Image from 'next/image';
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
import styles from './Login.module.css';

const DashboardContent = () => {
  const newClients = [
    { name: 'Eloise Robinson', avatar: '/images/profilepic.png' },
    { name: 'Franky Williamson', avatar: '/images/profilepic.png' },
    { name: 'Bronson Glass', avatar: '/images/profilepic.png' },
    { name: 'Monroe Benjamin', avatar: '/images/profilepic.png' },
  ];
  const recentActivities = [
    { name: 'Eloise Robinson', action: 'purchased the', item: 'Yearly Subscription', time: '1 hour ago', avatar: '/images/profilepic.png' },
    { name: 'Frank Williamson', action: 'has completed his training.', item: '', time: '2 hours ago', avatar: '/images/profilepic.png' },
    { name: 'Glass Bronson', action: 'has completed his training.', item: '', time: '2 hours ago', avatar: '/images/profilepic.png' },
    { name: 'Monroe Benjamin', action: 'purchased the', item: 'Monthly Subscription', time: '3 hours ago', avatar: '/images/profilepic.png' },
  ];
  const sessions = [
    { time: '10:00 AM', name: 'Gabe Woodward', backgroundColor: '#FFE0E0', avatar: '/images/profilepic.png', icon: <CrossIcon /> },
    { time: '11:00 AM', name: 'Academic Team', backgroundColor: '#E0F7FF', avatar: '/images/profilepic.png', avatar2: '/images/profilepic.png', icon: <PlayIcon /> },
    { time: '11:20 AM', name: "Samuel O'Brien", backgroundColor: '#E0FFE1', avatar: '/images/profilepic.png', icon: <CheckIcon /> },
  ];

  const Augestdata = [
    { time: '11:00 AM', name: 'Academic Team', backgroundColor: '#E0F7FF', avatar: '/images/profilepic.png', icon: <ClockCalender /> },
  ];
  return (
    <div className={styles.DashboardContenttwo}>
      <div className={styles.summary}>
        <div className={styles.headerdashboardContent}>
          <div style={{ display: 'flex', alignItems: 'center', }}><LeftArrow /> <h2 className={styles.month_year_txt}>August 2024</h2>
            <Rightarrow />
          </div>

          <div className={styles.dateSelector}>
            <div className={styles.Monthlytxt}>Monthly hellloooooo</div> <Downarrow />
          </div>
        </div>

        <div className={styles.summarydashboard}>
          <div className={styles.summaryCarddashboard} style={{ backgroundColor: '#E3FACF' }}>
            <div className={styles.Total_Earnings_card}>
              <p className={styles.Total_Earnings} style={{ color: '#67C537' }} >Total Earnings</p>
              <EarningsIcon />
            </div>
            <div className={styles.Eraning_price}>$7,216</div>
          </div>
          <div className={styles.summaryCarddashboard} style={{ backgroundColor: '#CFF3FD' }}>
            <div className={styles.Total_Earnings_card}>
              <div className={styles.Total_Earnings} style={{ color: '#14AED1' }} >New Clients</div>
              <NewClients />
            </div>
            <div className={styles.Eraning_price}>165</div>
          </div>
          <div className={styles.summaryCarddashboard} style={{ backgroundColor: '#E0EAFE' }}>
            <div className={styles.Total_Earnings_card}>
              <div className={styles.Total_Earnings} style={{ color: '#5465F0' }} >Sessions</div>
              <Sessionsimg />
            </div>
            <div className={styles.Eraning_price}>20</div>
          </div>
        </div>

        <div className={styles.upcomingSessions}>
          <h4>Upcoming Sessions</h4>
          <div className={styles.session}>
            <div className={styles.Todayline}>
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
                      {session.avatar2 && <Image height={25} width={25} src={session.avatar2} className={styles.avatar2imagee} />}
                      <p style={{ marginLeft: 10 }}>{session.name}</p>
                    </div>
                    <Rightarrow />
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div className={styles.sessionCardbottomline} />
          <div className={styles.Todayline}>
            <span>August 17</span>
            <PlusIcon />
          </div>
          <div className={styles.sessionDetails}>
            {Augestdata.map((session, index) => (
              <div className={styles.sessionCard2} >
                <p style={{ marginBottom: 20, width: 120 }}>{session.time}</p>
                <div key={index} className={styles.sessionCard} style={{ backgroundColor: session.backgroundColor }}>
                  <div style={{ display: 'flex', alignItems: 'center', }}>
                    {session.icon}
                    <Image src={session.avatar} height={25} width={25} className={styles.avatarimagee} />
                    <p style={{ marginLeft: 10 }}>{session.name}</p>
                  </div>
                  <Rightarrow />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.sessionCardbottomline} />
          <div className={styles.session}>
            <div className={styles.Todayline}>
              <span>August 18</span>
              <PlusIcon />
            </div>
            <p>No Trainings</p>
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
  );
};


export default DashboardContent;
