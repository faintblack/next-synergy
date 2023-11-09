/* eslint-disable react/no-unescaped-entities */
"use client";

import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import ClientTabs from "./ClientTabs";
import Error from "../components/error";

const style = {
  activeTab:
    "inline-block px-3 py-2 text-[#175CD3] bg-[#EFF8FF] rounded-lg active",
  nonActiveTab:
    "inline-block px-3 py-2 rounded-lg hover:text-[#175CD3] hover:bg-[#EFF8FF] dark:hover:bg-[#EFF8FF] dark:hover:text-[#175CD3]",
};

const CrmMenu = () => {
  const tabs = ["clients", "policy", "support"];
  const [activeTab, setActiveTab] = useState("clients");

  useEffect(() => {
    console.log("saya pertama kepanggil");
  }, []);

  console.log("saya crm berapa kali");

  return (
    <>
      <Box sx={{ mt: 2 }}>
        <ul
          className="flex flex-wrap text-sm font-semibold text-center text-gray-500 dark:text-gray-400"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          {tabs.map((tab, idx) => (
            <li key={idx} className="mr-2">
              <a
                // href="#"
                className={
                  activeTab === tab ? style.activeTab : style.nonActiveTab
                }
                style={{
                  textTransform: "capitalize",
                  cursor: "pointer",
                }}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </a>
            </li>
          ))}
          {/* <li>
            <a className="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">
              Tab 5
            </a>
          </li> */}
        </ul>
      </Box>
      <Box sx={{ mt: 2 }}>
        <div
          className={`${activeTab !== "clients" && "hidden"} p-4 rounded-lg`}
          role="tabpanel"
        >
          <ErrorBoundary fallback={<Error />}>
            <ClientTabs />
          </ErrorBoundary>
        </div>
      </Box>
    </>
  );
};

export default CrmMenu;
