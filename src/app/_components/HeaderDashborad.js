"use client"
 import Image from 'next/image';
import Notificationimg from '../../../public/Images/Notificationimg';
import Searchimg from '../../../public/Images/Searchimg';
// import Inputfield from '../_reuseableComponent/Inputfield';
import styles from './Login.module.css';
import profilepicture from '../../../public/Images/profilepic.png'
import profileiconn from '../../../public/Images/addProfile@2x.png'

import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {
  useAuth()
  const  [data,setData] = useState()

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      let ddata = JSON.parse(localStorage.getItem("userData"));
      setData(ddata)
    }
  },[])

  return (
    <header className={styles.header}>
      <ToastContainer />
      <div style={{width:'30%',}}>
      {/* <Inputfield
      img1={<Searchimg/>}
      type="text" placeholder="Search Users"
      additionalMainDivClassName={styles.searchinput}
  additionalinput_field={styles.searchtxt}
      /> */}
    <div className={styles.searchContainer}>
    <Searchimg/> 
      <input type="text" placeholder="Search Users" className={styles.searchInput} />
    </div>
       
     </div>
      <div className={styles.userInfo}>
        <Image height={40} width={40} src={data?.image ?data?.image :profileiconn.src} alt=''  className={styles.avatar} />
        <span className={styles.hellousername}>Hello {data?.name}!</span>
        <Notificationimg
        className={styles.Notificationimg}
        />
      </div>
    </header>
  );
};

export default Header;
