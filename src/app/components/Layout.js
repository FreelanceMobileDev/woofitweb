// components/Layout.js

import Header from "../_components/HeaderDashborad";
import Sidebar from "../_components/SidebarDashborad";
import styles from '../dashboard/Woofit.module.css'


const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
