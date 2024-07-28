export function week(listarray){
    let week_temp_array = [];
    let yourDate = new Date();
    yourDate = yourDate.toISOString().split('T')[0];

    // Add one week to yourDate
    let newDate = new Date(yourDate);
    newDate.setDate(newDate.getDate() + 7);
    newDate = newDate.toISOString().split('T')[0];
    for (let array of listarray){
        if ((array.due_date >= yourDate) && (array.due_date <= newDate)) {
            week_temp_array.push(array);
        }
    }
    return week_temp_array;
}