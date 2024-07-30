// write javascript program to print the current window content.


function displayDateTime() {
    const now = new Date();

    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()];

    // Get the current time
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;


    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Display the day and time
    console.log(`Today is : ${day}.`);
    console.log(`Current time is : ${hours} ${amPm} : ${formattedMinutes} : ${formattedSeconds}`);
}


displayDateTime();
