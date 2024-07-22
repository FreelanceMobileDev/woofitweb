import React from 'react';
import { Downarrow, VisaIcon } from '../../../public';
import IndiaFlag from '../../../public/Images/IndiaFlag';
import styles from './Componet.module.css'

const Inputfield = ({ style, input_parent_div_prop,
    inputtxt, name, img5, img1, img2, img3,
    type, id, placeholder, additionalMainDivClassName,
    additionalinput_field, onChange, value }) => {
    return (
        <div style={style} className={`${styles.input_parent_div} ${input_parent_div_prop}`}>
            <div className={styles.space_div}>
                <div className={`${styles.inputtxt} ${inputtxt}`}>{name}</div>
                {img5 && <div className={`${styles.inputtxt} ${inputtxt}`} style={{ marginRight: 10 }}><VisaIcon /></div>}
            </div>
            <div className={`${styles.input_main_div} ${additionalMainDivClassName}`}>
                {img1 && img1}
                {img2 && (
                    <div className={styles.leftImage}>
                        <IndiaFlag />
                        <Downarrow />
                    </div>
                )}
                {img3 && (
                    <div className={styles.lefttxtx}>
                        USD
                    </div>
                )}
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className={`${styles.input_field} ${additionalinput_field}`}
                    onChange={onChange}
                    value={value}
                />
                {img2 && img2}
            </div>
        </div>
    );
};

export default Inputfield;
