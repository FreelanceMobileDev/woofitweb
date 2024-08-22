"use client"
import Image from 'next/image';
import { CrossIcon, FilterIcon, LeftArrow, SearchIcon } from '../../../public';
import styles from './Popups.module.css';
import backbodyimg from '../../../public/Images/backbody.png'
import sidebodyimg from '../../../public/Images/sideBody.png'
import frontbodyimg from '../../../public/Images/front_body.png'
import leftarmimg from '../../../public/Images/leftARm.png'
import RightARM from '../../../public/Images/RightARM.png'
import AddPhoto from './AddPhoto'
import { useState } from 'react';
import { deleteClientImage, getClientImage } from '../../api/helper';
import { useSearchParams } from 'next/navigation';
const AddBodyPhoto = ({ setPopup, clientImage, getData }) => {
    const [popups, setpopups] = useState(false)

    const data = [
        { position: 'Back', size: '24.4', image: backbodyimg },
        { position: 'Front', size: '24.5', image: frontbodyimg },
        { position: 'Side', size: '24.2', image: sidebodyimg },
        { position: 'Left Arm', size: '24.2', image: leftarmimg },
        { position: 'Right Arm', size: '24.2', image: RightARM },
    ]

    const handelDelete = async (id) => {
        // console.log(id, '==id')
        try {
            const confirm = window.confirm("Are you sure you want to delete")
            if (confirm) {

                const response = await deleteClientImage(`id=${id}`)
                console.log("here", response)
                getData()
            }
        } catch (error) {
            console.log(error, '===getData')
        }
    }

    return (
        <div className={styles.popupDisplay} style={{ height: '100vh' }}>
            <div className={styles.popupContent} style={{ height: '80vh', marginTop: 40 }}>
                <div className={styles.space_div}>
                    <div onClick={() => setPopup(false)} style={{ cursor: "pointer" }} ><LeftArrow /></div>
                    <div className={styles.popheadertxt}>Photos</div>
                    <div className={styles.row} style={{ color: '#14AED1', fontSize: 30, cursor: "pointer" }} onClick={() => setpopups(true)} >+</div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '7px',
                        marginTop: 40
                    }}
                >
                    {clientImage && clientImage.data.length > 0 ?
                        clientImage && clientImage.data && clientImage.data.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    height: 150, width: 135,
                                }}
                            >
                                <div style={{ marginBottom: '5px', textAlign: 'left', marginLeft: 5 }}>{item?.side}</div>
                                <div style={{ position: 'absolute', marginLeft: 121, zIndex: 100, marginTop: -7, cursor: "pointer" }} onClick={() => handelDelete(item._id)} >
                                    <CrossIcon />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Image height={90} width={130} src={item?.image} alt={item?.side} style={{ marginBottom: '5px', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                                    <div>{item?.size}</div>
                                </div>
                            </div>
                        )) : "Photo Not Available"}
                </div>
                {popups && <AddPhoto setpopups={setpopups} getData={getData} />}

            </div>
        </div>
    )
}
export default AddBodyPhoto