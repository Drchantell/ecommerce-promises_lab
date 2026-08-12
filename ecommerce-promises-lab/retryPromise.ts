export function retryPromise(
  apiCall: () => Promise<any>,
  attempts: number,
  delay: number
): Promise<any> {
  return apiCall().catch((error) => {
    if (attempts > 1) {
      console.log("Trying again...");

      return new Promise((resolve) => {
        setTimeout(resolve, delay);
      }).then(() => {
        return retryPromise(apiCall, attempts - 1, delay);
      });
    }

    throw error;
  });
}