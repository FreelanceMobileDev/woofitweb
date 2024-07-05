import styles from './Componet.module.css'

const OpticityButton = (props) => {
    return (
        <>

            <div
            onClick={props?.onClick}
                style={props?.style}
                className={`${styles.button_main_div} ${props.additionalMainDivClassName}`}>
                <div
                    style={props?.txtstyle}
                    className={styles.buttonname}
                >
                    {props?.name}
                </div>
            </div>
        </>
    )
}
export default OpticityButton