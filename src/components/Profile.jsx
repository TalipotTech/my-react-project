import { getImageUrl } from './utils.js';
import Avatar from './Avatar.jsx';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

/*
//Forwarding props with the JSX spread syntax 
function Avatar({ person, size,thickness = 2 ,color = 'black',borderRadius = '10%' }) {
  return (
    <>
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
        style={{
            border: `${thickness}px solid ${color}`,
            borderRadius: borderRadius,
        }}
    />
    <h5>{person.name}</h5>
    </>
  );
}

export default function Profile(props) {
  return (
    <div className='card'>
      <Avatar {...props } />
    //    The above line is equivalent to passing each prop individually like this:
    //   <Avatar
    //     person={person}
    //     size={size}
    //     thickness={thickness}
    //     color={color}
    //     borderRadius={borderRadius}
    //   />
      
      
    </div>
  );
}
*/


/*
//Forwarding props without the JSX spread syntax 
function Avatar({ person, size,thickness = 2 ,color = 'black',borderRadius = '10%' }) {
  return (
    <>
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
        style={{
            border: `${thickness}px solid ${color}`,
            borderRadius: borderRadius,
        }}
    />
    <h5>{person.name}</h5>
    </>
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
        thickness={3}
        color="blue"
        borderRadius="50%"
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}
*/
/*
function Avatar({ person, size }) {
  return (
    <>
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
    <h5>{person.name}</h5>
    </>
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

*/
// function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/1bX5QH6.jpg"
//       alt="Lin Lanying"
//       width={100}
//       height={100}
//     />
//   );
// }


// export default function Profile() {
//   return (
//     <Avatar />
//   );
// }