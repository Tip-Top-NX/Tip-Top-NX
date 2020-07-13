import React from "react";
import Logo from "../../assets/logo192.png";
import classes from "./Login.module.css";
import {
  TextField,
  Button,
  Avatar,
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import axios from "../../utils/axios";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import { LockOutlined } from "@material-ui/icons";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
    },
    invalid: false,
  };

  changeHandler = (name) => (event) => {
    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
  };

  submitHandler = () => {
    const emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {};
    errors.email = !emailregex.test(this.state.email)
      ? "Invalid email id!"
      : "";
    errors.password =
      this.state.password.length === 0 ? "Invalid password!" : "";
    this.setState({
      ...this.state,
      errors: { ...errors },
    });

    if (!Object.values(errors).some((e) => e !== "")) {
      axios
        .post("/users/login", this.state)
        .then((res) => {
          if (res.data.success === true && res.data.user.admin) {
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("isAdmin", true);
            this.props.history.push("/admin/pending-orders");
          } else {
            sessionStorage.clear();
            this.setState({ ...this.state, invalid: true });
          }
        })
        .catch((err) => {
          sessionStorage.clear();
          this.setState({ ...this.state, invalid: true });
        });
    }
  };

  render() {
    return (
      <div className={classes.container}>
        <AppBar
          className={classes.navbar}
          style={{ backgroundColor: "transparent" }}
          position="static"
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <img alt="Logo" className={classes.logo} src={Logo} />
            </IconButton>
            <Typography variant="h6">TIP-TOP NX</Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <div className={classes.frame}>
            <Avatar style={{ margin: "auto", marginTop: "1em" }}>
              <LockOutlined />
            </Avatar>
            <h3 style={{ color: "black", margin: "20px" }}>Sign in</h3>
            <div
              style={{
                marginBottom: "3vh",
                display: this.state.invalid ? "block" : "none",
              }}
            >
              <Typography variant="h6" color="error">
                Invalid details!
              </Typography>
            </div>
            <TextField
              fullWidth
              required
              label="Email"
              variant="outlined"
              error={this.state.errors.email.length > 0}
              onChange={this.changeHandler("email")}
            />
            <TextField
              fullWidth
              required
              label="Password"
              variant="outlined"
              type="password"
              error={this.state.errors.password.length > 0}
              onChange={this.changeHandler("password")}
              style={{ marginTop: "1em" }}
            />
            <Button
              onClick={this.submitHandler}
              style={{ margin: "5vh auto" }}
              variant="contained"
              color="primary"
              size="large"
            >
              Submit
            </Button>
          </div>
        </div>
        <footer className={classes.footer}>&copy; 2020-2021</footer>
      </div>
    );
  }
}

export default withRouter(Login);
