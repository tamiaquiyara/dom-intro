// get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
const callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
const totalTwo = document.querySelector(".totalTwo");
var callsTotalRadio = 0;
var smsTotalRadio = 0;
//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function radioBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billItemType = checkedRadioBtn.value;

    if (billItemType === "call"){
        callsTotalRadio += 2.75;
    }
    else if (billItemType === "sms"){
        smsTotalRadio += 0.75;
    }
    
    callTotalTwo.innerHTML = callsTotalRadio.toFixed(2);
    smsTotalTwo.innerHTML = smsTotalRadio.toFixed(2);
    var totalCostTwo = callsTotalRadio + smsTotalRadio;
    totalTwo.innerHTML = totalCostTwo.toFixed(2);
    
    if (totalCostTwo >= 50){
        totalTwo.classList.add('danger');
    }
    else if (totalCostTwo >= 30){
        totalTwo.classList.add('warning');
    }
}

radioBillAddBtn.addEventListener('click', radioBillTotal);


