import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect } from "react";

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  { field: "gender", headerName: "Gender", width: 90 },
  { field: "dob", headerName: "DOB", width: 150 },
  { field: "maritalStatus", headerName: "Marital Status", width: 200 },
  { field: "employmentStatus", headerName: "Employment", width: 200 },
  {
    field: "actions",
    type: "actions",
    renderCell: (params) => (
      <Link href={`/profile/${params.row.id}`}>
        <Button className="bg-blue-500 capitalize hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Detail
        </Button>
      </Link>
    ),
  },
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
  const { data, isError } = useQuery({
    queryKey: ["clientsQuery"],
    queryFn: getData,
    throwOnError: true,
    retry: false,
  });

  // useEffect(() => {
  //   throw new Error('tesaja');
  // }, [])

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
