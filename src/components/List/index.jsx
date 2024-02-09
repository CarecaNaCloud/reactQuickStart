const products = [
  { title: 'Carbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 }
];

const List = () => {
  return (
    <>
      {products.map((product) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </>
  );
};

export { List };
