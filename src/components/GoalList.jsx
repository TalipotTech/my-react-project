import FirstGoal from './FirstGoal.jsx';
import SecondGoal from './SecondGoal.jsx';
import ThirdGoal from './ThirdGoal.jsx';
import GoalItem from './GoalItem.jsx';
function GoalList() {
  const goalData = {title: 'A book', days: 10, id: 'g1'};
  return (
    
    <ul>
      <GoalItem  data={goalData}  >
        I want to ensure, that you get the most out of this book and you learn
        all about React!

  </GoalItem>
      


    
        {/* <GoalItem id="g1"  >Finish the book!</GoalItem>
  <GoalItem id="g2" >Learn all about React!</GoalItem> */}
       {/* <GoalItem id="g1" title="Finish the book!" />
  <GoalItem id="g2" title="Learn all about React!" /> */}
      {/* <GoalItem title='Teach React in a highly-understandable way'>
        I want to ensure, that you get the most out of this book and you learn
        all about React!
      </GoalItem>
      <GoalItem title='Allow you to practice what you learned'>
        Reading and learning is fun and helpful but you only master a topic, if
        you really work with it! That's why I want to prepare many exercises
        that allow you to practice what you learned.
      </GoalItem>
      <GoalItem title='Motivate you to continue learning'>
        As a developer, learning never ends. I want to ensure that you enjoy
        learning and you're motivated to dive into advanced (React) resources
        after finishing this book. Maybe my complete React video course?
      </GoalItem> */}
    </ul>
    // <ul>
    //   <FirstGoal />
    //   <SecondGoal />
    //   <ThirdGoal />
    // </ul>
  );
}
export default GoalList;