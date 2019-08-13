export function APICall(cb) {
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
