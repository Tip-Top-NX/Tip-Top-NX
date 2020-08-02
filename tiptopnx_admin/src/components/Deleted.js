import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import axios, { myUri } from "../utils/axios";
import Grid from "@material-ui/core/Grid";
import ProductDetails from "./ProductDetails";
import { Button } from "@material-ui/core";
import { Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import Button2 from "@material-ui/core/Button";
import { getConfig } from "../utils/config";
// import { Sentry } from "react-activity";
import Loader from "react-loader-spinner";

const useStyles = makeStyles({
  root: {
    width: 220,
    height: 400,
  },
  container: {
    padding: "10px 0 10px 0",
  },
  container1: {
    padding: "10px 0 10px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  buttonBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    padding: "5px 0 5px 0",
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [editable, setEditable] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [body, setBody] = useState({});
  const [selected, setSelected] = useState();
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    let mounted = true;
    axios
      .get("/admin/products/deleted", getConfig())
      .then((res) => {
        if (mounted) {
          setIsLoading(false);
          setProducts([...res.data]);
        }
      })
      .catch((err) => console.log(err));

    return () => (mounted = false);
  }, [deleted]);

  const restoreProductHandler = () => {
    setAlertOpen(false);
    setIsLoading(true);
    axios
      .put("/admin/products/deleted", body, getConfig())
      .then((res) => {
        setDeleted(!deleted);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return isLoading ? (
    <div className={classes.container1}>
      <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
    </div>
  ) : products.length > 0 ? (
    <div className={classes.container}>
      <Dialog
        style={{ zIndex: 10000001 }}
        open={alertOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to RESTORE this product ?"}
        </DialogTitle>
        <DialogActions>
          <Button2 onClick={() => setAlertOpen(false)} color="primary">
            Cancel
          </Button2>
          <Button2
            onClick={() => restoreProductHandler()}
            color="primary"
            autoFocus
          >
            Yes
          </Button2>
        </DialogActions>
      </Dialog>
      <Typography align="center" variant="h3">
        <u>Deleted Products</u>
      </Typography>
      <Grid
        justify="space-evenly"
        style={{ marginTop: "5vh" }}
        container
        spacing={5}
      >
        {products.map((item, index) => {
          return (
            <Grid key={index} item>
              <Card
                className={classes.root}
                key={index}
                onClick={() => {
                  setEditable(false);
                  setShowModal(true);
                  setSelected(item);
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Product Image"
                    height="280"
                    image={myUri + item.images[0]}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="h2">
                      {item.brand}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="h7">
                      {item.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <div className={classes.buttonBox}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  style={{ outline: "none" }}
                  onClick={() => {
                    setEditable(true);
                    setShowModal(true);
                    setSelected(item);
                  }}
                >
                  EDIT
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  style={{ outline: "none" }}
                  onClick={() => {
                    setBody({ id: item._id });
                    setAlertOpen(true);
                    setSelected(item);
                  }}
                >
                  RESTORE
                </Button>
              </div>
              {selected === item ? (
                <ProductDetails
                  open={showModal}
                  editable={editable}
                  onClose={() => setShowModal(false)}
                  brand={item.brand}
                  description={item.description}
                  colors={item.colors}
                  images={item.images}
                  size={item.size}
                  discountPercentage={item.discountPercentage}
                  name={item.name}
                  price={item.price}
                  _id={item._id}
                  category={item.category}
                />
              ) : null}
            </Grid>
          );
        })}
      </Grid>
    </div>
  ) : null;
}
