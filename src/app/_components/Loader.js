// components/Loader.js
"use client";
import loaderImage from '../../../public/Images/loaderIcon.gif';
import {
    Modal,
    ModalBody,
} from "@nextui-org/modal";
const Loader = ({loading}) => {
    return (
        <Modal isOpen={loading}>
            <ModalBody>
                <div style={{
                    position: 'fixed',  // Fixed positioning to cover the entire viewport
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',  // Semi-transparent background
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999  // Ensure it is on top of other content
                }}>
                    <img src={loaderImage.src} alt="Loading..." style={{ width: '50px', height: '50px' }} />
                </div>
            </ModalBody>
        </Modal>
    );
};

export default Loader;
