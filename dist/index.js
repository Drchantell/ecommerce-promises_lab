"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiSimulator_js_1 = require("./apiSimulator.js");
console.log("Starting program...");
(0, apiSimulator_js_1.fetchProductCatalog)()
    .then((products) => {
    console.log("Products:", products);
    return (0, apiSimulator_js_1.fetchProductReviews)(products[0].id);
})
    .then((reviews) => {
    console.log("Reviews:", reviews);
    return (0, apiSimulator_js_1.fetchSalesReport)();
})
    .then((sales) => {
    console.log("Sales Report:", sales);
})
    .catch((error) => {
    console.log("Something went wrong:", error.message);
})
    .finally(() => {
    console.log("All API calls have been attempted.");
});
