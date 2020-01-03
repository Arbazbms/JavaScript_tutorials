const companies = [
  { name: "company one", category: "finance", start: 1999, end: 2080 },
  { name: "company two", category: "retail", start: 2000, end: 2030 },
  { name: "company three", category: "IT", start: 1987, end: 2070 },
  { name: "company four", category: "finance", start: 2001, end: 2020 }
];

const ages = [33, 22, 15, 45, 74, 12, 32, 56, 32, 22, 21, 26];
// compare 2 2 functions



//For loop
console.log("helooo");
// for(let i =0; i<companies.length;i++){
//     console.log(companies[i])
// }

// forEach
// companies.forEach(function(company){ // it can take company = single array, index , and whole array as companies
//     console.log(company);// company.name , companies
// })





//filter for ages
// let permit = [];
// for (let i = 0; i < ages.length; i++) {
//    if(ages[i] > 30)
//    permit.push(ages[i])
// }
// console.log(permit);

// const canDrive = ages.filter(age => age >= 40);
// console.log(canDrive);

// const finance = companies.filter(type => {
//   if (type.category === "finance") return true;
// });
// console.log(finance);

// const start = companies.filter(company => {
//   if (company.start >= 1999) return true;
// });
// console.log(start);

const comLastedTenYrs = companies.filter((company) => {
   if(company.end - company.start > 10)
   return true; 
});

console.log(comLastedTenYrs);

