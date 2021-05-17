import React from "react";
import Logo from "../../components/Logo/Logo";
import Card from "../../components/Card/Card";
import Trout from "../../Images/trout.jpg";
import Shad from "../../Images/shad.jpg";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "3rem" }}>Spot fish with</h1>
      <h2
        style={{
          textAlign: "center",
          borderRadius: "100%",
        }}
      >
        <Logo />
      </h2>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
      <Grid itemxs={12} container spacing={2}>
        <Grid item xs={6}>
          <h1
            style={{
              paddingLeft: "24%",
              padding: "3rem",
              margin: "20px",
            }}
          >
            Post sightings of your fish!
          </h1>
          <p
            style={{
              paddingLeft: "8%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci
            odio, convallis ornare est eu, accumsan sagittis nibh. Praesent
            consequat, lectus vel lacinia facilisis, magna risus sagittis ipsum,
            finibus tincidunt neque odio in felis. Nam bibendum ligula turpis,
            ac lacinia lectus congue quis. Sed laoreet fermentum cursus. Aliquam
            ex risus, aliquam vitae tempor pretium, sodales vitae leo. Sed
            hendrerit sem metus, at ultrices felis sodales et. Phasellus
            tristique odio eu tellus malesuada efficitur. Aenean porta rhoncus
            massa, eu tincidunt lectus sollicitudin et. Aliquam lacus ante,
            viverra dignissim fringilla ut, tincidunt sit amet dui. Vestibulum
            blandit nulla a sapien scelerisque, non venenatis ligula dapibus.
          </p>
          <p
            style={{
              paddingLeft: "8%",
            }}
          >
            Donec convallis dapibus condimentum. Morbi volutpat accumsan
            interdum. Aenean commodo risus in mauris ornare, in porttitor magna
            rhoncus. Nullam pellentesque dui convallis facilisis bibendum.
            Curabitur a facilisis felis, ut mollis magna. Donec a nisi nulla.
            Maecenas maximus orci quis diam tempor pretium. Aliquam consequat,
            felis condimentum vulputate tincidunt, odio justo commodo nibh, vel
            mattis dolor urna et turpis. Aenean nec sem eget nisi scelerisque
            congue eu in eros. Nam malesuada ut augue a ullamcorper. Nam pretium
            vel massa quis vehicula.
          </p>
        </Grid>
        <Grid item xs={3}>
          <Card
            initial="J"
            titleName="John Doe"
            date="05/10/2021"
            image={Shad}
            bodyText="Spotted : Shad"
            Name="Lake Michigan"
            Desc="School of shad for bait! #baitfish #fishing #lakemichigan #boat"
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            initial="E"
            titleName={"Elijah Xiong"}
            date={"05/03/2021"}
            image={Trout}
            bodyText="Spotted : Trout"
            Name="Milwaukee River"
            Desc="Top water trout! Hit with a popper! #fishing #lakemichigan #shorefishing #riverfishing "
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
}
