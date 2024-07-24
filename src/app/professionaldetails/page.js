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
import { register, update_professional_details } from '../../api/helper';

const Professionaldetails = () => {
    const Coaching_Specializationoptions = [
        'Personal Training',
        'Strength Training',
        'Cardio Fitness',
        'Weight Loss',
        'Muscle Building',
        'Bodybuilding',
        'CrossFit',
        'Functional Training',
        'HIIT (High-Intensity Interval Training)',
        'Pilates',
        'Yoga',
        'Zumba',
        'Sports Conditioning',
        'Athletic Performance',
        'Endurance Training',
        'Marathon Training',
        'Triathlon Training',
        'Cycling Training',
        'Swimming Training',
        'Running Coaching',
        'Boxing Fitness',
        'Kickboxing',
        'Martial Arts Training',
        'Flexibility Training',
        'Mobility Training',
        'Rehabilitation Training',
        'Postnatal Fitness',
        'Prenatal Fitness',
        'Senior Fitness',
        'Youth Fitness',
        'Group Fitness',
        'Dance Fitness',
        'Barre Workouts',
        'Meditation Coaching',
        'Nutrition Coaching',
        'Lifestyle Coaching',
        'Wellness Coaching',
        'Behavioral Change Coaching',
        'Stress Management',
        'Holistic Fitness'
    ];

    const Experience = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10 +']

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
                                    data={Coaching_Specializationoptions}
                                    RightIcon={Downarrow}
                                    onChange={formik.handleChange}
                                    value={formik.values.coachSpecialization}
                                />
                                {formik.touched.coachSpecialization && formik.errors.coachSpecialization ? (
                                    <div style={{ color: 'red' }}>{formik.errors.coachSpecialization}</div>
                                ) : null}

                                <SelectOption label={"Years of Experience"}
                                    id={"yearOfExperience"}
                                    data={Experience}
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