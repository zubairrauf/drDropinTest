import styles from './card.module.scss'

const Card = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Majorstuen</h2>
            <div className={styles.schedule}>
                <p className={styles.schedule_days}>Monday</p>
                <p className={styles.schedule_time}>9 - 22</p>
            </div>
        </div>
    )
}

export default Card