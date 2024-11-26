import Users from "@/components/users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function homePage() {
  const users = await fetchUsers();
  return <Users users={users} />;
}

export default homePage;
