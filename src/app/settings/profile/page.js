'use client'
import React, { useEffect, useState } from 'react'
import SettingSidebar from '../settingSidebar'
import DeshBorad from '../../dashboard/DashCompoent';
import styles from '../../_components/Login.module.css';
import Image from 'next/image';
import profileiconn from '../../../../public/Images/profileee.png'
import { Attherateimg, CalenderIcon, Downarrow, UploadimgIcon, Userimg } from '../../../../public';
import Inputfield from '../../_reuseableComponent/Inputfield';
import Loader from '../../_components/Loader';
import { getProfile, imageUpload, updateProfile } from '../../../api/helper';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { experienceOptions, specializationOptions } from '../../../util/staticData';
import SelectOption from '../../_reuseableComponent/SelectOption';

function page() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("")
    const [selectedFile, setSelectedFile] = useState(null);
    const [image, setImage] = useState();

    const getprofileData = async () => {
        try {
            setLoading(true)
            const getData = await getProfile()
            console.log(getData.data.data, '===getData')
            setData(getData.data.data)
            localStorage.setItem("userData", JSON.stringify(getData.data.data))
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getprofileData()
    }, []);

    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            mobileNumber: "",
            coachSpecialization: '',
            yearOfExperience: '',


        },
        validationSchema: Yup.object({
            email: Yup.string().required('Email is required'),
            name: Yup.string().required('Name is required'),
            mobileNumber: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone is required'),
        }),
        onSubmit: async (values) => {
            try {
                setLoading(true);
                setErrorMsg("")
                if (image) {
                    values.image = image.image
                }
                console.log(values,'===values')
                const respone = await updateProfile(values)
                if (respone.data.success == false) {
                    return setErrorMsg(respone.data.message)
                }
                getprofileData()
                setLoading(false);
                window.location.reload()
            } catch (error) {
                setLoading(false);
                console.log(error, '====')
            }
        },
    });

    useEffect(() => {
        if (data) {
            formik.setValues({
                name: data?.name || '',
                email: data?.email || '',
                mobileNumber: data?.mobileNumber || '',
                coachSpecialization: data?.coachSpecialization || '',
                yearOfExperience: data?.yearOfExperience || "",
            });
        }
    }, [data]);

    const triggerFileSelect = () => {
        document.getElementById('fileInput').click();
    };
    const handleFileSelect = async (event) => {
        setLoading(true);
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedFile(e.target.result);
            };
            reader.readAsDataURL(file);
            const formData = new FormData();
            formData.append('image', file);
            try {

                const imgData = await imageUpload(formData)
                // console.log(imgData.data.filename, '=====imgData')
                setImage({ image: imgData?.data?.filename })
            } catch (error) {
                setLoading(false);
                console.log(error, '====error')
            } finally {
                setLoading(false);
            }
        }
        setLoading(false);
    };

    return (
        <>
            <DeshBorad>
                <SettingSidebar >
                    <Loader loading={loading} />
                    <div className={styles.right_div_data}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 30 }}>
                            <Image 
                                src={selectedFile ? selectedFile: data?.image} 
                                alt={profileiconn}
                                className={styles.profile_pic_setting}
                                height={107}
                                width={107}
                            />
                            <div className={styles.upload_pic_div} style={{ cursor: "pointer" }} >
                                <UploadimgIcon />
                                <div className={styles.upload_photo_text} onClick={triggerFileSelect} >Upload Photo</div>
                                <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: 'none' }}
                                    onChange={handleFileSelect}
                                    accept="image/*"
                                />
                            </div>
                        </div>

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
                                name="Phone"
                                type="phone" id="mobileNumber" placeholder="Enter your Phone"
                                img2
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.mobileNumber}
                            />
                            {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                                <div style={{ color: 'red' }}>{formik.errors.mobileNumber}</div>
                            ) : null}
                            {errorMsg && errorMsg ? (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                            ) : null}

                            <SelectOption label={"Coaching Specialization"}
                                id={"coachSpecialization"}
                                data={specializationOptions}
                                RightIcon={Downarrow}
                                onChange={formik.handleChange}
                                value={formik.values.coachSpecialization}
                                selectedId={formik.values.coachSpecialization?formik.values.coachSpecialization:data?.coachSpecialization}
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
                                selectedId={formik.values.yearOfExperience?formik.values.yearOfExperience:data?.yearOfExperience}

                            />
                            {formik.touched.yearOfExperience && formik.errors.yearOfExperience ? (
                                <div style={{ color: 'red' }}>{formik.errors.yearOfExperience}</div>
                            ) : null}


                            <button type='submit' className={styles.Save_button} >Save</button>

                            {/* <div className={styles.Save_button}>Save</div> */}
                        </form>
                    </div>

                </SettingSidebar>
            </DeshBorad>

        </>
    )
}

export default page