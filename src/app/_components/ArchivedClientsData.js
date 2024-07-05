
import { ArchivedOUTicon, DeleteIcon, EditIcon, } from '../../../public';
import styles from './Login.module.css';
const ArchivedClientsData = ({setSelectedItem}) => {
    const data = [
        { id: 1, image: '/images/profilepic.png', name: 'Declan Mcgowan', email: 'willie.jennings@example.com', rate: 'Optimum', goal: 'Muscle Gain', gender: 'Female' },
        { id: 2, image: '/images/profilepic.png', name: 'Chris Craig', email: 'tim.jennings@example.com', rate: 'Light', goal: 'Muscle Gain', gender: 'Female' },
        { id: 3, image: '/images/profilepic.png', name: 'Dakota Mullen', email: 'willie.jennings@example.com', rate: 'Max', goal: 'Muscle Gain', gender: 'Male' },
        { id: 1, image: '/images/profilepic.png', name: 'Declan Mcgowan', email: 'willie.jennings@example.com', rate: 'Optimum', goal: 'Muscle Gain', gender: 'Female' },
        { id: 2, image: '/images/profilepic.png', name: 'Chris Craig', email: 'tim.jennings@example.com', rate: 'Light', goal: 'Muscle Gain', gender: 'Female' },
        { id: 3, image: '/images/profilepic.png', name: 'Dakota Mullen', email: 'willie.jennings@example.com', rate: 'Max', goal: 'Muscle Gain', gender: 'Male' },
        { id: 1, image: '/images/profilepic.png', name: 'Declan Mcgowan', email: 'willie.jennings@example.com', rate: 'Optimum', goal: 'Muscle Gain', gender: 'Female' },
        { id: 2, image: '/images/profilepic.png', name: 'Chris Craig', email: 'tim.jennings@example.com', rate: 'Light', goal: 'Muscle Gain', gender: 'Female' },
        { id: 3, image: '/images/profilepic.png', name: 'Dakota Mullen', email: 'willie.jennings@example.com', rate: 'Max', goal: 'Muscle Gain', gender: 'Male' },
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
              <td><img src={item.image} alt={item.name} className={styles.profileImage} /></td>
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