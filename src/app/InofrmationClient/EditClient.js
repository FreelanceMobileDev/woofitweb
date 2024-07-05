
'use client';
import React, { useState } from 'react';
import styles from './ClientPage.module.css';
import { CalenderIcon, Coins, Downarrow, LeftArrow, MuscleIcon, PlusIcon } from '../../../public';
import Inputfield from '../_reuseableComponent/Inputfield';
import TextWithButton from '../_reuseableComponent/TextWithButton';
import CreditCard from '../Popups/CreditCard'
const EditClient = ({ setSelectedItem }) => {
  const [popupIsOpen, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (

    <div className={styles.containor}>
      <div className={styles.headerr}>
        <div className={styles.clietdiv}>
          <div onClick={()=>{setSelectedItem('ClientInfo')}} style={{cursor:'pointer'}}>
          <LeftArrow />
          </div>
          <div className={styles.ClientStyle}>Edit Client Profile</div>
        </div>


        <div className={styles.SaveButton}>Save</div>

      </div>
      <div className={styles.main_div__}>
        <div className={styles.left_div_profile}>
          <img
            style={{ height: 107, width: 107 }}
            src='/images/profileee.png'
          />
          <div className={styles.changePhoto}>
            Change Photo
          </div>
        </div>

        <div className={styles.right_div_data}>
          <Inputfield
            name={"Name"}
          />
          <div className={styles.rateAndGoal}>
            <TextWithButton
              label="Date of Birth"
              text="14 Mar 2002"
              RightIcon={CalenderIcon}
              additionalcontainer={styles.rate_input_div}
            />
            <div style={{ width: 80 }} />
            <TextWithButton
              label="Gender"
              text="Male"
              RightIcon={Downarrow}
              additionalcontainer={styles.rate_input_div}
            />
          </div>
          {/* <div className={styles.rateAndGoal}>
            <Inputfield
              name={"Eamil"}
              input_parent_div={styles.email_input}
              inputtxt={styles.email_text}
            />
            <div style={{ width: 30 }} />
          
            <Inputfield
              name={"Phone"}
              input_parent_div={styles.email_input}
              inputtxt={styles.email_text}
              img2
            />

          </div> */}
           <div className={styles.row_div} style={{marginTop:20}}>
                <Inputfield
                            input_parent_div_prop={styles.calender_input}
                            additionalMainDivClassName={styles.additionalMainDiv}
                            additionalinput_field={styles.additionalInputField}
                            inputtxt={styles.invoicenumber}
                            name="Email"
                            placeholder={"michelle.rivera@example.com"}
                        />
                        <div style={{width:40}}/>
                        <Inputfield
                            img2
                            input_parent_div_prop={styles.calender_input}
                            additionalMainDivClassName={styles.additionalMainDiv}
                            additionalinput_field={styles.additionalInputField}
                            inputtxt={styles.invoicenumber}
                            name="Phone"

                        />
                </div>
          <div className={styles.rateAndGoal}>
            <TextWithButton
              label="Rate"
              text="Optimum"
              buttonText="$35"
              LeftIcon={Coins}
              RightIcon={Downarrow}
              additionalcontainer={styles.rate_input_div}
            />
            <div style={{ width: 80 }} />
            <TextWithButton
              label="Training Goal"
              text="Muscle Gain"
              LeftIcon={MuscleIcon}
              RightIcon={Downarrow}
              additionalcontainer={styles.rate_input_div}
            />
          </div>
          <div className={styles.Credit_Card}>Credit Card</div>
          <div className={styles.add_card} onClick={openPopup}>
            <PlusIcon/>
            Add
          </div>
          <Inputfield
            name={"Comment"}
            additionalMainDivClassName={styles.comment_div_2}
          />

        </div>
      </div>
      {popupIsOpen && <CreditCard show={popupIsOpen} handleClose={closePopup} />}
    </div>
  );
};

export default EditClient
