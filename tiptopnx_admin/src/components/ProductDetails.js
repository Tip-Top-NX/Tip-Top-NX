import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";

import React, { useState, useEffect } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import GridList from "@material-ui/core/GridList";
import ClearIcon from "@material-ui/icons/Clear";
import axios, { myUri } from "../utils/axios";
import Button2 from "@material-ui/core/Button";
import { getConfig } from "../utils/config";
import Carousel from "react-bootstrap/Carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // border: "solid",
    flexDirection: "column",
    marginBottom: "30px",
    // paddingLeft: "35px",
  },
  topBox: {
    // border: "solid",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
    height: "50vh",
    marginTop: "40px",
    marginBottom: "20px",
  },
  fieldBoxTop: {
    // border: "solid",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "65%",
    height: "50vh",
    padding: "0 10px 0 10px",
  },
  fieldBox: {
    // border: "solid",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    padding: "0 10px 0 10px",
    marginTop: "60px",
    marginBottom: "40px",
  },
  imageBox: {
    width: "25%",
    height: "40vh",
    border: "solid",
    borderColor: "#ccc",
  },
  imageStyle: {
    width: "100%",
    height: "40vh",
  },
  colorBox: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    padding: "10px 15px 10px 15px",
    alignSelf: "flex-start",
  },
  bottomBox: {
    // border: "solid",
    display: "flex",
    flexDirection: "column",
    padding: "0 15px 0 25px",
    width: "30%",
    alignSelf: "flex-start",
  },
  priceBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "80vh",
    overflowY: "scroll",
    width: "80%",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "scroll",
  },
  textFieldStyle: {
    color: "#000",
  },
}));

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export default function ProductDetails(props) {
  const classes = useStyles();

  const [id, setId] = useState(props._id);
  const [brand, setBrand] = useState(props.brand);
  const [price, setPrice] = useState(props.price);
  const [disc, setDisc] = useState(props.discountPercentage);
  const [name, setName] = useState(props.name);
  const [color, setColor] = useState(props.colors);
  const [description, setDescription] = useState(props.description);
  const [selectedSizes, setSelectedSizes] = useState(props.size);
  const [category, setCategory] = useState(props.category);
  const [alertOpen, setAlertOpen] = useState(false);

  let priceFinal = price - (price * disc) / 100;

  useEffect(() => {
    setBrand(props.brand);
    setName(props.name);
    setId(props._id);
    setPrice(props.price);
    setDescription(props.description);
    setDisc(props.discountPercentage);
    setCategory(props.category);
    setSelectedSizes(props.size);
    setColor(props.colors);
  }, [
    props._id,
    props.brand,
    props.category,
    props.colors,
    props.description,
    props.discountPercentage,
    props.name,
    props.price,
    props.size,
  ]);

  const body = {
    _id: id,
    brand: brand,
    name: name,
    price: price,
    discountPercentage: disc,
    size: selectedSizes,
    color: color,
    description: description,
    category: category,
  };

  const colorHandler = (event) => {
    if (event.key === "Enter") {
      setColor([...color, event.target.value]);
      event.target.value = "";
    }
  };
  const sizeHandler = (event) => {
    if (event.target.checked) {
      setSelectedSizes([...selectedSizes, event.target.name]);
    } else {
      var ind = selectedSizes.indexOf(event.target.name);
      if (ind !== -1) selectedSizes.splice(ind, 1);
      setSelectedSizes([...selectedSizes]);
    }
  };

  const editProductHandler = () => {
    setAlertOpen(false);
    props.onClose(false);
    axios
      .put("/admin/products/" + id, body, getConfig())
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <Dialog
        style={{ zIndex: 10000001 }}
        open={alertOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to SAVE THESE CHANGES ?"}
        </DialogTitle>
        <DialogActions>
          <Button2 onClick={() => setAlertOpen(false)} color="primary">
            Cancel
          </Button2>
          <Button2
            onClick={() => editProductHandler()}
            color="primary"
            autoFocus
          >
            Yes
          </Button2>
        </DialogActions>
      </Dialog>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        {...props}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <div className={classes.root}>
              <div className={classes.topBox}>
                <div className={classes.fieldBoxTop}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      width: "100%",
                    }}
                  >
                    <TextField
                      required
                      label="Product ID"
                      variant="outlined"
                      value={id}
                      style={{ alignSelf: "flex-start" }}
                      onChange={(e) => setId(e.target.value)}
                      InputProps={{
                        readOnly: !props.editable,
                      }}
                    />
                    <TextField
                      required
                      label="Category"
                      variant="outlined"
                      value={category}
                      style={{ alignSelf: "flex-start" }}
                      onChange={(e) => setCategory(e.target.value)}
                      InputProps={{
                        readOnly: !props.editable,
                      }}
                    />
                  </div>
                  <TextField
                    fullWidth
                    required
                    label="Brand"
                    variant="outlined"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    InputProps={{
                      readOnly: !props.editable,
                    }}
                  />
                  <TextField
                    fullWidth
                    required
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                      readOnly: !props.editable,
                    }}
                  />
                  <div className={classes.priceBox}>
                    <TextField
                      required
                      type="number"
                      label="Price"
                      variant="outlined"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      InputProps={{
                        readOnly: !props.editable,
                      }}
                    />
                    <TextField
                      label="Discount"
                      variant="outlined"
                      type="number"
                      value={disc}
                      onChange={(e) => setDisc(e.target.value)}
                      InputProps={{
                        readOnly: !props.editable,
                      }}
                    />
                    <InputGroup.Text>= {priceFinal}</InputGroup.Text>
                  </div>
                </div>
                <div className={classes.imageBox}>
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className={classes.imageStyle}
                        src={myUri + props.images[0]}
                        alt="Product"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className={classes.imageStyle}
                        src={myUri + props.images[1]}
                        alt="Colors"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className={classes.imageStyle}
                        src={myUri + props.images[2]}
                        alt="Sizes"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className={classes.fieldBox}>
                <div className={classes.bottomBox}>
                  <h4 style={{ marginBottom: "40px", paddingLeft: "15px" }}>
                    Sizes
                  </h4>
                  <GridList cellHeight="80px">
                    {props.editable
                      ? sizes.map((item, index) => (
                          <ListItem key={index}>
                            <Checkbox
                              style={{ marginRight: "20px" }}
                              color="primary"
                              name={item}
                              checked={selectedSizes.find((i) => i === item)}
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              onChange={sizeHandler}
                            />
                            <ListItemText>{item}</ListItemText>
                          </ListItem>
                        ))
                      : selectedSizes.map((item, index) => (
                          <ListItem key={index}>
                            <Checkbox
                              style={{ marginRight: "20px" }}
                              color="primary"
                              name={item}
                              checked={true}
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              onChange={null}
                            />
                            <ListItemText>{item}</ListItemText>
                          </ListItem>
                        ))}
                  </GridList>
                </div>
                <div className={classes.colorBox}>
                  <TextField
                    fullWidth
                    required
                    label="Colors"
                    variant="outlined"
                    style={{ marginBottom: "20px" }}
                    onKeyDown={colorHandler}
                    disabled={!props.editable}
                  />
                  <GridList cellHeight="80px">
                    {color.map((item, index) => (
                      <ListItem key={index}>
                        {props.editable ? (
                          <IconButton
                            onClick={() => {
                              color.splice(index, 1);
                              setColor([...color]);
                            }}
                          >
                            <ClearIcon />
                          </IconButton>
                        ) : null}
                        <ListItemText>{item}</ListItemText>
                      </ListItem>
                    ))}
                  </GridList>
                </div>
                <div className={classes.colorBox}>
                  <TextField
                    label="Description"
                    variant="outlined"
                    value={description}
                    multiline
                    rows={4}
                    onChange={(e) => setDescription(e.target.value)}
                    InputProps={{
                      readOnly: !props.editable,
                    }}
                  />
                </div>
              </div>
              {props.editable ? (
                <Button
                  style={{ margin: "5vh auto" }}
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => setAlertOpen(true)}
                >
                  SAVE CHANGES
                </Button>
              ) : (
                <Button
                  style={{ margin: "5vh auto" }}
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => props.onClose(false)}
                >
                  CLOSE
                </Button>
              )}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
