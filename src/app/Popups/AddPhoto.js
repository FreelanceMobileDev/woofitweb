"use client"
import { useState, useRef } from "react";
import { CrossIcon } from "../../../public"
import Inputfield from "../_reuseableComponent/Inputfield";
import OpticityButton from "../_reuseableComponent/OpicityButton";
import SelectOption from "../_reuseableComponent/SelectOption";
import styles from './Popups.module.css';
import { useSearchParams } from "next/navigation";
import RightARM from '../../../public/Images/RightARM.png'
import Image from "next/image";
import { addClientImage, imageUpload } from "../../api/helper";
import { toast } from "react-toastify";
import Loader from "../_components/Loader";

const AddPhoto = ({ setpopups,getData }) => {
    // clientId
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [selectedFile, setSelectedFile] = useState(null);
    const [form, setForm] = useState({ clientId: id ,side:"",measurement:"",image:""})
    const [loader, setLoader] = useState(false);
    const fileInputRef = useRef(null);

    const handleCardClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleInputChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedFile(e.target.result);
            };
            reader.readAsDataURL(file);
            const formData = new FormData();
            formData.append("image", file);
            try {
                const imgData = await imageUpload(formData);
                setForm({ ...form, image: imgData?.data?.filename })
            } catch (error) {
                console.log(error, "====error");
            }
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value })
    }

    const data = [
        { id: "Back", name: "Back" },
        { id: "Front", name: "Front" },
        { id: "Side", name: "Side" },
        { id: "Left Arm", name: "Left Arm" },
        { id: "Right Arm", name: "Right Arm" }
    ]

    const handleSubmit = async () => {
        try {
            const {image ,side ,measurement} =form 
            if(!image || !side || !measurement){
               return toast.error("All field is required")
            }
            setLoader(true)
            const response = await addClientImage(form)
            toast.success(response.data.message)
            getData()
            setpopups(false)
           
        } catch (error) {
            console.log(error, '===error')
        } finally {
            setLoader(false)
        }
    }

    return (
        <div className={styles.popupDisplay} style={{ height: '100vh' }}>
            {loader && <Loader loading={loader} />}
            <div className={styles.popupContent} style={{ marginTop: 40 }}>
                <div className={styles.space_div}>
                    <div style={{ width: 60 }} />
                    <div className={styles.popheadertxt}>Add Photos</div>
                    <div onClick={() => setpopups(false)} className={styles.greycrossicon} style={{ cursor: "pointer" }} ><CrossIcon /></div>
                </div>
                <div style={{ marginTop: 30, width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            borderWidth: 1,
                            borderColor: '#8D99AE4D',
                            borderStyle: 'solid',
                            width: '80%',
                            alignSelf: 'center',
                            height: 190,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            cursor: "pointer"
                        }}
                        onClick={handleCardClick}
                    >

                        {selectedFile || form.image ? <div style={{ position: 'relative', width: '59%' }}>
                            <Image
                                src={selectedFile || form.image || RightARM} // Default image path should be specified
                                alt=""
                                height={50}
                                layout="responsive"
                                width={50} // Adjust width to fit the responsive layout
                            />
                        </div> : <div>Add Photo</div>}


                        <input type="file" onChange={handleInputChange}
                            ref={fileInputRef} style={{ display: "none" }} />

                    </div>
                    <div style={{ width: '85%', marginBottom: 20 }} >
                        <SelectOption
                            name={"Photo"}
                            data={data}
                            id={"side"}
                            onChange={handleChange}
                        />
                    </div>

                    <Inputfield
                        name={"Measurement"}
                        id={"measurement"}
                        onChange={handleChange}
                        style={{ width: '80%', marginBottom: 20 }} />

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "80%", cursor: "pointer" }}>
                        <a onClick={handleSubmit} className={styles.SaveButton} style={{ width: "100%", borderWidth: 0 }} txtstyle={{ color: '#FFF' }} >Save</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPhoto