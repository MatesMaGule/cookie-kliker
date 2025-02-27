let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");
let numberOfCookies = 0;
let increaseCookieNumber = 1;
let autoClickerUpgrade = document.getElementById("autoClickerUpgrade")
let autoClickerUpgradeCost = 10;

cookie.onclick = () => {
    numberOfCookies = numberOfCookies + increaseCookieNumber;
    counter.innerHTML = "pocet pětek: " + numberOfCookies;
};
let clickUpgrade = document.getElementById("clickUpgrade");
let clickUpgradeCost = 10;

clickUpgrade.onclick = () => {
    if (numberOfCookies >= clickUpgradeCost) {
        numberOfCookies = numberOfCookies - clickUpgradeCost;
        clickUpgradeCost *= 2
        //clickUpgradeCost = clickUpgradeCost * 2
        counter.innerHTML = "pocet pětek" + numberOfCookies
        clickUpgrade.innerHTML = "Click Upgrade (Cost: "+ clickUpgradeCost +" )"
        increaseCookieNumber++; //++ inkret zveda o jedna
    }
}
autoClickerUpgrade.onclick = () => {
    if (numberOfCookies >= autoClickerUpgradeCost) {
        numberOfCookies -= autoClickerUpgradeCost;
        autoClickerUpgradeCost *= 2;
        counter.innerHTML = "pocet pětek: " + numberOfCookies;
        autoClickerUpgrade.innerHTML = "Auto Clicker (Cost: "+ autoClickerUpgradeCost +")"
        setInterval(() => {
            numberOfCookies++;
            counter.innerHTML = "pocet pětek: " + numberOfCookies;
        }, 1000)
    }
}
let size = 20;
let changeValue = 3;
let state = 1;
let box = document.getElementById("box");
box.onclick = () => {
    if (size >= 200 || size <= 50) {
        changeValue *= -1;
    }
    
    size += 1;
    box.style.width = size + "px";
    box.style.height = size + "px";
    state++;
    if (state == 0) {
    box.style.backgroundColor = "red";
    }
    if (state == 1) {
        box.style.backgroundColor = "pink";
        }
    if (state == 2) {
        box.style.backgroundColor = "yellow";
        state = -1;
        }    
    
}
