import { Coins, Downarrow, MuscleIcon, Rightarrow } from "../../../public";
import PlusGallery from "../../../public/Images/PlusGallery";
import Inputfield from "../_reuseableComponent/Inputfield";
import TextWithButton from "../_reuseableComponent/TextWithButton"
import styles from './ClientPage.module.css';
const OverallInfo = () => {
  return (
    <div className={styles.container}>
   <TextWithButton 
                label="Balance" 
                text="3 Trainings" 
                buttonText="$80" 
                RightIcon={Downarrow} 
                RightBox={PlusGallery}
            />
    <div className={styles.rateAndGoal}>
    <TextWithButton 
                    label="Rate" 
                    text="Optimum" 
                    buttonText="$35" 
                    LeftIcon={Coins}
                    RightIcon={Downarrow} 
                    additionalcontainer={styles.rate_input_div}
                />
             <div style={{width:50}}/>
                <TextWithButton 
                    label="Training Goal" 
                    text="Muscle Gain" 
                    LeftIcon={MuscleIcon}
                    RightIcon={Downarrow} 
                    additionalcontainer={styles.rate_input_div}
                />
    </div>
    {/* <div className={styles.commentSection}>
        <label className={styles.label}>Comment</label>
        <textarea className={styles.textarea} placeholder="Your comment here..."></textarea>
    </div> */}
    <Inputfield
    name={"Comment"}
    additionalMainDivClassName={styles.comment_div}
    />
</div>
  )
}

export default OverallInfo