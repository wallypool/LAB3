import { useKeyBoard } from "../hooks/useKeyBoard";
import { ItemKeyComponent } from "./ItemKeyComponent";
export const KeyBoardComponent = () => {
  const [key, state] = useKeyBoard();
  const handlerClick = () => {};
  return (
    <div className="flex-container">
      <ItemKeyComponent
        key={key}
        myKey={key}
        state={state}
        handlerClick={handlerClick}
      />
    </div>
  );
};
