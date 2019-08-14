export function APICall(cb) {
// Promise just for imitating async requests
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        cb(
          JSON.parse(window.localStorage.getItem('data')),
        ),
      );
    }, 300);
  });
}

export default {
  APICall,
};
