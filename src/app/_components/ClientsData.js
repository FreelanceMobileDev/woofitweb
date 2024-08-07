"use client"
import { useEffect, useState } from 'react'
import { DeleteIcon, EditIcon, } from '../../../public'
import styles from './Login.module.css'
import { getClinent } from '../../api/helper'
import profilePic from '../../../public/Images/profilepic.png'
import { useRouter } from 'next/navigation'
import { specializationOptions ,genderData} from '../../util/staticData'
import Loader from './Loader'

const ClientsData = ({ activeTab}) => {
  const router = useRouter()
  const [getdata, setData] = useState([])
  const [loading, setLoading] = useState(false);

  const getApiClinent = async (data) => {
    try {
      setLoading(true)
      const getData = await getClinent(data)
      setData(getData.data.data.getAllClientData)
    } catch (error) {
      console.log(error, '====error')
    }finally{
      setLoading(false)
    }
  }
  console.log(activeTab)

  useEffect(() => {
    
    if(activeTab === "Clients"){
      getApiClinent(0)
    }else{
      getApiClinent(1)
    }
  }, [activeTab])

  if (loading) {
    return  <Loader loading={loading} />;
  }

  return (
    <div >

       { getdata && getdata?.length == 0 ?(
       <div style={{height:"67vh"}}>
       Clients Not Found
       </div>)
         :
      ( <table className={styles.table}>
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
         { getdata&&getdata?.map(item => (
           <>
           <tr key={item?._id} className={styles.temppp} onClick={() => router.push(`/Clients/clientsInfo?id=${item?._id}`)}  >
             <td><input type="checkbox" /></td>
             <td><img src={item?.clientImage ? item?.clientImage:profilePic.src} alt={profilePic.src} className={styles?.clientImage} /></td>
             <td className={styles?.name_client}>{item?.name}</td>
             <td className={styles?.email_client}>{item?.email}</td>
             <td className={styles?.email_client}>{item?.rate !==null ? item?.rate?.name :"No Name"}</td>
             <td className={styles?.email_client}>{specializationOptions?.find((e)=>e?._id==item?.trainingGoal)?.name||"NAN"}</td>
             <td className={styles?.email_client}>{genderData?.find((e)=>e?._id==item?.gender)?.name||"NAN"}</td>
             <td className={styles?.flex_row_div}  >
               <EditIcon className={styles?.actionIcon} onClick={()=>router.push(`Clients/edit?id=${item_id}`)} />
               <div style={{ width: 33 }} />
               <DeleteIcon className={styles?.actionIcon} />
             </td>
           </tr>
           </>
         ))}
       </tbody>
     </table>
       )}
      
    </div>
  )
}

export default ClientsData