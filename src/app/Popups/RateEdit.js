"use client"
import React, { useEffect, useState } from 'react';
import styles from './Popups.module.css';
import { CrossIcon, Rightarrow, DeleteIcon } from '../../../public';
import TextWithButton from '../_reuseableComponent/TextWithButton';
import OpticityButton from '../_reuseableComponent/OpicityButton';
import Inputfield from '../_reuseableComponent/Inputfield';
import Clients from '../Popups/Clients';
import Image from 'next/image';
import profilepicture from '../../../public/Images/profilepic.png'
import { useFormik } from 'formik';
import * as Yup from "yup";
import AddClients from './AddClients';
import { createAndUpdateRate, deleteRate, getClinent } from '../../api/helper';
import Loader from '../_components/Loader';

const Clientsdata = [
    { name: '6 Clients', count: '+3', avatar: profilepicture, avatar1: profilepicture, avatar2: profilepicture },
];

const RateEdit = ({ show, handleClose, rateData, catchId }) => {
    const [clientsopen, setclientsopen] = useState(false);
    const [selectClients, setSelectclients] = useState(rateData && rateData?.clients > 0? [ ...rateData?.clients]:[]);
    const [errorMsg, setErrorMsg] = useState("")
    const [clientDatas, setclientData] = useState([])
    const [loading, setLoading] = useState(false);


    const closePopup = () => {
        setclientsopen(false);
    };

    const handleSave = () => {
        setclientsopen(true);
    };

  const getApiClinent = async (data) => {
    try {
      setLoading(true)
      const getData = await getClinent(data)
      setclientData(getData?.data?.data?.getAllClientData)
    } catch (error) {
      console.log(error, '====error')
    } finally {
      setLoading(false)
    }
  }
  

  useEffect(() => {
    getApiClinent(0)
    return () => { }
  }, [])


    const formik = useFormik({
        initialValues: {
            name: rateData?.name || "",
            priceForTraining: rateData?.priceForTraining || "",
            comment: rateData?.comment || "",
            coachId: rateData?.coachId || catchId,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            priceForTraining: Yup.string().required('Price is required'),
            comment: Yup.string().required('Comment is required'),
        }),

        onSubmit: async (values) => {
            try {

                if (selectClients && selectClients.length > 0) {
                    values.clients = selectClients.map((e) => e._id)
                }
                let response = {}
                if (rateData._id) {
                    response = await createAndUpdateRate(values, `id=${rateData?._id}`)
                } else {
                    response = await createAndUpdateRate(values)
                }

                if (response.data.success == false) {
                    return setErrorMsg(response.data.message)
                }
                handleClose()
                // router.push('/addProfilePicture')
            } catch (error) {
                console.log(error, '====')
            }
        },
    });
    const maxDisplayed = 4;

    const handleDelete=async(id)=>{
        try {
            setLoading(true)
            const response = await deleteRate(id)
            if(response.data.success==false){
                return console.log(response)
            }
            handleClose()
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    return (
        <div className={show ? styles.popupDisplay : styles.popupHide}>
             <Loader loading={loading} />
            <div className={styles.popupContent} style={{ marginTop: 30, marginBottom: 30 }}>
                <div className={styles.space_div}>
                    <div style={{ width: 60 }} />
                    <div className={styles.popheadertxt}>{rateData?._id ? "Edit Rate" : "Add Rate"} </div>
                    {/* onClick={handleClose} */}
                    <div onClick={()=>rateData?._id ? handleDelete(rateData?._id):handleClose()} className={styles.greycrossicon} ><DeleteIcon /></div>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <Inputfield
                        name="Name"
                        id={"name"}
                        type="text"
                        additionalcontainer={styles.TextWithButtonstyle}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div style={{ color: 'red' }}>{formik.errors.name}</div>
                    ) : null}

                    <Inputfield
                        name={'Price for Training'}
                        type="number"
                        id={"priceForTraining"}
                        additionalcontainer={styles.UsdInput2}
                        onChange={formik.handleChange}
                        value={formik.values.priceForTraining}
                    />
                    {formik.touched.priceForTraining && formik.errors.priceForTraining ? (
                        <div style={{ color: 'red' }}>{formik.errors.priceForTraining}</div>
                    ) : null}

                    {/* <Inputfield
                        img3
                        name={'Price for Training'}
                        additionalcontainer={styles.UsdInput2}
                    /> */}
                    <div style={{ marginLeft: 10, marginTop: 30 }}>

                        {selectClients.length > 0 && selectClients ?
                            <div className={styles.space_div} style={{ marginBottom: 10, marginTop: 10 }} onClick={handleSave}>
                                <div className={styles.client_name_style2} style={{ marginLeft: 0 }}>{selectClients.length}{selectClients.length >1? ` Clients`:" Client" } </div>
                                <div className={styles.row} >
                                    {selectClients.slice(0, maxDisplayed).map((item, index) =>
                                        <>
                                            <Image key={index} src={item?.clientImage ? item?.clientImage : profilepicture} alt="Client Avatar" width={40} height={40} style={{ borderRadius: 60 }} className={styles.avatar2} />
                                        </>
                                    )}
                                    {selectClients.length > maxDisplayed && (
                                        <div className={styles.group_count}>
                                            {selectClients.length - maxDisplayed}+
                                        </div>
                                    )}
                                    <div style={{ marginLeft: 10 }}>
                                        <Rightarrow />
                                    </div>

                                    {/* <Image src={item.avatar1} alt="Client Avatar" width={40} height={40} className={styles.avatar2} />
                                    <Image src={item.avatar2} alt="Client Avatar" width={40} height={40} className={styles.avatar2} /> */}

                                </div>
                            </div>
                            :
                            <OpticityButton
                                onClick={handleSave}
                                name={'Add Client'}
                                txtstyle={{ color: '#fff' }}
                                additionalMainDivClassName={styles.SaveButton}
                            />}
                    </div>

                    <Inputfield
                        name={'Comment'}
                        type="text"
                        id={"comment"}
                        additionalMainDivClassName={styles.comment_div_2}
                        onChange={formik.handleChange}
                        value={formik.values.comment}
                    />
                    {formik.touched.comment && formik.errors.comment ? (
                        <div style={{ color: 'red' }}>{formik.errors.comment}</div>
                    ) : null}
                    <div style={{ display:"flex",justifyContent:"center", alignItems:"center" }}>
                    <button type='submit' className={styles.SaveButton}  style={{width:"100%" , borderWidth:0}} txtstyle={{ color: '#FFF' }} >Save</button>
                    </div>

                </form>
            </div>
            {clientsopen && clientDatas&&
                <AddClients show={clientsopen} handleClose={closePopup} setSelectclients={setSelectclients} selectClients={selectClients} clientDatas={clientDatas}
                />}
        </div>
    );
}

export default RateEdit;
