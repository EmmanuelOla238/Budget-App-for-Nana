function addBudget() {
    var totalBudget = Number(personal.value) + Number(food.value) + Number(trans.value) + Number(clothing.value) + Number(other.value)
    var confirmation = confirm("Are sure you want to Add budget?")
    if(confirmation == true && totalBudget >10000) {
        errMsg.style.display = "block"
        errMsg2.style.display = "none"
    }else if(confirmation == true && personal.value == "" || food.value == "" || trans.value == "" || clothing.value == "" || other.value == "") {
        errMsg2.style.display = "block"
        errMsg.style.display = "none"
    } else if(confirmation == true) {
        var totalBalance = 1100000 - totalBudget
        var remainder = 10000 - totalBudget
        errMsg.style.display = "none"
        errMsg2.style.display = "none"
        document.getElementById("amountSpent").innerHTML = totalBudget
        document.getElementById("amountSpentable").innerHTML = remainder
        document.getElementById("showTotalBalance").innerHTML = totalBalance
        showBudgetDetail.style.display = "block"
        document.getElementById('showPersonal').innerHTML = personal.value
        document.getElementById('showFood').innerHTML = food.value
        document.getElementById('showTrans').innerHTML = trans.value
        document.getElementById('showClothing').innerHTML = clothing.value
        document.getElementById('showOther').innerHTML = other.value

        document.getElementById('personal').value = ""
        document.getElementById('food').value = ""
        document.getElementById('trans').value = ""
        document.getElementById('clothing').value = ""
        document.getElementById('other').value = ""
    }
}