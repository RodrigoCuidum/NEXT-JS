async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UserPage({ params }) {
  const user = await getUser(params.id);
  return(
    <div className="bg-pink-600 p-6 rounded-xl">
        <img src={user.avatar} className="m-auto my-4 rounded-xl" />
        <h3 className="text-3xl font-bold text-black">{user.id}. {user.first_name} {user.last_name}</h3>
        <p className="text-black">email: {user.email}</p>
    </div>
  )
}

export default UserPage;
