import React from 'react'
import styles from './Componet.module.css'
function SelectOption({ label, buttonText, data, onChange, id, selectedId, RightIcon, LeftIcon, props, RightBox, space, }) {
    return (
        <div style={props?.style} className={`${styles.container} ${props?.additionalcontainer}`}>
            <label className={styles.label}>{label}</label>
            {space && <dev style={{ marginTop: 16 }}></dev>}
            <div  >
                <select className={`${styles.content} ${props?.additionalcontent}`} id={id} value={selectedId} onChange={onChange}  >
                    <option >Select Option</option>
                    {data && data?.map((val, i) =>
                        <option key={val?._id} value={val?._id} >{val?.name}</option>
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