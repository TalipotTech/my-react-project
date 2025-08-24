import { useContext } from 'react';
import { LevelContext } from './LevelContext.jsx';
export default function Section({  children }) { //({level,children})
   const level = useContext(LevelContext);
  return (
    <section className="section">
     {/* <LevelContext value={level}> */}
       <LevelContext value={level + 1}>
        {children}
      </LevelContext>
    </section>
  );
}