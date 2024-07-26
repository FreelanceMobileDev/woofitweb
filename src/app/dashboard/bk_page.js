'use client';
import styles from "./page.module.css";
import DeshBorad from "./DashCompoent";

import React, { useState } from 'react';
import ScheduleContant from "../_components/ScheduleContant";
import ClientsContant from "../_components/ClientsContant";
import DashboardContent from "../_components/DashboardContent";
import CoachesContant from "../_components/CoachesContant";
import PaymentsContant from "../_components/PaymentsContant";
import ReportsContant from "../_components/ReportsContant";
import Clientinformation from "../InofrmationClient/Clientinformation";
import Coachsinfo from "../CoachesInformation/Coachsinfo";
import EditClient from "../InofrmationClient/EditClient";
import EditCoach from "../CoachesInformation/EditCoach";
import ArchivedCoaches from "../CoachesInformation/ArchivedCoaches";
import ArchivedClients from "../InofrmationClient/ArchivedClients";
import SettingContant from "../_components/SettingContant";
import InvoiceCreate from "../_components/InvoiceCreate";
const DashContant = () => {
  const [selectedItem, setSelectedItem] = useState('Dashboard');
  return (
    <DeshBorad setSelectedItem={setSelectedItem} selectedItem={selectedItem}>
      <div className={styles.dashboard}>
        <div className={styles.dashboard}>
          {/* {selectedItem === 'Dashboard' && <DashboardContent />} */}
          {/* {selectedItem === 'Schedule' && <ScheduleContant />} */}
          {/* {selectedItem === 'Clients' && <ClientsContant setSelectedItem={setSelectedItem} />} */}
          {/* {selectedItem === 'Coaches' && <CoachesContant setSelectedItem={setSelectedItem}/>} */}
          {/* {selectedItem === 'Payments' && <PaymentsContant setSelectedItem={setSelectedItem}/>} */}
          {selectedItem === 'Reports' && <ReportsContant />}
          {/* {selectedItem === 'Settings' && <SettingContant />} */}
          {/* {selectedItem === "ClientInfo" && <Clientinformation  setSelectedItem={setSelectedItem}/>} */}
          {/* {selectedItem === "Coachsinfo" && <Coachsinfo  setSelectedItem={setSelectedItem}/>} */}
          {/* {selectedItem === "EditClient" && <EditClient setSelectedItem={setSelectedItem}/>} */}
          {/* {selectedItem === "EditCoach" && <EditCoach setSelectedItem={setSelectedItem}/>} */}
          {/* {selectedItem === "ArchivedCoaches" && <ArchivedCoaches/>} */}
          {/* {selectedItem === "ArchivedClients" && <ArchivedClients/>} */}
          {selectedItem === "InvoiceCreate" && <InvoiceCreate setSelectedItem={setSelectedItem}/>}
        </div>
      </div>
    </DeshBorad>
  )
}

export default DashContant