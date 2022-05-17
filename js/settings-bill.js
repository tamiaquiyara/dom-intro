// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
const callCostSettings = document.querySelector(".callCostSetting");
const smsCostSettings = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
const settingsAddBtn = document.querySelector(".add-button");
//get a reference to the 'Update settings' button
const updateSettingsBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callCost = 0;
var callTotals = 0;
var smsCost = 0;
var smsTotals = 0;
var settingsTotal = 0;
var warningLevel = 0;
var criticalLevel = 0;
// var callCost = callCostSettings.value;
// var smsCost = smsCostSettings.value;
// var warningLevel = warningLevelSetting.value;
// var criticalLevel = criticalLevelSetting.value;
// create a variables that will keep track of all three totals.
const callsTotalSetting = document.querySelector(".callTotalSettings");
const smsTotalSetting = document.querySelector(".smsTotalSettings");
const total = document.querySelector(".totalSettings");

function settingsUpdate(){
    // alert(updateSettingsBtn);
    callCost = parseFloat(callCostSettings.value);
    smsCost = parseFloat(smsCostSettings.value);
    warningLevel = parseFloat(warningLevelSetting.value);
    criticalLevel = parseFloat(criticalLevelSetting.value);
}


function settingsBillTotal(){
    // alert(settingsAddBtn);
   

    var checkedSettingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var settingsItemType = checkedSettingsBtn.value;
    
    
    if (settingsItemType === "call"){
        callTotals += callCost;
    }
    else if (settingsItemType === "sms"){
        smsTotals += smsCost;
    }
    
    callsTotalSetting.innerHTML = callTotals;//.toFixed(2);
    smsTotalSetting.innerHTML = smsTotals;//.toFixed(2);
    var totalCostSettings = callTotals + smsTotals;//.toFixed(2);
    total.innerHTML = totalCostSettings;//.toFixed(2);

    if (totalCostSettings >= criticalLevel){
        total.classList.add("danger");
    }
    
    else if (totalCostSettings >= warningLevel){
        total.classList.add('warning');
    }
}
//add an event listener for when the 'Update settings' button is pressed
updateSettingsBtn.addEventListener('click', settingsUpdate);
//add an event listener for when the add button is pressed
settingsAddBtn.addEventListener('click', settingsBillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
