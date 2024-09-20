'use client';
import { AboutusIcon, EmailIcon, PrivecyIcon, Rightarrow, TermsIcon } from '../../../../public'
import ContectPopup from './ContectPopup';
import PageContent from './PageContent'
import styles from '../Setting.module.css'
import React, { useEffect, useState } from 'react';
import DeshBorad from "../../dashboard/DashCompoent";
import SettingSidebar from "../settingSidebar";
import { getContents } from '../../../api/helper';
import Loader from '../../_components/Loader';


function page() {
  const [showPopup, setShowPopup] = useState(false);
  const [content, setContent] = useState(false)
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([])
  const [contentData, setcontentData] = useState({})

  const handleEmailClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const getContent = async () => {
    try {
      setLoading(true)
      const response = await getContents()
      // console.log(response.data, '===response,')
      setList(response.data.data)
    } catch (error) {
      console.log(error, '===error')
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    getContent()
  }, [])


  const items = [
    { name: 'About Us', icon: <AboutusIcon />, type: "aboutUs" },
    { name: 'Terms of Use', icon: <TermsIcon />, type: "termsAndConditions" },
    { name: 'Privacy Policy', icon: <PrivecyIcon />, type: "privacyPolicy" },
  ];

  const iconMapping = {
    aboutUs: <AboutusIcon />,
    termsAndConditions: <TermsIcon />,
    privacyPolicy: <PrivecyIcon />,
  };


  const finalItems = (list && list.length > 0) ? list.map(item => ({
    name: item.title,
    icon: iconMapping[item.type] || null,
    ...item
  })) : items;

  return (
    <>
      <DeshBorad>
        <SettingSidebar >
          <Loader loading={loading} />
          <div className={styles?.right_div_data}>
            <div className={styles?.ContachUstxt}>Contact Us</div>
            <div className={styles?.Email_div} onClick={handleEmailClick}>
              <div className={styles?.row}>
                <EmailIcon /> <div className={styles?.emailtxtt}>Email</div>
              </div>
              <Rightarrow />
            </div>
            <div className={styles?.ContachUstxt}>Other</div>
            {finalItems && finalItems?.map((item, index) => (
              <div key={index} className={styles?.Email_div} onClick={() => { setContent(true), setcontentData(item)  }}>
                <div className={styles?.row}>
                  {item.icon}
                  <div className={styles?.emailtxtt}>{item.name}</div>
                </div>
                <Rightarrow />
              </div>
            ))}
            <PageContent show={content} setContent={setContent} data={contentData} />
            <ContectPopup show={showPopup} handleClose={closePopup} />
          </div>
        </SettingSidebar>
      </DeshBorad>
    </>
  )
}

export default page