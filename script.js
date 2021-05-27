
const text = document.getElementById('text');

const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const bolder = document.getElementById('bolder');
const italic = document.getElementById('italic');
const sub = document.getElementById('sub');
const undo = document.getElementById('undo');

upper.setAttribute('onclick', 'toUpper()');
lower.setAttribute('onclick', 'toLower()');
bolder.setAttribute('onclick', 'toBolder()');
italic.setAttribute('onclick', 'toItalic()');
sub.setAttribute('onclick', 'toSub()');
undo.setAttribute('onclick', 'toUndo()');


const toUpper = () => text.style.textTransform = "uppercase";
const toLower = () => text.style.textTransform = "lowercase";
const toBolder = () => text.style.fontWeight = "bolder";
const toItalic = () => text.style.fontStyle = "italic";
const toSub = () => text.style.textDecoration = "underline";

const toUndo = () => {
    text.style.fontWeight = 'normal';
    text.style.textDecoration = 'none';
    text.style.fontStyle = "normal";
}
