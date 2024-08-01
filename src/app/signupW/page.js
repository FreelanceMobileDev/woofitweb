
"use client"
import styles from './../_components/Login.module.css'
import { AppleLogo, Attherateimg, GoogleLogo, Lockimg, Userimg } from '../../../public'
import Inputfield from '../_reuseableComponent/Inputfield'
import Link from 'next/link'
import { useFormik } from 'formik';
import * as Yup from "yup";
// import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import {  register } from '../../api/helper'
import { useEffect, useState } from 'react'
import logoicon from '../../../public/Images/Logo.png'
import africanimg from '../../../public/Images/africanMan.png'
import Image from 'next/image';
import useAuth from '../hooks/useAuth'

const SignupWoofit = () => {
    const [errMessage, setErrormsg] = useState()
    useAuth()

    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            name:"",
            email: "",
            mobileNumber:"",
            password: "",
            confirmPassword:"",
            userType:"Coach"
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            mobileNumber: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone is required'),
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        }),
        onSubmit: async (values) => {
            try {
                
                const response = await register(values);
                if (response?.data?.success === false) {
                    console.log(response.data)
                    // return
                  return setErrormsg(response?.data)
                }
                console.log(response?.data)
                localStorage.setItem("signSteps", true)
                localStorage.setItem("url", "/professionaldetails")
                localStorage.setItem("token", response?.data?.data?.token)
                localStorage.setItem("id", response?.data?.data?._id)
                 router.push('/professionaldetails')
            } catch (error) {
                console.log(error, '====')
            }
        },
    });

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
                            {errMessage ? (
                                    <div style={{ color: 'red' }}>{errMessage?.message}</div>
                                ) : null}
                            <form onSubmit={formik.handleSubmit}>

                                <Inputfield
                                    name="Name"
                                    type="name" id="name" placeholder="Enter your Name"
                                    img1={<Userimg />}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div style={{ color: 'red' }}>{formik.errors.name}</div>
                                ) : null}

                                <Inputfield
                                    name="Email"
                                    type="email" id="email" placeholder="Enter your Email"
                                    img1={<Attherateimg />}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div style={{ color: 'red' }}>{formik.errors.email}</div>
                                ) : null}

                                <Inputfield
                                    name={"Phone"}
                                    type="number" id="mobileNumber"
                                    img2
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.mobileNumber}
                                />
                                {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                                    <div style={{ color: 'red' }}>{formik.errors.mobileNumber}</div>
                                ) : null}

                                <Inputfield
                                    name="Password"
                                    type="password" id="password" placeholder="Enter your Password"
                                    img1={<Lockimg />}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div style={{ color: 'red' }}>{formik.errors.password}</div>
                                ) : null}
                                <Inputfield
                                    name="Confirm password"
                                    type="password" id="confirmPassword" placeholder="Confirm your Password"
                                    img1={<Lockimg />}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirmPassword}
                                />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                    <div style={{ color: 'red' }}>{formik.errors.confirmPassword}</div>
                                ) : null}

                                <button type="submit" className={styles.authButton} style={{ backgroundColor: "#14AED1", color: "wheat" }}>
                                    Continue
                                </button>
                                {/* <Link href="/professionaldetails" passHref className={styles.noUnderline}>
                                <button type="submit" className={styles.authButton}>Continue</button>
                             </Link> */}
                              
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


