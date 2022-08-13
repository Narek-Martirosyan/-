export const kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
}

export const unixTimestamp = (unix) => {
    let date = new Date(unix * 1000);
    let hours = date.getHours();
    let minutes = "" + date.getMinutes();
    let seconds = "" + date.getSeconds();

    if (+minutes < 10) {
        minutes = "0" + date.getMinutes();
    }
    if (+seconds < 10) {
        seconds = "0" + date.getSeconds();
    }

    return hours + ':' + minutes?.substring(-2) + ':' + seconds?.substring(-2);
}