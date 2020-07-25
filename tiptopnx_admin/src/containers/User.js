import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import axios, { myUri } from "../utils/axios";
import { getConfig } from '../utils/config';
import Grid from "@material-ui/core/Grid";
import { Button, CircularProgress } from "@material-ui/core";
import {
    Dialog,
    DialogActions,
    DialogTitle,
    TextField,
    Paper,
    InputBase,
    Divider,
    IconButton,
} from "@material-ui/core";
import Button2 from "@material-ui/core/Button";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
        boxSizing: "border-box",
        width: "60vw",
        marginLeft: "auto",
        marginRight: "auto",
        maxHeight: "80vh",
        marginTop: "5vh"
    },
    image: {
        height: "30vh",
    },
    paperSearch: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        marginLeft: "20px",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));


const User = (props) => {

    const classes = useStyles();

    const [email, setEmail] = React.useState("");
    const [user, setUser] = React.useState({});
    const [points, setPoints] = React.useState(0);
    const [error, setError] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [spinner, setSpinner] = React.useState(false);

    const searchHandler = () => {
        setSpinner(true);
        axios
            .post("/admin/user/points", { email }, getConfig())
            .then((res) => { setUser({ ...res.data }); setSpinner(false); })
            .catch((err) => console.log(err));
    };

    const cutHandler = () => {
        if (points > user.points || points === 0 || !/\d+/.test(points) || points < 0) {
            setError(true);
        }
        else {
            setError(false);
            axios.put('/admin/user/points', { email: user.email, pointsUsed: points }, getConfig())
                .then(res => {
                    setUser({ ...res.data });
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 3000);
                })
        }
    }

    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <Paper className={classes.paperSearch}>
                        <InputBase
                            value={email}
                            onKeyPress={(e) => {
                                if (e.key == "Enter") {
                                    searchHandler();
                                }
                            }}
                            onChange={(event) => setEmail(event.target.value)}
                            className={classes.input}
                            placeholder="Type user email to search"
                        />
                        <IconButton onClick={searchHandler} className={classes.iconButton}>
                            <Search />
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ display: spinner === true ? "block" : "none",padding:"4px" }}>
                        <CircularProgress color="secondary" />
                    </div>
                </Grid>
            </Grid>

            {Object.keys(user).length > 0 && (
                <Paper className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <img className={classes.image} src={myUri + user.image} />
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Email"
                                        fullWidth
                                        inputProps={{ readOnly: true }}
                                        value={user.email} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Name"
                                        fullWidth
                                        inputProps={{ readOnly: true }}
                                        value={user.name} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Contact number"
                                        fullWidth
                                        inputProps={{ readOnly: true }}
                                        value={user.contact} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Points"
                                        fullWidth
                                        inputProps={{ readOnly: true }}
                                        value={user.points} />
                                </Grid>
                                <Grid item xs={2} />
                                <Grid item xs={4}>
                                    <TextField
                                        label="Use points?"
                                        fullWidth
                                        error={error}
                                        onChange={(event) => setPoints(event.target.value)}
                                        variant="outlined" />
                                </Grid>
                                <Grid item xs={4}>
                                    <Button
                                        style={{ marginTop: "10px" }}
                                        variant="contained"
                                        color="primary"
                                        onClick={cutHandler}>
                                        Cut
                                    </Button>
                                </Grid>
                                {error && (
                                    <>
                                        <Grid item xs={3} />
                                        <Grid item xs={4}>
                                            <Typography align="center" style={{ color: "red", fontSize: "1em" }} variant="h4">
                                                {points <= 0 ? "Invalid points!" : "Insufficient balance!"}
                                            </Typography>
                                        </Grid>
                                    </>
                                )}
                                {success && (
                                    <>
                                        <Grid item xs={3} />
                                        <Grid item xs={4}>
                                            <Typography align="center" style={{ color: "green", fontSize: "1em" }} variant="h4">
                                                POINTS UPDATED!
                                        </Typography>
                                        </Grid>
                                    </>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            )}
        </div>
    )
}

export default User;
