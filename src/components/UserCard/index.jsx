
const user = {
  name: "Heidi Lamar",
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
  isLogged: true,
}


const UserCard = () => {
  return (
    <>
      <h1>{user.name}</h1>

      {/* GETTING DATA */}
      <img src={user.imageUrl} width={user.imageSize} alt={`Profile of ${user.name}`} style={{
        width: 100, 
        height: user.imageSize,
        marginBottom: 10,
        display: 'block'
      }}/>

      { /* CONDITIONAL RENDERING */}
      {user.isLogged && (
        <span style={{
          color: 'green',
          fontSize: '1.5rem',
          marginRight: '5px'
        }}>•</span>
      )}

      {user.isLogged ? (
        <span style={{color: 'green'}}>Online</span>
      ) : (
        <span style={{color: 'red'}}>Offline</span>  
      )}

    </>
  );
};

export { UserCard };
