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
    
    //Genearate schedule
    let timeFrom, timeTo, timeString
    const schedule = daysShortName.map((day, i) => {
        //Format the time and create a time string
        timeFrom = formatTime(openingHours[day].periods[0].from)
        timeTo = formatTime(openingHours[day].periods[0].to)
        if (openingHours[day].isOpen) {
            timeString = timeFrom == timeTo ? 'All day' : `${timeFrom} - ${timeTo}`
        } else ( timeString = 'Closed')

        return (
            {
                day: daysFullName[i],
                time: timeString
            }        
        )
    })
    
    //Merge days with similar schedule
    let mergedDays = schedule.reduce((previous, current) => {
        let last = previous[previous.length - 1]
        if(last && last.time == current.time) {
            last.endDay = current.day
        } else {
            previous.push(current)
        }
        return previous
    }, [])

    //Separate days and time to make it easier to format
    mergedDays = mergedDays.map(item => { 
        return {
            days: [item.day, item.endDay && ' - ' + item.endDay],
            time: [item.time],
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