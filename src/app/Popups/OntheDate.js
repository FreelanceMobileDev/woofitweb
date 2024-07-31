"use client"
import React, { useState } from 'react';
import { CalenderIcon, CashSecondIcon, ClockIcon, GroupIcon, NonCashIcon, Rightarrow, Userimg } from "../../../public"
import OpticityButton from "../_reuseableComponent/OpicityButton";
import TextWithButton from "../_reuseableComponent/TextWithButton"
import styles from './Popups.module.css';
import Inputfield from '../_reuseableComponent/Inputfield';
import AddClients from './AddClients'
import Groups from './Groups'
import { useFormik } from 'formik';
import * as Yup from "yup";

const OntheDate = ({ handleClose }) => {
  const [popupIsOpen, setShowPopup] = useState(false);
  const [groupdata, setgroupdata] = useState(false);
  const [selected, setSelected] = useState('cash');

  const closePopup = () => {
    setShowPopup(false);
  };
  const closegroupPopUp = () => {
    setgroupdata(false);
  };


  const formik = useFormik({
    initialValues: {
      startDate: "",
      endDate: "",
      recurring: true,
      clients: "",
      comment: "",
      schedule: [{
        "day": "",
        "startTime": "",
        "endTime": "",
        "active": true
      }]
    },
    validationSchema: Yup.object({
      startDate: Yup.date()
        .required('Start date is required')
        .nullable()
        .typeError('Start date must be a valid date'),
      endDate: Yup.date()
        .required('End date is required')
        .nullable()
        .typeError('End date must be a valid date')
        .min(Yup.ref('startDate'), 'End date must be after start date'),
      recurring: Yup.boolean()
        .required('Recurring is required'),
      clients: Yup.string()
        .required('Clients field is required'),
      comment: Yup.string()
        .optional() // Or .required('Comment is required') if it should be required
        .max(500, 'Comment cannot exceed 500 characters'),
      schedule: Yup.array().of(
        Yup.object({
          day: Yup.string()
            .required('Day is required')
            .oneOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 'Invalid day'),
          startTime: Yup.string()
            .required('Start time is required')
            .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Start time must be in HH:mm format'),
          endTime: Yup.string()
            .required('End time is required')
            .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'End time must be in HH:mm format'),
          active: Yup.boolean()
            .required('Active status is required')
        })
      )
    }),
    onSubmit: async (values) => {
      try {
        console.log(values, '====values')
        // const response = await login(values);
        // if (response?.data?.success === false) {
        //     setErrormsg(response?.data)
        // }
        // localStorage.setItem("token",response.data.data.token)
        // localStorage.setItem("id",response.data.data._id)
        // localStorage.setItem("userData",JSON.stringify(response.data.data))
        // router.push('/dashboard')
      } catch (error) {
        console.log(error, '====')
      }
    },
  });


  return (
    <>
      <form onSubmit={formik.handleSubmit} >
        <div>
          <Inputfield
            type={"date"}
            label={"Date"}
            RightIcon={CalenderIcon}
            additionalcontainer={styles.TextWithButtonstyle}
            text={'14 Mar 2002'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
          <div className={styles.row_div}>
            <TextWithButton
              label={"Select"}
              LeftIcon={Userimg}
              RightIcon={Rightarrow}
              additionalcontainer={styles.TextWithButtonstyle}
              text={'Client'}
              onClick={() => setShowPopup(true)}
            />
            <div style={{ width: 30 }} />
            <TextWithButton
              space
              LeftIcon={GroupIcon}
              RightIcon={Rightarrow}
              additionalcontainer={styles.TextWithButtonstyle}
              text={'Group'}
              onClick={() => setgroupdata(true)}
            />
          </div>
          <div className={styles.row_div}>
            <Inputfield
              type={"time"}
              label={"Start"}
              RightIcon={ClockIcon}
              additionalcontainer={styles.TextWithButtonstyle}
              text={'6:30 pm'}
            />
            <div style={{ width: 30 }} />
            <Inputfield
              type={"time"}
              label={"End"}
              RightIcon={ClockIcon}
              additionalcontainer={styles.TextWithButtonstyle}
              text={'8:30 pm'}
            />
          </div>
          <div className={styles.paymentTypetxt}>Type of Payment</div>
          <div className={styles.row_div} style={{ justifyContent: 'space-between' }}>
            <div className={`${selected === 'cash' ? styles.cashDiv : styles.noncash}`}
              onClick={() => setSelected("cash")}>
              <CashSecondIcon className={selected === 'cash' ? styles.selectedIcon : styles.unselectedIcon} />
              <div className={` ${selected === 'cash' ? styles.Cashtxt : styles.noncashtxt}`}>Cash</div>
            </div>
            <div className={` ${selected === 'noncash' ? styles.cashDiv : styles.noncash}`}
              onClick={() => setSelected("noncash")}>
              <NonCashIcon className={selected === 'noncash' ? styles.selectedIcon : styles.unselectedIcon} />
              <div className={`${selected === 'noncash' ? styles.Cashtxt : styles.noncashtxt}`}>Non-Cash</div>
            </div>
          </div>
          <Inputfield
            id={"comment"}
            name={'Comment'}
            additionalMainDivClassName={styles.comment_div_2}
          />

          <button type='submit' className={styles.SaveButton} >Save</button>
          {/* <OpticityButton
            onClick={handleClose}
            name={'Save'}
            txtstyle={{ color: '#FFF' }}
            additionalMainDivClassName={styles.SaveButton}
          /> */}
          {popupIsOpen && <AddClients show={popupIsOpen} handleClose={closePopup} />}
          {groupdata && <Groups show={groupdata} handleClose={closegroupPopUp} />}

        </div>
      </form>
    </>
  )
}

export default OntheDate