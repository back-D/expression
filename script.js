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
        myArguments = arguments,
        isSimpleExpression = true;

    function clear () {
        operator = '';
        operandArray2 = [];
        leftSideOperand = '';
        rightSideOperand = '';
        argumentLength = 0;
        operandArray = 0;
        isSimpleExpression = true;
    }

    this.setOperator = function (value) {
        operator = value;
    };
    this.setLeftSideOperand = function (value) {
        leftSideOperand = value;
    };
    this.setRightSideOperand = function (value) {
        rightSideOperand = value;
    };


    this.setOperands = function () {
        var isArray = Array.isArray(arguments[0]);
        operandArray = isArray ? arguments[0] : Array.prototype.slice.apply(arguments);
        isSimpleExpression = false;
    };

    this.execute = function () {

        if (leftSideOperand != '' && rightSideOperand != '') {

            return eval([leftSideOperand, rightSideOperand].join(operator));

        } else if (argumentLength >= 3) {
            operator = myArguments[0];
            for (var i = 1; i < argumentLength; i++) {
                operandArray[i-1] = myArguments[i];
            }
            return eval(operandArray.join(operator));

        } else if (!isSimpleExpression) {
            return eval(operandArray.join(operator));
        } else {
            console.log('Убери руки, дурачёк!');
        }
        clear();
    };

    this.clear = clear;

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