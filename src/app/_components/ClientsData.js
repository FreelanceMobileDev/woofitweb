"use client"
import { useEffect, useState } from 'react'
import { DeleteIcon, EditIcon, } from '../../../public'
import styles from './Login.module.css'
import { deleteClient, getClinent } from '../../api/helper'
import profilePic from '../../../public/Images/profilepic.png'
import profilepicture from "../../../public/Images/profilepic.png";
import profileiconn from '../../../public/Images/addProfile@2x.png'


import { useRouter } from 'next/navigation'
import { specializationOptions, genderData } from '../../util/staticData'
import Loader from './Loader'

const ClientsData = ({ activeTab ,search}) => {
  const router = useRouter()
  const [getdata, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const getApiClinent = async (data,search) => {
    try {
      if(!search){
        setLoading(true)
      }
      const getData = await getClinent(data,search)
      setData(getData.data.data.getAllClientData)
    } catch (error) {
      console.log(error, '====error')
    } finally {
      setLoading(false)
    }
  }
  useEffect(()=>{
    if(search?.length>0){
      search=`&search=${search}`
      let act = activeTab == "Clients" ? 0 : 1
      getApiClinent(act,search)
    }else{
      activeTabCall()
    }
  },[search])

  useEffect(() => {
    activeTabCall()
  }, [activeTab])

  if (loading) {
    return <Loader loading={loading} />;
  }

  const handleClick = (id) => {
    router.push(`/Clients/clientsInfo?id=${id}`);
  };

  const activeTabCall = () => { 
    if (activeTab === "Clients") {
      getApiClinent(0)
    }
    if (activeTab === "ArchivedClients") {
      getApiClinent(1)
    }
  }


  const DeleteClient = async (id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete?");
      if (confirmed) {
        await deleteClient(id)
        activeTabCall()
      }

    } catch (error) {
      console.log(error, '===error')
    }
  }


  const handleCheckboxChange = (id) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };
  const handleSelectAllChange = () => {
    const newCheckedItems = {};
    if (Object.keys(checkedItems).length !== data.length) {
      data.forEach(item => {
        newCheckedItems[item._id] = true;
      });
    }
    setCheckedItems(newCheckedItems);
  };

  const popup = ({})=>{
    return (
      <div className={styles.groupsContainer}>
         <Loader loading={loading} />
        hello this is  popup
      </div>
    );
  }


  return (
    <div >
      {getdata && getdata?.length == 0 ? (
        <div style={{ height: "67vh" }}>
          Clients Not Found
        </div>)
        :
        (
          <div style={{ height: "67vh" }}>
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
                {getdata && getdata?.map(item => (
                  <>
                    <tr key={item?._id} className={styles.temppp}  >
                      <td><input type="checkbox" checked={!!checkedItems[item?._id]}
                        onChange={() => handleCheckboxChange(item?._id)}
                      /></td>
                      <td><img onClick={() => handleClick(item._id)} src={item?.clientImage ? item?.clientImage : profileiconn.src} alt={profileiconn.src} className={styles?.clientImage} /></td>
                      <td className={styles?.name_client} onClick={() => handleClick(item?._id)} >{item?.name}</td>
                      <td className={styles?.email_client} onClick={() => handleClick(item?._id)} >{item?.email}</td>
                      <td className={styles?.email_client} onClick={() => handleClick(item?._id)} >{item?.rate !== null ? `${item?.rate?.name} $${item?.rate?.priceForTraining}` : "No Name"}</td>
                      <td className={styles?.email_client} onClick={() => handleClick(item?._id)} >{specializationOptions?.find((e) => e?._id == item?.trainingGoal)?.name || "NAN"}</td>
                      <td className={styles?.email_client} onClick={() => handleClick(item?._id)} >{genderData?.find((e) => e?._id == item?.gender)?.name || "NAN"}</td>
                      <td className={styles?.flex_row_div}    >
                        <div onClick={() => router.push(`Clients/edit?id=${item?._id}`)} >
                          <EditIcon className={styles?.actionIcon} />
                        </div>
                        <div style={{ width: 15 }} />
                        <div onClick={() => DeleteClient(item?._id)} >
                          <DeleteIcon className={styles?.actionIcon} />
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}

    </div>
  )
}

export default ClientsData