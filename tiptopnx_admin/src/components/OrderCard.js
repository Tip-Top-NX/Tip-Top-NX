import React from "react";
import { Card, CardHeader, CardMedia, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/logo192.png";
import { myUri } from "../utils/axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "17vw",
  },
  media: {
    height: "33vh",
    paddingTop: "56.25%", // 16:9,
    // border: "1px grey solid"
    margin: "10px 0",
  },
}));

const OrderCard = (props) => {
  const classes = useStyles();

  console.log(props.product);

  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader
        style={{ height: "15vh", borderBottom: "1px grey solid" }}
        title={"#" + props.product._id}
        subheader={props.product.name}
      />
      <CardMedia
        className={classes.media}
        // image={logo}
        image={myUri + "/" + props.product.images[0]}
        title={props.product.name}
      />
      <CardContent
        style={{
          borderTop: "1px solid grey",
          marginTop: "2px",
          marginBottom: "10px",
          height: "12vh",
        }}
      >
        <table style={{ width: "100%" }}>
          <tbody>
            {props.product.deleted === true && (
              <tr>
                <td style={{ padding: "2px" }}>
                  <b>OUT OF STOCK</b>
                </td>
              </tr>
            )}
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
                <b>QUANTITY:</b>&nbsp;{props.quantity}
              </td>
              <td style={{ padding: "2px" }}>
                <b>SIZE:</b>&nbsp;{props.size}
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
