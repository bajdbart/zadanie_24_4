const formatDate = (timeInSeconds) => {
    let time = parseInt(timeInSeconds);
    let sec = 0;
    let min = 0;
    let hour = 0;

    if (time < 60) { //1. First condition
        return `${time}s`;
    } else if (time < 3600) { //2. Second condition
        min = Math.floor(time / 60);
        sec = time - min * 60;
        if (sec === 0) {
            return `${min}m`;
        } return `${min}m ${sec}s`;
    } else if (time >= 3600) { //3. Third condition
        hour = Math.floor(time / 3600);
        min = Math.floor((time - hour * 3600) / 60);
        sec = time - hour * 3600 - min * 60;
        if (sec === 0) {
            if (min === 0) {
                return `${hour}h`;
            }
            return `${hour}h ${min}m`;
        } else if (min === 0) {
            return `${hour}h ${sec}s`;
        } return `${hour}h ${min}m ${sec}s`;
    } return '0s';
}

module.exports = formatDate;