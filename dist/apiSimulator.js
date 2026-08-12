"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductCatalog = fetchProductCatalog;
exports.fetchProductReviews = fetchProductReviews;
exports.fetchSalesReport = fetchSalesReport;
function fetchProductCatalog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 }
                ]);
            }
            else {
                reject(new Error("Failed to fetch product catalog"));
            }
        }, 1000);
    });
}
function fetchProductReviews(productId) {
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
            }
            else {
                reject(new Error("Failed to fetch reviews"));
            }
        }, 1500);
    });
}
function fetchSalesReport() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve({
                    totalSales: 14000,
                    unitsSold: 50,
                    averagePrice: 280
                });
            }
            else {
                reject(new Error("Failed to fetch sales report"));
            }
        }, 1000);
    });
}
