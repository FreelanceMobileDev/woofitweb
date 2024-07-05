"use client"
import React, { useState } from 'react';
import styles from './Popups.module.css';
import { CrossIcon, Rightarrow,} from '../../../public';
import TextWithButton from '../_reuseableComponent/TextWithButton';
import OpticityButton from '../_reuseableComponent/OpicityButton';
import Inputfield from '../_reuseableComponent/Inputfield';
import Clients from '../Popups/Clients'

const Clientsdata = [
    { name: '6 Clients', count: '+3', avatar: '/images/profilepic.png', avatar1: '/images/profilepic.png', avatar2: '/images/profilepic.png', },
]

const RateEdit = ({ show, handleClose }) => {
    const [clientsopen, setclientsopen] = useState(false);
    
      const closePopup = () => {
        setclientsopen(false);
      };

    const handleSave = () => {
        setclientsopen(true);
        handleClose()
    };
    return (
        <div className={show ? styles.popupDisplay : styles.popupHide}>
            <div className={styles.popupContent} style={{marginTop:30,marginBottom:30}}>
                <div className={styles.space_div}>
                    <div style={{ width: 60 }} />
                    <div className={styles.popheadertxt}>Edit Rate</div>
                    <div onClick={handleClose} className={styles.greycrossicon}><CrossIcon /></div>

                </div>
                <TextWithButton
                    label={"Name"}
                    // RightIcon={CalenderIcon}
                    additionalcontainer={styles.TextWithButtonstyle}
                    text={'Light'}
                />
                <Inputfield
                    img3
                    name={'Price for Training'}
                    additionalcontainer={styles.UsdInput2}
                />
                <div style={{ marginLeft: 10,marginTop:30 }}>
                  

                    {Clientsdata.map((item, index) => (
                        <div key={index} className={styles.space_div} style={{ marginBottom: 10, marginTop: 10 }} onClick={handleSave} >
                            <div className={styles.client_name_style2} style={{ marginLeft: 0 }}>{item.name}</div>
                            <div className={styles.row}>
                                <img src={item.avatar} className={styles.avatar2}/> <img src={item.avatar1}className={styles.avatar2} /> <img src={item.avatar2}className={styles.avatar2}/> <div className={styles.group_count}>{item.count}</div>
                                <div style={{marginLeft:10}}>
                                    <Rightarrow />
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
                <Inputfield
                    name={'Comment'}
                    additionalMainDivClassName={styles.comment_div_2}
                />
                <OpticityButton
                    onClick={handleClose}
                    name={'Save'}
                    txtstyle={{ color: '#FFF' }}
                    additionalMainDivClassName={styles.SaveButton}
                />
            </div>
            {clientsopen && <Clients show={clientsopen} handleClose={closePopup} />}
        </div>
    )
}

export default RateEdit