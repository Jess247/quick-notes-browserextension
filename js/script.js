const noteArea = document.querySelector('.note-area');
const saveBtn = document.querySelector('.save-btn');
const savedNotesList = document.querySelector('.saved-notes');
let savedNotes = []; // store date/time and message
let note = "";

let date =  new Date();
let month = date.getMonth();
let day = date.getDate();
let  currentDay = `${day}.${month}.${date.getFullYear()}`;
const currentTime = `${date.getHours()}:${date.getMinutes()}`;

saveBtn.addEventListener('click', addNote);

function addNote() {
    if (validInput(noteArea.value)) { 
        formatDate();
        savedNotes.push({time: currentDay, note: noteArea.value});
        noteArea.value = '';
        renderElements();
        console.log(savedNotes);
    } else {
        return;
    }
}

function renderElements() {
    let list = '';
    for (let i = 0; i < savedNotes.length; i++) {
        list = `
        <li class="note-link">
            <a href="#note">${savedNotes[i].time}</a>
        </li>`;
    }
    savedNotesList.innerHTML += list;
}

function formatMonth() {
    if (month + 1 < 10) {
        month = `0${date.getMonth() + 1}`;
    } else {
        month = month;
    }
}

function formatDay() {
    if (day < 10) {
        day = `0${date.getDate()}`;
    } else {
        day = day;  
    }
}

function formatDate() {
    formatMonth();
    formatDay();
    currentDay = `${day}.${month}.${date.getFullYear()} - ${currentTime}`;
}

function validInput(note) {
    if (note === "") {
        return false;
    } else {
        return true;
    }
}
