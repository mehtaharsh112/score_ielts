document.getElementById('ieq').style.display = 'none'

function conv() {

    var name = document.getElementById('np').value
    var listening = document.getElementById('lp').value
    var reading = document.getElementById('rp').value
    var writing = document.getElementById('wp').value
    var speaking = document.getElementById('sp').value
    var overall = document.getElementById('op').value
    if (overall >= 40.8 && overall < 45.4) {
        overall = 5
    }
    else if (overall >= 45.4 && overall < 51.6) {
        overall = 5.5
    }
    else if (overall >= 51.6 && overall < 58.5) {
        overall = 6
    }
    else if (overall >= 58.5 && overall < 66.3) {
        overall = 6.5
    }
    else if (overall >= 66.3 && overall < 74.6) {
        overall = 7
    }
    else if (overall >= 74.6 && overall < 82.3) {
        overall = 7.5
    }
    else if (overall >= 82.3 && overall < 88.1) {
        overall = 8
    }
    else if (overall >= 88.1 && overall < 89) {
        overall = 8.5
    }
    else if (overall >= 89 && overall <= 90) {
        overall = 9
    }
    else if (overall < 23) {
        overall = "Fail"
    }
    else if (overall > 90) {
        overall = "Enter marks between 23 and 90"
    }
    else {
        overall = "Invalid Input"
    }



    if (listening >= 40.2 && listening < 42.7) {
        listening = 5
    }
    else if (listening >= 42.7 && listening < 48.1) {
        listening = 5.5
    }
    else if (listening >= 48.1 && listening < 56.8) {
        listening = 6
    }
    else if (listening >= 56.8 && listening < 66.2) {
        listening = 6.5
    }
    else if (listening >= 66.2 && listening < 73.9) {
        listening = 7
    }
    else if (listening >= 73.9 && listening < 79.4) {
        listening = 7.5
    }
    else if (listening >= 79.4 && listening < 84.7) {
        listening = 8
    }
    else if (listening >= 84.7 && listening < 89) {
        listening = 8.5
    }
    else if (listening >= 89 && listening <= 90) {
        listening = 9
    }
    else if (listening < 23) {
        listening = "Fail"
    }
    else if (listening > 90) {
        listening = "Enter marks between 23 and 90"
    }
    else {
        listening = "Invalid Input"
    }

    if (reading >= 43.0 && reading < 47.9) {
        reading = 5
    }
    else if (reading >= 47.9 && reading < 53.5) {
        reading = 5.5
    }
    else if (reading >= 53.5 && reading < 60.6) {
        reading = 6
    }
    else if (reading >= 60.6 && reading < 67.6) {
        reading = 6.5
    }
    else if (reading >= 67.6 && reading < 73.7) {
        reading = 7
    }
    else if (reading >= 73.7 && reading < 78.4) {
        reading = 7.5
    }
    else if (reading >= 78.4 && reading < 83.7) {
        reading = 8
    }
    else if (reading >= 83.7 && reading < 89) {
        reading = 8.5
    }
    else if (reading >= 89 && reading <= 90) {
        reading = 9
    }
    else if (reading < 23) {
        reading = "Fail"
    }
    else if (reading > 90) {
        reading = "Enter marks between 23 and 90"
    }
    else {
        reading = "Invalid Input"
    }



    if (speaking >= 40.2 && speaking < 42.2) {
        speaking = 5
    }
    else if (speaking >= 42.2 && speaking < 46.2) {
        speaking = 5.5
    }
    else if (speaking >= 46.2 && speaking < 53.5) {
        speaking = 6
    }
    else if (speaking >= 53.5 && speaking < 65.3) {
        speaking = 6.5
    }
    else if (speaking >= 65.3 && speaking < 75.3) {
        speaking = 7
    }
    else if (speaking >= 75.3 && speaking < 80.9) {
        speaking = 7.5
    }
    else if (speaking >= 80.9 && speaking < 85.5) {
        speaking = 8
    }
    else if (speaking >= 85.5 && speaking < 89) {
        speaking = 8.5
    }
    else if (speaking >= 89 && speaking <= 90) {
        speaking = 9
    }
    else if (speaking < 23) {
        speaking = "Fail"
    }
    else if (speaking > 90) {
        speaking = "Enter marks between 23 and 90"
    }
    else {
        speaking = "Invalid Input"
    }



    if (writing >= 43.1 && writing < 51.0) {
        writing = 5
    }
    else if (writing >= 51.0 && writing < 62.2) {
        writing = 5.5
    }
    else if (writing >= 62.2 && writing < 74.1) {
        writing = 6
    }
    else if (writing >= 74.1 && writing < 82.3) {
        writing = 6.5
    }
    else if (writing >= 82.3 && writing < 87.5) {
        writing = 7
    }
    else if (writing >= 87.5 && writing < 89.4) {
        writing = 7.5
    }
    else if (writing >= 89.4 && writing < 89.5) {
        writing = 8
    }
    else if (writing >= 89.5 && writing < 89.7) {
        writing = 8.5
    }
    else if (writing >= 89.7 && writing <= 90) {
        writing = 9
    }
    else if (writing < 23) {
        writing = "Fail"
    }
    else if (writing > 90) {
        writing = "Enter marks between 23 and 90"
    }
    else {
        writing = "Invalid Input"
    }

    document.getElementById('ieq').style.display = 'flex'
    document.getElementById('in').innerHTML = name
    document.getElementById('il').innerHTML = listening
    document.getElementById('ir').innerHTML = reading
    document.getElementById('iw').innerHTML = writing
    document.getElementById('is').innerHTML = speaking
    document.getElementById('io').innerHTML = overall

    // if(overall>=6.5 && listening>=6  && reading>=6  && writing>=6  && speaking>=6)
    // {
    //     document.getElementById('eli').innerHTML = "CAD,USA,AUS,NZ,Europe,UK"
    // }
    // else if(overall<=5.5 && listening<=5.5  && reading<=5.5  && writing<=5.5  && speaking<=5.5)
    // {
    //     document.getElementById('eli').innerHTML = "Needs Improvement. You are not prepared "
    // }
}


function convrem()
{
    document.getElementById('ieq').style.display = 'none'
}