//business logic:
function getArray(maxNum) {
    const numArr = [];
    for (let i = 0; i <= maxNum; i++) {
        numArr.push(i);
    }
    return numArr.map((num) => num.toString());
}
function replaceNumToPhrase(maxNum) {
    const numArr = getArray(maxNum);
    const oneTwoThreeArr = ["1", "2", "3"];
    const newArr = [];
    const userName = getUserName();
    numArr.forEach((num) => {
        if (num.includes(oneTwoThreeArr[2])) {
            newArr.push(`Won't you be my neighbor, ${userName}?`);
        } else if (num.includes(oneTwoThreeArr[1])) {
            newArr.push("Boop!");
        } else if (num.includes(oneTwoThreeArr[0])) {
            newArr.push("Beep!");
        } else {
            newArr.push(num);
        }
    });
    return newArr.join(", ");
}
//UI logic: 
function getUserName() {
    const nameValue = document.getElementById("name").value;
    const userName = nameValue.trim();
    if (userName !== '' && !/^\d+$/.test(userName)) {
        return userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase();
    } else {
        return 'friend';
    }
}
function formHandler() {
    const form = document.querySelector("form");
    const result = document.getElementById("result");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const numValue = document.getElementById("number").value;
        const num = parseInt(numValue);
        const array = replaceNumToPhrase(num);
        result.classList.remove("hidden");
        result.innerText = array;
    });
    form.addEventListener("reset", () => {
        result.classList.add("hidden");
    });
}
window.onload = () => {
    formHandler();
}