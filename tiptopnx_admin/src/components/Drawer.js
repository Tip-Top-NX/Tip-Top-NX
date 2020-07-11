import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AddIcon from "@material-ui/icons/Add";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import { withRouter } from "react-router";

const handleItem = [
  {
    name: "View All",
    icon: <AppsIcon style={{ height: 50, width: 50, color: "silver" }} />,
    routeName: "add",
  },
  {
    name: "Add",
    icon: <AddIcon style={{ height: 50, width: 50, color: "silver" }} />,
    routeName: "add",
  },
  {
    name: "Search",
    icon: <SearchIcon style={{ height: 40, width: 40, color: "silver" }} />,
    routeName: "search",
  },
];

const handleOrder = [
  { name: "Pending Orders", routeName: "pendingOrders" },
  { name: "Delivery Status", routeName: "deliveryStatus" },
];

function ClippedDrawer(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const logoutHandler = () => {
    sessionStorage.clear();
    props.history.push("/");
  };

  return (
    <div className={classes.root}>
      <div style={{ height: "10vh" }}>
        {/* Navbar */}
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Tip-Top NX
            </Typography>
            <Button
              onClick={() => setOpen(true)}
              style={{
                marginLeft: "auto",
                backgroundColor: "white",
                color: "black",
              }}
              variant="contained"
            >
              LOGOUT
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.container}>
        {/* Alert Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to logout?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={logoutHandler} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        {/* drawer */}
        <aside className={classes.drawer}>
          <List>
            {handleItem.map((item, index) => (
              <ListItem
                button
                key={index}
                className={classes.tiles}
                onClick={() => props.history.push("/admin/" + item.routeName)}
              >
                <ListItemIcon className={classes.iconStyle}>
                  {item.icon}
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {handleOrder.map((item, index) => (
              <ListItem
                button
                key={index}
                className={classes.tiles}
                onClick={() => props.history.push("/admin/" + item.routeName)}
              >
                <ListItemText className={classes.textStyle}>
                  {item.name}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </aside>
        {/* content */}
        <section className={classes.content}>{props.children}</section>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    minHeight: "100vh",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    paddingLeft: "50px",
    background: "linear-gradient(45deg, #000 30%, #555 80%)",
  },
  container: {
    maxHeight: "90vh",
    display: "flex",
  },
  drawer: {
    flex: 1,
    width: "15vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  content: {
    flex: 7,
    padding: theme.spacing(3),
  },
  tiles: {
    height: "15vh",
    width: "90%",
    margin: "5px",
    flexDirection: "column",
    background: "linear-gradient(45deg, #555 30%, #000 90%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    justifyContent: "center",
    width: 100,
    flex: 2,
    alignItems: "center",
  },
  textStyle: {
    width: 100,
    textAlign: "center",
    color: "white",
    display: "flex",
    alignItems: "center",
  },
}));

export default withRouter(ClippedDrawer);
