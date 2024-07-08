import React from 'react';
import styles from './ClientPage.module.css';
import Image from 'next/image';
import backbodyimg from '../../../public/Images/backbody.png'
import sidebodyimg from '../../../public/Images/sideBody.png'
import frontbodyimg from '../../../public/Images/front_body.png'
import leftarmimg from '../../../public/Images/leftARm.png'
import RightARM from '../../../public/Images/RightARM.png'
import chartimgg from '../../../public/Images/chartimg.png'
const Measurements = () => {
  const data = [
    { position: 'Back', size: '24.4', image:backbodyimg },
    { position: 'Front', size: '24.5', image: frontbodyimg },
    { position: 'Side', size: '24.2', image: sidebodyimg },
    { position: 'Left Arm', size: '24.2', image: leftarmimg },
    { position: 'Right Arm', size: '24.2', image:RightARM },
  ]
  return (
    <div className={styles.measurements}>
      <div className={styles.tabs2}>
        <button className={`${styles.tab} ${styles.activeTab2}`}>Current</button>
        <button className={styles.tab}>22 Aug</button>
        <button className={styles.tab}>10 Aug</button>
        <button className={styles.tab}>28 Jul</button>
        <button className={styles.tab}>12 Jul</button>
      </div>
      <h1 className={styles.header_txtt}>Photos</h1>
      <div className={styles.photos}>
        {data.map((item, index) => (
          <div key={index}>
           <div className={styles.bodysizestyle} style={{textAlign:'left'}}>{item.position}</div>
              <div className={styles.main_photo_div}>
                <Image height={90} width={130} src={item.image} className={styles.image_body} />
                <div className={styles.bodysizestyle}>{item.size}</div>
              </div>
         

          </div>
        ))}
      </div>
      <h1 className={styles.header_txtt}>Metrics</h1>
      <div className={styles.metrics}>
        {[
          { title: 'Weight', value: '70 kg', change: '-0.5', changeType: 'negative' },
          { title: 'Neck', value: '35 cm', change: '+2', changeType: 'positive' },
          { title: 'Chest', value: '82 cm', change: '+0.5', changeType: 'positive' },
          { title: 'Waist', value: '80 cm', change: '+1', changeType: 'positive' },
        ].map((metric, index) => (
          <div>
            <p className={styles.metricTitle}>{metric.title}</p>
            <div className={styles.metricItem} key={index}>
              <div className={styles.metricHeader}>
                <div className={styles.space_view}>
                  <div className={styles.metric_value}>{metric.value}</div>
                  <div className={`${styles.metricValue} ${metric.changeType === 'positive' ? styles.positiveChange : styles.negativeChange}`}>
                    {metric.change}
                  </div>
                </div>
                <div className={styles.space_view}>24.20</div>
              </div>

              <Image src={chartimgg} className={styles.chart}
              width={'100%'}
              />

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Measurements;