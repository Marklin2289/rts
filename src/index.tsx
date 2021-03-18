import ReactDOM from "react-dom";
import EventComponent from "./events/eventComponent";
import GuestList from "./state/GuestList";
import UserSearch from "./refs/UserSearch";

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
