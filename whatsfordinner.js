//-----DINNER DATA------
//Store the dinner options for each category (arrays)

    //Healthy + Quick
const healthyQuick = ["Salad", "Stir Fry", "Burrito Bowl"];
    //Unhealthy + Quick
const unhealthyQuick = ["Pizza", "Chicken Nuggets and Chips", "Instant Noodles"];
    //Healthy + Slow
const healthySlow = ["Roast Meat and Veg", "Stroganoff", "Vegetable Stew"];
    //Unhealthy + Slow
const unhealthySlow = ["Lasagne", "Curry", "Fried Chicken Burger"];


//------USER INPUT------
// Get information from HTML document
const mealList = document.getElementById("mealList");
const healthyBox = document.getElementById("healthyBox");
const quickBox = document.getElementById("quickBox");
const dinnerButton = document.getElementById("dinnerButton");
const dinnerPlaceholder = document.getElementById("dinnerPlaceholder");
const results = document.getElementById("results");

//------DINNER RECOMMENDATION-------
//Use user input to select a meal option based on information provided
//functions, booleans, if...else, array, loop, console.log

function recommendDinner (){
    //get user choice (boolean)
        const wantsHealthy = healthyBox.checked;
        const wantsQuick = quickBox.checked;

        //check in console
        console.log("Healthy", wantsHealthy);
        console.log("Quick", wantsQuick);

    let selectedMeal;

    //if...else to select correct meal option
    if (wantsHealthy && wantsQuick) {
        console.log("Healthy and quick");
        selectedMeal = healthyQuick;
        results.style.backgroundColor = "lightgreen";
    }  
    else if (wantsHealthy && !wantsQuick) {
        console.log("Healthy but not quick");
        selectedMeal = healthySlow;
        results.style.backgroundColor = "yellow";
    }
    else if (!wantsHealthy && wantsQuick) {
        console.log("Not healthy but quick");
        selectedMeal = unhealthyQuick;
        results.style.backgroundColor = "orange";
    }
    else {console.log("Not healthy and not quick");
        selectedMeal = unhealthySlow;
        results.style.backgroundColor = "red";
    }

console.log("Selected Meal Variable", selectedMeal);

//change placeholder text on page
dinnerPlaceholder.textContent = "Here are your dinner ideas:";


//clear the list
mealList.innerHTML = "";

//loop for meal options
for (let i=0; i < selectedMeal.length; i++){
    const listItem = document.createElement("li");
    listItem.textContent = selectedMeal[i];
    mealList.appendChild(listItem);
}

    }

    //------RESULT------
    //Run function when button is clicked
    //event trigger - button click
      dinnerButton.addEventListener("click", recommendDinner);