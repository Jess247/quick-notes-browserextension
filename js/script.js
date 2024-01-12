const noteArea = document.querySelector('.note-area');
const saveBtn = document.querySelector('.save-btn');
const savedNotesList = document.querySelector('.saved-notes');
const body = document.querySelector('body');

let savedNotes = []; 
const notesFromLocalStorage = JSON.parse(localStorage.getItem("savedNotes" || "[]"))
if (notesFromLocalStorage) {
    savedNotes = notesFromLocalStorage;
    renderElements(savedNotes);
    addLinkEvent();
}
console.log(notesFromLocalStorage) 
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
        localStorage.setItem('savedNotes', JSON.stringify(savedNotes))
        renderElements(savedNotes);
        addLinkEvent();
    } else {
        return;
    }
}

function renderElements(obj) {
    let list = '';
    for (let i = 0; i < obj.length; i++) {
        list += `
        <li class="note-link" value="${i}">
            <a href="#">${obj[i].time}</a>
            <p class="note${i} hidden visible">${obj[i].note}</p>
        </li>`;
    }
    savedNotesList.innerHTML = list;
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
    const listLinks = document.querySelectorAll('.note-link');
    listLinks.forEach((e)=> {
        e.addEventListener('click', () => {
            let noteEl = document.querySelector(`.note${e.value}`)
            if (noteEl.classList.contains('hidden')) {
                noteEl.classList.remove('hidden')
            } else {
                noteEl.classList.add('hidden')
            }
        });
    });
    console.log(listLinks)
}


