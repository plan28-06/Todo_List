export function sortarray(arrays){
    let placeholder;
    for (let i=0;i<arrays.length;i++){
        for (let j=i+1;j<arrays.length;j++){
            if (arrays[i].due_date > arrays[j].due_date){
                placeholder = arrays[i];
                arrays[i] = arrays[j];
                arrays[j] = placeholder
            }
            else{
                continue;
            }
        }
    }
    return arrays;
}