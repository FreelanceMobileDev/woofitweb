
"use client";
import Link from 'next/link';
import styles from './../_components/Login.module.css'
import { LeftArrow } from '../../../public';
import { useRouter } from 'next/navigation'
import { imageUpload, update_professional_details ,getProfile} from '../../api/helper';
import { useState } from 'react';
import logoicon from '../../../public/Images/Logo.png'
import africanimg from '../../../public/Images/africanMan.png'
import profileIcon from '../../../public/Images/addProfile.png'
import Image from 'next/image';
import useAuth from '../hooks/useAuth';
import check from '../../../public/Images/Checkflieddbox.png'
import nocheck from '../../../public/Images/Checkbox@2x.png'


const ProfilePicUpload = () => {
    useAuth()
    const router = useRouter();
    const [selectedFile, setSelectedFile] = useState(null);
    const [errMessage, setErrormsg] = useState();
    const [image, setImage] = useState();
    const [formData , setformData]= useState();
    const [state, setState]=useState({term:false,privacy:false})

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

    const handleSubmit = async(e) => {
        e.preventDefault()
       
        if(!state || state.term!=true || state.privacy!=true ){
            return setErrormsg({message:"Please Check 'I Am Agree' "})
        }

        if(!image){
            return setErrormsg({message:"Please select the image"}) 
        }


        const id = localStorage.getItem("id")
        const response = await update_professional_details(image, id);
        if (response?.data?.success === false) {
            setErrormsg(response?.data)
        }

        localStorage.removeItem("signSteps")
        localStorage.removeItem("url")
        const getData = await getProfile()
        localStorage.setItem("userData",JSON.stringify(getData.data.data))
        // console.log(response?.data, '====api response')
        // user/get-profile
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
                                        src={selectedFile ? selectedFile : profileIcon.src}
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
                                    <Image src={ state.term ? check : nocheck} height={15} width={15}  onClick={()=>{setState({...state,term:!state.term})}} />

                                        <div className={styles.i_accept_txt} style={{marginLeft:5}}>I Accept the </div>
                                        <div className={styles.terms_and_condi_txt}>Terms and Conditions.</div>
                                    </div>
                                    <div className={styles.flex_row_div} style={{ marginTop: 15 }}>
                                        {/* <input type="checkbox" className={styles.inputcheckbox}  name="Privacy" onChange={handleChange}/> */}
                                        
                                        <Image src={ state.privacy ? check : nocheck} height={15} width={15} onClick={()=>{setState({...state,privacy:!state.privacy})}}/>

                                        <div className={styles.i_accept_txt} style={{marginLeft:5}}>I Agree to the </div>
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