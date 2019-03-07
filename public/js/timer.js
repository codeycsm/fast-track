
if(!isLoggedIn()) {
    window.location = '/';
}
else {
    $("#timer-container").show();
}

let startTime;
let endTime;
let interval;
let fasting;



$(document).ready(function() {

    $('.collapsible').collapsible();

    $('#16hr').on("click", function() {
        startFast(16);
    });

    $('#24hr').on("click", function() {
        startFast(24);
    });

    $('#custom').on("click", function() {
        startFast();
    });

    $('#end_fast').on("click", function() {
        endOrNewFast();
    });

    $("#logout").on("click", function() {
        signOut();
    });

    $("#assessment").on("click", function() {
        window.location = '/fast-data';
    });

});

function startFast(preset) {

    startTime = moment();
    endTime = null;

    if(preset) {
        endTime = moment(startTime).add(preset, 'h');
    }
    else {
        endTime = getCustomEnd(startTime);
    }

    //use for testing
    // alert(`startTime: ${startTime} endTime: ${endTime}`);

    if(endTime !== null) {
        postFast(moment(startTime).toString(), moment(endTime).toString());
        startFastTimer();
    }

}

function getCustomEnd(start) {


    let min = $('#custom_min').val().trim();
    let hr = $('#custom_hr').val().trim();
    let day = $('#custom_day').val().trim();

    let end = start;

    end = moment(end).add(min, 'm');
    end = moment(end).add(hr, 'h');
    end = moment(end).add(day, 'd');

    if(moment(start).diff(moment(end)) === 0) {
        //todo: add modal for invalid time
        alert('Please input a valid custom time');
        end = null;
    }
    
    return end;

}

function postFast (start, end) {

    user = getUser();

    let data = {
        id: user.id,
        startTime: start,
        endTime: end
    }

    $.post('/current-fast', data, function (data) {
        console.log(data);
    });

}

function postToPrevious (start, end, duration) {

    user = getUser();

    let data = {
        startTime: start,
        endTime: end,
        totalTime: duration,
        UserId: user.id,
    }

    $.post('/past-fast', data, function (data) {
        console.log(data);
    });

}

function startFastTimer () {
    
    $('#scheduler').hide();
    $('#header').text('Current Fast');
    $('#timer').show();

    fasting = true;

    timerTic();

    interval = setInterval(timerTic, 1000);

}

function timerTic () {

    let now = moment();

    let elapsed = moment(endTime).diff(moment(now));

    if(elapsed <= 0) {
        fasting = false;
        endFast();
    }
    else {
        $('#time_left').text(formatTime(elapsed));
    }

}

function endFast() {

    clearInterval(interval);

    let durationMili = moment(endTime).diff(moment(startTime));
    duration = formatTime(durationMili);

    $('#end_fast').html('Start new fast');
    $('#time_left').text(`You fasted for ${duration}`);

    postToPrevious(moment(startTime).toString(), moment(endTime).toString(), durationMili);

    startTime = null;
    endTime = null;
    postFast();

}

function endOrNewFast() {
    
    if(fasting === true) {
        fasting = false;
        endTime = moment();
        endFast();
    }
    else {
        $('#timer').hide();
        $('#header').text('Fast Duration');
        $('#scheduler').show();
    }
}