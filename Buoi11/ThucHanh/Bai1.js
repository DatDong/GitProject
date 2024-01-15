let person = {
    name : {
        first: 'Bob',
        last: 'Smith'
      },
      
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    console.log(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  },
  greeting: function () {
    console.log("Hi! I'm " + this.name[0] + ".");
  },
};

person.bio();
person.greeting();
console.log("@@@",person.age.toString());
console.log("@@@",person.name.first);

person.age = 45;
console.log("@@@@",person['name']['first']);
console.log("@@@@", person.age);

person['eyes'] = 'hazel';
person.farewell  = function() { console.log("Bye everybody!"); }
console.log(person.eyes);
person.farewell();

// let myDataName = nameInput.value;
// let myDataValue = nameValue.value;

// person[myDataName] = myDataValue;

let myDataName = 'height';
let myDataValue = '1.75m';
person[myDataName] = myDataValue;

console.log("@@@@@",person.height);
