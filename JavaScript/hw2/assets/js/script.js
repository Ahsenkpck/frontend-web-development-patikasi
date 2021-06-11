
const input = document.querySelector('#task');
const button = document.querySelector('#liveToastBtn');
let list = document.querySelector('#list');

let taskArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

localStorage.setItem('tasks', JSON.stringify(taskArray));
const data = JSON.parse(localStorage.getItem('tasks'));

const liMaker = (text) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.textContent = text;
    span.textContent = "x";
    span.className = "close";
    li.appendChild(span);
    list.appendChild(li);
}
function newElement() {
    if (input.value != "") {
        $(document).ready(function () {
            $('.success').toast('show');
        });
        taskArray.push(input.value);
        localStorage.setItem('tasks', JSON.stringify(taskArray));
        liMaker(input.value);
        input.value = "";
    }
    else {
        $(document).ready(function () {
            $('.error').toast('show');
        });
    }
}
data.forEach(dt => {
    liMaker(dt);
});
// tasks.forEach(function (task, i) {
//     task.addEventListener('click',function(e){
//         console.log(list.childNodes.length);
//         if(task.className == "checked"){
//             task.className = "";
//         }
//         else{
//             task.className = "checked";
//         }
//     })
//     let childs = task.childNodes;
//     childs.forEach(c => {
//         if(c.className == "close"){
//             c.addEventListener('click',function(e){
//                 task.remove();
//                 taskArray.splice((i-5),1); 
//                 // normalde taskArray.splice(i,1);
//                 //fakat basinda 5 adet default task var
//                 localStorage.setItem('tasks',JSON.stringify(taskArray));
//             })
//         }
//     });
// });
//sayfayi guncellemeden yeni eklenen task'lar check edilemiyor, silinemiyor
list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI')
        e.target.classList.toggle('checked')
    else if (e.target.className === 'close') {
        let p = e.target.parentElement.parentElement;
        let index = Array.prototype.indexOf.call(p.children, e.target.parentElement);
        taskArray.splice((index - 5), 1);
        // normalde taskArray.splice(index,1);
        //fakat basinda 5 adet default task var
        localStorage.setItem('tasks', JSON.stringify(taskArray));
        e.target.parentNode.remove();
    }
}, false);
//task check etmek ve silmek için yazdigim yeni kisim