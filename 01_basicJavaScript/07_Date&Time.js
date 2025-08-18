// Date 

let myDate = new Date();
// console.log(myDate); //2025-07-27T18:29:10.943Z random 
// console.log(myDate.toString()); //Sun Jul 27 2025 11:30:00 GMT-0700 (Pacific Daylight Time) , Understandable
// console.log(myDate.toDateString()); //Sun Jul 27 2025, The Perfect date whcih only give date not time.
// console.log(myDate.toISOString()); // 2025-07-27T18:38:50.459Z , its mainly gives time.
// console.log(myDate.toJSON()); // Same As Above.
// console.log(myDate.toLocaleDateString()); //  7/27/2025
// console.log(myDate.toLocaleTimeString()); 11:41:46 AM
// console.log(myDate.toLocaleString()); // 7/27/2025, 11:42:14 AM
// console.log(typeof(myDate)); // object

// let myCreated_date = new Date(2025, 0 , 23); // Months Generally Starts From "0" not from "1".
// let myCreated_date2 = new Date("2006-09-05"); // syntax YY/MM/DD
// // console.log(myCreated_date2.toDateString());

// let myTimeStamp = Date.now();
// // console.log(myTimeStamp);
// // console.log(myCreated_date2.getTime());
// console.log(Math.floor(Date.now()/ 1000));

let newDate = new Date();
// console.log(newDate.getUTCMonth());

// console.log(`Today is ${newDate.getDay()+ 1} And Month Is ${newDate.getMonth()} `);

newDate.toLocaleString('default', {
    weekday : "long",
})




 
