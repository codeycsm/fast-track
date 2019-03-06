
function formatTime( ms ) {
   
    //convert to seconds:
    var seconds = ms / 1000;

    // extract days
    var days = parseInt( seconds / 86400); // 86,400 seconds in 1 day
    seconds = seconds % 86400; // seconds remaining after extracting days

    // extract hours
    var hours = parseInt( seconds / 3600 ); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours

    // extract minutes
    var minutes = parseInt( seconds / 60 ); // 60 seconds in 1 minute

    // keep only seconds not extracted to minutes and round them to the nearest second
    seconds = parseInt(seconds % 60);

    let time = `${hours}:${minutes}:${seconds}`

    if(days != 0)
    {
        time = `${days}:` + time;
    }

    return time;
}