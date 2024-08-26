'use client';
import React, { useEffect, useState } from 'react';
import { ClockIcon, CrossIcon, GroupIcon, Rightarrow, Userimg } from '../../../public';
import TextWithButton from '../_reuseableComponent/TextWithButton';
import styles from './Popups.module.css';
import Inputfield from '../_reuseableComponent/Inputfield';
import OpticityButton from '../_reuseableComponent/OpicityButton';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { createUpdateTrainingSession, getClinent, getGroupList } from '../../api/helper';
import AddClients from './AddClients';
import Groups from './Groups';
import Image from 'next/image';
import profileiconn from '../../../public/Images/addProfile@2x.png'
import { toast } from 'react-toastify';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Loader from '../_components/Loader';

const ForthePeriod = ({ handleClose, editTraining }) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [popupIsOpen, setShowPopup] = useState(false);
  const [groupdata, setgroupdata] = useState(false);
  const [loading, setLoading] = useState(false);
  const [groupDatas, setgroupDatas] = useState([]);
  const [selectdGroup, setSelectedGroup] = useState(editTraining?.group ? editTraining?.group : []);
  const [selectClients, setSelectclients] = useState(editTraining ? editTraining?.clients : []);
  const [isToggled, setIsToggled] = useState(false);
  const [clientDatas, setclientData] = useState([]);
  const today = editTraining
    ? moment(editTraining?.startDate).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    : moment().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');


  const closePopup = () => {
    setShowPopup(false);
  };

  const closegroupPopUp = () => {
    setgroupdata(false);
  };

  const [toggleStates, setToggleStates] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = false;
      return acc;
    }, {})
  );

  const handleToggle = (day) => {
    const updatedStates = {
      ...toggleStates,
      [day]: !toggleStates[day],
    };
    setToggleStates(updatedStates);
    // Update Formik values
    // formik.setFieldValue('schedule', Formik.values.schedule.map(schedule => 
    //   schedule.day === day
    //     ? { ...schedule, active: updatedStates[day] }
    //     : schedule
    // ));
  };
  const handleToggleeee = () => {
    setIsToggled(!isToggled);
  };

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


  const formik = useFormik({
    initialValues: {
      startDate: today,
      endDate: null,
      recurring: true,
      paymentMode: 'cash',
      clients: [],
      group: [],
      comment: "",
      schedule: editTraining?.schedule || daysOfWeek.map(day => ({
        day,
        startTime: '',
        endTime: '',
        active: false,
      }))
    },
    validationSchema: Yup.object({
      startDate: Yup.date().required('Start date is required'),
      endDate: Yup.date()
        .required('End date is required')
        .test('is-greater', 'End date must be greater than start date', function (endDate) {
          const { startDate } = this.parent;
          return endDate > startDate;
        })
    }),

    onSubmit: async (values) => {
      try {
        // Process group and clients
        setLoading(true);
        let data = {
          paymentMode: values.paymentMode,
          comment: values.comment,
          recurring: values.recurring,
          startDate: moment(values.startDate).format('YYYY-MM-DD'),
          endDate: moment(values.endDate).format('YYYY-MM-DD')
        }
        data.group = selectdGroup?.map((e) => e._id) || [];
        data.clients = selectClients?.map((e) => e?._id) || [];
        // data.schedule = values.schedule.filter((e) => e.active === true);      
        data.schedule = values.schedule
          .filter((e) => e.active === true &&
            moment(e.startTime, moment.ISO_8601, true).isValid() &&
            moment(e.endTime, moment.ISO_8601, true).isValid())
          .map((entry) => ({
            ...entry,
            startTime: moment(entry.startTime).format('HH:mm'),
            endTime: moment(entry.endTime).format('HH:mm')
          }));

        if (data.clients.length === 0 && data.group.length === 0) {
          return toast.error("Please select at least one client or one group.");
        }
        if (data.schedule.length === 0) {
          return toast.error("Please Select Schedule.");
        }

        const response = editTraining
          ? await createUpdateTrainingSession(data, editTraining._id)
          : await createUpdateTrainingSession(data);

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
        startDate: editTraining?.startDate ? moment(editTraining.startDate).toDate() : "",
        endDate: editTraining?.endDate ? moment(editTraining.endDate).toDate() : "",
        recurring: editTraining?.recurring || false,
        paymentMode: editTraining?.paymentMode || '',
        clients: editTraining?.clients || [],
        group: editTraining?.group || [],
        comment: editTraining?.comment || "",
        schedule: daysOfWeek.map((day) => {
          const matchingSchedule = editTraining?.schedule.find((s) => s.day === day);
          const startTime = matchingSchedule?.startTime ? moment(matchingSchedule?.startTime, 'HH:mm').toDate() : '';
          const endTime = matchingSchedule?.endTime ? moment(matchingSchedule?.endTime, 'HH:mm').toDate() : '';

          return {
            day: day,
            startTime: isNaN(startTime) ? '' : startTime,  // Handle invalid time values
            endTime: isNaN(endTime) ? '' : endTime,        // Handle invalid time values
            active: matchingSchedule ? matchingSchedule.active : false
          };
        })
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
    <form onSubmit={formik.handleSubmit}>
      <div>
        {loading && <Loader loading={loading} />}
        <div className={styles.row_div} style={{ padding: 5, justifyContent: 'space-between' }}>
          <div style={{ width: "47%", display: 'flex', flexDirection: 'column', }}>
            <label className={styles.label}>{'Period from'}</label>
            <div className={styles.CalenderDivOuter} >
              <DatePicker
                selected={formik.values.startDate}
                onChange={(startDate) => {
                  formik.setFieldValue('startDate', startDate);
                  formik.setFieldTouched('startDate', true);
                }}
                className={styles.CalenderDiv}
                dateFormat="d MMM yyyy"
                minDate={today}
              />
              {/* <ClockIcon /> */}

              {formik.touched.startDate && formik.errors.startDate ? (
                <div style={{ color: "red", marginLeft: 10 }}>
                  {formik.errors.startDate}
                </div>
              ) : null}

            </div>
          </div>

          <div style={{ width: "47%", display: 'flex', flexDirection: 'column', }}>
            <label className={styles.label}>{'To'}</label>
            <div className={styles.CalenderDivOuter} >
              <DatePicker
                selected={formik.values.endDate}
                onChange={(endDate) => {
                  if (formik.values.endDate && endDate <= formik.values.endDate) {
                    return;
                  }
                  formik.setFieldValue('endDate', endDate);
                }}
                dateFormat="d MMM yyyy"
                minDate={formik.values.startDate ? formik.values.startDate : today}
                className={styles.CalenderDiv}
              />
              {formik.touched.endDate && formik.errors.endDate ? (
                <div style={{ color: "red", marginLeft: 10 }}>
                  {formik.errors.endDate}
                </div>
              ) : null}
              {/* <ClockIcon /> */}

            </div>
          </div>
        </div>

        <div style={{}}>
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
              <div className={styles.row_div} style={{ width: '100%', justifyContent: 'space-between', }}>
                <TextWithButton
                  label={"Select"}
                  LeftIcon={Userimg}
                  RightIcon={Rightarrow}
                  style={{ width: '47%' }}
                  additionalcontainer={styles.TextWithButtonstyle}
                  text={'Client'}
                  onClick={() => setShowPopup(true)}
                />

                <div style={{ width: 35 }} />
                <TextWithButton
                  label={"Select"}
                  // space
                  LeftIcon={GroupIcon}
                  RightIcon={Rightarrow}
                  style={{ width: '50%' }}
                  additionalcontainer={styles.TextWithButtonstyle}
                  text={'Group'}
                  onClick={() => setgroupdata(true)}
                />

              </div>
            </>
          }
        </div>

        <div className={styles.days_of_training_txt}>Days of Training</div>

        {/* start the schedule */}
        {formik.values.schedule.map((daySchedule, index) => (
          <div key={index} className={daySchedule.active ? styles.timer_parent_div : styles.timer_parent_div2}>

            <div className={styles.space_div} style={{ paddingRight: 10, paddingLeft: 10 }}>
              <div className={styles.day}>{daySchedule.day}</div>
              <div className={styles.switchContainer}>
                <div
                  className={`${styles.switchButton} ${daySchedule.active ? styles.on : styles.off}`}
                  onClick={() => {
                    const newSchedule = [...formik.values.schedule];
                    newSchedule[index].active = !newSchedule[index].active;
                    formik.setFieldValue('schedule', newSchedule);
                  }}
                >
                  <div className={styles.switchCircle}></div>
                </div>
              </div>
            </div>
            {daySchedule.active && (
              <>
                <div className={styles.row_div} style={{ padding: 5, justifyContent: 'space-between' }}>
                  <div style={{ width: "47%", display: 'flex', flexDirection: 'column' }}>
                    <label className={styles.label}>Start</label>
                    <div className={styles.CalenderDivOuter}>
                      <DatePicker
                        selected={moment(daySchedule.startTime, 'HH:mm').isValid() ? moment(daySchedule.startTime, 'HH:mm').toDate() : null}
                        onChange={(date) => {
                          const newSchedule = [...formik.values.schedule];
                          newSchedule[index].startTime = date;
                          formik.setFieldValue('schedule', newSchedule);

                          const newScheduleEnd = [...formik.values.schedule];
                          newScheduleEnd[index].endTime = null;
                          formik.setFieldValue('schedule', newScheduleEnd);
                        }}
                        showTimeSelect
                        showTimeSelectOnly
                        timeFormat="hh:mm aa"
                        timeIntervals={15}
                        dateFormat="hh:mm aa"
                        className={styles.CalenderDiv}
                        minDate={moment(daySchedule.startTime, 'HH:mm').toDate()}
                      />
                      <ClockIcon />
                      {formik.touched.schedule?.[index]?.startTime && formik.errors.schedule?.[index]?.startTime ? (
                        <div style={{ color: "red", marginLeft: 10 }}>
                          {formik.errors.schedule[index].startTime}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div style={{ width: "47%", display: 'flex', flexDirection: 'column' }}>
                    <label className={styles.label}>End</label>
                    <div className={styles.CalenderDivOuter}>
                      <DatePicker
                        selected={moment(daySchedule.endTime, 'HH:mm').isValid() ? moment(daySchedule.endTime, 'HH:mm').toDate() : null}
                        onChange={(date) => {
                          if (date && daySchedule.startTime && date <= moment(daySchedule.startTime, 'HH:mm').toDate()) return;
                          const newSchedule = [...formik.values.schedule];
                          newSchedule[index].endTime = date;
                          formik.setFieldValue('schedule', newSchedule);
                        }

                        }
                        showTimeSelect
                        showTimeSelectOnly
                        timeFormat="hh:mm aa"
                        timeIntervals={15}
                        dateFormat="hh:mm aa"
                        className={styles.CalenderDiv}
                        minDate={daySchedule.startTime ? moment(daySchedule.startTime, 'HH:mm').toDate() : null}
                      />

                      <ClockIcon />
                      {formik.touched.schedule?.[index]?.endTime && formik.errors.schedule?.[index]?.endTime ? (
                        <div style={{ color: "red", marginLeft: 10 }}>
                          {formik.errors.schedule[index].endTime}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>
        ))}

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

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <button type='submit' className={styles.SaveButton} style={{ width: "100%", borderWidth: 0, cursor: "pointer" }} txtstyle={{ color: '#FFF' }} >Save</button>
        </div>

        {clientDatas && clientDatas.length > 0 && popupIsOpen && <AddClients show={popupIsOpen} handleClose={closePopup} selectClients={selectClients} setSelectclients={setSelectclients} clientDatas={clientDatas} />}
        {groupdata && <Groups show={groupdata} handleClose={closegroupPopUp} groupDatas={groupDatas} setSelectedGroup={setSelectedGroup} selectdGroup={selectdGroup} />}

      </div>

    </form >
  )
}

export default ForthePeriod