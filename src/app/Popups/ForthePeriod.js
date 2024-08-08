'use client';
import React, { useState } from 'react';
import { ClockIcon, GroupIcon, Rightarrow, Userimg } from '../../../public';
import TextWithButton from '../_reuseableComponent/TextWithButton';
import styles from './Popups.module.css';
import Inputfield from '../_reuseableComponent/Inputfield';
import OpticityButton from '../_reuseableComponent/OpicityButton';
import { useFormik } from 'formik';
const ForthePeriod = ({handleClose}) => {
  const formik = useFormik({})
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [isToggled, setIsToggled] = useState(false);
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
  return (
    <div>
      <div className={styles.row_div}>
        <TextWithButton
          label={"Period from"}
          RightIcon={Rightarrow}
          additionalcontainer={styles.TextWithButtonstyle}
          text={'14 Mar 2024'}
        />
        <div style={{ width: 30 }} />
        <TextWithButton
          label={"To"}
          RightIcon={Rightarrow}
          additionalcontainer={styles.TextWithButtonstyle}
          text={'20 Mar 2024'}
        />
      </div>
      <div className={styles.row_div}>
        <TextWithButton
          label={"Select"}
          LeftIcon={Userimg}
          RightIcon={Rightarrow}
          additionalcontainer={styles.TextWithButtonstyle}
          text={'Client'}
        />
        <div style={{ width: 30 }} />
        <TextWithButton
          space
          LeftIcon={GroupIcon}
          RightIcon={Rightarrow}
          additionalcontainer={styles.TextWithButtonstyle}
          text={'Group'}
        />
      </div>
      <div className={styles.days_of_training_txt}>Days of Training</div>
      <div className={styles.timer_parent_div}>
        <div className={styles.space_div} style={{ paddingRight: 10, paddingLeft: 10 }}>
          <div className={styles.day}>Monday</div>
          <div className={styles.switchContainer}>
            <div
              className={`${styles.switchButton} ${isToggled ? styles.on : styles.off}`}
              onClick={handleToggleeee}
            >
              <div className={styles.switchCircle}></div>
            </div>

          </div>
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

      </div>
      {daysOfWeek.map((day) => (
        <div key={day} className={styles.day_div}>
          {day}
          <div className={styles.switchContainer}>
            <div
              className={`${styles.switchButton} ${toggleStates[day] ? styles.on : styles.off}`}
              onClick={() => handleToggle(day)}
            >
              <div className={styles.switchCircle}></div>
            </div>
          </div>
        </div>
      ))}
       <Inputfield
                name={'Comment'}
                additionalMainDivClassName={styles.comment_div_2}
                />
                  <OpticityButton
                onClick={handleClose}
                name={'Save'}
                txtstyle={{color:'#FFF'}}
                    additionalMainDivClassName={styles.SaveButton}
                />
    </div>
  )
}

export default ForthePeriod