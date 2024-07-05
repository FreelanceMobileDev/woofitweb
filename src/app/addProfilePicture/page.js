
import Link from 'next/link';
import styles from './../_components/Login.module.css'
import {LeftArrow } from '../../../public';

const ProfilePicUpload = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.leftPane}>
                    <div className={styles.LeftContainor}>
                        <div className={styles.leftarrow}>
                        <Link href="/professionaldetails" passHref className={styles.noUnderline}>
                            <LeftArrow />
                            </Link>
                        </div>
                        <div className={styles.authBox}>
                            <h2 className={styles.WelcomeBack}>Add Profile Picture</h2>
                            <form>
                                <div className={styles.centeralign}>
                                    <img
                                        style={{ height: 107, width: 107 }}
                                        src='/images/profileee.png'
                                    />
                                    <div className={styles.upload_photo_txt}>Upload Photo </div>
                                    <div className={styles.Linediv} />
                                    <div className={styles.flex_row_div}>
                                    <input type="checkbox" className={styles.inputcheckbox} />
                                    <div className={styles.i_accept_txt}>I Accept the </div>
                                    <div className={styles.terms_and_condi_txt}>Terms and Conditions.</div>
                                    </div>
                                    <div className={styles.flex_row_div}style={{marginTop:15}}>
                                    <input type="checkbox" className={styles.inputcheckbox} />
                                    <div className={styles.i_accept_txt}>I Agree to the </div>
                                    <div className={styles.terms_and_condi_txt}>Privacy Policy.</div>
                                    </div>
                                </div>
                                <Link href="/dashboard" passHref className={styles.noUnderline}>
                                <button type="submit" className={styles.authButton2} >Continue</button>
                                </Link>
                            </form>


                        </div>
                    </div>
                </div>
                <div className={styles.rightPane}>
                    <img src="/images/Logo.png" alt="Workout"
                        className={styles.Logoimg}
                    />
                    <p className={styles.textttt}>Where Coaching Meets Excellence</p>
                    <img src="/images/africanMan.png" alt="Workout"
                        className={styles.africnManstyle}
                    />
                </div>
            </div>
        </>


    )
}
export default ProfilePicUpload