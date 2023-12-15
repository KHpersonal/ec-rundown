// Replace this with your actual events
var events = [
    {time: '10:00', responsible: 'John', description: 'Opening ceremony'},
    {time: '10:10', responsible: 'John', description: 'Opening ceremony'},
    {time: '10:20', responsible: 'John', description: 'Opening ceremony'},
    {time: '10:30', responsible: 'John', description: 'Opening ceremony'},
    {time: '10:40', responsible: 'John', description: 'Opening ceremony'},
    {time: '10:50', responsible: 'John', description: 'Opening ceremony'},
    {time: '11:00', responsible: 'John', description: 'Opening ceremony'},
    {time: '11:10', responsible: 'John', description: 'Opening ceremony'},
    {time: '11:20', responsible: 'John', description: 'Opening ceremony'},
    {time: '11:30', responsible: 'John', description: 'Opening ceremony'},
    {time: '11:40', responsible: 'John', description: 'Opening ceremony'},
    {time: '11:50', responsible: 'John', description: 'Opening ceremony'},
    {time: '12:00', responsible: 'John', description: 'Opening ceremony'},
    {time: '12:10', responsible: 'John', description: 'Opening ceremony'},
    {time: '12:20', responsible: 'John', description: 'Opening ceremony'},
    {time: '12:30', responsible: 'John', description: 'Opening ceremony'},
    {time: '12:40', responsible: 'John', description: 'Opening ceremony'},
    {time: '12:50', responsible: 'John', description: 'Opening ceremony'},
    {time: '16:00', responsible: 'John', description: 'Opening ceremony'},
    {time: '18:00', responsible: 'John', description: 'Opening ceremony'},
    {time: '19:00', responsible: 'John', description: 'Opening ceremony'},
    {time: '20:00', responsible: 'John', description: 'Opening ceremony'}
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
