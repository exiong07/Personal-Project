import React from "react";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
import Lipless from "../../Images/liplesscrank.jpg";
import Swimjig from "../../Images/SwimJig.png";
import Frog from "../../Images/blackfrog.jpg";
import Worm from "../../Images/finesseworm.jpg";
import Rat from "../../Images/blackrat.jpg";
import Spinnerbait from "../../Images/blackspinnerbait.jpg";
import Product from "../../components/Card/Product";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "16rem",
    paddingRight: "20px",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "3rem" }}>
        Upcoming Products
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} md={4}>
          <Product
            image={Lipless}
            title="Lipless Crankbait"
            description="Upcoming product for Fish Spotter Users, the 'Lipless Crankbaits' "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Product
            image={Swimjig}
            title="Swimjigs"
            description="Upcoming FIRE item for Fish Spotter Users, the amazing 'Swim Jig' "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Product
            image={Frog}
            title="Topwater Frog"
            description="Upcoming HOT product for Fish Spotter Users, the 'Black Frog' "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Product
            image={Rat}
            title="Rat"
            description="Create HUGE top water action with this one of a kind bait, the 'Black Rat'"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Product
            image={Spinnerbait}
            title="Spinnerbait"
            description="Upcoming HOT product for Fish Spotter Users, the 'Black Frog' "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Product
            image={Worm}
            title="Senko Worm"
            description="With this worm you can finesse them bigguns"
          />
        </Grid>
      </Grid>
    </div>
  );
}
