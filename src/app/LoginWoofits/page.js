'use client';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import styles from './../_components/Login.module.css'
import Inputfield from '../_reuseableComponent/Inputfield';
import { AppleLogo, Attherateimg, GoogleLogo, Lockimg } from '../../../public';
import Image from 'next/image';
import { login } from '../../api/helper'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useEffect, useState } from 'react';
const LoginWoofit = () => {
    const router = useRouter();
    const [errMessage, setErrormsg] = useState()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await login(values);
                if (response?.data?.success === false) {
                    setErrormsg(response?.data)
                }
                localStorage.setItem("token",response.data.data.token)
                localStorage.setItem("id",response.data.data._id)
                router.push('/dashboard')
            } catch (error) {
                console.log(error, '====')
            }
        },
    });
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.push('/dashboard');
        }
    }, []);

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
                            <form onSubmit={formik.handleSubmit}>
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
                                <div className={styles.forgotPassword}>
                                    <a href="#">Forgot your password?</a>
                                </div>
                                <button type="submit" className={styles.authButton} style={{ backgroundColor: "#14AED1", color: "wheat" }}>
                                    Login
                                </button>

                                {errMessage ? (
                                    <div style={{ color: 'red' }}>{errMessage?.message}</div>
                                ) : null}
                                {/* <Link href="/dashboard" className={styles.noUnderline}>
                                    <button type="submit" className={styles.authButton}>
                                        Login
                                    </button>
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
                    <img src="/images/Logo.png" alt="Workout"
                        className={styles.Logoimg}
                    />
                    <p className={styles.textttt}>Where Coaching Meets Excellence</p>
                    <Image src="/images/africanMan.png" alt="Workout"
                        className={styles.africnManstyle}
                        width={500} // Replace with your image width
                        height={400} // Replace with your image height
                    />
                </div>
            </div>
        </>


    )
}
export default LoginWoofit  