import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport
} from "./apiSimulator";

async function runEcommerceLab(): Promise<void> {
  try {
    const products = await fetchProductCatalog();
    console.log("Products:");
    console.log(products);

    const reviews = await fetchProductReviews(products[0].id);
    console.log("Reviews:");
    console.log(reviews);

    const report = await fetchSalesReport();
    console.log("Sales Report:");
    console.log(report);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error:");
      console.log(error.message);
    } else {
      console.log("Unknown error:", error);
    }
  } finally {
    console.log("All API calls have been attempted.");
  }
}

runEcommerceLab();