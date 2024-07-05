import { ArchivedIcon, ArchivedOUTicon, DeleteIcon, EditIcon, FilterIcon, SearchIcon } from "../../../public"
import styles from './../_components/Login.module.css';

const ArchivedCoaches = () => {
  const data = [
    { id: 1, image: '/images/profilepic.png', name: 'Declan Mcgowan', email: 'willie.jennings@example.com', goal: '3 Years', rate: 'Health Coach', gender: 'Female' },
    { id: 2, image: '/images/profilepic.png', name: 'Chris Craig', email: 'tim.jennings@example.com', goal: '5 Years', rate: 'Nutrition Specialist', gender: 'Female' },
    { id: 3, image: '/images/profilepic.png', name: 'Dakota Mullen', email: 'willie.jennings@example.com', goal: '7 Years', rate: 'Youth Fitness Specialist', gender: 'Male' },
    { id: 1, image: '/images/profilepic.png', name: 'Declan Mcgowan', email: 'willie.jennings@example.com', goal: '10+ Years', rate: 'Yoga Specialist', gender: 'Female' },
    { id: 2, image: '/images/profilepic.png', name: 'Chris Craig', email: 'tim.jennings@example.com', goal: '3 Years', rate: 'Health Coach', gender: 'Female' },
    { id: 3, image: '/images/profilepic.png', name: 'Dakota Mullen', email: 'willie.jennings@example.com', goal: '3 Years', rate: 'Senior Fitness', gender: 'Male' },
    { id: 1, image: '/images/profilepic.png', name: 'Declan Mcgowan', email: 'willie.jennings@example.com', goal: '3 Years', rate: 'Muscle Gain', gender: 'Female' },
    { id: 2, image: '/images/profilepic.png', name: 'Chris Craig', email: 'tim.jennings@example.com', goal: '3 Years', rate: 'Muscle Gain', gender: 'Female' },
    { id: 3, image: '/images/profilepic.png', name: 'Dakota Mullen', email: 'willie.jennings@example.com', goal: '3 Years', rate: 'Health Coach', gender: 'Male' },
  ];
  return (
    <div style={{backgroundColor:"white"}}>
         <div className={styles.CoachesHeaderdiv}>
        <div className={styles.Coachestxtt} style={{ width: '85%'}}> Archived Coaches</div>
       
     
       
        <div style={{display:'flex',marginLeft:30}}>
        <SearchIcon/>
        <div style={{width:40}}/>
        <FilterIcon/>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody >
          {data.map(item => (
            
            <tr key={item.id} className={styles.temppp} onClick={()=>{setSelectedItem('Coachsinfo')}}>
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

export default ArchivedCoaches