"use client";
import { useEffect, useState } from "react";
import { EditIcon, DeleteIcon } from "../../../public"; // Adjust the import paths accordingly
import styles from "./Login.module.css";
import GroupEdit from "../Popups/GroupEdit";
import { getGroupList } from "../../api/helper";
import Loader from "./Loader";

const GroupData = () => {
  const [getdata, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [popupIsOpen, setShowPopup] = useState(false);
  const [data, setgroupData] = useState(null);

  const openPopup = (group) => {
    setgroupData(group);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  const getApiGroup = async () => {
    try {
      setLoading(true);
      const id = localStorage.getItem("id");
      const getData = await getGroupList(id);
      setData(getData.data.data.data);
    } catch (error) {
      console.log(error, "====error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApiGroup();
  }, [popupIsOpen]);

  const GroupItem = ({ group }) => {
    // console.log(name,'====name')

    return (
      <div className={styles.groupItem}>
        <div className={styles.groupContent}>
          <div className={styles.groupTitle}>{group?.name}</div>
          <div style={{ display: "flex", marginTop: 25, alignItems: "center" }}>
            <div className={styles.groupClients}>
              {group?.clients?.length} Clients
            </div>
            <div className={styles.groupImages}>
              {group?.clients &&
                group?.clients?.map((img, index) => (
                  <img
                    key={index}
                    src={`${
                      img.clientImage
                        ? img.clientImage
                        : "/images/profilepic.png"
                    }`}
                    alt={`/images/profilepic.png`}
                    className={styles.clientImage}
                  />
                ))}
              {/* {additionalClients > 0 && <span className={styles.additionalClients}>+{additionalClients}</span>} */}
            </div>
          </div>
        </div>
        <div className={styles.groupActions}>
          <div
            onClick={() => {
              openPopup(group);
            }}
          >
            <EditIcon className={styles.actionIcon} />
          </div>
          <div style={{ width: 20 }} />
          <div>
            <DeleteIcon className={styles.actionIcon} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.groupsContainer}>
      <Loader loading={loading} />
      {getdata &&
        getdata?.map((group, index) => <GroupItem key={index} group={group} />)}
      {popupIsOpen && (
        <GroupEdit data={data} show={popupIsOpen} handleClose={closePopup} />
      )}
    </div>
  );
};

export default GroupData;
