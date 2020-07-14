import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Grid,
  TextField,
  Button
} from "@material-ui/core";
import axios from "../utils/axios";
import Snackbar from '../components/Snackbar';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    boxSizing: "border-box",
    width: "75vw",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const Signup = (props) => {

  const classes = useStyles();

  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    password2: "",
  })
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    password2: "",
  })
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("success");

  const addHandler = () => {
    const emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {};
    errors.email = !emailregex.test(state.email) ? "Invalid email id!" : "";
    errors.name = state.name.length == 0 ? "This can't be empty!" : "";
    errors.contact = /^[0-9]{10}$/.test(state.contact) ? "" : "Invalid contact number!";
    errors.password = state.password.length > 0 && state.password == state.password2 ? "" : "Invalid password!";
    errors.password2 = state.password2.length > 0 && state.password == state.password2 ? "" : "Invalid password!";
    setErrors({
      ...errors
    });
    if (!Object.values(errors).some(e => e != "")) {
      axios.post('/users/add-admin', state)
        .then((res) => {
          if (res.data.success == true) {
            setMessage("Admin user added successfully!");
            setVariant("success");
            setOpen(true);
            setState({
              name: "",
              email: "",
              password: "",
              contact: "",
              password2: "",
            });
          }
          else{
            setMessage(res.data.err.message);
            setVariant("error");
            setOpen(true);
          }
        })
        .catch((err) => {
          setMessage("Error in adding the admin!");
          setVariant("error");
          console.log(err);
        });
    }
  }

  const changeHandler = (name) => (event) => {
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  return (
    <div>
      <Paper className={classes.paper}>
        <Snackbar variant={variant} message={message} open={open} close={() => setOpen(false)} />
        <Typography variant="h4" align="center">
          <u>ADD NEW ADMIN</u>
        </Typography>
        <Grid style={{ width: "50vw", margin: "5vh auto" }} container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Name"
              variant="outlined"
              onChange={changeHandler('name')}
              error={errors.name.length > 0}
              value={state.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Email"
              type="email"
              variant="outlined"
              onChange={changeHandler('email')}
              error={errors.email.length > 0}
              value={state.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Contact number (10 digits)"
              variant="outlined"
              onChange={changeHandler('contact')}
              error={errors.contact.length > 0}
              value={state.contact}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              label="Password"
              variant="outlined"
              type="password"
              onChange={changeHandler('password')}
              error={errors.password.length > 0}
              value={state.password}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              label="Confirm password"
              variant="outlined"
              type="password"
              onChange={changeHandler('password2')}
              error={errors.password2.length > 0}
              value={state.password2}
            />
          </Grid>
          <Grid item xs={10} />
          <Grid item xs={1}>
            <Button onClick={() => addHandler()} size="large" variant="contained" color="primary">
              Add
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Signup
