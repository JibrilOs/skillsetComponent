import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import { Container, CssBaseline, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Skillset from "./Skills";
import "./App.css";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cont: {
    paddingTop: "16px",
    paddingBottom: "16px",
  },
  paper: {
    padding: "30px 30px",
    minHeight: 200,

    width: "98%",
    // borderRadius: "50%",
    margin: "12px auto",
  },
  control: {
    padding: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  marg: { marginTop: "1px" },
}));

export default function App() {
  const classes = useStyles();
  const [data, setData] = useState(false);
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <AppBar position="static" className={classes.marg}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Josdev
          </Typography>
          <div></div>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={() => {
              return setData(!data);
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {data === true && (
        <Paper
          className={classes.paper}
          elevation={3}
          style={{ background: "#3F51B5", color: "white" }}
        >
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio
            ipsa commodi dolor impedit! Dolore, iusto fugiat expedita aperiam
            sint libero amet enim officiis illo vel nesciunt, veniam ad dolor.
          </Typography>
        </Paper>
      )}
      <Grid container justify="center" className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <Grid
            container
            justify="center"
            style={{ background: "yellow" }}
            spacing={2}
          >
            {[0, 2, 3, 4].map((value) => (
              <Grid
                key={value}
                item
                md={3}
                sm={6}
                xs={12}
                style={{ background: "white" }}
              >
                <Paper className={classes.paper} elevation={5}>
                  <Typography variant="body1" display="block">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae est, sit quisquam mollitia, iure non corrupti nisi
                    sunt quasi, dolorem earum officia maxime eaque repellendus
                    dolor nemo. Quaerat, nihil architecto!
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Skillset     />
    </Container>
  );
}
