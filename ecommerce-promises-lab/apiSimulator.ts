import { NetworkError, DataError } from "./errors";

export function fetchProductCatalog(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 }
        ]);
      } else {
        reject(
          new NetworkError("Failed to fetch product catalog")
        );
      }
    }, 1000);

  });
}
export function fetchProductReviews(productId: number): Promise<any[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          {
            productId: productId,
            rating: 5,
            comment: "Great product!"
          },
          {
            productId: productId,
            rating: 4,
            comment: "Works well."
          }
        ]);
      } else {
        reject(
          new NetworkError(
            "Failed to fetch reviews for product ID " + productId
          )
        );
      }
    }, 1500);
  });
}
export function fetchSalesReport(): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        const report = {
          totalSales: 14000,
          unitsSold: 50,
          averagePrice: 280
        };
        if (!report.totalSales) {
          reject(
            new DataError("Sales report is missing data")
          );
        } else {
          resolve(report);
        }
      } else {
        reject(
          new NetworkError("Failed to fetch sales report")
        );
      }
    }, 1000);

  });
}