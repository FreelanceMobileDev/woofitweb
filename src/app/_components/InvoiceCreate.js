'use client';
import React, { useState } from 'react';
import { CalenderIcon, Coins, Downarrow, LeftArrow, LogoWoofit } from '../../../public';
import styles from './Login.module.css';
import Inputfield from '../_reuseableComponent/Inputfield';
import TextWithButton from '../_reuseableComponent/TextWithButton';
const InvoiceCreate = ({setSelectedItem}) => {

    return (
        <div>
            <div className={styles.InvoiceCreate_Header}>
                <div className={styles.headerrrrr}>
                <div onClick={()=>{setSelectedItem('Payments')}} style={{cursor:'pointer'}}>
                    <LeftArrow />
                    </div>
                    <div style={{ marginLeft: 40 }}>Create Invoice</div>
                </div>
            </div>
            <div className={styles.flex_row}>
                <div className={styles.createinvoice_Left}>
                    <TextWithButton
                        label={"Client"}
                    />
                    <div className={styles.space_div} style={{ paddingLeft: 20, paddingRight: 8 }} >
                        <Inputfield
                            input_parent_div_prop={styles.calender_input}
                            additionalMainDivClassName={styles.additionalMainDiv}
                            additionalinput_field={styles.additionalInputField}
                            inputtxt={styles.invoicenumber}
                            name="Invoice ID"

                        />
                        <TextWithButton
                            label={"Date"}
                            RightIcon={CalenderIcon}
                            text={"14 Mar 2002"}
                            props={{ additionalcontainer: styles.calender_input }}
                        />
                    </div>
                    <TextWithButton
                        label="Rate"
                        text="Optimum"
                        buttonText="$80"
                        LeftIcon={Coins}
                        RightIcon={Downarrow}
                    // additionalcontainer={styles.rate_input_div}
                    />
                    <div className={styles.space_div} style={{ paddingLeft: 20, paddingRight: 8, marginTop: 20 }} >
                        <Inputfield
                            input_parent_div_prop={styles.calender_input}
                            additionalMainDivClassName={styles.additionalMainDiv}
                            additionalinput_field={styles.additionalInputField}
                            inputtxt={styles.invoicenumber}
                            name="Number of Trainings"
                            placeholder={"4"}
                        />
                        <Inputfield
                            img3
                            input_parent_div_prop={styles.calender_input}
                            additionalMainDivClassName={styles.additionalMainDiv}
                            additionalinput_field={styles.additionalInputField}
                            inputtxt={styles.invoicenumber}
                            name="Amount"

                        />

                    </div>
                    <div className={styles.button_div_} >
                        <div className={styles.flex_row}>
                            <div className={styles.Send_Invoice}>
                                Send Invoice
                            </div>
                            <div className={styles.Save_invoice}>
                                Save
                            </div>
                        </div>
                    </div>
                </div>










                <div style={{ padding: 30,paddingBottom:0,marginBottom:30 }}>
                    <div className={styles.right_invoice_data}>
                        <div className={styles.invoice_logo}>
                            <LogoWoofit />
                        </div> <div className={styles.invoiceContainer}>
                            <div className={styles.header2}>
                                <div className={styles.headerLeft}>
                                    <div className={styles.invoiceid_txt}>Invoice ID</div>
                                    <div className={styles.invoiceid}>79214079</div>
                                </div>
                                <div className={styles.headerRight}>
                                    <div className={styles.invoiceid_txt}>Date</div>
                                    <div className={styles.invoiceid}>May 31, 2024</div>
                                </div>
                            </div>
                            <div className={styles.fromToSection}>
                                <div className={styles.headerLeft}>
                                    <div className={styles.form_txt}>From</div>
                                    <div className={styles.woofit_txtt}>WooFit</div>
                                    <div className={styles.from_number}>(239) 555-0108</div>
                                    <div className={styles.from_number}>Nathan.Roberts@Example.Com</div>
                                </div>
                                <div className={styles.headerRight3}>
                                    <div className={styles.form_txt}>To</div>
                                    <div className={styles.woofit_txtt}>Declan Mcgowan</div>
                                    <div className={styles.from_number}>(603) 555-0123</div>
                                    <div className={styles.from_number}>Willie.Jennings@Example.Com</div>
                                </div>
                            </div>
                            <div className={styles.divider}></div>
                            <table className={styles.invoiceTable}>
                                <thead className={styles.borderbottom}>
                                    <tr>
                                        <th className={styles.training_dis}>Training Description</th>
                                        <th className={styles.training_dis}>Cost</th>
                                        <th className={styles.training_dis}>QTY</th>
                                        <th className={styles.training_dis}>Price</th>
                                    </tr>
                                </thead>
                                <thead >
                                    <tr >
                                        <th className={styles.Muscle_Gain_txtt}>Muscle Gain</th>
                                        <th className={styles.Muscle_Gain_txtt} style={{fontWeight:'500'}}>$40</th>
                                        <th className={styles.Muscle_Gain_txtt} style={{fontWeight:'500'}}>1</th>
                                        <th className={styles.total_amount} >$40.00</th>
                                    </tr>
                                    <tr>
                                        <th className={styles.Muscle_Gain_txtt}>Step Aerobics</th>
                                        <th className={styles.Muscle_Gain_txtt} style={{fontWeight:'500'}}>$40</th>
                                        <th className={styles.Muscle_Gain_txtt} style={{fontWeight:'500'}}>1</th>
                                        <th className={styles.total_amount} >$40.00</th>
                                    </tr>
                                </thead>
                            </table>
                            <div style={{display:'flex',alignItems:'center'}}>
                                <div style={{width:'55%'}}></div>
                                <div className={styles.summary2}>
                                <div className={styles.summaryItem}>
                                    <span className={styles.sub_total_style}>Sub Total</span>
                                    <span className={styles.total_amount}>$100.00</span>
                                </div>
                                <div className={styles.summaryItem}>
                                    <span className={styles.sub_total_style}>Tax (10%)</span>
                                    <span className={styles.total_amount}>$10.00</span>
                                </div>
                                <div className={styles.summaryItem}>
                                    <span className={styles.sub_total_style}>Discount</span>
                                    <span className={styles.total_amount}>-</span>
                                </div>
                                <div className={styles.summaryItem}>
                                    <span className={styles.sub_total_style}>Total Amount</span>
                                    <span className={styles.total_amount}>$110.00</span>
                                </div>
                            </div>
                            </div>
                           
                           
                        </div>
                        <div className={styles.footer}>
                               <div className={styles.total_amount}>Thank you!</div>
                               <div className={styles.sub_total_style}>(239) 555-0108</div>
                               <div className={styles.sub_total_style}>www. woofit.com</div>
                               </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InvoiceCreate