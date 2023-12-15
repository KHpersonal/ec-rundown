// Replace this with your actual events
var events = [
    {time: '10:00', responsible: 'John', description: 'Opening ceremony'},
    // Add more events here
];

// Add rows to the table for each event
var table = document.getElementById('events');
for (var i = 0; i < events.length; i++) {
    var row = table.insertRow(i);
    row.insertCell(0).innerHTML = events[i].time;
    row.insertCell(1).innerHTML = events[i].responsible;
    row.insertCell(2).innerHTML = events[i].description;
}

// Scroll to the current event
var now = new Date();
for (var i = 0; i < events.length; i++) {
    var eventTime = new Date();
    eventTime.setHours(events[i].time.split(':')[0]);
    eventTime.setMinutes(events[i].time.split(':')[1]);
    if (now < eventTime) {
        table.rows[i].scrollIntoView();
        break;
    }
}

// Set alarms for upcoming events
for (var i = 0; i < events.length; i++) {
    var eventTime = new Date();
    eventTime.setHours(events[i].time.split(':')[0]);
    eventTime.setMinutes(events[i].time.split(':')[1]);
    var diff = eventTime - now;
    if (diff > 0) {
        setTimeout(function() {
            alert('Event "' + events[i].description + '" is coming in 10 minutes!');
        }, diff - 10 * 60 * 1000);
        setTimeout(function() {
            alert('Event "' + events[i].description + '" is coming in 5 minutes!');
        }, diff - 5 * 60 * 1000);
    }
}