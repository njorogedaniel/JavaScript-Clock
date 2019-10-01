var wakeUpTime = 7;
var noon = 12;
var lunchTime = 12;
var napTime = lunchTime + 2;
var partyTime;
var evening = 18;

var showCurrentTime = function () {
    var clock = document.getElementById('clock');

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var sec = currentTime.getSeconds();
    var meridian = "AM";

    if (hours >= noon){
        meridian = "PM";
    }
    if (hours > noon){
        hours = hours - 12;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (sec < 10){
        sec = "0" + sec;
    }
    var clockTime = hours + ':' + minutes + ':' + sec + ':' + meridian;
    clock.innerText = clockTime;
};

var updateClock = function () {
    var time = new Date().getHours();
    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    var timeEventJS = document.getElementById('timeEvent');
    var lolcatImages = document.getElementById('lolcatImage');

    if (time === partyTime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's party";
    }else if (time === lunchTime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Let's have some lunch"
    }else if (time === napTime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Sleep tight";
    }else if (time < noon){
        image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
        messageText = "Good Morning";
    }else if (time >= evening){
        image = "https://upload.wikimedia.org/wikimedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good Evening !";

    }else {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good Afternoon";
    }
    console.log(messageText);
    timeEventJS.innerText = messageText;
    lolcatImages.src = image;

    showCurrentTime();
};
updateClock();

var timeInterval = 1000;
setInterval(updateClock, timeInterval);
//Getting party Time button to work
var partyButton = document.getElementById('partyTimeButton');

var partyEvent = function () {
    if (partyTime < 0){
        partyTime = new Date().getHours();
        partyButton.innerText = "Party Over";
        partyButton.style.backgroundColor = "#0A8DAB";
    } else {
        partyTime = -1;
        partyButton.innerText = "party time";
        partyButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

//Activates wakeup selector

var wakeUpTimeSelector =
    document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function () {
    wakeUpTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

//Activates lunck=h time selector
var lunchTimeSelector =
    document.getElementById("lunchTimeSelector");
var lunchEvent = function () {
    lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", lunchEvent);

//Activates nap time selector
// var  napTimeSelector =
//     document.getElementById("napTimeSelector");
// var napEvent = function () {
//     napTime = napTimeSelector.value;
// };
napTimeSelector.addEventListener("change", napEvent);