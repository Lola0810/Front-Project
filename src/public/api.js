import axios from "axios";

const api = () =>
  axios.create({
    baseURL: "https://inchallahOnAuraUnDomaine/api/v1",
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    },
  });

/* TYPES */
const USER = "user";
const ROOM = "room";
const CHAT = "chat";

/* TOKEN */
const storeUserToken = (userToken) => localStorage.setItem("token", userToken);
const getUserToken = () => localStorage.getItem("token");
const changeToken = () =>
  (api.config.headers["Authorisation"] = `Bearer ${getUserToken()}`);

/* USER */
const getUserMe = () => api.get(`${USER}/@me`);
const getUserData = (user) => api.get(`${USER}/paLaRoute/${user}`);
const loginUser = ({ username, password }) =>
  api.post(`${USER}/login`, { username, password });
const siginUser = ({ username, password, email }) =>
  api.post(`${USER}/sigin`, { username, password, email });
const leaderboardUser = (type) => api.get(`${USER}/leaderboard/${type}`);

/* ROOM */

const Token = {
  storeUserToken,
  getUserToken,
  changeToken,
};

const User = {
  getUserMe,
  getUserData,
  loginUser,
  siginUser,
  leaderboardUser,
};

export { Token, User, api };
