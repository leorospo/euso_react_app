import moment from 'moment'

export const eusoConvertTimeHHmm = (time) => {
    return (moment.unix(time.seconds).format('HH:mm'))
}

// TO BE COMPLETED
export const eusoConvertTime = (time) => {
    const now = moment(new Date)
    console.log(now)

    // FUNZIONAMENTO ASPETTATO
    // return HH:mm se la data è di oggi
    // return yesterday se la data è del giorno di ieri
    // retutn day/month se la data è di questo anno
    // return day/month/year

    return (moment.unix(time.seconds).format('HH:mm'))
}