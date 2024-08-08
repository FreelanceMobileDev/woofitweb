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
import { createUpdateTrainingSession, getClinent } from '../../api/helper';
import Loader from '../_components/Loader';
import profilepicture from '../../../public/Images/profilepic.png'
import Image from 'next/image';
import moment from 'moment';
import { toast } from 'react-toastify';


const OntheDate = ({ handleClose }) => {
  const [popupIsOpen, setShowPopup] = useState(false);
  const [groupdata, setgroupdata] = useState(false);
  const [selected, setSelected] = useState('cash');
  const [clientDatas, setclientData] = useState([])
  const [loading, setLoading] = useState(false);
  const [selectClients, setSelectclients] = useState([]);

  const today = moment().format('DD MMM YYYY');
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
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
      recurring: true,
      paymentMode: selected || '',
      clients: [],
      comment: "",
      schedule: [{
        day: moment().format('dddd'),
        startTime: "",
        endTime: "",
        active: true
      }]
    },
    validationSchema :Yup.object({
      // startDate: Yup.date().required('Start date is required'),
      // endDate: Yup.date().required('End date is required'),
      // recurring: Yup.boolean(),
      // paymentMode: Yup.string().required('Payment mode is required'),
      // clients: Yup.array().min(1, 'At least one client is required'),
      comment: Yup.string().max(500, 'Comment cannot exceed 500 characters'),
      schedule: Yup.array().of(
        Yup.object({
          // day: Yup.string().required('Day is required'),
          startTime: Yup.string().required('Start time is required'),
          endTime: Yup.string().required('End time is required'),
          // active: Yup.boolean(),
        })
      ),
    }),

    onSubmit: async (values) => {
      try {
        setLoading(true)
        values.clients = selectClients?.map((e) => e?._id) || [];
        if (values.clients.length === 0 || (values.group && values.group.length === 0)) {
          return toast.error("Please Select Client OR Group");
        }
        values.paymentMode = selected;
        console.log(values, '====values');
        try {
          const response = await createUpdateTrainingSession(values)
          console.log(response.data)
          if(response.data.success==false){
            return toast.error(response.data.message)
          }
          toast.success(response.data.message)
          console.log(response.data)
           handleClose()
        } catch (error) {
          console.log('here is the not aailabel')
          return toast.error(error.response.data.message)
          console.log(error.response.data.message,'===here')
        }finally{
          setLoading(false)
        }
      } catch (error) {
        console.log(error, '====');
      }finally{
        setLoading(false)
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
            text={today}
          />
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
          <div className={styles.row_div} >
            <div style={{width:"100%" }} >
            <Inputfield
              id={"schedule[0].startTime"}
              type={"time"}
              name={'Start'}
              additionalMainDivClassName={styles.TextWithButtonstyle}
              onChange={formik.handleChange}
              value={formik?.values?.schedule[0]?.startTime}
            />
              {formik.touched.schedule?.[0]?.startTime && formik.errors.schedule?.[0]?.startTime ? (
          <div style={{ color: "red", marginLeft: 10 }}>
            {formik.errors.schedule[0].startTime}
          </div>
        ) : null}
            </div>
           
            {/* <TextWithButton
              label={"Start"}
              RightIcon={ClockIcon}
              additionalcontainer={styles.TextWithButtonstyle}
              text={'6:30 pm'}
            /> */}
            {/* <div style={{ width: 30 }} /> */}
            <div  style={{width:"100%" ,}}>
            <Inputfield
              id={"schedule[0].endTime"}
              type={"time"}
              name={'End'}
              additionalMainDivClassName={styles.TextWithButtonstyle}
              onChange={formik.handleChange}
              value={formik?.values?.schedule[0]?.endTime}
            />
            {formik.touched.schedule?.[0]?.endTime && formik.errors.schedule?.[0]?.endTime ? (
          <div style={{ color: "red", marginLeft: 10 }}>
            {formik.errors.schedule[0].endTime}
          </div>
        ) : null}
          </div>
            {/* <TextWithButton
              label={"End"}
              RightIcon={ClockIcon}
              additionalcontainer={styles.TextWithButtonstyle}
              text={'8:30 pm'}
            /> */}

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
          <div>

        
          <Inputfield
            id={"comment"}
            type={"text"}
            name={'Comment'}
            additionalMainDivClassName={styles.comment_div_2}
            onChange={formik.handleChange}
            value={formik?.values?.comment}
          />
           {formik.touched.comment && formik.errors.comment ? (
          <div style={{ color: "red", marginLeft: 10 }}>
            {formik.errors.comment}
          </div>
        ) : null}
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button type='submit' className={styles.SaveButton} style={{ width: "100%", borderWidth: 0, cursor: "pointer" }} txtstyle={{ color: '#FFF' }} >Save</button>
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