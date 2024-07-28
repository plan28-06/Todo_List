export function today(listarray){
    let today_temp_array = [];
    let yourDate = new Date();
    yourDate = yourDate.toISOString().split('T')[0];

    // Add one day to yourDate
    let newDate = new Date(yourDate);
    newDate.setDate(newDate.getDate() + 1);
    newDate = newDate.toISOString().split('T')[0];
    for (let array of listarray){
        if (array.due_date == yourDate){
            today_temp_array.push(array);
        }
    }
    return today_temp_array;

}