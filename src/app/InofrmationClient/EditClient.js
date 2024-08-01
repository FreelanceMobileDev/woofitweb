
'use client';
import React, { useEffect, useState } from 'react';
import styles from './ClientPage.module.css';
import { CalenderIcon, Coins, Downarrow, LeftArrow, MuscleIcon, PlusIcon } from '../../../public';
import Inputfield from '../_reuseableComponent/Inputfield';
import TextWithButton from '../_reuseableComponent/TextWithButton';
import CreditCard from '../Popups/CreditCard'
import Image from 'next/image';
import profileiconn from '../../../public/Images/profileee.png'
import { useRouter, useSearchParams } from 'next/navigation';
import { getClientDetails, getRates, imageUpload ,createOrUpdateClient} from '../../api/helper';
import { formatDOB, dateFormateDate ,convertDateFormat} from '../../util/common'
import SelectOption from '../_reuseableComponent/SelectOption';
import { useFormik } from 'formik';
import * as Yup from "yup";
import {genderData,experienceOptions,specializationOptions} from '../../util/staticData'

const EditClient = ({ setSelectedItem }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [popupIsOpen, setShowPopup] = useState(false);
  const [catchId, setCoachId] = useState()
  const [getData, setGetData] = useState()
  const [getRetes, setGetRates] = useState([])
  const [image, setImage] = useState();
  const [selectedFile, setSelectedFile] = useState(null);

  const getClientDetail = async () => {
    const respone = await getClientDetails(id)
    setGetData(respone.data)
  }
  const getRateData = async (catchId) => {
    const response = await getRates(catchId)
    setGetRates(response?.data?.data)
  }

  useEffect(() => {
    getClientDetail()
    if (typeof window !== 'undefined') {
      let ddata = localStorage.getItem("id");
      setCoachId(ddata)
    }
  }, [id])
  useEffect(() => {
    if (catchId) {
      getRateData(catchId)
    }
  }, [catchId])

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  const handleFileSelect = async (event) => {
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
        console.log(error, '====error')
      }
    }
  };

  const triggerFileSelect = () => {
    document.getElementById('fileInput').click();
  };


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobileNumber: "",
      DOB:"",
      comment:"",
      trainingGoal:"",
      rate:'',
      gender:""
    },

    onSubmit: async (values) => {
      try {
        if(values.DOB !==getData.clientDetails?.DOB){
          values.DOB=convertDateFormat(values.DOB)
        } 
        if(image){
          values.clientImage=image.image
        }
        try {
          if(getData.clientDetails._id){
            const response= await createOrUpdateClient(getData.clientDetails._id,values)
            console.log(response,'======heteteget')
            getClientDetail(id)
          }else{
            console.log("please select id")
          }
        } catch (error) {
          console.log(error)
        }
        // console.log(values, '===value')
        router.push(`/Clients/clientsInfo?id=${getData.clientDetails?._id}`)
      } catch (error) {
        console.log(error, '====')
      }
    },
  });

  useEffect(() => {
    if (getData) {
      formik.setValues({
        name: getData.clientDetails?.name || '',
        email: getData.clientDetails?.email || '',
        mobileNumber: getData.clientDetails?.mobileNumber || '',
        DOB:getData.clientDetails?.DOB || '',
        comment:getData.clientDetails?.comment || '',
        rate:getData.clientDetails?.rate?._id || '', 
        trainingGoal:getData.clientDetails?.trainingGoal || '', 
        gender:getData.clientDetails?.gender || '', 
        
      });
    }
  }, [getData]);


  return (
<>

    <div className={styles.containor}>
      <div className={styles.headerr}>
        <div className={styles.clietdiv}>
          <div onClick={() => router.push(`/Clients/clientsInfo?id=${id}`)} style={{ cursor: 'pointer' }}>
            <LeftArrow />
          </div>
          <div className={styles.ClientStyle}>Edit Client Profile</div>
        </div>
       
      </div>
      <div className={styles.main_div__}>
        <div className={styles.left_div_profile}>
          <Image
            height={107} width={107}
            src={selectedFile ? selectedFile : getData?.clientDetails?.clientImage}
            style={{ borderRadius: 60 }}
          />
          <div className={styles.changePhoto} onClick={triggerFileSelect} >
            Change Photo
          </div>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileSelect}
            accept="image/*"
          />
        </div>

        <form onSubmit={formik.handleSubmit} >
          <div className={styles.right_div_data}>
            <Inputfield
              name={"Name"}
              id={"name"}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <div className={styles.rateAndGoal}>
              <Inputfield
                name={"Date of Birth"}
                type={"date"}
                id={"DOB"}
                onChange={formik.handleChange}
                value={dateFormateDate(formik.values.DOB)}
                RightIcon={CalenderIcon}
                additionalcontainer={styles.rate_input_div}
              />
              <div style={{ width: 80 }} />

              <SelectOption
                label={"Gender"}
                id={"gender"}
                data={genderData}
                value={formik.values.gender}
                onChange={formik.handleChange}
                selectedId={formik.values.gender}
                RightIcon={Downarrow}
              />
            </div>
  
            <div className={styles.row_div} style={{ marginTop: 20 }}>
              <Inputfield
                input_parent_div_prop={styles.calender_input}
                additionalMainDivClassName={styles.additionalMainDiv}
                additionalinput_field={styles.additionalInputField}
                inputtxt={styles.invoicenumber}
                name="Email"
                id={"email"}
                placeholder={"michelle.rivera@example.com"}
                // onChange={formik.handleChange}
                value={formik?.values?.email}
              />
              <div style={{ width: 40 }} />
              <Inputfield
                img2
                input_parent_div_prop={styles.calender_input}
                additionalMainDivClassName={styles.additionalMainDiv}
                additionalinput_field={styles.additionalInputField}
                inputtxt={styles.invoicenumber}
                type={"number"}
                name="Phone"
                id={"mobileNumber"}
                // onChange={formik.handleChange}
                value={formik?.values?.mobileNumber}
              />
            </div>
            <div className={styles.rateAndGoal}>
              <SelectOption
                label={"Rate"}
                id={"rate"}
                data={getRetes?.getAllRatesData}
                value={formik.values.rate}
                onChange={formik.handleChange}
                selectedId={formik?.values?.rate}
                RightIcon={Downarrow}
              />
              <div style={{ width: 80 }} />
              <SelectOption
                label={"Training Goal"}
                id={"trainingGoal"}
                data={specializationOptions}
                value={formik.values.trainingGoal}
                onChange={formik.handleChange}
                selectedId={formik?.values?.trainingGoal}
                RightIcon={Downarrow}
              />

            </div>
            <div className={styles.Credit_Card}>Credit Card</div>
            <div className={styles.add_card} onClick={openPopup}>
              <PlusIcon />
              Add
            </div>
            <Inputfield
              name={"Comment"}
              id={"comment"}
              additionalMainDivClassName={styles.comment_div_2}
              onChange={formik.handleChange}
              value={formik.values.comment}
            />
          </div>
          <button type="submit" disabled={!formik.dirty || !formik.isValid || formik.isSubmitting} className={styles.SaveButton} >Save</button>
        </form>
      </div>
      {popupIsOpen && <CreditCard show={popupIsOpen} handleClose={closePopup} />}
    </div>
</>
  );
};

export default EditClient
