import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import maxImg from './assets/jobs.jpg';
import GoalList from './components/GoalList.jsx';
import Header from './components/Header.jsx';
function Greeting() {
  return <p>Welcome to this book!</p>;
};

function App() {
  
//   const user = {name: 'Max', age: 29};
// const {name, age} = user; // <-- object destructuring in action
// console.log(name); // outputs 'Max'
  return (
     <>
      <Header />
      <main>
        <GoalList />
        
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
