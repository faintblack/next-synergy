"use client";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const getData = async () => {
  const res = await fetch(
    "https://interview-test-mock-api.azurewebsites.net/profile"
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

const DataProfile = ({ params }) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [`profileQuery[${params.id}]`],
    queryFn: getData,
    throwOnError: true,
    retry: false,
  });

  const dateConvert = (date) => {
    const getDate = new Date(date);
    let newDate = getDate.toLocaleString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      // dateStyle: 'short',
      // weekday: 'long'
    });

    return newDate;
  };

  const currencyFormat = (val) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const formattedNumber = formatter.format(val);
    return formattedNumber;
  };

  const _financialItem = (label, value) => {
    return (
      <ListItem button divider sx={{ p: 2 }}>
          <ListItemText
            primary={label}
            primaryTypographyProps={{ fontSize: "1.5rem" }}
            secondary={data && currencyFormat(value)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          />
        </ListItem>
    )
  }

  const _cardItem = (label, value, img = "/dummy-logo.png") => {
    return (
      <Card
          sx={{
            flex: {
              sm: 1,
            },
            flexGrow: {
              xs: 1,
            },
          }}
        >
          <CardContent style={{ padding: 10 }}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src={img} />
                </ListItemAvatar>
                <ListItemText
                  primary={label}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {data && currencyFormat(value)}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
    )
  }

  console.log('params nih', params);

  if (isLoading) {
    return (
      <Box sx={{ height: 420, width: "100%" }}>
        <Typography
          variant="h4"
        >
          Loading...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ pb: 3, pt: 1 }}>
      <Typography variant="h3" gutterBottom>
        {data?.clientInformation.name}
      </Typography>
      <Divider sx={{ m: 3, mr: 0, ml: 0 }} />
      <Card sx={{ mb: 3 }}>
        <CardContent
          sx={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Gender
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {data?.clientInformation.gender}
            </Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              DOB
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {data && dateConvert(data.clientInformation.dob)}
            </Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Marital Status
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {data?.clientInformation.maritalStatus}
            </Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Employment
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {data?.clientInformation.employmentStatus}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Typography variant="h4" gutterBottom>
        Financials
      </Typography>
      <Divider sx={{ m: 3, mr: 0, ml: 0 }} />
      <List
        sx={{
          width: "100%",
          mb: 3,
          bgcolor: "background.paper",
        }}
        component="nav"
        aria-label="mailbox folders"
      >
        {_financialItem("Income", data?.financials?.income)}
        {_financialItem("Expenses", data?.financials?.expenses)}
        {_financialItem("Savings", data?.financials?.savings)}
        {_financialItem("Investment", data?.financials?.investment)}
        {_financialItem("Debt", data?.financials?.debt)}
        {_financialItem("Cashflow", data?.financials?.cashflow)}
        {_financialItem("Networth", data?.financials?.networth)}
      </List>

      <Typography variant="h4" gutterBottom>
        Goals
      </Typography>
      <Divider sx={{ m: 3, mr: 0, ml: 0 }} />
      <Box sx={{ display: "flex", gap: "15px", flexWrap: "wrap", mb: 3 }}>
        {_cardItem("Emergency Fund", data?.goals?.emergencyFund, "/dummy-avatar.png")}
        {_cardItem("Travel", data?.goals?.travel)}
      </Box>

      <Typography variant="h4" gutterBottom>
        Insurances
      </Typography>
      <Divider sx={{ m: 3, mr: 0, ml: 0 }} />
      <Box sx={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {_cardItem("Life Insurance", data?.insurances?.lifeInsurance)}
        {_cardItem("Personal Accident", data?.insurances?.personalAccident)}
      </Box>
    </Box>
  );
};

export default DataProfile;
