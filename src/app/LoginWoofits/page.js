'use client';
import Link from 'next/link';
import styles from './../_components/Login.module.css'
import Inputfield from '../_reuseableComponent/Inputfield';
import { AppleLogo, Attherateimg, GoogleLogo, Lockimg } from '../../../public';
import Image from 'next/image';
import africanimg from '../../../public/Images/africanMan.png'
import logoicon from '../../../public/Images/Logo.png'

const LoginWoofit = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.leftPane}>
                    <div className={styles.LeftContainor}>
                        <div className={styles.registerLink}>
                            <span>Don't have an Account? </span>
                            <Link href="/signupW" passHref>
                                <div className={styles.RegisterButton} style={{ textDecoration: 'none' }}>Register</div>
                            </Link>
                        </div>
                        <div className={styles.authBox}>
                            <h2 className={styles.WelcomeBack}>Welcome back!</h2>
                            <form>
                                <Inputfield
                                    name="Email"
                                    type="email" id="email" placeholder="Enter your Email"
                                    img1={<Attherateimg />}
                                />
                                <Inputfield
                                    name="Password"
                                    type="password" id="password" placeholder="Enter your Password"
                                    img1={<Lockimg />}
                                />
                                <div className={styles.forgotPassword}>
                                    <a href="#">Forgot your password?</a>
                                </div>
                                <Link href="/dashboard" className={styles.noUnderline}>
                                    <button type="submit" className={styles.authButton}>
                                        Login
                                    </button>
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
            <Image 
                src={logoicon}
                alt="Workout" 
                className={styles.Logoimg} 
                height={136} 
                width={450} 
            />
            <p className={styles.textttt}>Where Coaching Meets Excellence</p>
            <Image 
                src={africanimg} 
                alt="Workout" 
                className={styles.africnManstyle} 
                width={500} 
                height={400} 
            />
        </div>

            </div>
        </>


    )
}
export default LoginWoofit  