import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid, TextField, Chip } from '@material-ui/core';
import { Table, Button, Modal } from 'react-bootstrap';
import CardList from '../components/CardList';
import Button2 from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
        boxSizing: "border-box",
        width: "75vw",
        marginLeft: "auto",
        marginRight: "auto",
        maxHeight: "80vh",
        overflowY: "scroll"
    },
}));

const getChip = (status) => {
    return <Chip label={status} style={{color:"white",backgroundColor:status === "Delivered" ? "green" : "red"}} />
}

const History = (props) => {

    const classes = useStyles();

    const [orders, setOrders] = React.useState([]);
    const [show, setShow] = useState(false);
    const [selected, setSelected] = React.useState({});

    useEffect(() => {
        setOrders([...props.orders]);
    }, [])

    const getMyDate = (date) => {
        const d = new Date(date);
        return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
    }

    const viewHandler = (order) => {
        setSelected(order);
        setShow(true);
    }

    return (
        <>
            {/* Paper */}
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center" >
                    <u>HISTORY</u>
                </Typography>
                {/* Table */}
                <Table style={{ marginTop: "3vh" }} striped bordered>
                    <thead style={{ background: "#37474F", color: "white" }}>
                        <tr>
                            <th>#Order ID</th>
                            <th>Amount</th>
                            <th>Delivery Charge </th>
                            <th>Address</th>
                            <th>Contact Number</th>
                            <th>Payment</th>
                            <th>Order Date</th>
                            <th>Status</th>
                            <th>View Contents</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <th>{order._id}</th>
                                <td>{order.amount}</td>
                                <td>{order.deliveryCharge}</td>
                                <td>{order.address}</td>
                                <td>{order.contact}</td>
                                <td>{order.payment.method}</td>
                                <td>{getMyDate(order.createdAt)}</td>
                                <td>{getChip(order.status)}</td>
                                <td>
                                    <Button2 onClick={() => viewHandler(order)} variant="contained" color="primary">
                                        View
                                    </Button2>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Paper>

            {/* Modal */}
            <Modal size="xl" aria-labelledby="example-modal-sizes-title-lg" style={{ zIndex: 10000000, }} show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Order ID: {selected._id} ({selected.contents ? selected.contents.length : ""} Product{selected.contents && selected.contents.length > 1 ? "s" : ""})</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                inputProps={{ readOnly: true }}
                                label="Amount"
                                value={selected.amount}
                                variant="filled"
                                size="small" />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                inputProps={{ readOnly: true }}
                                label="Delivery charge"
                                value={selected.deliveryCharge}
                                variant="filled"
                                size="small" />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                inputProps={{ readOnly: true }}
                                label="Payment method"
                                value={selected.payment ? selected.payment.method : ""}
                                variant="filled"
                                size="small" />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                inputProps={{ readOnly: true }}
                                label="Order date"
                                value={getMyDate(selected.createdAt)}
                                variant="filled"
                                size="small" />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                fullWidth
                                inputProps={{ readOnly: true }}
                                label="Address"
                                value={selected.address}
                                variant="filled"
                                size="small" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                inputProps={{ readOnly: true }}
                                label="Contact Number"
                                value={selected.contact}
                                variant="filled"
                                size="small" />
                        </Grid>
                        <Grid item xs={2} />
                        <Grid item xs={8}>
                            <CardList content={selected.contents} />
                        </Grid>
                    </Grid>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default History;
