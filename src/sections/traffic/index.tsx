import React from "react";
import { Grid } from "@mui/material";
import TrafficAlert from "@/sections/traffic/trafficAlert";
import TrafficTable from "@/sections/traffic/trafficTable";
import TrafficChart from "@/sections/traffic/trafficChart";
import MainCard from "@/components/MainCard";

const TrafficSection: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TrafficAlert />
      </Grid>
      <Grid item xs={12} md={8}>
        <MainCard>
          <TrafficChart />
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <MainCard>
          <TrafficTable />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default TrafficSection;
