// if

// const isUserloggedin = true
const temperature = 30

// if (temperature <= 25) {
//     console.log(`Executed`);
// } else {
//     console.log(`Temperature Is Higher Than 25`);
// }

// if (isUserloggedin) {


// }

// < , >, <=, >=, !, ===, ==, !=, !==

// const score = 200;
// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power Is ${power}`);

// }

const isUserloggedin = false
const have_Credit_Card = true
const credit_score = 122
// if (balance > 1000) console.log(`test`);
if (isUserloggedin) {

    if (have_Credit_Card) {

        if (credit_score >= 500 && credit_score < 600) {
            console.log(`Your Credit Score is ${credit_score} So, You Are Eligible For 1 lakh Loan`);
        } else if (credit_score >= 600 && credit_score < 700) {
            console.log(`Your Credit Score is ${credit_score} So, You Are Eligible For 5 lakh Loan`);
        } else if (credit_score >= 700 && credit_score < 800) {
            console.log(`Your Credit Score is ${credit_score} So, You Are Eligible For 25 lakh Loan`);
        } else if (credit_score >= 900 && credit_score < 1000) {
            console.log(`Your Credit Score is ${credit_score} So, You Are Eligible For 35 lakh Loan`);
        } else if (credit_score > 1000) {
            console.log(`Your Credit Score is ${credit_score} So, You Are Eligible For 1 crore Loan`);
        } else {
            console.log(`Your Credit Score is ${credit_score} Which Is Less Than 500 So, You Are Not Eligible For Any Loan`);
        }

    } else console.log(`User Does Not Have Credit Card`);


} else console.log(`User Not Logged In`);

 

