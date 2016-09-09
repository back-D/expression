/*

 var expression = new Expression();
 // OR
 var expression = new Expression('+', 5, 7, '9', 13, ...);

 expression.setOperator('+'); // +, -, /, *

 expression.setLeftSideOperand(5);
 expression.setRightSideOperand('7');

 expression.execute(); // 12

 expression.clear(); // clear operator and operands, like re-init

 // OR

 expression.setOperands([5, 7, 9]);
 expression.setOperands(5, 7, 9); //by using preuso-array arguments

 expression.execute(); // 21
 */
"use strict";

function Expression() {
    var operator = '',
        leftSideOperand = '',
        rightSideOperand = '',
        argumentLength = arguments.length,
        operandArray = [],
        operandArray2 = [],
        myArguments = arguments;

    function clear () {
        operandArray2 = [];
        leftSideOperand = '';
        rightSideOperand = '';
        argumentLength = 0;
        operandArray = 0;
    }

    this.setOperator = function (oper) {
        operator = oper;
    };
    this.setLeftSideOperand = function (leftOperand) {
        leftSideOperand = leftOperand;
    };
    this.setRightSideOperand = function (rightOperand) {
        rightSideOperand = rightOperand;
    };


    this.setOperands = function () {
        operandArray = Array.prototype.slice.apply(arguments);

        if (operandArray[0] instanceof Array) {
            operandArray2 = operandArray.shift();
        } else {
            operandArray2 = operandArray;
        }

    };

    this.execute = function () {

        if (leftSideOperand != '' && rightSideOperand != '') {
            operandArray.push(leftSideOperand, rightSideOperand);
            return eval(operandArray.join(operator));

        } else if (argumentLength >= 3) {
            operator = myArguments[0];
            for (var i = 1; i < argumentLength; i++) {
                operandArray[i-1] = myArguments[i];
            }
            return eval(operandArray.join(operator));

        } else if (operandArray2.length != 0) {
            return eval(operandArray2.join(operator));
        } else {
            console.log('Убери руки, дурачёк!');
        }
        clear();
    };

    this.clear = function () {
        operator = '';
        leftSideOperand = '';
        rightSideOperand = '';
        operandArray = [];
        operandArray2 = [];
        argumentLength = 0;
    };

    return this;
}

var expression = new Expression();

expression.setOperator("+");
expression.setOperands([5, 7, 9]);
expression.execute();
expression.clear();

expression.setLeftSideOperand(3);
expression.setRightSideOperand("9");
expression.execute();