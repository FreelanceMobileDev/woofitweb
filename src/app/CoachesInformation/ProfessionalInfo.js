import { Coins, CrossIcon, Downarrow, MuscleIcon, Rightarrow } from "../../../public";
import PlusGallery from "../../../public/Images/PlusGallery";
import Inputfield from "../_reuseableComponent/Inputfield";
import TextWithButton from "../_reuseableComponent/TextWithButton"
import styles from './Coaches.module.css';
const ProfessionalInfo = () => {
  const texts = ["Sauna or Spa Services", "Nutritional Counseling", "Specialized Programs"];
  return (
    <div className={styles.container} >
      <div style={{ marginTop: 30 }} />
      <div className={styles.rateAndGoal}>
        <TextWithButton
          label="Coach Specialization"
          text="Nutrition Specialist"
          RightIcon={Downarrow}
          additionalcontainer={styles.rate_input_div}
        />
        <div style={{ width: 50 }} />
        <TextWithButton
          label="Experience"
          text="3 Years"

          additionalcontainer={styles.rate_input_div}
        />
      </div>
      <div className={styles.servicesOff}>
        Services offered
      </div>
      <div className={styles.row} style={{ marginLeft: 13 }}>
      {texts.map((text, index) => (
        <div key={index}  className={styles.Services_offered_data}>
          <div className={styles.textttttt}>{text}</div>
          <CrossIcon />
        </div>
         ))}
      </div>
      <Inputfield
        name={"Comment"}
        additionalMainDivClassName={styles.comment_div}
      />
    </div>
  )
}

export default ProfessionalInfo