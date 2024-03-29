// import users from "@/data/users.js";

// export const filterUsers = {
//     data() {
//         return {
//             sortCriteria: "",
//             users,
//         };
//     },
//     methods: {
//         eliminateDuplicateNames(allSymbols) {
//             let arrValues = [];
//             for (let i = 0; i < allSymbols.length; i++) {
//                 if (arrValues.indexOf(allSymbols[i]) === -1) {
//                     arrValues.push(allSymbols[i]);

//                     arrValues = arrValues.sort((a, b) => {
//                         return a < b ? -1 : 1;
//                     });
//                 }
//             }

//             return arrValues;
//         },

//         eliminateDuplicateIds: function (arr) {
//             return arr
//                 .map((e) => e["id"])
//                 .map((e, i, final) => final.indexOf(e) === i && i)
//                 .filter((obj) => arr[obj])
//                 .map((e) => arr[e]);
//         },

//         getFirstLetters() {
//             let allData = this.cryptoData;

//             let allSymbols = allData.map((data) => {
//                 let sym = data.symbol;
//                 let firstLetter = sym.charAt(0).toUpperCase();

//                 return firstLetter;
//             });

//             let allSortedSymbols = allSymbols.sort((a, b) => {
//                 return a < b ? -1 : 1;
//             });

//             return allSortedSymbols;
//         },

//         filter_active_inactive() {
//             if (this.status != null) {
//                 var status = this.status;
//                 return this.users.filter(function (users) {
//                     return users.status == status;
//                 });
//             } else {
//                 return this.users;
//             }
//         },
//         sort_by(users, sortProp) {
//             return users.sort(function (a, b) {
//                 if (a[sortProp] > b[sortProp]) return 1;
//                 if (a[sortProp] < b[sortProp]) return -1;
//                 return 0;
//             });
//         }
//     },
//     computed: {
//         sortedUsers() {
//             if (!this.sortCriteria) {
//                 this.sortCriteria = "created_at";
//             }
//             return this.sort_by(this.filter_active_inactive(), this.sortCriteria);
//         },
//         userProperties() {
//             let arr = [];
//             for (let prop in this.users[0]) {
//                 arr.push(prop);
//             }
//             return arr;
//         }
//     }
// };