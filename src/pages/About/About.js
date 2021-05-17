import React from "react";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
import Creator from "../../components/Logo/Logo2";
export default function About() {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "3rem" }}>
        About Fish Spotter
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
      <h2
        style={{
          fontSize: "2.4rem",
          padding: "3rem",
          textAlign: "center",
        }}
      >
        Our Creator: Elijah Xiong
      </h2>
      <h2
        style={{
          textAlign: "center  ",
          borderRadius: "100%",
          padding: "2.5rem ",
        }}
      >
        <p style={{ textAlign: "center", padding: "2.5rem" }}>
          Creator's Mission: To allow everyone to be able to catch fish and know
          all of the hotspots. Be able to unite the community hoping people can
          continue their love for fishing and share that love with other people.
        </p>
        <Creator />
      </h2>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
    </div>
  );
}
