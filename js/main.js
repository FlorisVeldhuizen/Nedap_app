let submitbutton, itemlist, inputvalue;
let itemid = 7;

const removeItem = function(itemid){
  const item = document.getElementById(itemid);
  itemlist.removeChild(item);
  setColors();
}

const checkItem = function(itemid){
  const item = document.getElementById(itemid);
  if(item.classList[0] == "checked"){
    item.classList.remove("checked");
    setColors();
  } else {
    item.classList.add("checked");
  }
}

//add button to existing items
const addButtons = function(){
  const listitems = itemlist.getElementsByTagName("li");
  const itemnumber = listitems.length;
  for(i = 0;i<itemnumber;i++){
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "X";
    removeButton.setAttribute('onClick','removeItem("'+'item'+(i+1)+'")');
    removeButton.setAttribute('class',' btn btn-secondary btn-remove');
    listitems[i].appendChild(removeButton);
    //Then we generate a button that lets us check off the item
    const checkButton = document.createElement("button");
    checkButton.innerHTML = "V";
    checkButton.setAttribute('onClick','checkItem("'+'item'+(i+1)+'")');
    checkButton.setAttribute('class',' btn btn-success btn-check');
    listitems[i].appendChild(checkButton);
  }
}

const addItem = function(){
  if(inputvalue.value !== ""){
    //First we generate a list item and add proper input
    const li = document.createElement('li'); // create a new list item
    li.appendChild(document.createTextNode(inputvalue.value)); // append the text to the li
    li.setAttribute('id','item'+itemid);
    //Then we generate a button that lets us remove the item later
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "X";
    removeButton.setAttribute('onClick','removeItem("'+'item'+itemid+'")');
    removeButton.setAttribute('class',' btn btn-secondary btn-remove');
    li.appendChild(removeButton);
    //Then we generate a button that lets us check off the item
    const checkButton = document.createElement("button");
    checkButton.innerHTML = "V";
    checkButton.setAttribute('onClick','checkItem("'+'item'+itemid+'")');
    checkButton.setAttribute('class',' btn btn-success btn-check');
    li.appendChild(checkButton);
    //iterate itemid so next item gets an unique id
    itemid++;
    itemlist.appendChild(li); // append the list item to the ul
  } else {
    alert("You have to add text before you add an item to the list.")
  }
  setColors();
  inputvalue.value = "";
}

const setColors = function(){
  const listitems = itemlist.getElementsByTagName("li");
  const itemnumber = listitems.length;
  const rainbow = new Rainbow();
  rainbow.setNumberRange(1, itemnumber);
  rainbow.setSpectrum('red', 'orange');
  let spectrum = [];
  for (let i = 1; i <= itemnumber; i++) {
    let hexColour = "#" + rainbow.colourAt(i);
    spectrum.push(hexColour);
  }
  for (let i = 0; i < itemnumber; i++){
    listitems[i].style.background = spectrum[i];
  }
  return spectrum;
}

window.onload = function(){
  submitbutton = document.getElementById("additembutton");
  itemlist = document.getElementById("itemlist");
  inputvalue = document.getElementById("inputvalue");
  new Sortable(itemlist, {
    animation: 150
  });
  addButtons();
  setColors();
}
