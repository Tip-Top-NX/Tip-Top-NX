import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
        boxSizing: "border-box",
        width: "75vw",
        marginLeft: "auto",
        marginRight: "auto"
    },
}));

const PendingOrders = () => {

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h4" align="center" >
                <u>PENDING ORDERS</u>
            </Typography>
        </Paper>
    );
}

export default PendingOrders
