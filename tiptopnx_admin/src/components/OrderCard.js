import React from "react";
import { Card, CardHeader, CardMedia, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/logo192.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "17vw",
  },
  media: {
    height: "32vh",
    paddingTop: "56.25%", // 16:9,
    // border: "1px grey solid"
    margin: "10px 0",
  },
}));

const OrderCard = (props) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader
        style={{ height: "15vh", borderBottom: "1px grey solid" }}
        title={"#" + props.product._id}
        subheader={props.product.name}
      />
      <CardMedia
        className={classes.media}
        image={logo}
        // image={getURL(props.product.images[0])}
        title={props.product.name}
      />
      <CardContent
        style={{
          borderTop: "1px solid grey",
          marginTop: "5px",
          height: "12vh",
        }}
      >
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ padding: "2px" }}>
                <b>PRICE:</b>&nbsp;{props.price}
              </td>
              <td style={{ padding: "2px", overflow: "hidden" }}>
                <b>COLOR:</b>&nbsp;{props.color}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "2px" }}>
                <b>SIZE:</b>&nbsp;{props.size}
              </td>
              <td style={{ padding: "2px" }}>
                <b>QUANTITY:</b>&nbsp;{props.quantity}
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
