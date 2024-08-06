"use client"
import React, { useEffect, useState } from 'react';
import { CalenderIcon, CashSecondIcon, ClockIcon, CrossIcon, GroupIcon, NonCashIcon, Rightarrow, Userimg } from "../../../public"
import OpticityButton from "../_reuseableComponent/OpicityButton";
import TextWithButton from "../_reuseableComponent/TextWithButton"
import styles from './Popups.module.css';
import Inputfield from '../_reuseableComponent/Inputfield';
import AddClients from './AddClients'
import Groups from './Groups'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { getClinent } from '../../api/helper';
import Loader from '../_components/Loader';
import profilepicture from '../../../public/Images/profilepic.png'
import Image from 'next/image';


const OntheDate = ({ handleClose }) => {
  const [popupIsOpen, setShowPopup] = useState(false);
  const [groupdata, setgroupdata] = useState(false);
  const [selected, setSelected] = useState('cash');
  const [clientDatas, setclientData] = useState([])
  const [loading, setLoading] = useState(false);
  const [selectClients, setSelectclients] = useState([]);

  const getApiClinent = async (data) => {
    try {
      setLoading(true)
      const getData = await getClinent(data)
      setclientData(getData?.data?.data?.getAllClientData)
    } catch (error) {
      console.log(error, '====error')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (!clientDatas.length > 0) {
      getApiClinent(0)
    }
  }, [])

  const closePopup = () => {
    setShowPopup(false);
  };
  const closegroupPopUp = () => {
    setgroupdata(false);
  };

  const dateFormatPattern = /^(\d{1,2})\s([A-Za-z]{3,9})\s(\d{4})$/;
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
      startDate: Yup.string()
        .required('Start date is required')
        .matches(dateFormatPattern, 'Start date must be in the format "12 May 2020"')
        .test('is-valid-date', 'Start date must be a valid date', function (value) {
          if (!value) return false;

          // Split the input value into day, month, and year      const [day, month, year] = value.split(' ');


          const monthIndex = new Date(Date.parse(month + " 1, 2021")).getMonth();


          const date = new Date(year, monthIndex, day);

          return date.getDate() === parseInt(day) &&
            date.getMonth() === monthIndex &&
            date.getFullYear() === parseInt(year);
        }),
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
        .optional()
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


      } catch (error) {
        console.log(error, '====')
      }
    },
  });

  return (
    <>
      <Loader loading={loading} />
      <form onSubmit={formik.handleSubmit} >
        <div>
          <TextWithButton
            label={"Date"}
            RightIcon={Rightarrow}
            additionalcontainer={styles.TextWithButtonstyle}
            text={'14 Mar 2024'}
          />


          {formik.touched.startDate && formik.errors.startDate ? (
            <div style={{ color: 'red' }}>{formik.errors.startDate}</div>
          ) : null}
          <div className={styles.row_div}>

            {selectClients && selectClients.length > 0 ?
              <>
                <span onClick={() => setShowPopup(true)}>Add Clients</span>
                <div style={{ marginTop: 30 }}>
                  {selectClients?.map((item, index) => (
                    <div key={index} className={styles.space_div} style={{ marginBottom: 20, marginTop: 15 }} >
                      <div className={styles.row}>
                        <Image width={40} height={40} src={item.clientImage ? item.clientImage : profilepicture} />
                        <div className={styles.Clientsname} style={{ marginLeft: 16 }}>{item.name}</div>
                      </div>
                      <CrossIcon />
                    </div>
                  ))}
                </div>
              </>
              : <>
                <div className={styles.row_div} style={{ marginRight: 20, width: '100%' }}>
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
              </>}
          </div>
          <div className={styles.row_div} style={{ marginRight: 20 }}>
            <TextWithButton
              label={"Start"}
              RightIcon={ClockIcon}
              additionalcontainer={styles.TextWithButtonstyle}
              text={'6:30 pm'}
            />
            <div style={{ width: 30 }} />
            <TextWithButton
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
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button type='submit' className={styles.SaveButton} style={{ width: "100%", borderWidth: 0  ,cursor:"pointer"}} txtstyle={{ color: '#FFF' }} >Save</button>
          </div>

          {/* <button type='submit' className={styles.SaveButton} >Save</button> */}
          {/* <OpticityButton
            onClick={handleClose}
            name={'Save'}
            txtstyle={{ color: '#FFF' }}
            additionalMainDivClassName={styles.SaveButton}
          /> */}
          {clientDatas && clientDatas.length > 0 && popupIsOpen && <AddClients show={popupIsOpen} handleClose={closePopup} selectClients={selectClients} setSelectclients={setSelectclients} clientDatas={clientDatas} />}
          {groupdata && <Groups show={groupdata} handleClose={closegroupPopUp} />}

        </div>
      </form>
    </>
  )
}

export default OntheDate