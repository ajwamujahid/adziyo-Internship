// union type
// {
// let person: string | number | boolean;
// person = "ajwa";
// console.log(person);
// person = 22;
// console.log(person);
// person = true;
// console.log(person);
// }
// intersection Type
{
    var Person = {
        name: "ajwa",
        age: 22,
        companyname: "abc",
        salary: 12345,
    };
    console.log(Person);
}
// Touples Array & destructing
{
    var person = ["Ajwa", 22, true];
    var name_1 = person[0], age = person[1], isActive = person[2];
    console.log(name_1);
    console.log(age);
    console.log(isActive);
}
// touples
// {
//     let numbers: number[] = [1, 2, 3, 4, 5];
// let names: string[] = ["Ajwa", "Mujahid", "Ali"];
// let flags: boolean[] = [true, false, true];
// console.log(numbers);
// array in ts 
// let numbers: number[] = [1, 2, 3, 4, 5];
// let names: string[] = ["Ajwa", "Mujahid", "Ali"];
// let flags: boolean[] = [true, false, true];
// arrays in ts
// let numbers:Array<number> = [1,2,3,4,5,6,7,8,9];
// let names: readonly string[] = ["Dylan"];
// names.push("jack"); // no error
// // names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// console.log(names);
// read only
// const names: readonly string[] = ["Dylan", "Jack"];
// // ✅ Read karna allowed
// console.log(names[0]); // "Dylan"
// // ✅ Loop lagana allowed
// for (let n of names) {
//   console.log(n);
// }
// // ✅ Filter/map return new array (but readonly array khud change nahi hoti)
// const upper = names.map(n => n.toUpperCase());
// console.log(upper); // ["DYLAN", "JACK"]
// }
// {
//     let value: any = true;
//     value = "string";
//     console.log(Math.round(value));
// }
// {
//     const user = {
//         name: "Alice",
//         age: 30,
//         isAdmin: true
//       };
//       console.log(user.name); 
// }
// {
//     let name: string = "ajwa";
//     let age:  number = 22;
//     let isstudent: boolean = true;
// }
// // use of any
// {
// let value: any = 10;
// value = "string";
// value.toUpperCase(); 
// }
// user of unknown
// {
//     let value: unknown = "ajwa";
//     if (typeof value === "string"){
//         console.log(value.toUpperCase())
//     }
// }
// basic method of arrays 
// map
{
    var numbers = [10, 20, 30, 40];
    var double = numbers.map(function (num) { return num * 2; });
    console.log(double);
}
{
    var fruits = ["apple", "mango", "cherry"];
    var fruit = fruits.map(function (fruits) { return fruits.toUpperCase(); });
    console.log(fruit);
}
{
    var ages = [12, 18, 25, 40, 60];
    var adults = ages.filter(function (age) { return age >= 18; });
    console.log(adults); // [18, 25, 40, 60]
    // let firstAdult = ages.find(age => age >= 18);
    // console.log(firstAdult); // 18
    var total = ages.reduce(function (sum, age) { return sum + age; }, 0);
    console.log(total); // 155
}
//  strings method
{
    var name_2 = "Ajwa Mujahid";
    console.log(name_2.toUpperCase()); // "AJWA MUJAHID"
    console.log(name_2.toLowerCase()); // "ajwa mujahid"
    console.log(name_2.length); // 12
    console.log(name_2.charAt(0)); // "A"
    // console.log(name.includes(M));  // true
    console.log(name_2.slice(0, 4)); // "Ajwa"
}
{
    //     let city: string = "Lahore";
    // console.log(city.toFixed(2)); //  Error
}
{
    var firstName = "Ajwa";
    var lastName = "Mujahid";
    var fullName = firstName.concat(" ", lastName);
    console.log(fullName);
    // or modern way:
    var sentence = "My name is ".concat(firstName, " ").concat(lastName);
    console.log(sentence);
}
