const Splash = document.getElementById('splash_screen')

document.addEventListener('DOMContentLoaded',(e)=>{
  setTimeout(()=>{
    splash_screen.classList.add('display-none')
  },2000);
})

//this is the div in which the editing is done and required things are added
const content = document.getElementById('content')

//initial load call function
function initial(){
  document.getElementById('selectionTitle').innerText = 'Welcome'
}

function contentSet(page){
  if(page=='Future-Events'){
    futureEvent()
    document.getElementById('selectionTitle').innerText = "Some plans for future....."
  }else if(page == 'Home'){
    home()
    document.getElementById('selectionTitle').innerText = "Welcome...."
  }else if(page == 'Past-Events'){
    pastEvent()
    document.getElementById('selectionTitle').innerText = "Memories...."
  }else if(page == 'Records'){
    acomp()
    document.getElementById('selectionTitle').innerText = "Proud movements...."
  }else if(page == 'Notes'){
    notes()
    document.getElementById('selectionTitle').innerText = "Someting for next Batch...."
  }else if(page == 'About-us'){
    about()
    document.getElementById('selectionTitle').innerText = "Know us...."
  }
}
//This function is creating and adding elements in div
function home(){
  //The while loop is for removing existing elements in the div sort of like clearing the board
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  //creating and adiing elements in div
  let list = document.createElement('h1')
  content.appendChild(list)
  list.innerText='yellow'
}
//Rest of the function follw the same pattern
function futureEvent(){
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  let list = document.createElement('h1')
  content.appendChild(list)
  list.innerText='green'
}

function pastEvent(){
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  let list = document.createElement('h1')
  content.appendChild(list)
  list.innerText='orange'
}

function acomp(){
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  let list = document.createElement('h1')
  content.appendChild(list)
  list.innerText='orange'
}

function notes(){
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  let list = document.createElement('h1')
  content.appendChild(list)
  list.innerText='orange'
}

function about(){
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  let list = document.createElement('h1')
  content.appendChild(list)
  list.innerText='orange'
}

function members(){
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  let list = document.createElement('h1')
  content.appendChild(list)
  list.innerText='orange'
}
