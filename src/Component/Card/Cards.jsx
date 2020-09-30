import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "../Card/Cards.module.css";

export const Cards = ({
  globalStats: { confirmed, recovered, deaths, lastUpdate }
}) => {
  if (confirmed) {
    return (
      <div className={styles.parentContainer}>
        <Grid spacing={3} justify="center" className={styles.container}>
          <Grid item>
            <Card
              variant="outlined"
              style={{ borderBottom: "10px solid #fddb3a", padding: "20px" }}
            >
              <CardContent>
                <Typography color="textPrimary" variant="h5" gutterBottom>
                  Infected
                </Typography>
                <Typography color="textPrimary" gutterBottom>
                  <CountUp
                    start={0}
                    end={confirmed.value}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography color="textPrimary">
                  Number of active cases of Covid-19
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card
              variant="outlined"
              style={{ borderBottom: "10px solid #81b214", padding: "20px" }}
            >
              <CardContent>
                <Typography color="textPrimary" variant="h5" gutterBottom>
                  Recovered
                </Typography>
                <Typography color="textPrimary" gutterBottom>
                  <CountUp
                    start={0}
                    end={recovered.value}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography color="textPrimary">
                  Number of recovered cases of Covid-19
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card
              variant="outlined"
              style={{ borderBottom: "10px solid #ec0101", padding: "20px" }}
            >
              <CardContent>
                <Typography color="textPrimary" variant="h5" gutterBottom>
                  Deaths
                </Typography>
                <Typography color="textPrimary" gutterBottom>
                  <CountUp
                    start={0}
                    end={deaths.value}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography color="textPrimary">
                  Number of deaths caused by Covid-19
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};
