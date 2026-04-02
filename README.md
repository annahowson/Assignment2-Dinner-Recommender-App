# Question 2

## Definitions and examples
### unshift()
Used in an array to add new elements to the beginning.
It overwrites the original array, adding in the specified elements, and returns the new length of the array.

**example**
const CFGdegree = ["software engineering", "data science", "full-stack", "product management"];
CFGdegree.unshift("data engineer", "agile coach");
<br>
**output**
data engineer,agile coach,software engineering,data science,full-stack,product management

### shift()
Used to remove the first element of an array.
It will return the "shifted" (or "removed") element.

**example**
const CFGdegree = ["software engineering", "data science", "full-stack", "product management"];
CFGdegree.shift();
<br>
**output**
software engineering

### split()
Used to split a string in to an array of substrings. 
It will not change the original string but will return the new array.

**example**
let text = "I am learning software engineering";
const myArray = text.split(");
<br>
**output**
I,am,learning,software,engineering

### object methods
Methods (functions) are actions that can be performed on objects and are stored as property values.

**example**
const programmingLanguage = {
    name: "JavaScript",
    can: "calculate, maipulate and validate",
    where: "web",
    explain: function() {
        return this.name + "is able to" + this.can + "data.";
    }
};
<br>
**output**
JavaScript is able to calculate, maipulate and validate data.

### onmouseover event
Occurs when the mouse pointer is moved over an HTML element (or it's children).

**example**
let button = document.getElementById("button");
button.onmouseover = function() {
    button.style.backgroundColor = "blue";
};
<br>
**output**
The button will look normal until the mouse hovers over it, at which point the background colour of the box will turn blue.

### onclick event
Occurs when a user clicks on an element.

**example**
let button = document.getElementById("button");
button.onclick = function() {
    alert("Button Clicked");
};
<br>
**output**
A user will click on the button.
A pop-up will appear reading "Button Clicked".

### oninput event
Occurs when a user types in to an input field. 

**example**
let input = document.getElementById("inputName");
input.oninput = function() {
    console.log(input.value);
};
<br>
**output**
As the user types, the value of the input field will appear in real time.
e.g user types Anna and the page will update instantly to show "Anna".
