export const doSetToken = (token: string) => {
  localStorage.setItem("token", token); // make up your own token
};

export const fetchToken = () => {
  return localStorage.getItem("token");
};
