const tip=document.querySelector('.folderEx');
const folder=document.querySelector('.fa-folder')
const mark=document.querySelector('.fa-question-circle');
const question=document.querySelector('.question');

console.log(folder)
    //now set the tool tip 
folder.onmouseover= e => {
    tip.style.display='block'
}
