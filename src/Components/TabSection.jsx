import { Tabs, Tab } from '@mui/material';
import { useState } from 'react';

function TabSection() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <Tabs value={tab} onChange={(e, v) => setTab(v)}>
        <Tab label="Overview" />
        <Tab label="Details" />
      </Tabs>
      {tab === 0 && <p>Overview Content</p>}
      {tab === 1 && <p>Details Content</p>}
    </>
  );
}

export default TabSection;
