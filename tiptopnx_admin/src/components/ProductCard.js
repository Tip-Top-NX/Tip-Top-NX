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

const useStyles = makeStyles({
  root: {
    minWidth: 250,
  },
  container: {
    padding: "10px 0 10px 0",
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  // const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

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
              <Card className={classes.root} key={index}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Product Image"
                    height="240"
                    image={{
                      uri: "http://172.20.10.2:5000/" + item.images[0],
                    }}
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
                  <Button size="small" color="primary" variant="contained">
                    EDIT
                  </Button>
                  <Button size="small" color="primary">
                    DELETE
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
