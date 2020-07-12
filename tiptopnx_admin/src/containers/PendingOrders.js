import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from '@material-ui/core';
import axios from '../utils/axios';
import { getConfig } from '../utils/config';
import { Table, Button, Modal } from 'react-bootstrap';

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

    const [orders, setOrders] = React.useState([]);
    const [show, setShow] = useState(false);
    const [selected, setSelected] = React.useState({});

    useEffect(() => {
        axios.get('/admin/orders/pending', getConfig())
            .then((res) => {
                setOrders([...res.data]);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
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
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center" >
                    <u>PENDING ORDERS</u>
                </Typography>
                <Table style={{ marginTop: "3vh" }} striped bordered>
                    <thead style={{ background: "#37474F", color: "white" }}>
                        <th>#Order ID</th>
                        <th>Amount</th>
                        <th>Address</th>
                        <th>Contact Number</th>
                        <th>Payment</th>
                        <th>Order Date</th>
                        <th>Delivery Charge </th>
                        <th>View Contents</th>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr>
                                <th>{order._id}</th>
                                <td>{order.amount}</td>
                                <td>{order.address}</td>
                                <td>{order.contact}</td>
                                <td>{order.payment.method}</td>
                                <td>{getMyDate(order.createdAt)}</td>
                                <td>{order.deliveryCharge}</td>
                                <td>
                                    <Button onClick={() => viewHandler(order)} variant="secondary">
                                        View
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Paper>

            <Modal size="xl" aria-labelledby="example-modal-sizes-title-lg" style={{zIndex: 10000000,}} show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                        <Modal.Title>Order ID: {selected._id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
            </Button>
                    <Button variant="primary" onClick={() => setShow(false)}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PendingOrders
