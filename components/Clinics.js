import styles from './clinics.module.scss'
import Card from './Card'

const Clinics = () => {
    return (
        <div className={styles.heading}>
            <h1 className={styles.title}>
                Våre klinikker
            </h1>
            <Card />
        </div>
    )
}

export default Clinics