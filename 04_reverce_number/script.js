function reverseNumber() {
    let num = document.getElementById("number").value;
    let reversed = num.split("").reverse().join("");
    document.getElementById("result").textContent = "Reversed Number: " + reversed;
}