function daysUntilChristmas() {
    // Get today's date
    let today = new Date();

    // Get the year of today's date
    let year = today.getFullYear();

    // Create a date object for Christmas of the current year
    let christmas = new Date(year, 11, 25); // December 25

    // If today is after Christmas, calculate for the next year's Christmas
    if (today > christmas) {
        christmas.setFullYear(year + 1);
    }

    // Calculate the time difference in milliseconds
    let timeDifference = christmas - today;

    // Convert the time difference from milliseconds to days
    let daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysLeft;
}

// Output the number of days left before Christmas
console.log("Days left until Christmas: " + daysUntilChristmas());
