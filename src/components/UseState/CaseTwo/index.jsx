// import {Button} from './Button'

import { useState } from 'react';

const UseStateStudyCaseTwo = () => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 3);
  }

  // return (
  //   <>
  //     <Button count={counter} triggerFunction={handleClick} />
  //     <Button count={counter} triggerFunction={handleClick} />
  //     <Button count={counter} triggerFunction={handleClick} />
  //   </>
  // );

  return (
    <>
      <button onClick={handleClick}>Clicked {counter} times</button>
      <button onClick={handleClick}>Clicked {counter} times</button>
      <button onClick={handleClick}>Clicked {counter} times</button>
    </>
  );
};

export { UseStateStudyCaseTwo };
