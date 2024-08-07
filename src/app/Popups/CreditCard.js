"use client"
import React, { useState } from 'react';
import styles from './Popups.module.css';
import { CrossIcon, VisaIcon } from '../../../public';
import Inputfield from '../_reuseableComponent/Inputfield';
import OpticityButton from '../_reuseableComponent/OpicityButton';
import { useFormik } from 'formik';
import * as Yup from "yup";



const CreditCard = ({ handleClose, setCardData,caredData }) => {


    const handleSave = () => {
        handleClose();
    };

    const transformCardData = (data) => {
        const { cardHolderName, cardNumber, cvvCode, expiryDate } = data;
        const formattedCardNumber = cardNumber.replace(/\s+/g, '');
        const [expMonth, expYear] = expiryDate.split('/');
        const formattedExpYear = expYear.length === 2 ? `20${expYear}` : expYear;
        const formattedData = {
            cardHolderName: cardHolderName,
            cardNumber: formattedCardNumber,
            expMonth: expMonth,
            expYear: formattedExpYear,
            cvc: cvvCode,
        };

        return formattedData;
    };

    const formik = useFormik({
        initialValues: {
            cardHolderName: "",
            cardNumber: '',
            expiryDate: '',
            cvvCode: '',

        },
        validationSchema: Yup.object({
            cardHolderName: Yup.string()
                .matches(/^[A-Za-z][A-Za-z\s']*$/, 'Card Holder Name must start with a letter and can only contain letters, spaces, and apostrophes')
                .required('Card Holder Name is required'),
            cardNumber: Yup.string()
                .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Invalid Card Number')
                .required('Card Number is required'),
            expiryDate: Yup.string()
                .matches(/^(0[1-9]|1[0-2])\/\d{4}$/, 'Expiry Date must be MM/YYYY')
                .required('Expiry Date is required'),
            cvvCode: Yup.string()
                .length(3, 'CVV Code must be exactly 3 digits')
                .matches(/^\d{3}$/, 'CVV Code must be exactly 3 digits')
                .required('CVV code is required'),
        }),
        onSubmit: async (values) => {
            try {
                let data = transformCardData(values)
                setCardData([...caredData,data])
                handleClose();
            } catch (error) {
                // setLoading(false);
                console.log(error, '====')
            }
        },
    });

    const handleSubmit = () => {
        formik.handleSubmit()
    }

    const formatCardNumber = (value) => {
        // Remove all non-digit characters
        const cleaned = value.replace(/\D/g, '');
        // Limit to 16 digits
        const limited = cleaned.substring(0, 16);
        // Format the cleaned number with spaces every 4 digits
        const formatted = limited.match(/.{1,4}/g)?.join(' ') || '';
        return formatted;
    };

    const handleCardNumberChange = (event) => {
        const { value } = event.target;
        const formattedValue = formatCardNumber(value);
        formik.setFieldValue('cardNumber', formattedValue);
    };

    const formatExpiryDate = (value) => {
        const cleaned = value.replace(/\D/g, '');
        const month = cleaned.substring(0, 2);
        const year = cleaned.substring(2, 6);
        return month ? `${month}${year ? '/' : ''}${year}` : '';
    };

    const handleExpiryDateChange = (event) => {
        const { value } = event.target;
        const formattedValue = formatExpiryDate(value);
        formik.setFieldValue('expiryDate', formattedValue);
    };

    return (

        <>
            <form  >
                <div className={styles.popupDisplay} style={{ height: '100vh' }}>
                    <div className={styles.popupContent} style={{ marginTop: 80 }}>
                        <div className={styles.space_div}>
                            <div style={{ width: 60 }} />
                            <div className={styles.popheadertxt}>Credit Card</div>
                            <div onClick={handleClose} className={styles.greycrossicon}><CrossIcon /></div>

                        </div>
                        <Inputfield
                            name={"Card Holder Name"}
                            id={"cardHolderName"}
                            placeholder={"Eloise Robinson"}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cardHolderName}
                        />
                        {formik.touched.cardHolderName && formik.errors.cardHolderName ? (
                            <div style={{ color: "red" }}>
                                {formik.errors.cardHolderName}
                            </div>
                        ) : null}
                        <Inputfield
                            name={"Card Number"}
                            img5={VisaIcon}
                            placeholder={"0000   0000    0000     0000"}
                            id={"cardNumber"}
                            onChange={handleCardNumberChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cardNumber}
                        />
                        {formik.touched.cardNumber && formik.errors.cardNumber ? (
                            <div style={{ color: "red" }}>
                                {formik.errors.cardNumber}
                            </div>
                        ) : null}
                        <div className={styles.space_div} style={{ paddingLeft: 10, paddingRight: 10 }}>
                            <div>
                                <Inputfield
                                    name={"Expiry Date"}
                                    placeholder={"MM/YYYY"}
                                    inputtxt={styles.cvvcodetxt}
                                    id={"expiryDate"}
                                    onChange={handleExpiryDateChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.expiryDate}
                                />
                                {formik.touched.expiryDate && formik.errors.expiryDate ? (
                                    <div style={{ color: "red" }}>
                                        {formik.errors.expiryDate}
                                    </div>
                                ) : null}
                            </div>

                            <div style={{ width: 60 }} />
                            <div>
                                <Inputfield
                                    placeholder={"000"}
                                    name={"CVV code"}
                                    inputtxt={styles.cvvcodetxt}
                                    id={"cvvCode"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.cvvCode}
                                />
                                {formik.touched.cvvCode && formik.errors.cvvCode ? (
                                    <div style={{ color: "red" }}>
                                        {formik.errors.cvvCode}
                                    </div>
                                ) : null}
                            </div>

                        </div>
                        <div className={styles.container}>

                            <a className={styles.button} onClick={handleSubmit}  >Save</a>
                        </div>
                        {/* <OpticityButton
                        name={"Save"}
                        txtstyle={{ color: '#FFF' }}
                        onClick={handleSave}
                        additionalMainDivClassName={styles.AddClientButton} /> */}
                    </div>
                </div>
            </form>
        </>

    )
}

export default CreditCard