interface UserParam {
  firstName: string;
  lastName: string;
  email: string;
}

/**
 * @param param
 */
export function submitCheckResults(param: UserParam) {
  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() <= 0.8 ? resolve(param) : reject({ success: false }),
      500
    )
  );
}
