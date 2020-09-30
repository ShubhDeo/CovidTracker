import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "../Component/Bar.module.css";

export const BarChart = ({
  globalStats: { confirmed, recovered, deaths },
  country
}) => {
  if (country === "") {
    country = "Global";
  }
  const makeBarChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#fddb3a", "#81b214", "#ec0101"],
            data: [confirmed.value, recovered.value, deaths.value]
          }
        ]
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `${country}` }
      }}
    />
  ) : null;

  return <div className={styles.container}>{makeBarChart}</div>;
};
