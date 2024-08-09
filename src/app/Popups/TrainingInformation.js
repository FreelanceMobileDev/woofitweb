import Image from 'next/image';
import { CalenderIcon, CashIcon, NonCashIcon, ClockIcon, CrossIcon } from '../../../public';
import styles from './Popups.module.css';
import profileiconn from '../../../public/Images/addProfile@2x.png'
import moment from 'moment';
import { createUpdateTrainingSession } from '../../api/helper';
import { toast } from 'react-toastify';
import { useState } from 'react';
import NewTraining from './NewTraining';



const TrainingInformation = ({ show, handleClose, editTraining }) => {
    console.log(editTraining, '====>>>>>editTraining')
    const [newTrainingpop, setNewTrainingpop] = useState(false);
    const name = editTraining?.clients[0]?.name;
    const image = editTraining?.clients[0]?.clientImage;
    const datefromte = moment(editTraining?.startDate).format("DD MMM YYYY");
    const dayFormate = moment(editTraining?.startDate).format('ddd');
    const formattedEndTime = moment(editTraining?.schedule[0]?.endTime, 'HH:mm').format('hh:mm A');
    const formattedStartTime = moment(editTraining?.schedule[0]?.startTime, 'HH:mm').format('hh:mm A');


    const handelCancelOrComplete =async(value)=>{
        const confirm = window.confirm("are you sure you want to "+value)
        if(confirm){
            const payload ={status :value}
            const id = editTraining._id
            try {
                const response = await createUpdateTrainingSession(payload,id)
                if(response.data.success==false){
                    return toast.error(response.data.message)
                }
                console.log(response.data,'=====data')
                toast.success(response.data.message)
                handleClose()
            } catch (error) {
             console.log(error,'===')   
            }
           
        }
    }
    const openTraning = () => {
        setNewTrainingpop(true);
      };

    return (
        <div className={show ? styles.popupDisplay : styles.popupHide}>
            <div className={styles.popupContent}>
                <div className={styles.space_div}>
                    <div style={{ width: 60 }} />
                    <div className={styles.popheadertxt}>{"Training"} </div>
                    <div onClick={handleClose} className={styles.greycrossicon} ><CrossIcon /></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 20, marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#8D99AE26', borderBottomStyle: 'solid' }}>
                    <Image src={image ? image : profileiconn} height={40} width={40} />
                    <div style={{ fontSize: 24, fontWeight: '700', marginLeft: 10 }}>{name}</div>
                </div>
                <div className={styles.details}>
                    <div className={styles.schedule}>
                        <p><strong>Schedule</strong></p>
                        <div style={{ display: 'flex', alignItems: 'center', }}>
                            <CalenderIcon />
                            <div style={{ marginLeft: 10 }}>
                                <div>{datefromte}</div>
                                <div>{dayFormate}</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', }}>
                            <ClockIcon />
                            <p style={{ marginLeft: 10 }}>{formattedStartTime} - {formattedEndTime}</p>
                        </div>
                    </div>
                    <div className={styles.priceDetails} >

                        <p><strong>Price for Training</strong></p>
                        <p>$70</p>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                            <div>

                                <p><strong>Number of Trainings</strong></p>
                                <p>{editTraining?.clients?.length ? editTraining?.clients?.length : editTraining?.group?.length}</p>

                            </div>
                            <div>
                                <p><strong>Amount</strong></p>
                                <p>$140</p>
                            </div>
                            <div />
                        </div>
                    </div>
                    <div className={styles.paymentType}>
                        <div><strong>Type of Payment</strong></div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {editTraining?.paymentMode=="cash"? <CashIcon /> : <NonCashIcon /> }
                            <p style={{ marginLeft: 10 }}>{editTraining.paymentMode}</p>
                        </div>
                    </div>
                </div>
                

                {editTraining.status === "pending" && <>
                    <div className={styles.actions} style={{ display: 'flex', alignItems: 'center', width: '90%', justifyContent: 'space-between', alignSelf: 'center', marginLeft: 30, }}>
                    <div onClick={openTraning} style={{ borderRadius: 30, width: '40%', justifyContent: 'center', alignItems: 'center', display: 'flex', height: 50, backgroundColor: '#CFF3FD', color: '#14AED1' }}>Edit</div>
                    <div   onClick={()=>handelCancelOrComplete("canceled")}  style={{ borderRadius: 30, width: '40%', justifyContent: 'center', alignItems: 'center', display: 'flex', height: 50, backgroundColor: '#FFE6D7', color: '#FE4726' }}>Cancel</div>
                </div>
                <div
                 style={{ borderRadius: 30, width: '90%', justifyContent: 'center', alignItems: 'center', display: 'flex', height: 50, backgroundColor: '#14AED1',color: '#FFFFFF', marginTop: 30, alignSelf: 'center', display: 'flex', marginLeft: 30, }}
                  onClick={()=>handelCancelOrComplete("complete")}    >Mark as Complete</div>
                </>}
                {newTrainingpop && <NewTraining show={newTrainingpop} handleClose={handleClose} editTraining={editTraining} />}
            </div>
        </div>
    );
};

export default TrainingInformation;
