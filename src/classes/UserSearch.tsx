import { Component } from "react";
interface User {
  name: string;
  age: number;
}
interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name.toLowerCase() === this.state.name.toLowerCase();
    });

    this.setState({ user: foundUser });
  };
  render() {
    return (
      <div>
        <h2>User Search</h2>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Search User</button>
        <div>
          {this.state.user ? (
            <h3>
              Name : {this.state.user.name}---- Age : {this.state.user.age}
            </h3>
          ) : (
            <h3>No matches searching</h3>
          )}
        </div>
      </div>
    );
  }
}

export default UserSearch;
