import styles from './clinics.module.scss'
import Card from './Card'

const Clinics = ({ data }) => {
    return (
        <div className={styles.heading}>
            <h1 className={styles.title}>
                Våre klinikker
            </h1>
            { data.map(clinic => (
                <Card clinic={clinic}/>
            ))}
        </div>
    )
}

export default Clinics

