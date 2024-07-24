import React from 'react'
import styles from './Componet.module.css'
function SelectOption({ label, buttonText, data,onChange, id,RightIcon, LeftIcon, props, RightBox, space,  }) {
    return (
        <div style={props?.style} className={`${styles.container} ${props?.additionalcontainer}`}>
            <label className={styles.label}>{label}</label>
            {space && <dev style={{ marginTop: 16 }}></dev>}
            <div  >
                <select className={`${styles.content} ${props?.additionalcontent}` } id={id}  onChange={onChange}  >
                    <option >Select Option</option>
                    {data?.map((val) =>
                        <option value={val}>{val}</option>
                    )}
                </select>
                {/* {LeftIcon && <LeftIcon className={styles.icon} />} */}
                {/* <span  className={styles.text}>{text}</span> */}

                {buttonText && <div className={`${styles.button} ${props?.additionalbuttontext}`}>{buttonText}</div>}
                {/* {RightIcon && <RightIcon className={styles.icon} />} */}



                {RightBox &&
                    <div className={styles.rightboxdiv}>
                        <RightBox />
                    </div>}
            </div>
        </div>
    )
}

export default SelectOption