import { Coins, Downarrow, MuscleIcon, Rightarrow } from "../../../public";
import PlusGallery from "../../../public/Images/PlusGallery";
import Inputfield from "../_reuseableComponent/Inputfield";
import TextWithButton from "../_reuseableComponent/TextWithButton"
import SelectOption from '../_reuseableComponent/SelectOption'
import styles from './ClientPage.module.css';
import {genderData,experienceOptions,specializationOptions} from '../../util/staticData'

const OverallInfo = ({ info, getRetes }) => {
  console.log(info,'=====info')
  console.log(getRetes,'==11111==getRetes')
  return (
    <div className={styles.container}>
      
      <div className={styles.rateAndGoal}>
          <SelectOption
            label={"Rate"}
            id={"rate"}
            data={getRetes?.getAllRatesData}
            selectedId={info?.clientDetails?.rate?._id}
            RightIcon={Downarrow}
            disabled={true}
          />
        <div style={{ width: 50 }} />

        <SelectOption
            label={"Training Goal"}
            id={"trainingGoal"}
            data={specializationOptions}
            selectedId={info?.clientDetails?.trainingGoal}
            RightIcon={Downarrow}
            disabled={true}
          />
  
        {/* <TextWithButton
          label="Training Goal"
          text={info?.clientDetails?.trainingGoal}
          LeftIcon={MuscleIcon}
          RightIcon={Downarrow}
          additionalcontainer={styles.rate_input_div}
        // value={info?.clientDetails?.trainingGoal}
        /> */}
      </div>
      {/* <div className={styles.commentSection}>
        <label className={styles.label}>Comment</label>
        <textarea className={styles.textarea} placeholder="Your comment here..."></textarea>
    </div> */}
      <Inputfield
        name={"Comment"}
        additionalMainDivClassName={styles.comment_div}
        value={info?.clientDetails?.comment}
        disabled={true}
      />
    </div>
  )
}

export default OverallInfo