const student = {
    name: "rafid",
    age: 23,
    gender: "male",
    "present-address": {
        city: "Dhaka",
        area: "Mirpur",
        location: "20/C Mirpur 3",
        country: { fullName: "Bangladesh", shortName: "BD" },
    },
    "permanent-address": {
        city: null,
        area: null,
        location: null,
        country: { shortName: null, fullName: null },
    },
};

// dot notation
const studentName = student.name;

// bracket notation
const studentAge = student["age"]; // normal
const propertyName = "gender";
const studentGender = student[propertyName]; // property name in a variable
const presentAddress = student['present-address']; // property name with special character

// chaining
const studentPresentCountryFullName = student['present-address'].country.fullName;

// optional chaining
const studentPresentCountryShortName = student['present-address']?.country?.shortName; // give property value & undefined for no value