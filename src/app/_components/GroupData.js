
'use client';
import { useEffect, useState } from 'react';
import { EditIcon, DeleteIcon } from '../../../public'; // Adjust the import paths accordingly
import styles from './Login.module.css';
import GroupEdit from '../Popups/GroupEdit'
import { getGroupList } from '../../api/helper';
import Image from 'next/image'


const GroupItem = ({ name,title, clients, images, additionalClients, }) => {
  console.log(name,'====name')
  const [popupIsOpen, setShowPopup] = useState(false);
  
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className={styles.groupItem}>
      <div className={styles.groupContent}>
        <div className={styles.groupTitle}>{name}</div>
        <div style={{ display: 'flex', marginTop: 25, alignItems: 'center', }}>
          <div className={styles.groupClients}>{clients?.length} Clients</div>
          <div className={styles.groupImages}>
            {clients && clients?.map((img, index) => (
              <img key={index} src={`${img.clientImage ? img.clientImage :"/images/profilepic.png"}`}  alt={`/images/profilepic.png`} className={styles.clientImage} />
            ))}
            {/* {additionalClients > 0 && <span className={styles.additionalClients}>+{additionalClients}</span>} */}
          </div>
        </div>
      </div>
      <div className={styles.groupActions}>
        <div onClick={openPopup}>
          <EditIcon className={styles.actionIcon} />
        </div>
        <div style={{ width: 20 }} />
        <div>
          <DeleteIcon className={styles.actionIcon} />
        </div>
      </div>
      {popupIsOpen && <GroupEdit show={popupIsOpen} handleClose={closePopup} />}
    </div>
  );
};

const GroupData = () => {
  const [getdata, setData] = useState()
  const getApiGroup = async () => {
    try {
      const id = localStorage.getItem("id")
      const getData = await getGroupList(id)
      console.log(getData.data.data.data, '====here=======>>>>>>>>>>>>')
      setData(getData.data.data.data)
    } catch (error) {
      console.log(error, '====error')
    }
  }
  useEffect(() => {
    getApiGroup()

  }, [])

  return (
    <div className={styles.groupsContainer}>
      {getdata && getdata?.map((group, index) => (
        <GroupItem key={index} {...group} />
      ))}

    </div>
  );
};

export default GroupData;
