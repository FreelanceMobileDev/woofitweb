'use client'
import React, { useEffect, useState } from 'react'
import SettingSidebar from '../settingSidebar'
import DeshBorad from '../../dashboard/DashCompoent';
import styles from '../../_components/Login.module.css';
import Image from 'next/image';
import profileiconn from '../../../../public/Images/profileee.png'
import { Attherateimg, CalenderIcon, UploadimgIcon, Userimg } from '../../../../public';
import Inputfield from '../../_reuseableComponent/Inputfield';

function page() {
    const [data, setData] = useState({});

  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem("userData");
      if (storedData) {
        setData(JSON.parse(storedData));
      }
    }
  }, []);


    return (
        <>
            <DeshBorad>
                <SettingSidebar >
                    <div className={styles.right_div_data}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 30 }}>
                            <Image src={data?.image} alt={profileiconn}
                                className={styles.profile_pic_setting}
                                height={107}
                                width={107}
                            />
                            <div className={styles.upload_pic_div}>
                                <UploadimgIcon />
                                <div className={styles.upload_photo_text}>Upload Photo</div>
                            </div>
                        </div>

                        <Inputfield
                            name="Name"
                            type="name" id="name" placeholder="Enter your Name"
                            img1={<Userimg />}
                            value={data?.name}
                        />


                        <Inputfield
                            name="Email"
                            type="email" id="email" placeholder="Enter your Email"
                            img1={<Attherateimg />}
                            value={data?.email}
                        />


                        <Inputfield
                            name={"Phone"}
                            type="number" id="mobileNumber"
                            img2
                            value={data?.mobileNumber}
                        />
                        <div className={styles.Save_button}>Save</div>
                    </div>

                </SettingSidebar>
            </DeshBorad>

        </>
    )
}

export default page