function GoalItem(props) {
  return (
    //<li>{title} (ID: {id})</li>
    // <li>{props.title} (ID: {props.id})</li>
    <li>{props.children} (ID: {props.id})</li>
    // <li>
    //   <article>
    //     <h2>{props.title}</h2>
    //     <p>{props.children}</p>
    //   </article>
    // </li>
    
  );
}

export default GoalItem;