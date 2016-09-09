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

function Expression() {
    var operator = '',
        leftSideOperand = '',
        rightSideOperand = '',
        argumentLength = arguments.length,
        operandArray = [],
        operandArray2 = [],
        myArguments = arguments;

    this.setOperator = function (a) {
        operator = a;
    };
    this.setLeftSideOperand = function (a) {
        leftSideOperand = a;
    };
    this.setRightSideOperand = function (a) {
        rightSideOperand = a;
    };


    this.setOperands = function () {
        var isArray = [];
        for (var i = 0; i < arguments.length; i++) {
            operandArray[i] = arguments[i];
            isArray[i] = arguments[i];
        }

        if (typeof (isArray.shift()) == "object") {
            operandArray2 = operandArray.shift();
        } else operandArray2 = operandArray;


    };

    this.execute = function () {

        if (leftSideOperand != '' && rightSideOperand != '') {
            operandArray.push(leftSideOperand, operator, rightSideOperand);
            return eval(operandArray.join(''));

        } else if (argumentLength >= 3) {
            operator = myArguments[0];
            for (var i = 1; i < argumentLength; i++) {
                operandArray[i-1] = myArguments[i];
            }
            return eval(operandArray.join(operator));

        } else if (operandArray2 != []) {
            return eval(operandArray2.join(operator));
        }
        console.log('Убери руки, дурачёк!');
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