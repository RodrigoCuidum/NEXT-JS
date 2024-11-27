// "use client";

import Link from "next/link";

function users({ users }) {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <li
              key={user.id}
              className="bg-pink-600 text-black mb-2 p-4 flex rounded-xl justify-between"
            >
              <div>
                <h5 className="font-bold">
                  {user.id}. {user.first_name} {user.last_name}
                </h5>
                <p className="">email: {user.email}</p>
              </div>
              <img src={user.avatar} className="rounded-full w-20" />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default users;
