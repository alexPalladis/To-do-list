

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Create a "reminder" button and append it to each list item
var nodeList = document.getElementsByTagName('LI');
var j;
for (j = 0; j < nodeList.length; j++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u237E");
    span.className = "reminder";
    span.appendChild(txt);
    myNodelist[j].appendChild(span);
}

//create a 'categorise' button and append it to each list item
var mlist = document.getElementsByTagName('LI');
var k;
for (k = 0; k < mlist.length; k++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u21C8");
    span.className = "category";
    span.appendChild(txt);
    mlist[k].appendChild(span);
}



//click on a reminder button to set a remind
var reminder = document.getElementsByClassName('reminder');
var o;

for (o = 0; o < reminder.length; o++) {
  (function () {
    var state = 0;
    var divo = reminder[o];
    var dovo = divo.parentElement;

    divo.onclick = function () {
      if (state === 0) {
        divo.style.color = "red";
        dovo.style.color = "red";
        alert('Task added to reminder!');
        state = 1;
      } else {
        divo.style.color = "black";
        dovo.style.color = "black";
        alert('Task removed from reminder!');
        state = 0;
      }
    }
  })();
}


//Sort alphabetically button
var alphabetically = document.getElementById('alphabetically');
alphabetically.onclick = function(){
    var ul = document.getElementById('myUL');
  
    Array.from(ul.getElementsByTagName("LI"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ul.appendChild(li));
}
  

//Sort by date button functionality
function sortItemsByDate() {
  const itemList = document.getElementById("myUL");
  const items = Array.from(itemList.getElementsByTagName("li"));

  items.sort((a, b) => {
      const dateA = new Date(a.textContent.match(/\d{4}-\d{2}-\d{2}/)[0]);
      const dateB = new Date(b.textContent.match(/\d{4}-\d{2}-\d{2}/)[0]);

      return dateA - dateB;
  });

  // Clear the existing list
  while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
  }

  // Append sorted items back to the list
  items.forEach(item => {
      itemList.appendChild(item);
  });
}
 

//categorise button funcionality
var listItems = document.querySelectorAll('#myUL li');

listItems.forEach(function (listItem) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u21C8");
  span.className = "category";
  span.appendChild(txt);
  listItem.appendChild(span);

  span.addEventListener('click', function () {
    var taskText = listItem.textContent.trim();
    var inputValue = prompt("Enter a task category for:\n" + taskText);
    
    if (inputValue !== null && inputValue !== '') {
      // Check if the user's input matches a category
      var category = inputValue.toLowerCase();
      var categoryLink = document.querySelector(`[data-category="${category}"]`);
      
      if (categoryLink) {
        // Create a new list item with the task description
        var li = document.createElement('li');
        li.textContent = taskText;

        // Append the new list item to the corresponding category
        var categoryList = document.querySelector(`[data-category="${category}"]`);
        categoryList.appendChild(li);
      } else {
        // If the input doesn't match any category, show an error message
        alert("Type a valid category.");
      }
    }
  });
});










    
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// Click on "Discard changes" button to reload the page

function discard(){
  window.location.reload();
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button and adding the same buttons on all of them
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var currentDate = new Date();
  var dateString = currentDate.toISOString().slice(0, 10);
  var result = "Date: " + dateString + " " + inputValue;
  var t = document.createTextNode(result);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You have to write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  


  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  var spin = document.createElement("SPAN");
  var txtt = document.createTextNode("\u237E");
  spin.className = "reminder";
  spin.appendChild(txtt);
  li.appendChild(spin);
  var spon = document.createElement("SPAN");
  var txttt = document.createTextNode("\u21C8");
  spon.className = "category";
  spon.appendChild(txttt);
  li.appendChild(spon);


  //categorise button for new insertions
  var listItems = document.querySelectorAll('#myUL li');

  listItems.forEach(function (listItem) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u21C8");
    span.className = "category";
    span.appendChild(txt);
    listItem.appendChild(span);
  
    span.addEventListener('click', function () {
      var taskText = listItem.textContent.trim();
      var inputValue = prompt("Enter a task category for:\n" + taskText);
      
      if (inputValue !== null && inputValue !== '') {
        // Check if the user's input matches a category
        var category = inputValue.toLowerCase();
        var categoryLink = document.querySelector(`[data-category="${category}"]`);
        
        if (categoryLink) {
          // Create a new list item with the task description
          var li = document.createElement('li');
          li.textContent = taskText;
  
          // Append the new list item to the corresponding category
          var categoryList = document.querySelector(`[data-category="${category}"]`);
          categoryList.appendChild(li);
        } else {
          // If the input doesn't match any category, show an error message
          alert("Type a valid category.");
        }
      }
    });
  });
  //close button for new insertions
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  //reminder button for new insertions
  for (o = 0; o < reminder.length; o++) {
    (function () {
      var state = 0;
      var divo = reminder[o];
      var dovo = divo.parentElement;
  
      divo.onclick = function () {
        if (state === 0) {
          divo.style.color = "red";
          dovo.style.color = "red";
          alert('Task added to reminder!');
          state = 1;
        } else {
          divo.style.color = "black";
          dovo.style.color = "black";
          alert('Task removed from reminder!');
          state = 0;
        }
      }
    })();
  }
  
  }
 
  
  // Save changes the user made after insertion
  function saveChanges() {
    // Get the user's input
    var userInput = document.getElementById("myInput").value;

    // Save the user's input to local storage
    localStorage.setItem("userChanges", userInput);
    alert("Changes saved!")
  }
  function loadChanges() {
    // Retrieve the user's changes from local storage
    var savedChanges = localStorage.getItem("userChanges");

    // Display the saved changes if they exist
    if (savedChanges) {
        document.getElementById("myInput").value = savedChanges;
    }
}
loadChanges();