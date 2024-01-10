const noteArea = document.querySelector('.note-area');
const saveBtn = document.querySelector('.save-btn');
const savedNotesList = document.querySelector('.saved-notes');
const noteEl = document.querySelector('.note');
const indexPage = document.querySelector('.index-page');

let savedNotes = []; // store date/time and message
let noteText = '';
let date =  new Date();
let month = date.getMonth();
let day = date.getDate();
let  currentDay = `${day}.${month}.${date.getFullYear()}`;
const currentTime = `${date.getHours()}:${date.getMinutes()}`;

function addSaveBtnEvent() {
    saveBtn.addEventListener('click', addNote);
}

function addNote() {
    if (validInput(noteArea.value)) { 
        formatDate();
        savedNotes.push({time: currentDay, note: noteArea.value});
        noteArea.value = '';
        renderElements();
        addLinkEvent();
        console.log(savedNotes);
    } else {
        return;
    }
}

function renderElements() {
    let list = '';
    for (let i = 0; i < savedNotes.length; i++) {
        list = `
        <li class="note-link" value="${i}">
            <a href="#" class="note-text" >${savedNotes[i].time}</a>
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

function addLinkEvent() {
    // loop through notes a tags add an eventlistener
    const listLinks = document.querySelectorAll('.note-link');
    listLinks.forEach((e)=> {
        e.addEventListener('click', () => {
            noteText = savedNotes[e.value].note;
            console.log(savedNotes);
            window.open('./pages/note.html', '_self');
        });
    });
}

function renderNotePage() {
    noteEl.textContent = noteText;
    console.log(noteText)
}

