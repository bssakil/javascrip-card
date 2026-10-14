// function get user input is string or number 
function getUserInput (promptMessage, isNumber=false){
    const userInput=prompt(promptMessage);
    return isNumber ? parseFloat(userInput) : userInput ;
}

// function get user expenses
function getExpenses(expenseslist){
    const expenses = [];
    for(let i = 0; i <= expenseslist; i++ ){
                let expense = getUserInput(`Enter Your No: ${i}`,true);

                if(isNaN(expense) || expense < 0){
                        console.log(`Invalid Input ${i}. Error!`);
                        expense=0;
                        expenses.push(expense);
                        }
                        
                }
    return expenses;
}

//function get total expenses
function calculateTotalExpenses(expenses){
    totalExpenses = 0;
    for(let index=0; index < expenses.length; index++){
        totalExpenses += expenses[index]
        };
        return totalExpenses;
        }

//function get tex rate
function calculateTax(income,taxRate){
    return income * taxRate;
}

//function get net income
function calculateNetIncome(income,tax){
    return income - tax;
}

//function get total income
function calculateTotalIncome(netIncome,totalExpenses){
    return netIncome - totalExpenses;
}

//function get income savings
function calculateSavingIncome(balance,savingsRate){
    return balance * 0.2;
}

//function get finalState
function calculateFinalState(savings){
    let finalState = "";
        if (savings > 1000){
                finalState = "Excellent!"
        }

        else if (savings > 500){
                finalState = "Good!"
        }

        else if (savings > 100){
                finalState = "Criatical!"
        }
        else{
                finalState = "Your Saving are too low!"
        }
    return finalState;
}

//function get Dispiay Resulte
function displayResulte(userName,income,totalExpenses,tax,netIncome,balance,savings,finalState){
    let overExpenses ="";
        if(totalExpenses > income){
                overExpenses = "Warning"
        }
        console.log("Personal Budget Tracker");
        console.log(`User Name : ${userName}`);
        console.log("Total Income :$" + income);
        console.log("Total Expenses :$" + totalExpenses);
        console.log("Deducation of 10% Tax :$" + tax);
        console.log("After Net Income :$" + netIncome);
        console.log("Remaining Balance :$" + balance);
        console.log("Savings Balance :$" + savings);
        console.log(finalState);
        const overSpending = checkOverSpending(income,totalExpenses);
        if(overSpending){
        console.log(overSpending);
        }
    
}

//Check Over Spending Message
function checkOverSpending(income,totalExpenses){
    return totalExpenses > income ? "Warning" : "";
}


//Main function run to budget tacker app
function runBudgetTacker(){
    const userName = getUserInput("Enter Your Full Name :");
    const income = getUserInput("Enter Your Total Income :", true);
    const expenses = getUserInput("How Many Expenses Your? ", true);

        if(isNaN(income) || isNaN(expenses) || expenses < 0 || income < 0){
                console.log(`Invalid Input`)
                return;
        }
        else{
            const expenses = getExpenses();
            const totalExpenses = calculateTotalExpenses(expenses);

        //Tax deducation (10% of income)
        let tax = calculateTax(income,0.1);
        // net income after the tax
        let netIncome = calculateNetIncome(income, tax);
        //calculate remaining balance
        let balance = calculateTotalIncome(netIncome,totalExpenses);
        //savings (20% of remaining balance)
        let savings = calculateSavingIncome(balance,savingsRate);

        let finalState =calculateFinalState(savings);
        displayResulte(userName,income,totalExpenses,tax,netIncome,balance,savings,finalState);

        }
}
runBudgetTacker();