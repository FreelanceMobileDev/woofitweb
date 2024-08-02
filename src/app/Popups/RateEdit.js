"use client"
import React, { useEffect, useState } from 'react';
import styles from './Popups.module.css';
import { CrossIcon, Rightarrow } from '../../../public';
import TextWithButton from '../_reuseableComponent/TextWithButton';
import OpticityButton from '../_reuseableComponent/OpicityButton';
import Inputfield from '../_reuseableComponent/Inputfield';
import Clients from '../Popups/Clients';
import Image from 'next/image';
import profilepicture from '../../../public/Images/profilepic.png'
import { useFormik } from 'formik';
import * as Yup from "yup";
import AddClients from './AddClients';
import { createAndUpdateRate } from '../../api/helper';

const Clientsdata = [
    { name: '6 Clients', count: '+3', avatar: profilepicture, avatar1: profilepicture, avatar2: profilepicture },
];

const RateEdit = ({ show, handleClose, rateData, catchId }) => {
    // console.log(rateData, '===rateData')
    const [clientsopen, setclientsopen] = useState(false);
    const [selectClients, setSelectclients] = useState([]);
    const [errorMsg, setErrorMsg] = useState("")
  

    const closePopup = () => {
        setclientsopen(false);
    };

    const handleSave = () => {
        setclientsopen(true);
    };

    useEffect(() => {

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
                // console.log(values,'===values')
                let response = {}
                if (rateData._id) {
                    delete values.coachId;
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

    return (
        <div className={show ? styles.popupDisplay : styles.popupHide}>
            <div className={styles.popupContent} style={{ marginTop: 30, marginBottom: 30 }}>
                <div className={styles.space_div}>
                    <div style={{ width: 60 }} />
                    <div className={styles.popheadertxt}>{rateData?._id ? "Edit Rate" : "Add Rate"} </div>

                    <div onClick={handleClose} className={styles.greycrossicon}><CrossIcon /></div>
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

                        {selectClients.length > 0 && selectClients ? Clientsdata.map((item, index) => (
                            <div key={index} className={styles.space_div} style={{ marginBottom: 10, marginTop: 10 }} onClick={handleSave}>
                                <div className={styles.client_name_style2} style={{ marginLeft: 0 }}>{item.name}</div>
                                <div className={styles.row} >
                                    <Image src={item.avatar} alt="Client Avatar" width={40} height={40} className={styles.avatar2} />
                                    <Image src={item.avatar1} alt="Client Avatar" width={40} height={40} className={styles.avatar2} />
                                    <Image src={item.avatar2} alt="Client Avatar" width={40} height={40} className={styles.avatar2} />
                                    <div className={styles.group_count}>{item.count}</div>
                                    <div style={{ marginLeft: 10 }}>
                                        <Rightarrow />
                                    </div>
                                </div>
                            </div>
                        )) :
                            <OpticityButton
                                onClick={handleSave}
                                name={'Add client'}
                                txtstyle={{ color: '#14AED1' }}
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

                    <button type='submit' className={styles.SaveButton} style={{ cursor: "pointer" }}>Save</button>
                    {/* <OpticityButton
                        onClick={handleClose}
                        name={'Save'}
                        txtstyle={{ color: '#FFF' }}
                        additionalMainDivClassName={styles.SaveButton}
                    /> */}
                </form>
            </div>
            {clientsopen &&
                <AddClients show={clientsopen} handleClose={closePopup} setSelectclients={setSelectclients}
                //  <Clients show={clientsopen} handleClose={closePopup}
                />}
        </div>
    );
}

export default RateEdit;
