import { Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import Table from "../../components/Table";
import PageTabs from "../../components/Tabs";

function Members() {
  return (
    <Tabs>
      <TabList>
        <PageTabs key={1} tabs={tabs}>
          <TabPanels>
            {tabs.map((tab, idx) => {
              return (
                <TabPanel key={idx}>
                  <Table data={tab} />
                </TabPanel>
              );
            })}
          </TabPanels>
        </PageTabs>
      </TabList>
    </Tabs>
  );
}

export default Members;

const tabs = ["6 Months", "12 Months", "1 Month"];
