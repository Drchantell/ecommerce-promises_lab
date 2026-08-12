import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport
} from "./apiSimulator.js";

console.log("Starting program...");

fetchProductCatalog()
  .then((products: any[]) => {
    console.log("Products:", products);

    return fetchProductReviews(products[0].id);
  })
  .then((reviews: any[]) => {
    console.log("Reviews:", reviews);

    return fetchSalesReport();
  })
  .then((sales: any) => {
    console.log("Sales Report:", sales);
  })
  .catch((error: Error) => {
    console.log("Something went wrong:", error.message);
  })
  .finally(() => {
    console.log("All API calls have been attempted.");
  });