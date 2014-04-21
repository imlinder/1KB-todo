var d = document;
var s = localStorage;
var t = d.getElementById('t');
// add list item
function a() {
  var value = t.value;

  // Do not create empty list item.
  if (!value) return;

  var item = d.createElement('li');
  
  var removeLink = d.createElement('a');
  removeLink.setAttribute("onClick", "r(this)");
  removeLink.innerHTML = '&#215;';

  item.appendChild(d.createTextNode(value + ' '));
  item.appendChild(removeLink);
  c.insertBefore(item, c.firstChild);

  // Store list in localstorage
  s["l"] = c.innerHTML;

  // Empty the inupt field
  t.value = '';
}

// remove list item
function r(e) {
  e.parentNode.parentNode.removeChild(e.parentNode);
  
  // Store list in localstorage
  s["l"] = c.innerHTML;
}


// restore list from localstorage
if(s["l"]) c.innerHTML = s["l"]