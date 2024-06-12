// src/pages/account.js

import React from "react";
import Container from "@mui/material/Container";
import RooftopSolarQuotes from "../components/RooftopSolarQuotes";
import BasicInformation from "../components/BasicInformation";
import Materials from "../components/Materials";
import PaymentDetails from "../components/PaymentDetails";
import NetCost from "../components/NetCost";
import Footer from "../components/Footer";

const Account = () => {
  return (
    <Container sx={{ padding: "unset", display: "grid", gap: "7px" }}>
      <RooftopSolarQuotes />
      <BasicInformation />
      <Materials />
      <PaymentDetails />
      <NetCost />
      <Footer />
    </Container>
  );
};

export default Account;
