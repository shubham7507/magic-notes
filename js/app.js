console.log('welcome to notes app .This is app.js');
showNotes();
 
// if user adds a note,add it to the local storage



  let btn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    notesObj = JSON.parse(notes);
    if(notesObj === null) notesObj= []; // This sets it to an empty array initially
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
});
// function to show elements from local storage
function showNotes()
{
  let notes = localStorage.getItem("notes");
  notesObj = JSON.parse(notes);
  if(notesObj === null) notesObj= [];

  let html ="";

  notesObj.forEach(function(element,index){

    html+=`
    
    <div class ="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class ="card-title">Note${index+1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>
    `

  });

  let notesElm = document.getElementById('notes');
  if(notesObj.length!=0)
  {
    notesElm.innerHTML = html;
  }
  else{
    notesElm.innerHTML =`NOTHING TO BE SHOWN use add a note section above to add notes`;
  }
}


// function to delete nodes

function deleteNote(index)
{
  // console.log('i am deleting',index);

  let notes = localStorage.getItem("notes");
  notesObj = JSON.parse(notes);
  if(notesObj === null) notesObj= [];

  notesObj.splice(index,1);

  localStorage.setItem("notes", JSON.stringify(notesObj));
  
  showNotes();

}

let search=document.getElementById('searchTxt');

search.addEventListener("input",function(){

// console.log('Input event fired!');

let inputVal =search.value.toLowerCase();
// console.log('Input event fired!',inputVal);

let noteCards =document.getElementsByClassName('noteCard');

Array.from(noteCards).forEach(function(element){

  let cardTxt =element.getElementsByTagName("p")[0].innerText;

  if(cardTxt.includes(inputVal)){

    element.style.display ="block";

  }
  else{
    element.style.display ="none";
  }

  // console.log(cardTxt)

})




})


/*
further Features
add title

mark a note as important

seprate notes by users

sync and host to webserver
*/
