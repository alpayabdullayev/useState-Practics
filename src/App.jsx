import React from 'react';
import Tab from "./Components/Tab";  // Corrected import statement
import EventHandlingExample from './Components/handleEvents';

function App() {
  return (
    <>
      {/* <TextBox/> */}
      {/* <Form/> */}
      {/* <Profile/> */}
      {/* <Count2/> */}
      <Tab>
        <Tab.Panel title="Profil">1.Tab</Tab.Panel>
        <Tab.Panel title="nastroyka">2.Tab</Tab.Panel>
        <Tab.Panel title="about">3.Tab</Tab.Panel>
      </Tab>
      <EventHandlingExample/>
    </>
  );
}

export default App;