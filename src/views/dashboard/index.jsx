import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalDarkCard from "./TotalDarkCard";
import TotalLightCard from "./TotalLightCard";
import TotalGrowthBarChart from "./TotalGrowthBarChart";

import { gridSpacing } from "store/constant";

// assets
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} direction="row">
          <Grid item sm={6} xs={12} md={6} lg={4}>
            <TotalLightCard
              isLoading={isLoading}
              total={200}
              label="Total Users"
            />
          </Grid>
          <Grid item sm={6} xs={12} md={6} lg={4}>
            <TotalDarkCard
              {...{
                isLoading: isLoading,
                total: 5,
                label: "Total Risks",
                icon: <StorefrontTwoToneIcon fontSize="inherit" />,
              }}
            />
          </Grid>
          <Grid item sm={6} xs={12} md={6} lg={4}>
            <TotalDarkCard
              {...{
                isLoading: isLoading,
                total: 10,
                label: "Total Hazards",
                icon: <StorefrontTwoToneIcon fontSize="inherit" />,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
