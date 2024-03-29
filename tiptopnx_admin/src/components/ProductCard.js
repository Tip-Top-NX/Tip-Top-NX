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
import { getConfig } from "../utils/config";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 220,
    height: 400,
  },
  container: {
    padding: "10px 0 10px 0",
  },
  buttonBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    padding: "5px 0 5px 0",
  },
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    boxSizing: "border-box",
    width: "75vw",
    marginLeft: "auto",
    marginRight: "auto",
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

export default function ImgMediaCard() {
  const classes = useStyles();
  // const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [editable, setEditable] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [deleteThis, setDeleteThis] = useState();
  const [selected, setSelected] = useState();
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    let mounted = true;
    axios
      .get("/category/1/get-products")
      .then((res) => {
        if (mounted) {
          // setIsLoading(false);
          setProducts([...res.data]);
          // console.log(res.data);
        }
      })
      .catch((err) => console.log(err));

    return () => (mounted = false);
  }, []);

  const deleteProductHandler = () => {
    setAlertOpen(false);
    axios
      .delete("/admin/products/" + deleteThis, getConfig())
      .then((res) => {
        searchHandler();
      })
      .catch((err) => console.log(err));
  };

  const searchHandler = () => {
    axios
      .post("/product/search", { keyword }, getConfig())
      .then((res) => setProducts([...res.data]))
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.container}>
      <Dialog
        style={{ zIndex: 10000001 }}
        open={alertOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to DELETE this product ?"}
        </DialogTitle>
        <DialogActions>
          <Button2 onClick={() => setAlertOpen(false)} color="primary">
            Cancel
          </Button2>
          <Button2
            onClick={() => deleteProductHandler()}
            color="primary"
            autoFocus
          >
            Yes
          </Button2>
        </DialogActions>
      </Dialog>
      {/* <Paper className={classes.paper}> */}

      <Paper className={classes.paperSearch}>
        <InputBase
          value={keyword}
          onKeyPress={(e) => {
            if (e.key == "Enter") {
              searchHandler();
            }
          }}
          onChange={(event) => setKeyword(event.target.value)}
          className={classes.input}
          placeholder="Type here to search"
        />
        <IconButton onClick={searchHandler} className={classes.iconButton}>
          <Search />
        </IconButton>
      </Paper>

      <Grid
        style={{ marginTop: "5vh" }}
        justify="space-evenly"
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
                    setAlertOpen(true);
                    setDeleteThis(item._id);
                    setSelected(item);
                  }}
                >
                  DELETE
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
      {/* </Paper> */}
    </div>
  );
}
