

import styles from './../_components/Login.module.css'
import { AppleLogo, Attherateimg, GoogleLogo, Lockimg, Userimg } from '../../../public'
import Inputfield from '../_reuseableComponent/Inputfield'
import Link from 'next/link'
import Image from 'next/image'
import logoicon from '../../../public/Images/Logo.png'
import africanimg from '../../../public/Images/africanMan.png'
const SignupWoofit = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.leftPane}>
                    <div className={styles.LeftContainor}>
                        <div className={styles.registerLink}>
                            <span>Already have an Account? </span>
                            <Link href="/authStack" passHref>
                                <div className={styles.RegisterButton} style={{ textDecoration: 'none' }}>Log In</div>
                            </Link>

                        </div>
                        <div className={styles.authBox}>
                            <h2 className={styles.WelcomeBack}>Sign Up</h2>
                            <form>

                                <Inputfield
                                    type="name" id="name" placeholder="Enter your Name"
                                    name="Name"
                                    img1={<Userimg />}
                                />
                                <Inputfield
                                    name="Email"
                                    type="email" id="email" placeholder="Enter your Email"
                                    img1={<Attherateimg />}
                                />
                                <Inputfield
                                    name={"Phone"}
                                    img2
                                />
                                <Inputfield
                                    name="Password"
                                    type="password" id="password" placeholder="Enter your Password"
                                    img1={<Lockimg />}
                                />
                                <Inputfield
                                    name="Confirm password"
                                    type="password" id="password" placeholder="Confirm your Password"
                                    img1={<Lockimg />}
                                />
                                <Link href="/professionaldetails" passHref className={styles.noUnderline}>
                                    <button type="submit" className={styles.authButton}>Continue</button>
                                </Link>
                            </form>
                            <div className={styles.Linediv} />
                            <div className={styles.socialLogin}>
                                <button type="button" className={styles.googleButton}>
                                    <GoogleLogo className={styles.googlelogo} />
                                    Continue with Google
                                </button>
                                <button type="button" className={styles.appleButton}>
                                    <AppleLogo className={styles.googlelogo} />
                                    Continue with Apple
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightPane}>
                    <Image src={logoicon} alt="Logo"
                        className={styles.Logoimg}
                        height={136}
                        width={450}

                    />
                    <p className={styles.textttt}> Where Coaching Meets Excellence</p>
                    <Image src={africanimg} alt="Workout"
                        className={styles.africnManstyle}
                        height={400}
                        width={400}
                    />
                </div>
            </div>
        </>
    )
}
export default SignupWoofit


