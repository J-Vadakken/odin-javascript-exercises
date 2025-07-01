const findTheOldest = function(arr_obj) {
    return arr_obj.reduce((oldest, person) => {
        let swap_flag = false;
        const currentDate = new Date();

        let old_dod = oldest.yearOfDeath;
        if (old_dod == undefined) {
            old_dod = currentDate.getFullYear();
        }
        let person_dod = person.yearOfDeath;
        if (person_dod == undefined) {
            person_dod = currentDate.getFullYear();
        }
        let old_dob = oldest.yearOfBirth;
        let person_dob = person.yearOfBirth;
        swap_flag = (old_dod - old_dob) <= (person_dod - person_dob);
        
        return swap_flag ? person : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
