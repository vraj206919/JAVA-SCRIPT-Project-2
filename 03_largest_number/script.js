document.getElementById("largestForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let numA = Number(document.getElementById("numOne").value);
    let numB = Number(document.getElementById("numTwo").value);
    let numC = Number(document.getElementById("numThree").value);

    let answerBox = document.getElementById("answer");

    if (numA >= numB && numA >= numC) {
        answerBox.innerHTML = numA + " is the Largest Number";
    }
    else if (numB >= numA && numB >= numC) {
        answerBox.innerHTML = numB + " is the Largest Number";
    }
    else {
        answerBox.innerHTML = numC + " is the Largest Number";
    }

});