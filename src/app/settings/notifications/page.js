'use client';

import DeshBorad from '../../dashboard/DashCompoent'
import SettingSidebar from '../settingSidebar'
import styles from '../Setting.module.css'
import React, { useState } from 'react';


function page() {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    return (
        <>
            <DeshBorad >
                <SettingSidebar >
                    <div className={styles.right_div_data}>
                        <div className={styles.space_div} style={{ marginTop: 30 }}>
                            <div className={styles.notificationText} >Push Notifications</div>
                            <div className={styles.switchContainer}>
                                <div
                                    className={`${styles.switchButton} ${isToggled ? styles.on : styles.off}`}
                                    onClick={handleToggle}
                                >
                                    <div className={styles.switchCircle}></div>
                                </div>

                            </div>
                        </div>
                        <div className={styles.space_div} style={{ marginTop: 30 }}>
                            <div className={styles.notificationText}>Email Notifications</div>
                            <div className={styles.switchContainer}>
                                <div
                                    className={`${styles.switchButton} ${isToggled ? styles.on : styles.off}`}
                                    onClick={handleToggle}
                                >
                                    <div className={styles.switchCircle}></div>
                                </div>

                            </div>
                        </div>
                        <div className={styles.space_div} style={{ marginTop: 30 }}>
                            <div className={styles.notificationText} >Offers</div>
                            <div className={styles.switchContainer}>
                                <div
                                    className={`${styles.switchButton} ${isToggled ? styles.on : styles.off}`}
                                    onClick={handleToggle}
                                >
                                    <div className={styles.switchCircle}></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </SettingSidebar>
            </DeshBorad>
        </>
    )
}

export default page