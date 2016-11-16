/**
 * Created by David on 11/16/16.
 */
"use strict";
(function () {

    var btnOne = document.getElementById("btnOne");
    var btnTwo = document.getElementById("btnTwo");
    var btnThree = document.getElementById("btnThree");
    var btnFour = document.getElementById("btnFour");
    var btnFive = document.getElementById("btnFive");
    var btnSix = document.getElementById("btnSix");
    var btnSeven = document.getElementById("btnSeven");
    var btnEight = document.getElementById("btnEight");
    var btnNine = document.getElementById("btnNine");
    var btnZero = document.getElementById("btnZero");
    var btnPlus = document.getElementById("btnPlus");
    var btnMinus = document.getElementById("btnMinus");
    var btnMultiply = document.getElementById("btnMultiply");
    var btnDivide = document.getElementById("btnDivide");
    var btnClear = document.getElementById("btnClear");
    var btnEquals = document.getElementById("btnEquals");
    var operatorDisplay = document.getElementById("operator");
    var displayedLeftOperand = document.getElementById("leftOperand");              //The actual left operand element
    var displayedLeftOperandValue = displayedLeftOperand.getAttribute("value");     //The value of the left operand element
    var leftOperandValueForMath = 0;                                                //Value of left operand converted to num for math
    var displayedRightOperand = document.getElementById("rightOperand");            //The actual right operand element
    var displayedRightOperandValue = 0;                                             //The value of the right operand element
    var rightOperandValueForMath = 1;                                               //Value of right operand converted to num for math
    var operator;
    var total;
    var leftOperandBtnPress;
    var rightOperandBtnPress;
    var operatorBtnPress;
    var msg = document.getElementById("msg");

    function convertOperandToString (displayedOperandValue) {
        displayedOperandValue.toString();
        return displayedOperandValue;
    }

    function convertOperandToNumber (displayedOperandValue) {
        return parseInt(displayedOperandValue);
    }

    //All numerical button press functions will follow this structure

    leftOperandBtnPress = function () {
        if (displayedLeftOperandValue > 0) {
            displayedLeftOperand.setAttribute("value", displayedLeftOperandValue + this.innerHTML);
            displayedLeftOperandValue = displayedLeftOperand.getAttribute("value");
            displayedLeftOperandValue = convertOperandToString(displayedLeftOperandValue);
            leftOperandValueForMath = convertOperandToNumber(displayedLeftOperandValue);
        } else {
            displayedLeftOperand.setAttribute("value", this.innerHTML);
            displayedLeftOperandValue = displayedLeftOperand.getAttribute("value");
            displayedLeftOperandValue = convertOperandToString(displayedLeftOperandValue);
            leftOperandValueForMath = convertOperandToNumber(displayedLeftOperandValue);
        }
    }

    rightOperandBtnPress = function () {
        if (displayedRightOperandValue > 0) {
            displayedRightOperand.setAttribute("value", displayedRightOperandValue + this.innerHTML);
            displayedRightOperandValue = displayedRightOperand.getAttribute("value");
            convertOperandToString(displayedRightOperandValue);
            rightOperandValueForMath = convertOperandToNumber(displayedRightOperandValue);
        } else {
            displayedRightOperand.setAttribute("value", this.innerHTML);
            displayedRightOperandValue = displayedRightOperand.getAttribute("value");
            convertOperandToString(displayedRightOperandValue);
            rightOperandValueForMath = convertOperandToNumber(displayedRightOperandValue);
        }
    }

    //all operator button press functions will follow this structure

    operatorBtnPress = function () {
        calculate();
        operator = this.innerHTML.toString();
        operatorDisplay.setAttribute("value", this.innerHTML);
        enterRightOperand();
    }

    function enterLeftOperand () {
        btnOne.addEventListener("click", leftOperandBtnPress);
        btnTwo.addEventListener("click", leftOperandBtnPress);
        btnThree.addEventListener("click", leftOperandBtnPress);
        btnFour.addEventListener("click", leftOperandBtnPress);
        btnFive.addEventListener("click", leftOperandBtnPress);
        btnSix.addEventListener("click", leftOperandBtnPress);
        btnSeven.addEventListener("click", leftOperandBtnPress);
        btnEight.addEventListener("click", leftOperandBtnPress);
        btnNine.addEventListener("click", leftOperandBtnPress);
        btnZero.addEventListener("click", leftOperandBtnPress);
        btnPlus.addEventListener("click", operatorBtnPress);
        btnMinus.addEventListener("click", operatorBtnPress);
        btnMultiply.addEventListener("click", operatorBtnPress);
        btnDivide.addEventListener("click", operatorBtnPress);
        btnOne.removeEventListener("click", rightOperandBtnPress);
        btnTwo.removeEventListener("click", rightOperandBtnPress);
        btnThree.removeEventListener("click", rightOperandBtnPress);
        btnFour.removeEventListener("click", rightOperandBtnPress);
        btnFive.removeEventListener("click", rightOperandBtnPress);
        btnSix.removeEventListener("click", rightOperandBtnPress);
        btnSeven.removeEventListener("click", rightOperandBtnPress);
        btnEight.removeEventListener("click", rightOperandBtnPress);
        btnNine.removeEventListener("click", rightOperandBtnPress);
        btnZero.removeEventListener("click", rightOperandBtnPress);
        btnClear.addEventListener("click", pressClear);
    }

    function enterRightOperand () {
        displayedLeftOperand.setAttribute("value", displayedLeftOperandValue);
        displayedRightOperand.setAttribute("value", "");
        displayedRightOperandValue = 0;
        btnOne.removeEventListener("click", leftOperandBtnPress);
        btnTwo.removeEventListener("click", leftOperandBtnPress);
        btnThree.removeEventListener("click", leftOperandBtnPress);
        btnFour.removeEventListener("click", leftOperandBtnPress);
        btnFive.removeEventListener("click", leftOperandBtnPress);
        btnSix.removeEventListener("click", leftOperandBtnPress);
        btnSeven.removeEventListener("click", leftOperandBtnPress);
        btnEight.removeEventListener("click", leftOperandBtnPress);
        btnNine.removeEventListener("click", leftOperandBtnPress);
        btnZero.removeEventListener("click", leftOperandBtnPress);
        btnOne.addEventListener("click", rightOperandBtnPress);
        btnTwo.addEventListener("click", rightOperandBtnPress);
        btnThree.addEventListener("click", rightOperandBtnPress);
        btnFour.addEventListener("click", rightOperandBtnPress);
        btnFive.addEventListener("click", rightOperandBtnPress);
        btnSix.addEventListener("click", rightOperandBtnPress);
        btnSeven.addEventListener("click", rightOperandBtnPress);
        btnEight.addEventListener("click", rightOperandBtnPress);
        btnNine.addEventListener("click", rightOperandBtnPress);
        btnZero.addEventListener("click", rightOperandBtnPress);
        btnEquals.addEventListener("click", pressEquals);
    }

    function calculate () {
        switch (operator) {
            case "+" :
                total = leftOperandValueForMath + rightOperandValueForMath;
                displayedLeftOperandValue = total;
                leftOperandValueForMath = total;
                enterRightOperand ();
                break;
            case "-" :
                total = leftOperandValueForMath - rightOperandValueForMath;
                displayedLeftOperandValue = total;
                leftOperandValueForMath = total;
                enterRightOperand ();
                break;
            case "*" :
                total = leftOperandValueForMath * rightOperandValueForMath;
                displayedLeftOperandValue = total;
                leftOperandValueForMath = total;
                enterRightOperand ();
                break;
            case "/" :
                if (rightOperandValueForMath === 0) {
                    msg.innerHTML = "Cannot divide by zero. Clear and try again."
                    btnOne.removeEventListener("click", rightOperandBtnPress);
                    btnTwo.removeEventListener("click", rightOperandBtnPress);
                    btnThree.removeEventListener("click", rightOperandBtnPress);
                    btnFour.removeEventListener("click", rightOperandBtnPress);
                    btnFive.removeEventListener("click", rightOperandBtnPress);
                    btnSix.removeEventListener("click", rightOperandBtnPress);
                    btnSeven.removeEventListener("click", rightOperandBtnPress);
                    btnEight.removeEventListener("click", rightOperandBtnPress);
                    btnNine.removeEventListener("click", rightOperandBtnPress);
                    btnZero.removeEventListener("click", rightOperandBtnPress);
                    btnOne.removeEventListener("click", leftOperandBtnPress);
                    btnTwo.removeEventListener("click", leftOperandBtnPress);
                    btnThree.removeEventListener("click", leftOperandBtnPress);
                    btnFour.removeEventListener("click", leftOperandBtnPress);
                    btnFive.removeEventListener("click", leftOperandBtnPress);
                    btnSix.removeEventListener("click", leftOperandBtnPress);
                    btnSeven.removeEventListener("click", leftOperandBtnPress);
                    btnEight.removeEventListener("click", leftOperandBtnPress);
                    btnNine.removeEventListener("click", leftOperandBtnPress);
                    btnZero.removeEventListener("click", leftOperandBtnPress);
                    btnPlus.removeEventListener("click", operatorBtnPress);
                    btnMinus.removeEventListener("click", operatorBtnPress);
                    btnMultiply.removeEventListener("click", operatorBtnPress);
                    btnDivide.removeEventListener("click", operatorBtnPress);
                    btnEquals.removeEventListener("click", pressEquals);
                } else {
                    total = leftOperandValueForMath / rightOperandValueForMath;
                    displayedLeftOperandValue = total;
                    leftOperandValueForMath = total;
                    enterRightOperand();
                }
                break;
            default :
                total = leftOperandValueForMath / rightOperandValueForMath;
                displayedLeftOperandValue = total;
                leftOperandValueForMath = total;
                enterRightOperand ();
        }
    }

    function pressEquals () {
        calculate();
        operatorDisplay.setAttribute("value", "");
        operator = "";
        displayedRightOperand.setAttribute("value", "");
        displayedRightOperandValue = 0;
        rightOperandValueForMath = 1;
    }

    function pressClear () {
        operatorDisplay.setAttribute("value", "");
        operator = "";
        displayedLeftOperand.setAttribute("value", 0);
        displayedLeftOperandValue = 0;
        leftOperandValueForMath = 0;
        displayedRightOperand.setAttribute("value", "");
        displayedRightOperandValue = 0;
        rightOperandValueForMath = 1;
        msg.innerHTML = "";
        enterLeftOperand();
    }

    enterLeftOperand();
})();
