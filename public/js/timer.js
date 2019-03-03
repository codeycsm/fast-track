
$(document).ready(function() {
    $('.collapsible').collapsible();

    $("#16hr").on("click", function() {
        startFast(16);
    });

    $("#24hr").on("click", function() {
        startFast(24);
    });

    $("#custom").on("click", function() {
        startFast();
    });

});

function startFast(preset) {

    let startTime = moment();
    let endTime = null;

    if(preset) {
        endTime = moment(startTime).add(preset, 'h');
    }
    else {
        endTime = getCustomEnd(startTime);
    }

    //use for testing
    // alert(`startTime: ${startTime} endTime: ${endTime}`);

}

function getCustomEnd(startTime) {

    let min = $('#custom_min').val().trim();
    let hr = $('#custom_hr').val().trim();
    let day = $('#custom_day').val().trim();

    let endTime = startTime;

    endTime = moment(endTime).add(min, 'm');
    endTime = moment(endTime).add(hr, 'h');
    endTime = moment(endTime).add(day, 'd');

    if(moment(startTime).diff(moment(endTime)) === 0) {
        alert('Please input a valid custom time');
    }
    else {
        return endTime;
    }

}