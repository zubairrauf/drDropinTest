import styles from './card.module.scss'

const Card = ({ clinic }) => {
    //Convert millisecods to time
    const formatTime = duration => {
        let minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;

        return hours + ":" + minutes;
    }

    const { name, openingHours } = clinic
    const daysShortName= ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
    const daysFullName= ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satureday', 'Sunday']
    const schedule = daysShortName.map((day, i) => (
        {
            day: daysFullName[i],
            time: openingHours[day].isOpen ? `${formatTime(openingHours[day].periods[0].from)} - ${formatTime(openingHours[day].periods[0].to)}` : 'Closed'
        }
        
    ))
    
    //Merge days with similar schedule
    let merged = schedule.reduce((prev, curr) => {
        let last = prev[prev.length - 1]
        if(last && last.time == curr.time) {
            last.endDay = curr.day
        } else {
            prev.push(curr)
        }
        return prev
    }, [])

    //Reformat mergedDays to make them easier to style
    let mergedDays = merged.map(v => { 
        return {
           days: [v.day, v.endDay && ' - ' + v.endDay],
           time: [v.time],
        };
     });

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{name}</h2>
            {mergedDays.map(day => {
                return(
                    <div className={styles.schedule}>
                        <p className={styles.schedule_days}>{day.days}</p>
                        <p className={styles.schedule_time}>{day.time}</p> 
                    </div>
                )
            })}
        </div>
    )
}

export default Card