
'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ClientPage.module.css';
import { CalenderIcon, Coins, CrossIcon, Downarrow, LeftArrow, MuscleIcon, PlusIcon, VisaIcon } from '../../../public';
import Inputfield from '../_reuseableComponent/Inputfield';
import TextWithButton from '../_reuseableComponent/TextWithButton';
import CreditCard from '../Popups/CreditCard'
import Image from 'next/image';
import profileiconn from '../../../public/Images/addProfile@2x.png'
import { useFormik } from 'formik';
import {
  getClientDetails,
  getRates,
  imageUpload,
  createOrUpdateClient,
  addCard,
  deleteClient,
  DeleteCard,
} from "../../api/helper";
import * as Yup from "yup";
import moment from "moment";
import Loader from "../_components/Loader";
import { useRouter, useSearchParams } from 'next/navigation';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectOption from '../_reuseableComponent/SelectOption';
import { genderData, specializationOptions } from '../../util/staticData';
import {
  formatDOB,
  dateFormateDate,
  convertDateFormat,
} from "../../util/common";
import { toast } from 'react-toastify';

const EditClient = ({ setSelectedItem }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [popupIsOpen, setShowPopup] = useState(false);
  const [catchId, setCoachId] = useState();
  const [getData, setGetData] = useState();
  const [getRetes, setGetRates] = useState([]);
  const [image, setImage] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrormsg] = useState();
  const [date, setDate] = useState("");
  const [caredData, setCardData] = useState([])

  // console.log(caredData, '==caredData================>>>>>>>>>>>>>>')
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (catchId) {
      getRateData(catchId);
    }
  }, [catchId]);

  const getClientDetail = async () => {
    try {
      setLoading(true);
      const respone = await getClientDetails(id);
      setGetData(respone.data);
      setCardData(respone.data.clientDetails.cards)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getRateData = async (catchId) => {
    try {
      setLoading(true);
      const response = await getRates(catchId);
      setGetRates(response?.data?.data);
      if (response?.data?.data.getAllRatesData.length == 0) {
        return toast.error("Please Add Rate Firts")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getClientDetail();
    }
    if (typeof window !== "undefined") {
      let ddata = localStorage.getItem("id");
      setCoachId(ddata);
    }
  }, [id]);


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobileNumber: "",
      DOB: date,
      comment: "",
      trainingGoal: "",
      rate: "",
      gender: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      mobileNumber: Yup.string()
        .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
        .required("Mobile number is required"),
      // DOB:  

      comment: Yup.string().required("Comment is required").max(500, "Comment cannot exceed 500 characters"),
      trainingGoal: Yup.string().required("Training goal is required"),
      rate: Yup.string().required("Rate is required"),
      gender: Yup.string().required("Gender is required"),
    }),


    onSubmit: async (values) => {

      setErrormsg("");
      setLoading(true);
      let param = {
        "name": values.name,
        "email": values.email,
        "mobileNumber": values.mobileNumber,
        "DOB": moment(date).format("YYYY-MM-DD"),
        "comment": values.comment,
        "trainingGoal": values.trainingGoal,
        "rate": values.rate,
        "gender": values.gender,
        "coachId": values.coachId
      }

      // if (caredData) {
      //   values = { ...param, ...caredData }
      // }
      try {

        const expectedFormat = "YYYY-MM-DD";
        if (moment(param.DOB, expectedFormat, true).isValid())
          values.DOB = convertDateFormat(param.DOB);

        if (image) {
          values.clientImage = image.image;
        }

        try {
          if (getData?.clientDetails?._id) {
            const response = await createOrUpdateClient(
              values, getData.clientDetails._id,
            );
            let data = caredData
              .filter(e => !e._id)
              .map(e => ({
                ...e,
                clientId: getData.clientDetails?._id
              }));
            if (data.length > 0) {
              addCardDb(data)
            }

            getClientDetail(id);
            toast.success(response.data.message)
            return router.push(
              `/Clients/clientsInfo?id=${getData.clientDetails?._id}`
            );
          } else {
            values.coachId = catchId;
            const response = await createOrUpdateClient(values);
            if (response.data.success == false) {
              return setErrormsg(response?.data);
            }

            if (caredData.length > 0) {
              let data = caredData.map((e) => {
                return { ...e, clientId: response.data.data._id };
              });
              addCardDb(data)
            }
            toast.success(response.data.message)
            return router.push(`/Clients`);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      } catch (error) {
        console.log(error, "====");
      } finally {
        setLoading(false);
      }
    },
  });

  const addCardDb = async (data) => {
    try {
      const ddd = await addCard(data)
    } catch (error) {
      console.log(error)
    }

  }
  // const DeleteClient=async(id)=>{
  //   try {
  //     await deleteClient(id)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    if (getData && id) {
      formik.setValues({
        name: getData.clientDetails?.name || "",
        email: getData.clientDetails?.email || "",
        mobileNumber: getData.clientDetails?.mobileNumber || "",
        DOB: getData.clientDetails?.DOB || "",
        comment: getData.clientDetails?.comment || "",
        rate: getData.clientDetails?.rate?._id || "",
        trainingGoal: getData.clientDetails?.trainingGoal || "",
        gender: getData.clientDetails?.gender || "",
      });
      setDate(getData.clientDetails?.DOB || "")
    }
  }, [getData]);


  const handleFileSelect = async (event) => {
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
        setImage({ image: imgData?.data?.filename });
      } catch (error) {
        console.log(error, "====error");
      }
    }
  };

  const triggerFileSelect = () => {
    setErrormsg("")
    document.getElementById("fileInput").click();
  };
  const onSelectDate = (date) => {
    setDate(date);
  };


  const deleteCard = (value) => {
    if (value?._id) {
      const confirmed = window.confirm("Are you sure you want to Delete?");
      if (confirmed) {
        DeteteCares(value?._id)
        let dd = caredData.filter(e => e._id !== value._id);
        setCardData(dd)
      }
    } else {
      let dd = caredData.filter(e => e.cardNumber !== value.cardNumber);
      setCardData(dd)
    }
  }
  const DeteteCares = async (id) => {
    await DeleteCard(id)
    // DeletecardDb
  }
  // const shouldShowAddButton = !(getData?.cardDetails?.length > 0 || caredData !== null);

  return (
    <>
      <Loader loading={loading} />
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.containor}>
          <div className={styles.headerr}>
            <div className={styles.clietdiv}>
              <div onClick={() => router.push(id ? `/Clients/clientsInfo?id=${id}` : "/Clients")} style={{ cursor: 'pointer' }}>
                <LeftArrow />
              </div>
              <div className={styles.ClientStyle}> {id ? "Edit Client Profile" : "Add Client"}</div>
            </div>

            {/* <div className={styles.SaveButton}>Save</div> */}
            <button type="submit" className={styles.SaveButton}>
              Save
            </button>
          </div>
          <div className={styles.main_div__}>
            <div className={styles.left_div_profile}>
              <Image
                height={107} width={107}
                src={
                  selectedFile ||
                  getData?.clientDetails?.clientImage ||
                  profileiconn
                }
                style={{ borderRadius: 60 }}
              />
              <div className={styles.changePhoto} onClick={triggerFileSelect} >
                Change Photo
              </div>
              {errMessage ? (
                <div style={{ color: "red" }}>{errMessage?.message}</div>
              ) : null}
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileSelect}
                accept="image/*"
              />
            </div>

            <div className={styles.right_div_data}>
              <Inputfield
                name={"Name"}
                id={"name"}
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div style={{ color: "red", marginLeft: 10 }}>
                  {formik.errors.name}
                </div>
              ) : null}


              <div className={styles.row_div} style={{ marginTop: 20, }}>
                <div style={{ width: "45%" }}>
                  <Inputfield
                    input_parent_div_prop={styles.calender_input}
                    additionalMainDivClassName={styles.additionalMainDiv}
                    additionalinput_field={styles.additionalInputField}
                    inputtxt={styles.invoicenumber}
                    name="Email"
                    id={"email"}
                    placeholder={"michelle.rivera@example.com"}
                    onChange={id ? "" : formik.handleChange}
                    value={formik?.values?.email}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                  ) : null}
                </div>

                <div style={{ width: '5%' }} />
                <div style={{ width: "45%" }}>
                  <Inputfield
                    img2
                    input_parent_div_prop={styles.calender_input}
                    additionalMainDivClassName={styles.additionalMainDiv}
                    additionalinput_field={styles.additionalInputField}
                    inputtxt={styles.invoicenumber}
                    type={"phone"}
                    name="Phone"
                    id={"mobileNumber"}
                    onChange={id ? "" : formik.handleChange}
                    value={formik?.values?.mobileNumber}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                    <div style={{ color: "red" }}>
                      {formik.errors.mobileNumber}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className={styles.rateAndGoal} style={{ width: '97%', alignSelf: 'center' }}>
                <div style={{ width: "45%", }}>
                  <div className={styles.doblabel}  >Date of Birth</div>
                  <div className={styles.CalenderDivOuter} >
                    <DatePicker
                      selected={date}
                      onChange={onSelectDate}
                      dateFormat="yyyy/MM/dd"
                      placeholderText="Select Date of Birth"
                      className={styles.CalenderDiv}
                      maxDate={new Date()}
                    />
                    <CalenderIcon />
                    {formik.touched.DOB && formik.errors.DOB ? (
                      <div style={{ color: "red", marginLeft: 15 }}>
                        {formik.errors.DOB}
                      </div>
                    ) : null}
                  </div>

                </div>
                {/* <div style={{ width: 30 }} /> */}
                <div style={{ width: "49.5%", }}>
                  <SelectOption
                    label={"Gender"}
                    id={"gender"}
                    data={genderData}
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    selectedId={formik.values.gender}
                    RightIcon={Downarrow}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.gender && formik.errors.gender ? (
                    <div style={{ color: "red", marginLeft: 15 }}>
                      {formik.errors.gender}
                    </div>
                  ) : null}
                </div>

              </div>

              <div className={styles.rateAndGoal} style={{ width: '98%', alignSelf: 'center' }}>
                <div style={{ width: "47.5%", }}>
                  <SelectOption
                    label={"Rate"}
                    id={"rate"}
                    data={getRetes?.getAllRatesData}
                    value={formik.values.rate}
                    onChange={formik.handleChange}
                    selectedId={formik?.values?.rate}
                    RightIcon={Downarrow}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.rate && formik.errors.rate ? (
                    <div style={{ color: "red", marginLeft: 15 }}>
                      {formik.errors.rate}
                    </div>
                  ) : null}
                </div>
                <div></div>
                <div style={{ width: "49.5%", }}>
                  <SelectOption
                    label={"Training Goal"}
                    id={"trainingGoal"}
                    data={specializationOptions}
                    value={formik.values.trainingGoal}
                    onChange={formik.handleChange}
                    selectedId={formik?.values?.trainingGoal}
                    RightIcon={Downarrow}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.trainingGoal && formik.errors.trainingGoal ? (
                    <div style={{ color: "red", marginLeft: 15 }}>
                      {formik.errors.trainingGoal}
                    </div>
                  ) : null}
                </div>
              </div>
              {
                caredData.length == 0 && (
                  <>
                    <div className={styles.Credit_Card}>Credit Card</div>
                    <div className={styles.add_card} onClick={openPopup}>
                      <PlusIcon />
                      Add
                    </div>
                  </>
                )
              }

              {caredData && caredData.length > 0 && (
                <div className={styles.cardcontainer}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={styles.Credit_Card}>Credit Card</div>
                    <div
                      style={{ display: 'flex', alignItems: 'center', marginLeft: 10, marginBottom: 5 }}
                      onClick={openPopup}
                    >
                      <PlusIcon />
                      Add
                    </div>
                  </div>
                  {
                    caredData?.map((e) =>
                      <div className={styles.card}>
                        <div className={styles.cardType}>
                          <VisaIcon />
                          <span style={{ marginLeft: "10px" }}>
                            {e.cardHolderName ? e?.cardHolderName : e?.name} xxxx {e.cardHolderName ? e?.cardNumber : e?.name}
                          </span>
                        </div>
                        <div className={styles.actions} onClick={() => deleteCard(e)}>
                          <CrossIcon />
                        </div>
                      </div>
                    )
                  }

                </div>
              )}
              <div>
                <Inputfield
                  name={"Comment"}
                  id={"comment"}
                  additionalMainDivClassName={styles.comment_div_2}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                />
                {formik.touched.comment && formik.errors.comment ? (
                  <div style={{ color: "red", marginLeft: 15 }}>{formik.errors.comment}</div>
                ) : null}
              </div>
            </div>
          </div>
          {popupIsOpen && <CreditCard show={popupIsOpen} handleClose={closePopup} setCardData={setCardData} caredData={caredData} />}
        </div>

      </form>
    </>

  );
};

export default EditClient

