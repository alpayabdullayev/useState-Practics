import React from 'react';
import Form from "./Components/Form/index"
import Tab from "./Components/Tab"; 
import TextBox from "./Components/TextBox/index"
import Profile from "./Components/Profile/index"
import Count2 from "./Components/Count2/index"
import EventHandlingExample from './Components/handleEvents';
import ToDo from './Components/ToDo/ToDo';
import Slider from './Components/Slider';

function App() {
  return (
    <>
      {/* <TextBox/>
      <Form/>
      <Profile/>
      <Count2/>
      <Tab>
        <Tab.Panel title="Profil">1.Tab</Tab.Panel>
        <Tab.Panel title="nastroyka">2.Tab</Tab.Panel>
        <Tab.Panel title="about">3.Tab</Tab.Panel>
      </Tab>
      <EventHandlingExample/> */}
      <ToDo/>
      {/* <Slider/> */}
    </>
  );
}

export default App;