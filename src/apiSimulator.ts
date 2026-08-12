export function fetchProductCatalog(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 }
        ]);
      } else {
        reject(new Error("Failed to fetch product catalog"));
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
            comment: "Great product"
          }
        ]);
      } else {
        reject(new Error("Failed to fetch reviews"));
      }
    }, 1500);
  });
}

export function fetchSalesReport(): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve({
          totalSales: 14000,
          unitsSold: 50,
          averagePrice: 280
        });
      } else {
        reject(new Error("Failed to fetch sales report"));
      }
    }, 1000);
  });
}