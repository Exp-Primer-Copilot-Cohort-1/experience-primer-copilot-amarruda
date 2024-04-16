function skillsMember() {
  // 1. Get the element with the id of 'skills'
  var skills = document.getElementById("skills");

  // 2. Create a new 'li' element
  var li = document.createElement("li");

  // 3. Set the text of the new 'li' element to 'JavaScript'
  li.textContent = "JavaScript";

  // 4. Append the new 'li' element to the 'skills' element
  skills.appendChild(li);
}