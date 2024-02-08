// Pie.js
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://elections-bice.vercel.app/v1/elections/statistics');
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        {apiData && (
          <>
            <h2 style={{textAlign: "center"}}>כללי</h2>
            <PieChart data={apiData} />
            <h2 style={{textAlign: "center"}}>אבו גוש</h2>
            <PieChart data={apiData} familyName="אבו גוש" />
            <h2 style={{textAlign: "center"}}>גבר</h2>
            <PieChart data={apiData} familyName="גבר" />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Pie;
