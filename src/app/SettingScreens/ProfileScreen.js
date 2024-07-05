import { CalenderIcon, Downarrow, UploadimgIcon } from '../../../public';
import Inputfield from '../_reuseableComponent/Inputfield';
import TextWithButton from '../_reuseableComponent/TextWithButton';
import styles from './../_components/Login.module.css';
const ProfileScreen = () => {
  return (
    <div className={styles.right_div_data}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 30 }}>
        <img src='/images/profileee.png'
          className={styles.profile_pic_setting}
        />
        <div className={styles.upload_pic_div}>
          <UploadimgIcon />
          <div className={styles.upload_photo_text}>Upload Photo</div>
        </div>
      </div>
      <Inputfield
        name={"Name"}
      />
      {/* <div className={styles.rateAndGoal}>
        <TextWithButton
          label="Date of Birth"
          text="14 Mar 2002"
          additionalcontainer={styles.rate_input_div}
          RightIcon={CalenderIcon}
        />
        <div style={{ width: 80 }} />
        <TextWithButton
          label="Gender"
          text="Male"
          RightIcon={Downarrow}
          additionalcontainer={styles.rate_input_div}
        />
      </div> */}
        <div className={styles.row_div} style={{marginTop: 20 }} >
                        <Inputfield
                            input_parent_div_prop={styles.calender_input}
                            additionalMainDivClassName={styles.additionalMainDiv}
                            additionalinput_field={styles.additionalInputField}
                            inputtxt={styles.invoicenumber}
                            name="Invoice ID"

                        />
                        <div style={{ width: 30 }} />
                        <TextWithButton
                            label={"Date"}
                            RightIcon={CalenderIcon}
                            text={"14 Mar 2002"}
                            props={{ additionalcontainer: styles.calender_input }}
                        />
                    </div>
      <div className={styles.row_div} style={{ marginTop: 20 }}>
        <Inputfield
          input_parent_div_prop={styles.calender_input}
          additionalMainDivClassName={styles.additionalMainDiv}
          additionalinput_field={styles.additionalInputField}
          inputtxt={styles.invoicenumber}
          name="Email"
          placeholder={"michelle.rivera@example.com"}
        />
        <div style={{ width: 40 }} />
        <Inputfield
          img2
          input_parent_div_prop={styles.calender_input}
          additionalMainDivClassName={styles.additionalMainDiv}
          additionalinput_field={styles.additionalInputField}
          inputtxt={styles.invoicenumber}
          name="Amount"

        />
      </div>
      <Inputfield
        name={"Comment"}
        additionalMainDivClassName={styles.comment_div_2}
      />
      <div className={styles.Save_button}>Save</div>
    </div>
  )
}

export default ProfileScreen