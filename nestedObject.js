const person = {
    personalInfo: {
        name: "Mithun",
        age: 21,
    },
    address: {
        street: "B8, Block B, Industrial Araa.",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh",
    },
};

function nestedObject({ personalInfo: { name }, address: { street } }) {
    return { name, street };
};

let { name, street } = nestedObject(person);
console.log("Name: ", name);
console.log("Street: ", street);