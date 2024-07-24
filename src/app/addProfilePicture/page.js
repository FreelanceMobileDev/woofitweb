
"use client";
import Link from 'next/link';
import styles from './../_components/Login.module.css'
import { LeftArrow } from '../../../public';
import { useRouter } from 'next/navigation'
import { imageUpload, update_professional_details } from '../../api/helper';
import { useState } from 'react';
import logoicon from '../../../public/Images/Logo.png'
import africanimg from '../../../public/Images/africanMan.png'
import Image from 'next/image';


const ProfilePicUpload = () => {
    const router = useRouter();
    const [selectedFile, setSelectedFile] = useState(null);
    const [errMessage, setErrormsg] = useState();
    const [image, setImage] = useState();
    const [formData , setformData]= useState();


    const handleFileSelect = async (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedFile(e.target.result);
            };
            reader.readAsDataURL(file);

            // here is file upload api call
            const formData = new FormData();
            formData.append('image', file);
            try {
                const imgData = await imageUpload(formData)
                // console.log(imgData.data.filename, '=====imgData')
                setImage({ image: imgData?.data?.filename })
            } catch (error) {
                console.log(error, '====error')
            }
        }
    };

    const triggerFileSelect = () => {
        document.getElementById('fileInput').click();
    };

    const handleChange = (e)=>{
        const {name, value} = e.target
        setformData({...formData,[name]:value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

       
        if(!formData || formData.Privacy!="on" || formData.Terms!="on" ){
            return setErrormsg({message:"Please Check 'I Am Agree' "})
        }
        console.log(formData,'===formData')

        if(!image){
            return setErrormsg({message:"Please select the image"}) 
        }

        console.log(image, '====image')
        const id = localStorage.getItem("id")
        const response = await update_professional_details(image, id);
        if (response?.data?.success === false) {
            setErrormsg(response?.data)
        }
        console.log(response?.data, '====api response')
        router.push('/dashboard')

    }

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
                            {errMessage ? (
                                <div style={{ color: 'red' }}>{errMessage?.message}</div>
                            ) : null}
                            <form>
                                <div className={styles.centeralign}>
                                    <img
                                        style={{ height: 107, width: 107, borderRadius: 60 }}
                                        src={selectedFile ? selectedFile : '/images/profileee.png'}
                                    />
                                    <div className={styles.upload_photo_txt} onClick={triggerFileSelect}>Upload Photo </div>
                                    <input
                                        type="file"
                                        id="fileInput"
                                        style={{ display: 'none' }}
                                        onChange={handleFileSelect}
                                        accept="image/*"
                                    />
                                    <div className={styles.Linediv} />
                                    <div className={styles.flex_row_div}>
                                        <input type="checkbox"
                                        name="Terms"
                                            className={styles.inputcheckbox}
                                            onChange={handleChange}
                                        />

                                        <div className={styles.i_accept_txt}>I Accept the </div>
                                        <div className={styles.terms_and_condi_txt}>Terms and Conditions.</div>
                                    </div>
                                    <div className={styles.flex_row_div} style={{ marginTop: 15 }}>
                                        <input type="checkbox" className={styles.inputcheckbox}  name="Privacy" onChange={handleChange}/>
                                        <div className={styles.i_accept_txt}>I Agree to the </div>
                                        <div className={styles.terms_and_condi_txt}>Privacy Policy.</div>
                                    </div>
                                </div>
                                <button type="submit" className={styles.authButton2} style={{ backgroundColor: "#14AED1", color: "wheat" }} onClick={handleSubmit} >Continue</button>

                                {/* <Link href="/dashboard" passHref className={styles.noUnderline}>
                                    <button type="submit" className={styles.authButton2} style={{ backgroundColor: "#14AED1", color: "wheat" }}  >Continue</button>
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
height={400} width={400}
                        className={styles.africnManstyle}
                    />
                </div>
            </div>
        </>


    )
}
export default ProfilePicUpload