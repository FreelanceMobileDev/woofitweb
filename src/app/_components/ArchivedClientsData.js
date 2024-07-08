
import Image from 'next/image';
import { ArchivedOUTicon, DeleteIcon, EditIcon, } from '../../../public';
import styles from './Login.module.css';
import profilepicture from '../../../public/Images/profilepic.png'

const ArchivedClientsData = () => {
    const data = [
        { id: 1, image: profilepicture, name: 'Declan Mcgowan', email: 'willie.jennings@example.com', rate: 'Optimum', goal: 'Muscle Gain', gender: 'Female' },
        { id: 2, image: profilepicture, name: 'Chris Craig', email: 'tim.jennings@example.com', rate: 'Light', goal: 'Muscle Gain', gender: 'Female' },
        { id: 3, image: profilepicture, name: 'Dakota Mullen', email: 'willie.jennings@example.com', rate: 'Max', goal: 'Muscle Gain', gender: 'Male' },
        { id: 1, image: profilepicture, name: 'Declan Mcgowan', email: 'willie.jennings@example.com', rate: 'Optimum', goal: 'Muscle Gain', gender: 'Female' },
        { id: 2, image: profilepicture, name: 'Chris Craig', email: 'tim.jennings@example.com', rate: 'Light', goal: 'Muscle Gain', gender: 'Female' },
        { id: 3, image: profilepicture, name: 'Dakota Mullen', email: 'willie.jennings@example.com', rate: 'Max', goal: 'Muscle Gain', gender: 'Male' },
        { id: 1, image: profilepicture, name: 'Declan Mcgowan', email: 'willie.jennings@example.com', rate: 'Optimum', goal: 'Muscle Gain', gender: 'Female' },
        { id: 2, image: profilepicture, name: 'Chris Craig', email: 'tim.jennings@example.com', rate: 'Light', goal: 'Muscle Gain', gender: 'Female' },
        { id: 3, image: profilepicture, name: 'Dakota Mullen', email: 'willie.jennings@example.com', rate: 'Max', goal: 'Muscle Gain', gender: 'Male' },
      ];
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
          {data.map(item => (
           
            <tr key={item.id} className={styles.temppp}   >
              <td><input type="checkbox" /></td>
              <td><Image src={item.image} height={40} width={40} alt={item.name} className={styles.profileImage} /></td>
              <td className={styles.name_client}>{item.name}</td>
              <td className={styles.email_client}>{item.email}</td>
              <td className={styles.email_client}>{item.rate}</td>
              <td className={styles.email_client}>{item.goal}</td>
              <td className={styles.email_client}>{item.gender}</td>
              <td className={styles.flex_row_div}>
              <ArchivedOUTicon/>
              </td>
            </tr>
           
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ArchivedClientsData