//constants, values that will not change
const candyBtn = document.getElementById("candy-btn")
const upgradeClickBtn = document.getElementById("upgrd-click-btn")

//variables. we're also going to 
let totalCandy = 0
const totalCandiesDisplay = document.getElementById("total-candies")

let candyPerClick = 1
const candiesPerClickDisplay = document.getElementById("candy-p-click")

let clickUpgradeCost = 25



//when candy button is clicked, increase candy by candy/click number
/**first we add an event listener, which waits for a specifc thing to happen to an element
 and runs a function**/
candyBtn.addEventListener("click", addCandy)
candyBtn.addEventListener("click", canUserIncreaseClick)

//we add event listeners after variables but before main code. add another to run a function when 
// the upgrade button is clicked*/
upgradeClickBtn.addEventListener("click", buyClickUpgrade)

//function that adds candy to our total based on candy/click number, so long as we have less than 5000 candies
function addCandy(){
   totalCandy += candyPerClick
   totalCandiesDisplay.innerHTML = "candies: " + totalCandy
}

//check to see if we can buy an upgrade, so we can grey out or brighten purchase button. adds or removes special css classes
function canUserIncreaseClick(){
   if(totalCandy >= 5000){
      document.body.innerHTML = "Wow, you've finally paid your debts to the candy mafia! GGs, reload to play again."
   }
   else if(totalCandy >= clickUpgradeCost){
   upgradeClickBtn.classList.remove("too-broke")
   upgradeClickBtn.classList.add("not-broke")
   
   }
   else if(totalCandy < clickUpgradeCost){
      upgradeClickBtn.classList.remove("not-broke")
      upgradeClickBtn.classList.add("too-broke")
   }
   
}


//buy a click upgrade if we have enough coins. also used Math.trunc to remove pesky decimals
function buyClickUpgrade(){
   if(totalCandy >= clickUpgradeCost){
      totalCandy -= clickUpgradeCost
      totalCandiesDisplay.innerHTML = "candies: " + totalCandy
      candyPerClick += 5
      candiesPerClickDisplay.innerHTML = "candies/click: " + candyPerClick
      clickUpgradeCost = Math.round(clickUpgradeCost *= 1.5)
      upgradeClickBtn.innerHTML = "Get 5 more candies/click for " + clickUpgradeCost + " candies"
         }
         canUserIncreaseClick()
}
//auto candy gen, adds x candies every second
setInterval(addCandy, inf)

//document.body.innerHTML = "GAME OVER!"
document.body. innerHTML = "Wow, you've finally paid your debts to the candy mafia! GGs, reload to play again."