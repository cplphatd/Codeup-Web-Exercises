/**
 * Created by David on 11/16/16.
 */
"use strict";
(function () {

    // var btnOne = document.getElementById("btnOne");
    // var btnTwo = document.getElementById("btnTwo");
    // var btnThree = document.getElementById("btnThree");
    // var btnFour = document.getElementById("btnFour");
    // var btnFive = document.getElementById("btnFive");
    // var btnSix = document.getElementById("btnSix");
    // var btnSeven = document.getElementById("btnSeven");
    // var btnEight = document.getElementById("btnEight");
    // var btnNine = document.getElementById("btnNine");
    // var btnZero = document.getElementById("btnZero");
    // var btnPlus = document.getElementById("btnPlus");
    // var btnMinus = document.getElementById("btnMinus");
    // var btnMultiply = document.getElementById("btnMultiply");
    // var btnDivide = document.getElementById("btnDivide");
    // var btnClear = document.getElementById("btnClear");
    // var btnEquals = document.getElementById("btnEquals");
    // var btnDecimal = document.getElementById("btnDecimal");
    // var btnSquare = document.getElementById("btnSquare");
    // var btnSqRoot = document.getElementById("btnSqRoot");
    // var btnPosNeg = document.getElementById("btnPosNeg");
    // var operatorDisplay = document.getElementById("operator");
    // var displayedLeftOperand = document.getElementById("leftOperand");              //The actual left operand element


    var leftOperandNumber = 0;
    var rightOperandNumber = 0;
    var operator;
    var operatorCounter = 0;
    var decimalPressCounter = 0;
    var total;

    // var displayedLeftOperandValue = displayedLeftOperand.getAttribute("value");     //The value of the left operand element
    // var leftOperandValueForMath = 0;                                                //Value of left operand converted to num for math
    // var displayedRightOperand = document.getElementById("rightOperand");            //The actual right operand element
    // var displayedRightOperandValue = 0;                                             //The value of the right operand element
    // var rightOperandValueForMath = 0;                                               //Value of right operand converted to num for math
    // var operator;
    // var operatorCounter = 0;                                                        //This value tracks the number of operator button presses before clearing or pressing equals
    // var decimalPressCounter = 0;
    // var total;
    // var msg = document.getElementById("msg");

    //Converts operands to strings
    var convertOperandToString = function (operandNumber) {
        return operandNumber.toString();
    };

    //Converts operands to numbers
    var convertOperandToNumber = function (operandString) {
        return parseFloat(operandString);
    };

    //All button press functions will follow this structure

    var leftOperandBtnPress = function () {

        if($("#leftOperand").val() != "0") {
            $("#leftOperand").attr("value", $("#leftOperand").val() + $(this).text());
            leftOperandNumber = convertOperandToNumber($("#leftOperand").val());
        } else {
            $("#leftOperand").attr("value", $(this).text());
            leftOperandNumber = convertOperandToNumber($("#leftOperand").val());
        }
    };

    // var leftOperandBtnPress = function () {
    //     if (displayedLeftOperandValue != "0") {
    //         displayedLeftOperand.setAttribute("value", displayedLeftOperandValue + this.innerHTML);
    //         displayedLeftOperandValue = displayedLeftOperand.getAttribute("value");
    //         displayedLeftOperandValue = convertOperandToString(displayedLeftOperandValue);
    //         leftOperandValueForMath = convertOperandToNumber(displayedLeftOperandValue);
    //     } else {
    //         displayedLeftOperand.setAttribute("value", this.innerHTML);
    //         displayedLeftOperandValue = displayedLeftOperand.getAttribute("value");
    //         displayedLeftOperandValue = convertOperandToString(displayedLeftOperandValue);
    //         leftOperandValueForMath = convertOperandToNumber(displayedLeftOperandValue);
    //     }
    // };

    var rightOperandBtnPress = function () {
        if ($("#rightOperand").val() != "0") {
            $("#rightOperand").attr("value", $("#rightOperand").val() + $(this).text());
            rightOperandNumber = convertOperandToNumber($("#rightOperand").val());
        } else {
            $("#rightOperand").attr("value", $(this).text());
            rightOperandNumber = convertOperandToNumber($("#rightOperand").val());
        }
    };

    // var rightOperandBtnPress = function () {
    //     if (displayedRightOperandValue != "0") {
    //         displayedRightOperand.setAttribute("value", displayedRightOperandValue + this.innerHTML);
    //         displayedRightOperandValue = displayedRightOperand.getAttribute("value");
    //         displayedRightOperandValue = convertOperandToString(displayedRightOperandValue);
    //         rightOperandValueForMath = convertOperandToNumber(displayedRightOperandValue);
    //     } else {
    //         displayedRightOperand.setAttribute("value", this.innerHTML);
    //         displayedRightOperandValue = displayedRightOperand.getAttribute("value");
    //         displayedRightOperandValue = convertOperandToString(displayedRightOperandValue);
    //         rightOperandValueForMath = convertOperandToNumber(displayedRightOperandValue);
    //     }
    // };

    //TODO: evaluate the neccessity of the if/else tree for operatorCounter
    var operatorBtnPress = function () {
        if (operatorCounter == 0) {
            operatorCounter += 1;

            //Call calculate function at this point for running total
            calculate($(this).text(), leftOperandNumber, rightOperandNumber);

            $("#operator").attr("value", $(this).text());
            decimalPressCounter = 0;    //reset decimal press counter for right operand
            handleSpecialOperator($(this).text());
        } else {
            operator = $(this).text();
            $("#operator").attr("value", $(this).text());
            calculate($(this).text(), leftOperandNumber, rightOperandNumber);
            decimalPressCounter = 0;
            handleSpecialOperator($(this).text());
        }
    };

    //Immediately calculates result without right operand for sq, sqrt, or negate
    var handleSpecialOperator = function (specialOperator) {

        if (specialOperator == "sq" || specialOperator == "sqrt" || specialOperator == "+/-") {
            calculate(specialOperator, leftOperandNumber, rightOperandNumber);
            decimalPressCounter = 0;
        } else {
            enterRightOperand();
            decimalPressCounter = 0;
        }
    };

    // var operatorBtnPress = function () {
    //     if (operatorCounter == 0) {
    //         operatorCounter += 1;
    //         calculate();
    //         operator = this.innerHTML.toString();
    //         operatorDisplay.setAttribute("value", this.innerHTML);
    //         decimalPressCounter = 0;
    //         if (operator == "sq" || operator == "sqrt" || operator == "+/-") {
    //             calculate();
    //             decimalPressCounter = 0;
    //         } else {
    //             enterRightOperand();
    //             decimalPressCounter = 0;
    //         }
    //     } else {
    //         operator = this.innerHTML.toString();
    //         operatorDisplay.setAttribute("value", this.innerHTML);
    //         calculate();
    //         decimalPressCounter = 0;
    //         if (operator == "sq" || operator == "sqrt" || operator == "+/-") {
    //             calculate();
    //             decimalPressCounter = 0;
    //         } else {
    //             enterRightOperand();
    //             decimalPressCounter = 0;
    //         }
    //     }
    // };

    //TODO: see if there is a way to consolidate left and right decimal press functions
    var leftDecimalBtnPress = function () {
        if (decimalPressCounter == 0) {
            $("#leftOperand").attr("value", $("#leftOperand").val() + $(this).text());
            leftOperandNumber = convertOperandToNumber($("#leftOperand").val());
            decimalPressCounter += 1;
        } else {
            $("#btnDecimal").off();
        }
    };

    var rightDecimalBtnPress = function () {
        if (decimalPressCounter == 0) {
            $("#rightOperand").attr("value", $("#rightOperand").val() + $(this).text());
            rightOperandNumber = convertOperandToNumber($("#rightOperand").val());
            decimalPressCounter += 1;
        } else {
            $("#btnDecimal").off();
        }
    };


    // var leftDecimalBtnPress = function () {
    //     if (decimalPressCounter < 1) {
    //         displayedLeftOperand.setAttribute("value", displayedLeftOperandValue + this.innerHTML);
    //         displayedLeftOperandValue = displayedLeftOperand.getAttribute("value");
    //         displayedLeftOperandValue = convertOperandToString(displayedLeftOperandValue);
    //         leftOperandValueForMath = convertOperandToNumber(displayedLeftOperandValue);
    //         decimalPressCounter += 1;
    //     } else {
    //         btnDecimal.removeEventListener("click", leftOperandBtnPress);
    //     }
    // };
    //
    // var rightDecimalBtnPress = function () {
    //     if (decimalPressCounter < 1) {
    //         displayedRightOperand.setAttribute("value", displayedRightOperandValue + this.innerHTML);
    //         displayedRightOperandValue = displayedRightOperand.getAttribute("value");
    //         displayedRightOperandValue = convertOperandToString(displayedRightOperandValue);
    //         rightOperandValueForMath = convertOperandToNumber(displayedRightOperandValue);
    //         decimalPressCounter += 1;
    //     } else {
    //         btnDecimal.removeEventListener("click", rightOperandBtnPress);
    //     }
    // };

    //TODO: see if there is a way to consolidate negate into one function

    var negateLeftOperand = function () {
        total = leftOperandNumber * -1;
        $("#leftOperand").attr("value", total);
        leftOperandNumber = total;
    };

    var negateRightOperand = function () {
        total = rightOperandNumber * -1;
        $("#rightOperand").attr("value", total);
        rightOperandNumber = total;
    };

    // var negateLeftOperand = function () {
    //     total = leftOperandValueForMath * -1;
    //     displayedLeftOperandValue = total;
    //     leftOperandValueForMath = total;
    //     displayedLeftOperand.setAttribute("value", displayedLeftOperandValue);
    // };
    //
    // var negateRightOperand = function () {
    //     total = rightOperandValueForMath * -1;
    //     displayedRightOperandValue = total;
    //     rightOperandValueForMath = total;
    //     displayedRightOperand.setAttribute("value", displayedRightOperandValue);
    // };

    var enterLeftOperand = function () {
        $(".num-btn").off();
        $("#btndecimal").off();
        $("#btnPosNeg").off();

        $(".num-btn").each(function (numBtn) {
            numBtn.click(leftOperandBtnPress);
        });

        $(".operator-btn").each(function (opBtn) {
            opBtn.click(operatorBtnPress);
        });

        $("#btnDecimal").click(leftDecimalBtnPress);

        $("#btnPosNeg").click(negateLeftOperand);

        $("#btnclear").click(pressClear);
    };

    var enterRightOperand = function () {
        //TODO: Does it still work correctly with 0 vs ""?
        $("#rightOperand").attr("value", "0");
        rightOperandNumber = 0;

        $(".num-btn").off();
        $("#btnDecimal").off();
        $("#btnPosNeg").off();

        $(".num-btn").each(function (numBtn) {
            numBtn.click(rightOperandBtnPress);
        });

        $("#btnDecimal").click(rightDecimalBtnPress);

        $("#btnPosNeg").click(negateRightOperand);
    };

    // var enterLeftOperand = function () {
    //     btnOne.addEventListener("click", leftOperandBtnPress);
    //     btnTwo.addEventListener("click", leftOperandBtnPress);
    //     btnThree.addEventListener("click", leftOperandBtnPress);
    //     btnFour.addEventListener("click", leftOperandBtnPress);
    //     btnFive.addEventListener("click", leftOperandBtnPress);
    //     btnSix.addEventListener("click", leftOperandBtnPress);
    //     btnSeven.addEventListener("click", leftOperandBtnPress);
    //     btnEight.addEventListener("click", leftOperandBtnPress);
    //     btnNine.addEventListener("click", leftOperandBtnPress);
    //     btnZero.addEventListener("click", leftOperandBtnPress);
    //     btnDecimal.addEventListener("click", leftDecimalBtnPress);
    //     btnPlus.addEventListener("click", operatorBtnPress);
    //     btnMinus.addEventListener("click", operatorBtnPress);
    //     btnMultiply.addEventListener("click", operatorBtnPress);
    //     btnDivide.addEventListener("click", operatorBtnPress);
    //     btnSquare.addEventListener("click", operatorBtnPress);
    //     btnSqRoot.addEventListener("click", operatorBtnPress);
    //     btnPosNeg.addEventListener("click", negateLeftOperand);
    //     btnOne.removeEventListener("click", rightOperandBtnPress);
    //     btnTwo.removeEventListener("click", rightOperandBtnPress);
    //     btnThree.removeEventListener("click", rightOperandBtnPress);
    //     btnFour.removeEventListener("click", rightOperandBtnPress);
    //     btnFive.removeEventListener("click", rightOperandBtnPress);
    //     btnSix.removeEventListener("click", rightOperandBtnPress);
    //     btnSeven.removeEventListener("click", rightOperandBtnPress);
    //     btnEight.removeEventListener("click", rightOperandBtnPress);
    //     btnNine.removeEventListener("click", rightOperandBtnPress);
    //     btnZero.removeEventListener("click", rightOperandBtnPress);
    //     btnDecimal.removeEventListener("click", rightDecimalBtnPress);
    //     btnPosNeg.removeEventListener("click", negateRightOperand);
    //     btnClear.addEventListener("click", pressClear);
    // };
    //
    // var enterRightOperand = function () {

    //TODO:  Does it still work without this line?
    //     displayedLeftOperand.setAttribute("value", displayedLeftOperandValue);

    //     displayedRightOperand.setAttribute("value", "");
    //     displayedRightOperandValue = 0;
    //     btnOne.removeEventListener("click", leftOperandBtnPress);
    //     btnTwo.removeEventListener("click", leftOperandBtnPress);
    //     btnThree.removeEventListener("click", leftOperandBtnPress);
    //     btnFour.removeEventListener("click", leftOperandBtnPress);
    //     btnFive.removeEventListener("click", leftOperandBtnPress);
    //     btnSix.removeEventListener("click", leftOperandBtnPress);
    //     btnSeven.removeEventListener("click", leftOperandBtnPress);
    //     btnEight.removeEventListener("click", leftOperandBtnPress);
    //     btnNine.removeEventListener("click", leftOperandBtnPress);
    //     btnZero.removeEventListener("click", leftOperandBtnPress);
    //     btnDecimal.removeEventListener("click", leftDecimalBtnPress);
    //     btnPosNeg.removeEventListener("click", negateLeftOperand);
    //     btnOne.addEventListener("click", rightOperandBtnPress);
    //     btnTwo.addEventListener("click", rightOperandBtnPress);
    //     btnThree.addEventListener("click", rightOperandBtnPress);
    //     btnFour.addEventListener("click", rightOperandBtnPress);
    //     btnFive.addEventListener("click", rightOperandBtnPress);
    //     btnSix.addEventListener("click", rightOperandBtnPress);
    //     btnSeven.addEventListener("click", rightOperandBtnPress);
    //     btnEight.addEventListener("click", rightOperandBtnPress);
    //     btnNine.addEventListener("click", rightOperandBtnPress);
    //     btnZero.addEventListener("click", rightOperandBtnPress);
    //     btnDecimal.addEventListener("click", rightDecimalBtnPress)
    //     btnPosNeg.addEventListener("click", negateRightOperand);
    //     btnEquals.addEventListener("click", pressEquals);
    // };

    var calculate = function (operator, leftValue, rightValue) {
        switch (operator) {
            case "+":
                total = ((leftValue * 100) + (rightValue * 100)) / 100;
                $("#leftOperand").attr("value", total);
                leftValue = total;
                enterRightOperand();
                break;
            case "-":
                total = ((leftValue * 100) - (rightValue * 100)) / 100;
                $("#leftOperand").attr("value", total);
                leftValue = total;
                enterRightOperand();
                break;
            case "*":
                total = ((leftValue * 100) * (rightValue * 100)) / 10000;
                $("#leftOperand").attr("value", total);
                leftValue = total;
                enterRightOperand();
                break;
            case "/":
                if (rightValue == 0) {
                    dividedByZero();
                } else {
                    total = (leftValue * 100) / (rightValue * 100);
                    $("#leftOperand").attr("value", total);
                    leftValue = total;
                    enterRightOperand();
                }
                break;
            case "sq":
                rightValue = leftValue;
                total = ((leftValue * 100) * (rightValue * 100)) / 10000;
                $("#leftOperand").attr("value", total);
                leftValue = total;
                enterRightOperand();
                break;
            case "sqrt":
                total = Math.sqrt(leftValue);
                $("#leftOperand").attr("value", total);
                leftValue = total;
                enterRightOperand();
                break;
            default:
                enterRightOperand();
        }
    };

    var dividedByZero = function () {

    };

    // var calculate = function () {
    //     switch (operator) {
    //         case "+" :
    //             total = ((leftOperandValueForMath*100) + (rightOperandValueForMath*100))/100;
    //             displayedLeftOperandValue = total;
    //             leftOperandValueForMath = total;
    //             enterRightOperand ();
    //             break;
    //         case "-" :
    //             total = ((leftOperandValueForMath * 100) - (rightOperandValueForMath * 100))/100;
    //             displayedLeftOperandValue = total;
    //             leftOperandValueForMath = total;
    //             enterRightOperand ();
    //             break;
    //         case "*" :
    //             total = ((leftOperandValueForMath * 100) * (rightOperandValueForMath * 100))/10000;
    //             displayedLeftOperandValue = total;
    //             leftOperandValueForMath = total;
    //             enterRightOperand ();
    //             break;
    //         case "/" :
    //             if (rightOperandValueForMath === 0) {
    //                 msg.innerHTML = "Game Over. Cannot divide by zero. Clear and try again."
    //                 btnOne.removeEventListener("click", rightOperandBtnPress);
    //                 btnTwo.removeEventListener("click", rightOperandBtnPress);
    //                 btnThree.removeEventListener("click", rightOperandBtnPress);
    //                 btnFour.removeEventListener("click", rightOperandBtnPress);
    //                 btnFive.removeEventListener("click", rightOperandBtnPress);
    //                 btnSix.removeEventListener("click", rightOperandBtnPress);
    //                 btnSeven.removeEventListener("click", rightOperandBtnPress);
    //                 btnEight.removeEventListener("click", rightOperandBtnPress);
    //                 btnNine.removeEventListener("click", rightOperandBtnPress);
    //                 btnZero.removeEventListener("click", rightOperandBtnPress);
    //                 btnDecimal.removeEventListener("click", rightOperandBtnPress);
    //                 btnOne.removeEventListener("click", leftOperandBtnPress);
    //                 btnTwo.removeEventListener("click", leftOperandBtnPress);
    //                 btnThree.removeEventListener("click", leftOperandBtnPress);
    //                 btnFour.removeEventListener("click", leftOperandBtnPress);
    //                 btnFive.removeEventListener("click", leftOperandBtnPress);
    //                 btnSix.removeEventListener("click", leftOperandBtnPress);
    //                 btnSeven.removeEventListener("click", leftOperandBtnPress);
    //                 btnEight.removeEventListener("click", leftOperandBtnPress);
    //                 btnNine.removeEventListener("click", leftOperandBtnPress);
    //                 btnZero.removeEventListener("click", leftOperandBtnPress);
    //                 btnDecimal.removeEventListener("click", leftOperandBtnPress);
    //                 btnPlus.removeEventListener("click", operatorBtnPress);
    //                 btnMinus.removeEventListener("click", operatorBtnPress);
    //                 btnMultiply.removeEventListener("click", operatorBtnPress);
    //                 btnDivide.removeEventListener("click", operatorBtnPress);
    //                 btnSquare.removeEventListener("click", operatorBtnPress);
    //                 btnSqRoot.removeEventListener("click", operatorBtnPress);
    //                 btnPosNeg.removeEventListener("click", negateLeftOperand);
    //                 btnPosNeg.removeEventListener("click", negateRightOperand);
    //                 btnEquals.removeEventListener("click", pressEquals);
    //             } else {
    //                 total = (leftOperandValueForMath * 100) / (rightOperandValueForMath * 100);  //multiply by 100 then divide by 100 to bypass problems with floating point math
    //                 displayedLeftOperandValue = total;
    //                 leftOperandValueForMath = total;
    //                 enterRightOperand();
    //             }
    //             break;
    //         case "sq" :
    //             rightOperandValueForMath = leftOperandValueForMath;
    //             total = ((leftOperandValueForMath * 100) * (rightOperandValueForMath * 100))/10000;
    //             displayedLeftOperandValue = total;
    //             leftOperandValueForMath = total;
    //             enterRightOperand ();
    //             break;
    //         case "sqrt" :
    //             total = Math.sqrt(leftOperandValueForMath);
    //             displayedLeftOperandValue = total;
    //             leftOperandValueForMath = total;
    //             enterRightOperand ();
    //             break;
    //         default :
    //             enterRightOperand ();
    //     }
    // };

    var pressEquals = function () {
        calculate($("#operator").text(), leftOperandNumber, rightOperandNumber);
        $("#operator").attr("value", "");
        operatorCounter = 0;
        $("#rightOperand").attr("value", "");
        rightOperandNumber = 0;
        decimalPressCounter = 0;
    };

    // var pressEquals = function () {
    //     calculate();
    //     operatorDisplay.setAttribute("value", "");
    //     operator = "";
    //     operatorCounter = 0;
    //     displayedRightOperand.setAttribute("value", "");
    //     displayedRightOperandValue = 0;
    //     rightOperandValueForMath = 0;
    //     decimalPressCounter = 0;
    // };

    var pressClear = function () {
        $("#operator").attr("value", "");
        operatorCounter = 0;
        $("#leftOperand").attr("value", "0");
        leftOperandNumber = 0;
        $("#rightOperand").attr("value", "");
        rightOperandNumber = 0;
        decimalPressCounter = 0;
        msg.innerHTML = "";
        enterLeftOperand();
    };

    // var pressClear = function () {
    //     operatorDisplay.setAttribute("value", "");
    //     operator = "";
    //     operatorCounter = 0;
    //     displayedLeftOperand.setAttribute("value", 0);
    //     displayedLeftOperandValue = 0;
    //     leftOperandValueForMath = 0;
    //     displayedRightOperand.setAttribute("value", "");
    //     displayedRightOperandValue = 0;
    //     rightOperandValueForMath = 0;
    //     decimalPressCounter = 0;
    //     msg.innerHTML = "";
    //     enterLeftOperand();
    // };

    enterLeftOperand();
})();
