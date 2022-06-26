import { ReactNode } from "react";
import { TabList, Tab, Tabs } from "@chakra-ui/react";

interface TabsProps {
  tabs: string[];
  children: ReactNode;
}

function PageTabs({ tabs, children }: TabsProps) {
  return (
    <Tabs>
      <TabList>
        {tabs.map((item, idx) => (
          <Tab key={idx}>{item}</Tab>
        ))}
      </TabList>
      {children}
    </Tabs>
  );
}

export default PageTabs;
