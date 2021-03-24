import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cont: {
    overflow: "hidden",
    paddingTop: "16px",
    paddingBottom: "16px",
  },
  paper: {
    height: 140,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Container
      maxWidth="xl"
      style={{ marginTop: "20px", background: "red" }}
      className={classes}
    >
      <Grid container spacing={5} justify="center" className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Paper className={classes.paper}>{value}</Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
