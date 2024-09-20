import React from 'react'
import styles from '../Setting.module.css'
import { CrossIcon } from '../../../../public'
import Inputfield from '../../_reuseableComponent/Inputfield'

function PageContent({ show, setContent, data }) {
    return (

        <div className={show ? styles.popupDisplay : styles.popupHide}>
            <div className={styles.popupContent}>
                <div className={styles.space_div}>
                    <div />
                    <div className={styles.popheadertxt}>{data.name}</div>
                    <div onClick={() => setContent(false)} className={styles.greycrossicon}><CrossIcon /></div>
                </div>
                <form >
                    {/* <Inputfield
                        name={"Title"}
                        id={"title"}
                        placeholder={"Enter your title here"}
                        additionalMainDivClassName={styles.Title_div_2}
                        value={"sajdhkjashdkhkj"}
                        disabled={true}
                    /> */}

                    {/* <label style={{display:"flex", marginTop:10}}> Content </label> */}
                    <p >{data.description}</p>

                </form>
            </div>
        </div>

    )
}

export default PageContent