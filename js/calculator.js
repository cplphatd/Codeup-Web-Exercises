/**
 * Created by David on 11/16/16.
 */
"use strict";
(function () {

    var btnOne = document.getElementById("btnOne");
    var btnPlus = document.getElementById("btnPlus");
    var btnEquals = document.getElementById("btnEquals");
    var displayedLeftOperand = document.getElementById("leftOperand");
    var displayedLeftOperandValue = displayedLeftOperand.getAttribute("value");
    var leftOperandValueForMath;
    var displayedRightOperand = document.getElementById("rightOperand");
    var displayedRightOperandValue = displayedRightOperand.getAttribute("value");
    var rightOperandValueForMath;
    var operator;
    var total;

    function convertOperandToString (displayedOperandValue) {
        displayedOperandValue.toString();
        return displayedOperandValue;
    }

    function convertOperandToNumber (displayedOperandValue) {
        return parseInt(displayedOperandValue);
    }

    //All numerical button press functions will follow this structure
    function pressBtnOneLeftOperand () {
        if (displayedLeftOperandValue > 0) {
            displayedLeftOperand.setAttribute("value", displayedLeftOperandValue + 1);
            displayedLeftOperandValue = displayedLeftOperand.getAttribute("value");
            displayedLeftOperandValue = convertOperandToString(displayedLeftOperandValue);
        } else {
            displayedLeftOperand.setAttribute("value", 1);
            displayedLeftOperandValue = displayedLeftOperand.getAttribute("value");
            displayedLeftOperandValue = convertOperandToString(displayedLeftOperandValue);
        }
    }

    function pressBtnOneRightOperand () {
        if (displayedRightOperandValue > 0) {
            displayedRightOperand.setAttribute("value", displayedRightOperandValue + 1);
            displayedRightOperandValue = displayedRightOperand.getAttribute("value");
            convertOperandToString(displayedRightOperandValue);
        } else {
            displayedRightOperand.setAttribute("value", 1);
            displayedRightOperandValue = displayedRightOperand.getAttribute("value");
            convertOperandToString(displayedRightOperandValue);
        }
    }

    //all operator button press functions will follow this structure
    function pressPlusBtn () {
        operator = "+";
        leftOperandValueForMath = convertOperandToNumber(displayedLeftOperandValue);
        console.log(leftOperandValueForMath);
        document.getElementById("operator").setAttribute("value", "+");
        enterRightOperand();
    }

    function enterLeftOperand () {
        btnOne.addEventListener("click", pressBtnOneLeftOperand);
        btnPlus.addEventListener("click", pressPlusBtn);
        btnOne.removeEventListener("click", pressBtnOneRightOperand);
    }

    function enterRightOperand () {
        btnOne.removeEventListener("click", pressBtnOneLeftOperand);
        btnOne.addEventListener("click", pressBtnOneRightOperand);
        btnEquals.addEventListener("click", calculate);
    }

    function calculate () {
        rightOperandValueForMath = convertOperandToNumber(displayedRightOperandValue);
        switch (operator) {
            case "+" :
                total = leftOperandValueForMath + rightOperandValueForMath;
                leftOperandValueForMath = total;
                console.log(leftOperandValueForMath);
                enterLeftOperand ();
                break;
        }
    }

    enterLeftOperand();
})();
