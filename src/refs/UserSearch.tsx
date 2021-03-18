import { useState, useRef, useEffect } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 43 },
  { name: "Mark", age: 12 },
  { name: "Melody", age: 33 },
  { name: "John", age: 22 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase();
    });

    setUser(foundUser);
  };
  return (
    <div>
      <h2>User Search</h2>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Search User</button>
      <div>
        {user ? (
          <h3>
            Name : {user.name}---- Age : {user.age}
          </h3>
        ) : (
          <h3>No matches searching</h3>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
