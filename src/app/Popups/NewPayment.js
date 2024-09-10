"use client"
import React, { useState } from 'react';
import styles from './Popups.module.css';
import { CalenderIcon, CashSecondIcon, CrossIcon, NonCashIcon, Rightarrow, Userimg } from '../../../public';
import Inputfield from '../_reuseableComponent/Inputfield';
import TextWithButton from '../_reuseableComponent/TextWithButton';
import OpticityButton from '../_reuseableComponent/OpicityButton';
import SelectOption from '../_reuseableComponent/SelectOption';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { toast } from 'react-toastify';
import { payments } from '../../api/helper';
import Loader from '../_components/Loader';


const NewPayment = ({ catchId, show, handleClose, id, clientData, priceForTraining }) => {
    const [selected, setSelected] = useState('cash');
    const [date, setDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        clientId: id ? id : "", coachId: catchId, paymentMode: selected, numberOfTranning: "",
        date: moment(date).format('YYYY-MM-DD'), priceForTraining: priceForTraining,
        amount: "",
        createdAt: Date.now()
    })

    const onSelectDate = (date) => {
        setDate(date);
        setFormData({ ...formData, date: moment(date).format('YYYY-MM-DD') })
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id == "numberOfTranning") {
            setFormData({ ...formData, [id]: value, amount: formData.priceForTraining * value })
        } else {
            setFormData({ ...formData, [id]: value })
        }
    }


    const handleToggle = (selection) => {
        setSelected(selection);
        setFormData({ ...formData, paymentMode: selection })
    };


    const handleSave = async () => {
        try {
            setLoading(true)
            if (!formData.coachId) {
                return toast.error("coachId is required")
            }
            if (!formData.numberOfTranning) {
                return toast.error("Please Enter Number Of Tranning")
            }
            const response = await payments(formData)
            toast.success(response.data.message)
            handleClose();
        } catch (error) {
            console.log(error, '==error')
        } finally {
            setLoading(false)
        }

    };

    return (
        <div className={show ? styles.popupDisplay : styles.popupHide}>

            <div className={styles.popupContent}>
                <div className={styles.space_div}>
                    <div />
                    <div className={styles.popheadertxt}>New Payment</div>
                    <div onClick={handleClose} className={styles.greycrossicon}><CrossIcon /></div>

                    {loading && <Loader loading={loading} />}
                </div>

                <SelectOption
                    label={"Select a Client"}
                    data={clientData}
                    id="clientId"
                    selectedId={id ? id : formData.clientId}
                    onChange={id ? "" : handleChange}
                />

                <div className={styles.CalenderDivOuter}>
                    <DatePicker
                        selected={date}
                        onChange={onSelectDate}
                        dateFormat="yyyy/MM/dd"
                        placeholderText="Select Date of Birth"
                        className={styles.CalenderDiv}
                        minDate={new Date()}
                        showYearDropdown
                        scrollableYearDropdown
                        showMonthDropdown
                    />
                    <CalenderIcon />
                </div>

                {/* {formik.touched.DOB && formik.errors.DOB ? (
                    <div style={{ color: "red" }}>{formik.errors.DOB}</div>
                ) : null} */}


                {/* <TextWithButton
                    label={"Date"}
                    RightIcon={CalenderIcon}
                    input_parent_div_prop={styles.TextWithButtonstyle}
                    text={'14 Mar 2002'}
                /> */}

                <Inputfield
                    img3
                    name={'Price for Training'}
                    input_parent_div_prop={styles.UsdInput}
                    value={priceForTraining}
                    id="priceForTraining"
                    onChange={priceForTraining ? "" : handleChange}
                />
                <div className={styles.row_div} style={{ marginTop: 20 }}>
                    <Inputfield
                        input_parent_div_prop={styles.calender_input}
                        additionalMainDivClassName={styles.additionalMainDiv}
                        additionalinput_field={styles.additionalInputField}
                        inputtxt={styles.invoicenumber}
                        name="Number of Trainings"
                        placeholder={"Exp=4"}
                        type="number"
                        id="numberOfTranning"
                        onChange={handleChange}
                    />
                    <div style={{ width: 40 }} />
                    <Inputfield
                        img3
                        input_parent_div_prop={styles.calender_input}
                        additionalMainDivClassName={styles.additionalMainDiv}
                        additionalinput_field={styles.additionalInputField}
                        inputtxt={styles.invoicenumber}
                        name="Amount"
                        value={formData.amount || 0}

                    />
                </div>
                <div className={styles.paymentTypetxt}>Type of Payment</div>
                <div className={styles.row_div} style={{ justifyContent: 'space-between' }}>
                    <div className={`${selected === 'cash' ? styles.cashDiv : styles.noncash}`}
                        onClick={() => handleToggle('cash')}>
                        <CashSecondIcon className={selected === 'cash' ? styles.selectedIcon : styles.unselectedIcon} />
                        <div className={` ${selected === 'cash' ? styles.Cashtxt : styles.noncashtxt}`}>Cash</div>
                    </div>
                    <div className={` ${selected === 'card' ? styles.cashDiv : styles.noncash}`}
                        onClick={() => handleToggle('card')}>
                        <NonCashIcon className={selected === 'card' ? styles.selectedIcon : styles.unselectedIcon} />
                        <div className={`${selected === 'card' ? styles.Cashtxt : styles.noncashtxt}`}>Non-Cash</div>
                    </div>
                </div>
                <OpticityButton
                    onClick={() => handleSave()}
                    name={'Save'}
                    txtstyle={{ color: '#FFF' }}
                    additionalMainDivClassName={styles.SaveButton}

                />
            </div>
        </div>
    );
};

export default NewPayment;

