const TFPromise = (trueFalse) => {
  return new Promise((resolve, reject) => {
    resolve(trueFalse);
  });
};

export { TFPromise };
