import { Grid } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import Posts from "./Posts";



const Home = () => {

  return (
    <React.Fragment>
      <Banner />
      <Grid container>

        <Grid item lg={2} xs={12} sm={2} >
          <Categories />
        </Grid>

        <Grid item container lg={10} xs={12} sm={10}>
          <Posts />
        </Grid>

      </Grid>
    </React.Fragment>
  )
}

export default Home;