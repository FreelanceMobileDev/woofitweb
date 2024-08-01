'use client';
import Link from 'next/link';
import styles from './../_components/Login.module.css'
import { Downarrow, LeftArrow } from '../../../public';
import Inputfield from '../_reuseableComponent/Inputfield'
import TextWithButton from '../_reuseableComponent/TextWithButton'
import SelectOption from '../_reuseableComponent/SelectOption'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import {  update_professional_details } from '../../api/helper';
import logoicon from '../../../public/Images/Logo.png'
import africanimg from '../../../public/Images/africanMan.png'
import Image from 'next/image';
import useAuth from '../hooks/useAuth';

const Professionaldetails = () => {
    useAuth()
    const specializationOptions = [
        { _id: 1, name: 'Personal Training' },
        { _id: 2, name: 'Strength Training' },
        { _id: 3, name: 'Cardio Fitness' },
        { _id: 4, name: 'Weight Loss' },
        { _id: 5, name: 'Muscle Building' },
        { _id: 6, name: 'Bodybuilding' },
        { _id: 7, name: 'CrossFit' },
        { _id: 8, name: 'Functional Training' },
        { _id: 9, name: 'HIIT (High-Intensity Interval Training)' },
        { _id: 10, name: 'Pilates' },
        { _id: 11, name: 'Yoga' },
        { _id: 12, name: 'Zumba' },
        { _id: 13, name: 'Sports Conditioning' },
        { _id: 14, name: 'Athletic Performance' },
        { _id: 15, name: 'Endurance Training' },
        { _id: 16, name: 'Marathon Training' },
        { _id: 17, name: 'Triathlon Training' },
        { _id: 18, name: 'Cycling Training' },
        { _id: 19, name: 'Swimming Training' },
        { _id: 20, name: 'Running Coaching' },
        { _id: 21, name: 'Boxing Fitness' },
        { _id: 22, name: 'Kickboxing' },
        { _id: 23, name: 'Martial Arts Training' },
        { _id: 24, name: 'Flexibility Training' },
        { _id: 25, name: 'Mobility Training' },
        { _id: 26, name: 'Rehabilitation Training' },
        { _id: 27, name: 'Postnatal Fitness' },
        { _id: 28, name: 'Prenatal Fitness' },
        { _id: 29, name: 'Senior Fitness' },
        { _id: 30, name: 'Youth Fitness' },
        { _id: 31, name: 'Group Fitness' },
        { _id: 32, name: 'Dance Fitness' },
        { _id: 33, name: 'Barre Workouts' },
        { _id: 34, name: 'Meditation Coaching' },
        { _id: 35, name: 'Nutrition Coaching' },
        { _id: 36, name: 'Lifestyle Coaching' },
        { _id: 37, name: 'Wellness Coaching' },
        { _id: 38, name: 'Behavioral Change Coaching' },
        { _id: 39, name: 'Stress Management' },
        { _id: 40, name: 'Holistic Fitness' }
      ];

      const experienceOptions = [
        { _id: 1, name: '1 ' },
        { _id: 2, name: '2 ' },
        { _id: 3, name: '3 ' },
        { _id: 4, name: '4 ' },
        { _id: 5, name: '5 ' },
        { _id: 6, name: '6 ' },
        { _id: 7, name: '7 ' },
        { _id: 8, name: '8 ' },
        { _id: 9, name: '9 ' },
        { _id: 10, name: '10+ ' }
      ];

    const [errMessage, setErrormsg] = useState()
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            coachSpecialization: "",
            yearOfExperience: "",
        },
        validationSchema: Yup.object({
            coachSpecialization: Yup.string().required('Coaching Specialization is required'),
            yearOfExperience: Yup.string().required('Years of Experience is required'),

        }),

        onSubmit: async (values) => {
            try {
                console.log(values, '===values')
                const id = localStorage.getItem("id")
                const response = await update_professional_details(values,id);
                if (response?.data?.success === false) {
                    setErrormsg(response?.data)
                }
                console.log(response?.data,'====api response')
                localStorage.setItem('url',"/addProfilePicture")
                router.push('/addProfilePicture')
                // router.push('/addProfilePicture')
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

                        <div className={styles.leftarrow}>
                            <Link href="/signupW" passHref className={styles.noUnderline}>
                                <LeftArrow />
                            </Link>
                        </div>
                        <div className={styles.authBox}>
                            <h2 className={styles.WelcomeBack}>Professional details</h2>

                            {errMessage ? (
                                <div style={{ color: 'red' }}>{errMessage?.message}</div>
                            ) : null}

                            <form onSubmit={formik.handleSubmit} >

                                <SelectOption label={"Coaching Specialization"}
                                    id={"coachSpecialization"}
                                    data={specializationOptions}
                                    RightIcon={Downarrow}
                                    onChange={formik.handleChange}
                                    value={formik.values.coachSpecialization}
                                />
                                {formik.touched.coachSpecialization && formik.errors.coachSpecialization ? (
                                    <div style={{ color: 'red' }}>{formik.errors.coachSpecialization}</div>
                                ) : null}

                                <SelectOption label={"Years of Experience"}
                                    id={"yearOfExperience"}
                                    data={experienceOptions}
                                    RightIcon={Downarrow}
                                    onChange={formik.handleChange}
                                    value={formik.values.yearOfExperience}

                                />
                                {formik.touched.yearOfExperience && formik.errors.yearOfExperience ? (
                                    <div style={{ color: 'red' }}>{formik.errors.yearOfExperience}</div>
                                ) : null}

                                {/* <TextWithButton
                                    label={"Coaching Specialization"}
                                    text={"Select"}
                                    
                                    RightIcon={Downarrow}
                                />
                            
                                <Inputfield
                                    name="Years of Experience"
                                    placeholder="1"
                                    input_parent_div_prop={styles.Experienceinput}
                                    inputtxt={styles.Experienceinputtxt}

                                /> */}
                                <button type="submit" className={styles.authButton} style={{ backgroundColor: "#14AED1", color: "wheat" }} >Continue</button>

                                {/* <Link href="/addProfilePicture" passHref className={styles.noUnderline}>
                                    <button type="submit" className={styles.authButton2} >Continue</button>
                                </Link> */}
                            </form>


                        </div>
                    </div>
                </div>
                <div className={styles.rightPane}>
                    <Image src={logoicon} alt="Workout"
                        className={styles.Logoimg}
                        height={136}
                        width={450}

                    />
                    <p className={styles.textttt}>Where Coaching Meets Excellence</p>
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
export default Professionaldetails  