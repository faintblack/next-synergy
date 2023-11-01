"use client";

import { Box } from "@mui/material";
import React, { useState } from "react";

const style = {
  activeTab:
    "inline-block px-3 py-2 text-[#175CD3] bg-[#EFF8FF] rounded-lg active",
  nonActiveTab:
    "inline-block px-3 py-2 rounded-lg hover:text-[#175CD3] hover:bg-[#EFF8FF] dark:hover:bg-[#EFF8FF] dark:hover:text-[#175CD3]",
};

const CrmTabs = () => {
  const tabs = ["clients", "policy", "support"];
  const [activeTab, setActiveTab] = useState("clients");

  return (
    <Box sx={{ mt: 2 }}>
      <ul className="flex flex-wrap text-sm font-semibold text-center text-gray-500 dark:text-gray-400">
        {tabs.map((tab, idx) => (
          <li key={idx + "-tab"} className="mr-2">
            <a
              // href="#"
              className={
                activeTab === tab ? style.activeTab : style.nonActiveTab
              }
              // aria-current="page"
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
  );
};

export default CrmTabs;
