import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect } from "react";

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 300,
    renderCell: (params) => (
      <Link href={`/crm/profile/${params.row.id}`}>{params.row.name}</Link>
    ),
  },
  { field: "gender", headerName: "Gender", width: 90 },
  { field: "dob", headerName: "DOB", width: 150 },
  { field: "maritalStatus", headerName: "Marital Status", width: 200 },
  { field: "employmentStatus", headerName: "Employment", width: 200 },
];

const getData = async () => {
  const res = await fetch(
    "https://interview-test-mock-api.azurewebsites.net/clients"
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

const ClientTabs = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["clientsQuery"],
    queryFn: getData,
    throwOnError: true,
    retry: false,
  });

  // useEffect(() => {
  //   throw new Error('tesaja');
  // }, [])
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
    <Box sx={{ height: 420, width: "100%" }}>
      <DataGrid
        autoHeight
        rows={data ?? []}
        columns={columns}
        disableDensitySelector
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        checkboxSelection
      />
    </Box>
  );
};

export default ClientTabs;
