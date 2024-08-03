"use client";
import React, { useEffect, useState } from "react";
import styles from "./Popups.module.css";
import { CrossIcon } from "../../../public";
import TextWithButton from "../_reuseableComponent/TextWithButton";
import OpticityButton from "../_reuseableComponent/OpicityButton";
import Inputfield from "../_reuseableComponent/Inputfield";
import Image from "next/image";
import profilepicture from "../../../public/Images/profilepic.png";
import { getClinent, updateGroup } from "../../api/helper";
import check from "../../../public/Images/Checkflieddbox.png";
import nocheck from "../../../public/Images/Checkbox@2x.png";
import Loader from "../_components/Loader";

const GroupEdit = ({ data, show, handleClose }) => {
  const [clientData, setclientData] = useState([]);
  const [type, setType] = useState("Group");
  const [loader, setLoader] = useState(true);
  const [comment, setcomment] = useState("");
  const [groudClients, setGroupClients] = useState(
    data?.clients ? data?.clients : []
  );

  const handleSave = () => {
    handleClose();
  };

  const getAllClients = async () => {
    setLoader(true);
    const getData = await getClinent("0");
    setclientData(getData?.data?.data?.getAllClientData);
    setLoader(false);
  };

  useEffect(() => {
    getAllClients();
  }, []);

  const checktheSelecteditems = (item) => {
    if (findclient(item?._id)) {
      const updatedItems = groudClients.filter(
        (items) => items._id !== item?._id
      );
      setGroupClients(updatedItems);
    } else {
      setGroupClients([...groudClients, item]);
    }
  };

  const findclient = (id) => {
    return groudClients.find((item) => item._id === id);
  };

  const updateThisGroup = async () => {
    setLoader(true);
    const updatedItems = groudClients.map((item) => item?._id);
    console.log(data?._id, "updatedItems======>");
    const param = { clients: updatedItems, comment: comment };
    const response = await updateGroup(param, data?._id);
    setLoader(false);
    if (response?.data?.success) {
      handleClose();
      alert(response?.data?.message);
    }
  };

  return (
    <div className={show ? styles.popupDisplay : styles.popupHide}>
      {loader && <Loader loader={loader} />}
      <div className={styles.popupContent}>
        <div className={styles.space_div}>
          <div style={{ width: 60 }} />
          {/* <div className={styles.popheadertxt}>Edit Group</div> */}
          <div onClick={handleClose} className={styles.greycrossicon}>
            <CrossIcon />
          </div>
        </div>
        <TextWithButton
          label={"Group Name"}
          additionalcontainer={styles.TextWithButtonstyle}
          text={data?.name}
        />
        <div style={{ marginLeft: 10 }}>
          <div className={styles.space_div} style={{ marginTop: 18 }}>
            <div className={styles.Clientaddtxt}>Groups</div>
            <div
              onClick={() => {
                type === "Group" ? setType("All") : setType("Group");
              }}
              className={styles.add_buttn}
            >
              {type === "Group" ? "Add" : "Cancel"}
            </div>
          </div>

          {type === "Group" && (
            <div className={styles.scroll_div}>
              {groudClients?.map((item, index) => (
                <div
                  key={index}
                  className={styles.space_div}
                  style={{ marginBottom: 10, marginTop: 10 }}
                >
                  <div className={styles.row_div}>
                    <Image
                      src={
                        item?.clientImage ? item?.clientImage : profilepicture
                      }
                      alt={item.name}
                      width={50}
                      height={50}
                      style={{ borderRadius: 25 }}
                    />
                    <div className={styles.client_name_style}>{item.name}</div>
                  </div>

                  <div onClick={()=>{ checktheSelecteditems(item);}}>
                    <CrossIcon />
                  </div>
                </div>
              ))}
            </div>
          )}
          {type === "All" && (
            <div className={styles.scroll_div}>
              {clientData?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={styles.space_div}
                    style={{ marginBottom: 10, marginTop: 10 }}
                  >
                    <div className={styles.row_div}>
                      <Image
                        src={
                          item?.clientImage ? item?.clientImage : profilepicture
                        }
                        alt={item.name}
                        width={50}
                        height={50}
                        style={{ borderRadius: 25 }}
                      />
                      <div className={styles.client_name_style}>
                        {item.name}
                      </div>
                    </div>
                    <div>
                      <Image
                        onClick={() => {
                          checktheSelecteditems(item);
                        }}
                        src={findclient(item?._id) ? check : nocheck}
                        height={15}
                        width={15}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <Inputfield
          name={"Comment"}
          additionalMainDivClassName={styles.comment_div_2}
          onChange={(e) => {
            setcomment(e.target.value);
          }}
          value={comment}
        />
        <OpticityButton
          onClick={() => {
            updateThisGroup();
          }}
          name={"Save"}
          txtstyle={{ color: "#FFF" }}
          additionalMainDivClassName={styles.SaveButton}
        />
      </div>
    </div>
  );
};

export default GroupEdit;
