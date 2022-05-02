import { Component } from "react";
import { Outlet } from "react-router-dom";

import { getUserMe, getUserToken } from "../public/api";
import Login from "./memberArea/Login";
import Wait from "./wait/Wait";

export default class L extends Component {
  constructor(props) {
    super(props);
    this.link = props.link;
    this.state = { set: false, user: false };
    this.connect = this.connect.bind(this)
  }

  componentDidMount() {
    this.connect()
  }

  connect() {
    const token = getUserToken();
    if (!token) {
      return this.setState({ set: true });
    }
    getUserMe()
      .then(res => this.setState({ user: res.data, set: true }))
      .catch(() => {
        this.setState({ set: true });
      });
  }

  render() {
    const { set, user } = this.state.set;
    if (set) {
      if (user) {
        return <Outlet/>
      } else {
        return <Login />;
      }
    } else {
      return <Wait />;
    }
  }
}
