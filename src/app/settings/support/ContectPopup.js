"use client"
import React, { useEffect, useState } from 'react';
import styles from '../Setting.module.css'
import { CrossIcon } from '../../../../public';
import Inputfield from '../../_reuseableComponent/Inputfield';
import OpticityButton from '../../_reuseableComponent/OpicityButton';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { contectUs } from '../../../api/helper';
import Loader from '../../_components/Loader';

function ContectPopup({ show, handleClose }) {
  const { email } = JSON.parse(localStorage.getItem("userData"))
  const [loading, setLoading] = useState(false);
  

  // create-contact-us
  const formik = useFormik({
    initialValues: {
      title: "",
      message: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values) => {
      try {
         setLoading(true);
        values.email = email
        const response = await contectUs(values)
        if(response.data.success==false){
          return toast.error(response.data.message)
        }
        toast.success("Thank you for your feedback")
        formik.resetForm();
        handleClose()
      } catch (error) {
        setLoading(false);
        console.log(error, '====')
      } finally {
        setLoading(false);
      }
    },
  });

  

  return (
    <div className={show ? styles.popupDisplay : styles.popupHide}>
        <Loader loading={loading} />
      <div className={styles.popupContent}>
        <div className={styles.space_div}>
          <div />
          <div className={styles.popheadertxt}>Contact Us</div>
          <div onClick={handleClose} className={styles.greycrossicon}><CrossIcon /></div>

        </div>
        <form onSubmit={formik.handleSubmit}>
          <Inputfield
            name={"Title"}
            id={"title"}
            placeholder={"Enter your title here"}
            additionalMainDivClassName={styles.Title_div_2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div style={{ color: 'red' }}>{formik.errors.title}</div>
          ) : null}
          <Inputfield
            name={"Message"}
            id={"message"}
            additionalMainDivClassName={styles.comment_div_2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <div style={{ color: 'red' }}>{formik.errors.message}</div>
          ) : null}

          <button type='submit' className={styles.AddClientButton} >Submit</button>

          <OpticityButton
            name={"Submit"}
            txtstyle={{ color: '#FFF' }}
            additionalMainDivClassName={styles.AddClientButton}
          />
        </form>
      </div>
    </div>
  );
}

export default ContectPopup