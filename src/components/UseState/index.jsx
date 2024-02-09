import {useState} from 'react';

const UseStateStudyCaseOne = () => {

  const [counter, setCounter] = useState(0); // Hooks have to be ever in top
  
  let increment = 1;

  function handleClick() {
    setCounter (
      counter + (increment * 4)/2 //Only can pass 1 expression
    );
  }
  
  return ( 
    <>
      <button onClick={handleClick}>
        Clicked {counter} times
      </button>
    </>
  );
}

export {UseStateStudyCaseOne};