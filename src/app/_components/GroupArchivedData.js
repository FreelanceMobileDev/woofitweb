import Image from 'next/image';
import {ArchivedOUTicon } from '../../../public'; 
import styles from './Login.module.css';
import profilepicture from '../../../public/Images/profilepic.png'


const groupsData = [
  {
    title: 'Academic Tutors',
    clients: 6,
    images: [profilepicture, profilepicture, profilepicture],
    additionalClients: 3,
  },
  {
    title: 'Teaching Assistants',
    clients: 2,
    images: [profilepicture, profilepicture],
    additionalClients: 0,
  },
  {
    title: 'English Team',
    clients: 6,
    images: [profilepicture, profilepicture, profilepicture],
    additionalClients: 3,
  },
  {
    title: 'Pastoral Staff',
    clients: 6,
    images: [profilepicture, profilepicture, profilepicture],
    additionalClients: 3,
  },
  {
    title: 'Heads Of Year',
    clients: 6,
    images: [profilepicture, profilepicture, profilepicture],
    additionalClients: 3,
  },
  {
    title: 'Heads Of Houses',
    clients: 6,
    images: [profilepicture, profilepicture, profilepicture],
    additionalClients: 3,
  },
];

const GroupItem = ({ title, clients, images, additionalClients }) => {
  return (
    <div className={styles.groupItem}>
    <div className={styles.groupContent}>
      <div className={styles.groupTitle}>{title}</div>
      <div style={{display:'flex',marginTop:25,alignItems: 'center',}}>
      <div className={styles.groupClients}>{clients} Clients</div>
      <div className={styles.groupImages}>
        {/* {images.map((img, index) => (
          // <Image key={index} src={`${img}`} alt={`Client ${index}`} height={30} width={30} className={styles.clientImage} />
        ))} */}
        {additionalClients > 0 && <span className={styles.additionalClients}>+{additionalClients}</span>}
      </div>
    </div>
    </div>
    <div className={styles.groupActions}>
    <ArchivedOUTicon/>
    </div>
  </div>
  );
};

const GroupArchivedData = () => {
  return (
    <div className={styles.groupsContainer}>
    {groupsData.map((group, index) => (
      <GroupItem key={index} {...group} />
    ))}
  </div>
  );
};

export default GroupArchivedData;
