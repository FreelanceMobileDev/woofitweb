"use client";
import { useEffect, useState } from "react";
import { EditIcon, DeleteIcon } from "../../../public"; // Adjust the import paths accordingly
import styles from "./Login.module.css";
import GroupEdit from "../Popups/GroupEdit";
import { deleteGroup, getGroupList } from "../../api/helper";
import profileiconn from '../../../public/Images/addProfile@2x.png'
import Loader from "./Loader";



const GroupData = ({ updateGroup, setUpdateGroup,search}) => {
 
  const [getdata, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [popupIsOpen, setShowPopup] = useState(false);
  const [data, setgroupData] = useState(null);

  const openPopup = (group) => {
    setgroupData(group);
    setShowPopup(true);
  };
  useEffect(() => {
    if (updateGroup) {
      setUpdateGroup(false)
      getApiGroup();
    }
  }, [updateGroup])

  const closePopup = () => {
    setShowPopup(false);
  };
  const id = localStorage.getItem("id");
  const getApiGroup = async (search) => {
    try {
      if(!search){
        setLoading(true);
      }
      const getData = await getGroupList(id,search);
      setData(getData.data.data.data);
    } catch (error) {
      console.log(error, "====error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    if(search?.length>0){
      getApiGroup(`&search=${search}`)
    }else{
      getApiGroup()
    }
  },[search])

  
  useEffect(() => {
    getApiGroup();
  }, [popupIsOpen]);

  const deletetThisGroup = async (id) => {
    const confirmed = window.confirm("Are you sure you want to Delete group?");
    if (confirmed) {
      setLoading(true)
      const respone = await deleteGroup(id)
      getApiGroup();
      setLoading(false)
    }
  }

  const GroupItem = ({ group }) => {
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
                    src={`${img.clientImage
                        ? img.clientImage
                        : profileiconn.src
                      }`}
                    alt={profileiconn.src}
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
          <div onClick={() => { deletetThisGroup(group?._id) }}>
            <DeleteIcon className={styles.actionIcon} />
          </div>
        </div>
      </div>
    );
  };
 

  return (
    <div className={styles.groupsContainer}>
       <Loader loading={loading} />
      { getdata&& getdata.length==0? <>
      <div>
        No Groups
      </div>
      </>: getdata &&
        getdata?.map((group, index) => <GroupItem key={index} group={group} />)}
      {popupIsOpen && (
        <GroupEdit data={data} show={popupIsOpen} handleClose={closePopup} />
      )}
    </div>
  );
};

export default GroupData;
