import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import BottomNavigation from "./bottom-navigation";
import BottomControl from "./bottom-control";

const Bottom = () => {
  const controlStateFromStore = useSelector(
    (state: RootState) => state.controlState.value
  );
  return (
    <div>
      {controlStateFromStore === "" || controlStateFromStore === "back" ? 
        <BottomNavigation /> : <BottomControl />
      }
    </div>
  );
};

export default Bottom;
