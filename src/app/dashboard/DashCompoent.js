'use client';
import Header from '../_components/HeaderDashborad'
import Sidebar from '../_components/SidebarDashborad'
import styles from './Woofit.module.css'
const DeshBorad = ({ children,setSelectedItem }) => {

  return (
  
      <div className={styles.layout}>
      <Sidebar setSelectedItem={setSelectedItem}/>
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>

  
  )
}

export default DeshBorad


