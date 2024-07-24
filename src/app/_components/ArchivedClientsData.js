
import { useEffect, useState } from 'react';
import { ArchivedOUTicon, DeleteIcon, EditIcon, } from '../../../public';
import styles from './Login.module.css';
import { getClinent } from '../../api/helper';
// import Image from 'next/image';
const ArchivedClientsData = ({setSelectedItem}) => {
  const [getdata, setData] = useState()

  const getApiClinent = async () => {
    try {
      const getData = await getClinent(1)
      setData(getData.data.data.getAllClientData)
    } catch (error) {
      console.log(error, '====error')
    }
  }
  useEffect(() => {
    getApiClinent()
  }, [])
  console.log(getdata, '====getdata')
  return (
    <div >
      <table className={styles.table}>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Rate</th>
            <th>Training Goal</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody >
          {getdata&&getdata?.map(item => (
            <>
            <tr className={styles.temppp} onClick={() => { setSelectedItem('ClientInfo') }}  >
              <td><input type="checkbox" /></td>
              <td><img src={item?.clientImage} alt={item?.clientImage} className={styles?.clientImage} /></td>
              <td className={styles?.name_client}>{item?.name}</td>
              <td className={styles?.email_client}>{item?.email}</td>
              <td className={styles?.email_client}>{item?.rate !==null ? item?.rate?.name :"No Name"}</td>
              <td className={styles?.email_client}>{item?.trainingGoal}</td>
              <td className={styles?.email_client}>{item?.gender}</td>
              <td className={styles?.flex_row_div}>
                <EditIcon className={styles?.actionIcon} />
                <div style={{ width: 33 }} />
                <DeleteIcon className={styles?.actionIcon} />
              </td>
            </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ArchivedClientsData