const User = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <h1>User: {id}</h1>;
};

export default User;
