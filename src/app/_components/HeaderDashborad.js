import Image from 'next/image';
import Notificationimg from '../../../public/Images/Notificationimg';
import Searchimg from '../../../public/Images/Searchimg';
import Inputfield from '../_reuseableComponent/Inputfield';
import styles from './Login.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div style={{width:'30%',}}>
      <Inputfield
      img1={<Searchimg/>}
      type="text" placeholder="Search Users"
      additionalMainDivClassName={styles.searchinput}
      additionalinput_field={styles.searchtxt}
      />
     </div>
      <div className={styles.userInfo}>
      
       
        <Image height={40} width={40} src="/images/profilepic.png" alt="User Avatar" className={styles.avatar} />
        <span className={styles.hellousername}>Hello James!</span>
        <Notificationimg
        className={styles.Notificationimg}
        />
      </div>
    </header>
  );
};

export default Header;
