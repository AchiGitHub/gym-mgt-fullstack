import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import React from "react";

function Members() {
  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Members;
