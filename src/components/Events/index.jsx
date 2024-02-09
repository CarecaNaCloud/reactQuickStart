const Events = () => {
  function handleClick() {
    alert('Clicked')
  }
  return <>
    <button onClick={handleClick}>Event Handle</button>
  </>;
};

export { Events };
