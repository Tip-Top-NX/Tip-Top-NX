import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "../utils/axios";
import Grid from "@material-ui/core/Grid";
import ProductDetails from "./ProductDetails";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  container: {
    padding: "10px 0 10px 0",
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  // const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [editable, setEditable] = useState(false);
  const myUri = "http://172.20.10.2:5000/";

  useEffect(() => {
    let mounted = true;
    axios
      .get("/category/5/get-products")
      .then((res) => {
        if (mounted) {
          // setIsLoading(false);
          setProducts([...res.data]);
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));

    return () => (mounted = false);
  }, []);

  return (
    <div className={classes.container}>
      <Grid justify="space-evenly" container spacing={5}>
        {products.map((item, index) => {
          return (
            <Grid key={index} item>
              <Card
                className={classes.root}
                key={index}
                onClick={() => {
                  setEditable(false);
                  setShowModal(true);
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
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.brand}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                      {item.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      setEditable(true);
                      setShowModal(true);
                    }}
                  >
                    EDIT
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      alert("Are you sure you want to remove this product");
                    }}
                  >
                    DELETE
                  </Button>
                </CardActions>
              </Card>
              <ProductDetails
                open={showModal}
                editable={editable}
                onClose={() => setShowModal(false)}
                brand={item.brand}
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
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
