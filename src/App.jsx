import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import maxImg from './assets/jobs.jpg';
import GoalList from './components/GoalList.jsx';
import Header from './components/Header.jsx';

import Profile from './components/Profile.jsx';
import Gallery from './components/props/Gallery.jsx';
import StateAndEvents from './components/StateAndEvents.jsx';
import Events from './components/Events.jsx';
import Form from './components/props/state/StateEx.jsx';
import Redundant from './components/props/state/Redundant.jsx';
import Accordion from './components/props/state/SharingState.jsx';
import PreserveState from './components/props/state/PreserveState.jsx';
import SyncedInputs from './components/props/state/challenges/StateChallenge1.jsx';
import FilterableList from './components/props/state/challenges/StateChallenge2.jsx';
import CounterState from './components/props/state/Counter.jsx';
import CounterSamePos from './components/props/state/CounterSamePos.jsx';
import CounterDiffPos from './components/props/state/CounterDiffPos.jsx';
import TaskApp from './components/props/state/reducer/TaskApp.jsx';
import ContextPage from './components/props/context/withcontext/ContextPage.jsx';
import ProfilePage from './components/props/context/intermediate/ProfilePage.jsx';
function Greeting() {
  return <p>Welcome to this book!</p>;
};



function App() {
  
//   const user = {name: 'Max', age: 29};
// const {name, age} = user; // <-- object destructuring in action
// console.log(name); // outputs 'Max'
//const person= {name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'};
//const config = { person: person, size: 100, thickness: 2, color: 'black', borderRadius: '10%' };
  return (
     <>
      <Header />
      <main>
        <ProfilePage />
        {/* <ContextPage /> */}
        {/* <TaskApp /> */}
       {/* <CounterSamePos /> */}
       {/* <CounterDiffPos /> */}
        {/* <CounterState /> */}
      {/* <FilterableList /> */}
        {/* <SyncedInputs /> */}
        {/* <PreserveState /> */}
        {/* <Accordion /> */}
        {/* <Redundant /> */}
        {/* <Form /> */}
        {/* <Events /> */}
         {/* <Toolbar /> */}
        {/* <Gallery/> */}
{/* <Profile /> */}
        {/* <GoalList /> */}
        {/* <Profile {...config} /> */}

    
        
      </main>
    </>
    //  <>
    //   <header>
    //     <img src={maxImg} alt="An image of JObs" />
    //     <h1>Steve Jobs</h1>
    //     <p>Apple Inc. co-founder</p>
    //   </header>
    //   <main>
    //     <p>I've Changed the World.</p>
    //     <p>
    //       My full name is Steve Jobs and I am an American entrepreneur,
    //       business magnate, industrial designer, and investor.
    //     </p>
    //     <p>
    //       I am the co-founder, chairman, and CEO of Apple Inc., the chairman and
    //       majority shareholder of Pixar, a member of The Walt Disney Company's
    //       board of directors, as well as top-rated, bestselling online course
    //       instructor.
    //     </p>
    //   </main>
    // </>
  //  <div>
  //     <h2>Hello World!</h2>
  //     <Greeting />
  //   </div>

  )
}

export default App
