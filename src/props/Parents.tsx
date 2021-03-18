import { ChildAsFC } from "./Child";

const Parents = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("on Click")}>
      SFDSFGAS
    </ChildAsFC>
  );
};

export default Parents;
