"use client"
import Image from 'next/image';
import { Attherateimg, CalenderIcon, UploadimgIcon, Userimg } from '../../../public';
import Inputfield from '../_reuseableComponent/Inputfield';
import TextWithButton from '../_reuseableComponent/TextWithButton';
import styles from './../_components/Login.module.css';
import profileiconn from '../../../public/Images/profileee.png'
import { useEffect, useState } from 'react';

const ProfileScreen = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("userData")))
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("userData")))
  }, [])
  console.log(data, '===data')
  return (
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

      {/* <Inputfield
        name={"Name"}
        value={data?.name}
      />
       <Inputfield
          input_parent_div_prop={styles.calender_input}
          additionalMainDivClassName={styles.additionalMainDiv}
          additionalinput_field={styles.additionalInputField}
          inputtxt={styles.invoicenumber}
          name="Email"
          placeholder={"michelle.rivera@example.com"}
          value={data?.email}
        />
     
     <Inputfield
          img2
          input_parent_div_prop={styles.calender_input}
          additionalMainDivClassName={styles.additionalMainDiv}
          additionalinput_field={styles.additionalInputField}
          inputtxt={styles.invoicenumber}
          name="Phone"
          value={data?.mobileNumber}

        /> */}
      <div className={styles.row_div} style={{ marginTop: 20 }} >
        {/* <Inputfield
          input_parent_div_prop={styles.calender_input}
          additionalMainDivClassName={styles.additionalMainDiv}
          additionalinput_field={styles.additionalInputField}
          inputtxt={styles.invoicenumber}
          name="Invoice ID"
        /> */}
        <div style={{ width: 30 }} />
        {/* <TextWithButton
          label={"Date"}
          RightIcon={CalenderIcon}
          text={"14 Mar 2002"}
          props={{ additionalcontainer: styles.calender_input }}
        /> */}
      </div>
      <div className={styles.row_div} style={{ marginTop: 20 }}>
        {/* <Inputfield
          input_parent_div_prop={styles.calender_input}
          additionalMainDivClassName={styles.additionalMainDiv}
          additionalinput_field={styles.additionalInputField}
          inputtxt={styles.invoicenumber}
          name="Email"
          placeholder={"michelle.rivera@example.com"}
          value={data?.email}
        /> */}
        <div style={{ width: 40 }} />
        {/* <Inputfield
          img2
          input_parent_div_prop={styles.calender_input}
          additionalMainDivClassName={styles.additionalMainDiv}
          additionalinput_field={styles.additionalInputField}
          inputtxt={styles.invoicenumber}
          name="Phone"
          value={data?.mobileNumber}

        /> */}
      </div>
      {/* <Inputfield
        name={"Comment"}
        additionalMainDivClassName={styles.comment_div_2}
      /> */}
      <div className={styles.Save_button}>Save</div>
    </div>
  )
}

export default ProfileScreen