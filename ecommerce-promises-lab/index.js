"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiSimulator_1 = require("./apiSimulator");
(0, apiSimulator_1.fetchProductCatalog)()
    .then((products) => {
    console.log("Products:");
    console.log(products);
    return (0, apiSimulator_1.fetchProductReviews)(products[0].id);
})
    .then((reviews) => {
    console.log("Reviews:");
    console.log(reviews);
    return (0, apiSimulator_1.fetchSalesReport)();
})
    .then((report) => {
    console.log("Sales Report:");
    console.log(report);
})
    .catch((error) => {
    console.log("Error:");
    console.log(error.message);
})
    .finally(() => {
    console.log("All API calls have been attempted.");
});
//# sourceMappingURL=index.js.map