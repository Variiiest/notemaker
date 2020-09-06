//
shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function(e){
    let addtxt= document.getElementById('addtxt');
    let notes= localStorage.getItem('notes');
    if(notes== null){
        notesObj= [];
    }
    else{
        notesObj= JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addtxt.value= ''
    shownotes();

})


function shownotes(){
    let notes= localStorage.getItem('notes');
    if(notes== null){
        notesObj= [];
    }
    else{
        notesObj= JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
      html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Note ${index + 1}</h5>
                          <p class="card-text"> ${element}</p>
                          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                      </div>
                  </div>`;
    });
    let noteselement= document.getElementById('notes');
    if(notes!=null){
        noteselement.innerHTML= html;
    }
}



function deleteNote(index) {
    let notes= localStorage.getItem('notes');
    if(notes== null){
        notesObj= [];
    }
    else{
        notesObj= JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    shownotes();
    
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
});



