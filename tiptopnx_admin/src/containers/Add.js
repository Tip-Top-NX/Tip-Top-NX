import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import GridList from "@material-ui/core/GridList";
import ClearIcon from "@material-ui/icons/Clear";
import Divider from "@material-ui/core/Divider";
import axios from "../utils/axios";
import { getConfig } from '../utils/config';
import { Backdrop, CircularProgress } from '@material-ui/core';
import Snackbar from '../components/Snackbar';

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const Add = () => {
  const classes = useStyles();
  const [id, setId] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [disc, setDisc] = useState(0);
  const [name, setName] = useState("");
  const [colors, setColors] = useState([]);
  const [description, setDescription] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  // Backdrop
  const [open, setOpen] = React.useState(false);
  // Snackbar
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [message, setMessage] = React.useState("Error in adding the product!");
  const [variant, setVariant] = React.useState("error");

  let priceFinal = price - (price * disc) / 100;

  const body = {
    _id: id,
    brand: brand,
    name: name,
    price: price,
    discountPercentage: disc,
    size: selectedSizes,
    colors: colors,
    description: description,
  };

  const colorsHandler = (event) => {
    if (event.key === "Enter") {
      setColors([...colors, event.target.value]);
      event.target.value = "";
    }
  };
  const descHandler = (event) => {
      setDescription(event.target.value);
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

  const addProductHandler = () => {
    setOpen(true);
    setTimeout(() => {
      axios
      .post("/admin/products", body,getConfig())
      .then((res) => {
        setOpen(false);
        setMessage("Product added successfully!");
        setVariant("success");
        setSnackOpen(true);
      })
      .catch((err) => {
        setOpen(false);
        setMessage("Error in adding the product!");
        setVariant("error");
        setSnackOpen(true);
        console.log(err);
      });
    }, 0);
  };

  return (
    <div className={classes.root}>
      {/* Backdrop */}
      <Backdrop className={classes.backdrop} open={open} onClick={()=>setOpen(false)}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* Snackbar */}
      <Snackbar close={() => setSnackOpen(false)} open={snackOpen} variant={variant} message={message} />

      <h1 style={{ textAlign: "center" }}>ADD A PRODUCT TO THE SYSTEM</h1>
      <div className={classes.topBox}>
        <div className={classes.fieldBoxTop}>
          <TextField
            required
            label="Product ID"
            variant="outlined"
            value={id}
            style={{ alignSelf: "flex-start" }}
            onChange={(e) => setId(e.target.value)}
          />
          <TextField
            fullWidth
            required
            label="Brand"
            variant="outlined"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <TextField
            fullWidth
            required
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className={classes.priceBox}>
            <TextField
              required
              type="number"
              label="Price"
              variant="outlined"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              label="Discount"
              variant="outlined"
              type="number"
              value={disc}
              onChange={(e) => setDisc(e.target.value)}
            />
            <InputGroup.Text>= {priceFinal}</InputGroup.Text>
          </div>
        </div>
        <div className={classes.imageBox}></div>
      </div>
      <div className={classes.fieldBox}>
        <div className={classes.bottomBox}>
          <h4 style={{ marginBottom: "40px", paddingLeft: "15px" }}>Sizes</h4>
          <GridList cellHeight="80px">
            {sizes.map((item, index) => (
              <ListItem key={index}>
                <Checkbox
                  style={{ marginRight: "20px" }}
                  color="primary"
                  name={item}
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  onChange={sizeHandler}
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
            helperText="Press enter to add the color"
            style={{ marginBottom: "20px" }}
            onKeyDown={colorsHandler}
          />
          <GridList cellHeight="80px">
            {colors.map((item, index) => (
              <ListItem key={index}>
                <IconButton
                  onClick={() => {
                    colors.splice(index, 1);
                    setColors([...colors]);
                  }}
                >
                  <ClearIcon />
                </IconButton>
                <ListItemText>{item}</ListItemText>
              </ListItem>
            ))}
          </GridList>
        </div>
        <div className={classes.colorBox}>
          <TextField
            fullWidth
            label="Desciption"
            variant="outlined"
            multiline
            rows={4}
            style={{ marginBottom: "20px" }}
          />
        </div>
      </div>
      <Button
        style={{ margin: "5vh auto" }}
        variant="contained"
        color="primary"
        size="Large"
        onClick={() => addProductHandler()}
      >
        Add Product
      </Button>
    </div>
  );
};

export default Add;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    // border: "solid",
    flexDirection: "column",
    marginBottom: "30px",
    paddingLeft: "35px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  topBox: {
    // border: "solid",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
    height: "40vh",
    marginTop: "40px",
    marginBottom: "20px",
  },
  fieldBoxTop: {
    // border: "solid",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "50%",
    height: "40vh",
    padding: "0 10px 0 10px",
  },
  fieldBox: {
    // border: "solid",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
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
}));
