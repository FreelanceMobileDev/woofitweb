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
import { createUpdateTrainingSession, getClinent, getGroupList } from '../../api/helper';
import Loader from '../_components/Loader';
import profilepicture from '../../../public/Images/profilepic.png'
import Image from 'next/image';
import moment from 'moment';
import { toast } from 'react-toastify';
import profileiconn from '../../../public/Images/addProfile@2x.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const validationSchema = Yup.object().shape({
  comment: Yup.string().required("Comment is required"),
});

const OntheDate = ({ handleClose, editTraining }) => {

  const [popupIsOpen, setShowPopup] = useState(false);
  const [groupdata, setgroupdata] = useState(false);
  const [selected, setSelected] = useState(editTraining ? editTraining?.paymentMode : 'cash');
  const [clientDatas, setclientData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectClients, setSelectclients] = useState(editTraining ? editTraining?.clients : []);
  const today = editTraining ? moment(editTraining?.startDate).format('DD MMM YYYY') : moment().format('DD MMM YYYY');
  const [groupDatas, setgroupDatas] = useState([]);
  const [selectdGroup, setSelectedGroup] = useState(editTraining?.group ? editTraining?.group : []);
  
  const parseTime = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const now = new Date();
    now.setHours(hours);
    now.setMinutes(minutes);
    now.setSeconds(0);
    return now;
  };

  const [startTime, setStartTime] = useState(() => {
    const initialStartTime = editTraining?.schedule[0]?.startTime || "00:00";
    return parseTime(initialStartTime);
  });
  const [endTime, setEndTime] = useState(() => {
    const initialEndTime = editTraining?.schedule[0]?.endTime || "23:59";
    return parseTime(initialEndTime);
  });

  const getApiClinent = async (data) => {
    try {
      setLoading(true);
      const getData = await getClinent(data);
      setclientData(getData?.data?.data?.getAllClientData);
    } catch (error) {
      console.log(error, '====error');
    } finally {
      setLoading(false);
    }
  };

  const id = localStorage.getItem("id");
  const groupData = async () => {
    try {
      const response = await getGroupList(id);
      setgroupDatas(response.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!clientDatas.length > 0) {
      getApiClinent(0);
    }
    groupData();
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };
  
  const closegroupPopUp = () => {
    setgroupdata(false);
  };

  function formatTime(date) {
    return moment(date).format('HH:mm');
  }

  const formik = useFormik({
    initialValues: {
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
      recurring: true,
      paymentMode: selected || '',
      clients: [],
      group: [],
      comment: "",
      schedule: [{
        day: moment().format('dddd'),
        startTime: "",
        endTime: "",
        active: true
      }]
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        values.schedule = values.schedule.map(entry => ({
          day: entry.day,
          startTime: formatTime(startTime),
          endTime: formatTime(endTime),
          active: entry.active
        }));
        values.group = selectdGroup?.map((e) => e._id) || [];
        values.clients = selectClients?.map((e) => e?._id) || [];

        if (values.clients.length === 0 && values.group.length === 0) {
          return toast.error("Please select at least one client and one group.");
        }

        const response = editTraining
          ? await createUpdateTrainingSession(values, editTraining._id)
          : await createUpdateTrainingSession(values);

        if (!response.data.success) {
          return toast.error(response.data.message);
        }

        toast.success(response.data.message);
        handleClose();
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'An unexpected error occurred';
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (editTraining) {
      formik.setValues({
        startDate: editTraining?.startDate || "",
        endDate: editTraining?.endDate || "",
        recurring: editTraining?.recurring || "",
        paymentMode: editTraining?.paymentMode || '',
        clients: editTraining?.clients || "",
        group: editTraining?.group || "",
        comment: editTraining?.comment || "",
        schedule: [{
          day: editTraining?.schedule[0]?.day || "",
          startTime: editTraining?.schedule[0]?.startTime || "",
          endTime: editTraining?.schedule[0]?.endTime || "",
          active: editTraining?.schedule[0]?.active || "",
        }]
      });
    }
  }, [editTraining]);

  const handleRomeve = (data) => {
    let filterData = selectClients.filter((e) => e._id !== data);
    setSelectclients(filterData);
  };

  const handleRomeveGroup = (data) => {
    let filterData = selectdGroup.filter((e) => e._id !== data);
    setSelectedGroup(filterData);
  };
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
          <div style={{ paddingLeft: 15 }}>
            {(selectdGroup && selectdGroup.length > 0) || (selectClients && selectClients.length > 0) ?
              <>
                <span
                  onClick={() => selectdGroup.length > 0 ? setgroupdata(true) : setShowPopup(true)}
                  style={{ cursor: "pointer", color: "#14AED1", }}>{selectdGroup.length > 0 ? "Add Group" : "Add Clients"}
                </span>
                <div style={{}}>
                  {selectClients && selectClients.map((item, index) => (
                    <div key={index} style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                      <div>{item.name}</div>
                      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                        <Image width={40} height={40} src={item.clientImage ? item.clientImage : profileiconn} />
                        <div style={{ width: 20 }} />
                        <div onClick={() => handleRomeve(item?._id)} style={{ cursor: "pointer" }} >
                          <CrossIcon style={{ height: 23, width: 23 }} />
                        </div>
                      </div>
                    </div>
                  ))}
                  {selectdGroup && selectdGroup.map((item, index) => (
                    <div key={index} style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                      <div>{item.name}</div>
                      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                        {item.clients.map((e, clientIndex) => (
                          <Image key={clientIndex} width={40} height={40} src={e.clientImage ? e.clientImage : profileiconn} />
                        ))}
                        {/* <Image width={40} height={40} src={item.clientImage ? item.clientImage : profileiconn} />  */}
                        <div style={{ width: 20 }} />
                        <div onClick={() => handleRomeveGroup(item?._id)} style={{ cursor: "pointer" }} >
                          <CrossIcon style={{ height: 23, width: 23 }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
              :
              <>
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
              </>
            }
          </div>

          {/* <div className={styles.row_div} >
            <div style={{ width: "100%" }} >
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
            <div style={{ width: "100%", }}>
            
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
          </div> */}

          <div className={styles.row_div}>
            <div style={{ width: "100%" }}>
              <label>Start</label>
              <DatePicker
                selected={startTime}
                onChange={(time) => {
                  setStartTime(time);
                  if (endTime && time >= endTime) {
                    setEndTime(null);
                  }
                }}
                showTimeSelect
                showTimeSelectOnly
                timeFormat="hh:mm aa"
                timeIntervals={15}
                dateFormat="hh:mm aa"
              />
            </div>
            <div style={{ width: "100%" }}>
              <label>End</label>
              <DatePicker
                selected={endTime}
                onChange={(time) => {
                  if (startTime && time <= startTime) {
                    return;
                  }
                  setEndTime(time);
                }}
                showTimeSelect
                showTimeSelectOnly
                timeFormat="hh:mm aa"
                timeIntervals={15}
                dateFormat="hh:mm aa"
                minDate={startTime}
              />
            </div>
          </div>

          <div className={styles.paymentTypetxt}>Type of Payment</div>
          <div className={styles.row_div} style={{ justifyContent: 'space-between' }}>
            <div className={`${selected === 'cash' ? styles.cashDiv : styles.noncash}`}
              onClick={() => setSelected("cash")}>
              <CashSecondIcon className={selected === 'cash' ? styles.selectedIcon : styles.unselectedIcon} />
              <div className={` ${selected === 'cash' ? styles.Cashtxt : styles.noncashtxt}`}>Cash</div>
            </div>
            <div className={` ${selected === 'card' ? styles.cashDiv : styles.noncash}`}
              onClick={() => setSelected("card")}>
              <NonCashIcon className={selected === 'card' ? styles.selectedIcon : styles.unselectedIcon} />
              <div className={`${selected === 'card' ? styles.Cashtxt : styles.noncashtxt}`}>Non-Cash</div>
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
          {groupdata && <Groups show={groupdata} handleClose={closegroupPopUp} groupDatas={groupDatas} setSelectedGroup={setSelectedGroup} selectdGroup={selectdGroup} />}

        </div>
      </form>
    </>
  )
}

export default OntheDate