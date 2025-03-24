export default function People({ people }) {
    console.log(people);
  const { name, email } = people;
  return (
    <div className="box">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
    </div>
  );
}
