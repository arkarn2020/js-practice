// const companies = [
//   {
//     id: 1,
//     name: "Brainbox",
//     start: "01/10/2005",
//     end: "4/19/2019",
//     category: "Transportation",
//   },
//   {
//     id: 2,
//     name: "Edgewire",
//     start: "09/16/2002",
//     end: "8/26/2010",
//     category: "Energy",
//   },
//   {
//     id: 3,
//     name: "Oyoloo",
//     start: "02/19/2008",
//     end: "11/28/2016",
//     category: "Public Utilities",
//   },
//   {
//     id: 4,
//     name: "Realbuzz",
//     start: "11/29/2005",
//     end: "3/29/2019",
//     category: "Consumer Services",
//   },
//   {
//     id: 5,
//     name: "Einti",
//     start: "09/23/2004",
//     end: "4/26/2015",
//     category: "Consumer Services",
//   },
//   {
//     id: 6,
//     name: "Abata",
//     start: "10/08/2000",
//     end: "1/3/2017",
//     category: "Transportation",
//   },
//   {
//     id: 7,
//     name: "Eare",
//     start: "06/08/2006",
//     end: "2/16/2018",
//     category: "Finance",
//   },
//   {
//     id: 8,
//     name: "Dablist",
//     start: "04/09/2008",
//     end: "6/23/2015",
//     category: "Technology",
//   },
//   {
//     id: 9,
//     name: "Oyondu",
//     start: "03/08/2001",
//     end: "7/9/2012",
//     category: "Energy",
//   },
//   {
//     id: 10,
//     name: "Kimia",
//     start: "03/26/2009",
//     end: "7/16/2020",
//     category: "Transportation",
//   },
//   {
//     id: 11,
//     name: "Twinte",
//     start: "06/29/2000",
//     end: "10/3/2019",
//     category: "Energy",
//   },
//   {
//     id: 12,
//     name: "Oodoo",
//     start: "03/19/2010",
//     end: "2/28/2021",
//     category: "Capital Goods",
//   },
//   {
//     id: 13,
//     name: "Skilith",
//     start: "08/07/2000",
//     end: "2/10/2017",
//     category: "Health Care",
//   },
//   {
//     id: 14,
//     name: "Voonte",
//     start: "02/18/2005",
//     end: "2/13/2016",
//     category: "Health Care",
//   },
//   {
//     id: 15,
//     name: "Gigaclub",
//     start: "06/25/2004",
//     end: "3/5/2017",
//     category: "Capital Goods",
//   },
//   {
//     id: 16,
//     name: "Jetwire",
//     start: "07/21/2007",
//     end: "6/17/2018",
//     category: "Transportation",
//   },
//   {
//     id: 17,
//     name: "Innojam",
//     start: "10/10/2003",
//     end: "3/26/2016",
//     category: "Energy",
//   },
//   {
//     id: 18,
//     name: "Trilia",
//     start: "12/03/2000",
//     end: "3/22/2014",
//     category: "Consumer Durables",
//   },
//   {
//     id: 19,
//     name: "Vitz",
//     start: "09/18/2001",
//     end: "1/20/2015",
//     category: "Capital Goods",
//   },
//   {
//     id: 20,
//     name: "Kimia",
//     start: "02/21/2008",
//     end: "10/24/2019",
//     category: "Transportation",
//   },
//   {
//     id: 21,
//     name: "Wikibox",
//     start: "08/08/2001",
//     end: "7/16/2014",
//     category: "Finance",
//   },
//   {
//     id: 22,
//     name: "Cogibox",
//     start: "02/16/2002",
//     end: "4/16/2013",
//     category: "Public Utilities",
//   },
//   {
//     id: 23,
//     name: "Yambee",
//     start: "07/13/2001",
//     end: "11/12/2016",
//     category: "Finance",
//   },
//   {
//     id: 24,
//     name: "Yotz",
//     start: "02/19/2008",
//     end: "7/17/2020",
//     category: "Consumer Services",
//   },
//   {
//     id: 25,
//     name: "Linkbuzz",
//     start: "07/08/2009",
//     end: "2/28/2019",
//     category: "Health Care",
//   },
// ];

// const ages = [33, 22, 15, 45, 25, 16, 18, 23, 27, 31, 38, 22, 17, 11, 28, 35];

//for loop
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//for each
// companies.forEach(function (company) {
//   console.log(company);
// });

//for each ES6
// companies.forEach((i) => {
//   console.log(i.name);
// });

//filter get age >=21
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter((age) => {
//   if (age >= 21) {
//     return true;
//   }
// });

// const canDrink = ages.filter((age) => age >= 21);

// console.log(canDrink);

//filter transport companies
// const transportCompanies = companies.filter((company) => {
//   if (company.category === "Transportation") {
//     return true;
//   }
// });

// const transportCompanies = companies.filter(
//   (company) => company.category === "Transportation"
// );

// console.log(transportCompanies);

//get 2000-2010  companies
// const millenialCompanies = companies.filter((company) => {
//   console.log(JSON.parse(company.start));
// });

// console.log();
// const extractYear = (date) => {
//   let newDate = JSON.stringify(new Date(date));
//   let newYear = newDate.slice(1, 5);
//   return newYear;
// };

// companies.forEach((company) => {
//   let startDate = new Date(company.start);
//   let endDate = new Date(company.end);

//   //   console.log(startDate);

//   let startYear = extractYear(startDate);
//   let endYear = extractYear(endDate);

//   age = endYear - startYear;

//   if (age < 12) console.log(company);
// });

//map
// const testMap = companies.map(
//   (company) => `${company.name} [${company.start} - ${company.end}]`
// );

// console.log(testMap);

// const ageMap = ages.map((age) => age * 2);

// console.log(ageMap);

//sort
// const sortedCompanies = companies.sort((a, b) => {
//   if (extractYear(a.start) > extractYear(b.start)) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);

// const sortAges = ages.sort((a, b) => b - a);
// console.log(sortAges);

// const ageReduce = ages.reduce((total, age) => total + age, 0);

// console.log(ageReduce);

// const combined = ages
//   .map((age) => age * 1)
//   .filter((age) => age >= 30)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0);

// console.log(combined);

// const companyNames = companies.map((company) => {
//   return company.name.toUpperCase();
// });

// const corporates = companies.map((company) => {
//   return `<h1>${company.name}</h1>`;
// });

// document.body.innerHTML = corporates.join("");
// console.log(corporates);

// const corporate = companies.find((company) => {
//   return company.id === 3;
// });

// const company = companies.find((c) => {
//   return c.id == 3;
// });

// console.log(company.name);
