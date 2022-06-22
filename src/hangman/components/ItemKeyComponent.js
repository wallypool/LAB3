import { useKeyBoard } from "../hooks/useKeyBoard";
export const ItemKeyComponent = () => {
  const [keyState, setKeyState] = useKeyBoard();
  const handlerClick = (key) => {
    const newState = keyState.map((item) => {
      if (key === item.key) {
        item.state = true;
      }
      return item;
    });
    setKeyState(newState);
  };
  return (
    <>
      {keyState.map(({ key, state }) => (
        <div
          key={key}
          className={state ? "disablediv" : ""}
          onClick={() => {
            handlerClick(key);
          }}
        >
          {key}
        </div>
      ))}
    </>
  );
};
