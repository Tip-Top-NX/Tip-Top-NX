import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Grid } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import GridList from "@material-ui/core/GridList";
import ClearIcon from "@material-ui/icons/Clear";
import axios from "../utils/axios";
import { Backdrop, CircularProgress, Divider } from "@material-ui/core";
import Snackbar from "../components/Snackbar";
import Carousel from "react-bootstrap/Carousel";

const sizes = {
  men: ["XS", "S", "M", "L", "XL", "XXL"],
  kids: ["5-6", "7-8", "9-10", "11-12"],
  women: ["32B", "32C", "34B", "34C", "36B", "36C", "38B", "38C", "40B", "40C", "40D", "40DD", "42B", "42C", "42D"]
};

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
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
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
    category: category,
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

  const addSize = (event) => {
    if (event.key === "Enter") {
      setSelectedSizes([...selectedSizes, event.target.value]);
      event.target.value = "";
    }
  };

  const addProductHandler = () => {
    setOpen(true);
    let data = new FormData();
    for (let i = 0; i < images.length; i++) {
      data.append('myImages', images[i]);
    }
    for (let name in body) {
      data.append(name, body[name]);
    }
    axios.post('/admin/products', data, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "content-type": "multipart/form-data",
      },
    })
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
  };

  const addImages = (event) => {
    setImages([...images, ...event.target.files]);
  };

  return (
    <>
      <div className={classes.root}>
        {/* Backdrop */}
        <Backdrop
          className={classes.backdrop}
          open={open}
          onClick={() => setOpen(false)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {/* Snackbar */}
        <Snackbar
          close={() => setSnackOpen(false)}
          open={snackOpen}
          variant={variant}
          message={message}
        />

        <h1 style={{ textAlign: "center" }}>ADD A PRODUCT TO THE SYSTEM</h1>
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
              />
              <TextField
                required
                label="Category"
                variant="outlined"
                value={category}
                style={{ alignSelf: "flex-start" }}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={classes.imageBox}>
              <Carousel>
                {images.map((item, index) => (
                  <Carousel.Item key={index}>
                    <img className={classes.imageStyle} src={URL.createObjectURL(item)} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <input multiple type="file" onChange={addImages} />
          </div>
        </div>
      </div>
      <h4 style={{ marginBottom: "40px", paddingLeft: "15px", marginLeft: "9vw" }}>Sizes</h4>
      <Grid style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }} container spacing={2}>
        <Grid item xs={4}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <GridList cellHeight="80px">
                {sizes.men.map((item, index) => (
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
            </Grid>
            <Grid item xs={12}>
              <hr style={{ color: "#CFD8DC" }}></hr>
            </Grid>
            <Grid item xs={12}>
              <GridList cellHeight="80px">
                {sizes.kids.map((item, index) => (
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
            </Grid>
          </Grid>
        </Grid>
        <Grid style={{ borderLeft: "2px solid #CFD8DC" }} item xs={4}>
          <GridList cellHeight="80px">
            {sizes.women.map((item, index) => (
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
        </Grid>
        <Grid style={{ borderLeft: "2px solid #CFD8DC" }} item xs={4}>
          <TextField
            required
            label="Add new size"
            variant="outlined"
            helperText="Press enter to add the size"
            style={{ marginBottom: "20px", marginLeft: "20px" }}
            onKeyDown={addSize}
          />
          <GridList cellHeight="80px">
            {selectedSizes.map((item, index) => (
              <ListItem key={index}>
                <IconButton
                  onClick={() => {
                    selectedSizes.splice(index, 1);
                    setColors([...selectedSizes]);
                  }}
                >
                  <ClearIcon />
                </IconButton>
                <ListItemText>{item}</ListItemText>
              </ListItem>
            ))}
          </GridList>
        </Grid>
      </Grid>
      <hr></hr>
      <div className={classes.fieldBox}>
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
            value={description}
            onChange={descHandler}
          />
        </div>
      </div>
      <div style={{ display:"flex",justifyContent:"center" }}>
        <Button
          variant="contained"
          color="primary"
          size="Large"
          onClick={() => addProductHandler()}
        >
          Add Product
      </Button>
      </div>
      {/* </Grid> */}
    </>
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
    color: "#fff",
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
    width: "50%",
    height: "50vh",
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
    width: "18vw",
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
  imageStyle: {
    height: "40vh",
    width: "18vw",
  },
}));
