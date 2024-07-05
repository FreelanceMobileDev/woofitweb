'use client';
import { Downarrow, Rightarrow } from '../../../public';
import styles from './Setting.module.css'
import React, { useState } from 'react';

const FAQsScreen = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqData = [
    {
      question: "     What Is The Duration Of The Staff Augmentation Contract?",
      answer: "",
    },
    {
      question: "What Is The Cost Of Training Services And How Is It Calculated?",
      answer: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.",
    },
    {
      question: "How Do You Handle Communication With Clients In Different Time Zones?",
      answer: "",
    },
    {
      question: "Where Can I Find My Activation Number?",
      answer: "",
    },
    {
      question: "What Types Of Roles Can Be Filled Through Staff Augmentation?",
      answer: "",
    },
    {
      question: "On How Many Devices Can I Use CleanMyMac X?",
      answer: "",
    },
  ];
  return (
    <div className={styles.right_div_data}>
   <div className={styles.faqContainer}>
      {faqData.map((item, index) => (
        <div key={index} className={styles.faqItem}>
          <div className={styles.question} onClick={() => handleToggle(index)}>
            <span>{index + 1}. {item.question}</span>
            <span className={styles.arrow}>
              {openIndex === index ? <Downarrow /> : <Rightarrow />}
            </span>
          </div>
          {openIndex === index && <div className={styles.answer}>{item.answer}</div>}
        </div>
      ))}
    </div>
   </div>
   
  )
}

export default FAQsScreen