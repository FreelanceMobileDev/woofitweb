import React from 'react';
import styles from './ClientPage.module.css';


const Measurements = () => {
  const data = [
    { position: 'Back', size: '24.4', image: '/images/backbody.png' },
    { position: 'Front', size: '24.5', image: '/images/front_body.png' },
    { position: 'Side', size: '24.2', image: '/images/sideBody.png' },
    { position: 'Left Arm', size: '24.2', image: '/images/leftARm.png' },
    { position: 'Right Arm', size: '24.2', image: '/images/RightARM.png' },
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
                <img src={item.image} className={styles.image_body} />
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

              <img src='/images/chartimg.png' className={styles.chart} />

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Measurements;