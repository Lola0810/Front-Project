import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4001/api/v1",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
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
  (api.defaults.headers.post["Authorisation"] = `Bearer ${getUserToken()}`);

/* USER */
const getUserMe = () => api.get(`${USER}/@me`);
const getUserData = (user) => api.get(`${USER}/paLaRoute/${user}`);
const loginUser = ({ username, password }) =>
  api.post(`${USER}/login`, { username, password });
const siginUser = ({ username, password, email }) =>
  api.post(`${USER}/sigin`, { username, password, email });
const leaderboardUser = (type) => api.get(`${USER}/leaderboard/${type}`);

/* ROOM */
const createRoom = ({maxUsers=null, privateRoom=null, password=null, tags=null}) => api.post(`${ROOM}/create`, {maxUsers, privateRoom, password, tags});
const joinRoom = ({password=null, id}) => api.post(`${ROOM}/join/${id}`, {password, id});
const getPublicRooms = () => api.get(`${ROOM}/public`);
const getMyRoom = () => api.get(`${ROOM}/@me`);
const leaveRoom = () => api.post(`${ROOM}/leave`);

/* CHAT */
const sendMessage = (message) => api.post(`${CHAT}/create`, { message }); // faut que je l'implémente mdrr

export {
  storeUserToken,
  getUserToken,
  changeToken,
  getUserMe,
  getUserData,
  loginUser,
  siginUser,
  leaderboardUser,
  createRoom,
  joinRoom,
  getMyRoom,
  getPublicRooms,
  leaveRoom,
  sendMessage,
  
  api,
};
