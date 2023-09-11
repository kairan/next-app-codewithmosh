import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

type User = {
  id: string;
  name: string;
  email: string;
};

type Props = {
  sortOrder: string;
};
const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();
  const sorted = sort(users).asc([
    sortOrder === "email" ? (u) => u.email : (u) => u.name,
  ]);
  return (
    <>
      {sortOrder}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
