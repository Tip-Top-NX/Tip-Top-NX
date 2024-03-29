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
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import SearchIcon from "@material-ui/icons/Search";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  CssBaseline,
  Drawer,
  Badge,
} from "@material-ui/core";
import { withRouter } from "react-router";
const drawerWidth = 150;

const handleItem = [
  {
    name: "Add",
    icon: <AddIcon style={{ height: 50, width: 50, color: "silver" }} />,
    routeName: "add",
  },
  {
    name: "Search",
    icon: <SearchIcon style={{ height: 40, width: 40, color: "silver" }} />,
    routeName: "product",
  },
  {
    name: "Delete",
    icon: (
      <DeleteOutlineIcon style={{ height: 40, width: 40, color: "silver" }} />
    ),
    routeName: "deleted",
  },
];

function ClippedDrawer(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOrder = [
    { name: "Pending Orders", routeName: "pending-orders", no: props.pending },
    {
      name: "Change delivery status",
      routeName: "confirmed-orders",
      no: props.confirmed,
    },
    {
      name: "Cancelled/ Delivered orders",
      routeName: "history",
      no: props.completed,
    },
    {
      name: "Add new admin",
      routeName: "add-admin",
      no: 0,
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const logoutHandler = () => {
    sessionStorage.clear();
    props.history.push("/");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
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
      {/* Drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
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
                  <Badge badgeContent={item.no} color="error">
                    {item.name}
                  </Badge>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {/* <Paper elevation={3} style={{margin:"auto",width:"75vw",padding:"30"}} variant="outlined"> */}
        {props.children}
        {/* </Paper> */}
      </main>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    paddingLeft: "50px",
    background: "linear-gradient(45deg, #000 30%, #555 80%)",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    width: "11vw",
  },
  drawerContainer: {
    overflow: "auto",
    alignSelf: "center",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  tiles: {
    height: 100,
    width: "90%",
    margin: "5px",
    flexDirection: "column",
    background: "linear-gradient(45deg, #555 30%, #000 90%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      background: "linear-gradient(45deg, #555 100%, #000 90%)",
    },
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
