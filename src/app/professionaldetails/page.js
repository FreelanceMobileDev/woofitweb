'use client';
import Link from 'next/link';
import styles from './../_components/Login.module.css'
import { Downarrow, LeftArrow } from '../../../public';
import Inputfield from '../_reuseableComponent/Inputfield'
import TextWithButton from '../_reuseableComponent/TextWithButton'
import Image from 'next/image';

const Professionaldetails = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.leftPane}>
                    <div className={styles.LeftContainor}>

                        <div className={styles.leftarrow}>
                            <Link href="/signupW" passHref className={styles.noUnderline}>
                                <LeftArrow />
                            </Link>
                        </div>
                        <div className={styles.authBox}>
                            <h2 className={styles.WelcomeBack}>Professional details</h2>
                            <form>
                                <TextWithButton
                                    label={"Coaching Specialization"}
                                    text={"Select"}
                                    RightIcon={Downarrow}
                                />
                                <Inputfield
                                    name="Years of Experience"
                                    placeholder="1"
                                    input_parent_div_prop={styles.Experienceinput}
                                    inputtxt={styles.Experienceinputtxt}

                                />
                                <TextWithButton
                                    label={"Service Offerings"}
                                    text={"Select"}
                                    RightIcon={Downwarrow}
                                />
   <Link href="/addProfilePicture" passHref className={styles.noUnderline}>
                                <button type="submit" className={styles.authButton2} >Continue</button>
                                </Link>
                            </form>


                        </div>
                    </div>
                </div>
                <div className={styles.rightPane}>
                    <Image src="/images/Logo.png" alt="Workout"
                        className={styles.Logoimg}
                        height={136}
                        width={450}
                       
                    />
                    <p className={styles.textttt}>Where Coaching Meets Excellence</p>
                    <Image src="/images/africanMan.png" alt="Workout"
                        className={styles.africnManstyle}
                        height={400}
                        width={400}
                    />
                </div>
            </div>
        </>


    )
}
export default Professionaldetails  