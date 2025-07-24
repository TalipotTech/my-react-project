function GoalItem(props) {//props will be an object containing data passed from GoalList
  // const { title, id } = props; // destructuring props
  return (
 <li>
      <article>
        <h2>{props.data.title}</h2>
        <h2>{props.data.days} days</h2>
        <h2>{props.data.id}</h2>
        <p>{props.children}</p>
      </article>
    </li>

    //<li>{title} (ID: {id})</li>
    // <li>{props.title} (ID: {props.id})</li>
    // <li>{props.children} (ID: {props.id})</li>
    // <li>
    //   <article>
    //     <h2>{props.title}</h2>
    //     <p>{props.children}</p>
    //   </article>
    // </li>
    
  );
}

export default GoalItem;