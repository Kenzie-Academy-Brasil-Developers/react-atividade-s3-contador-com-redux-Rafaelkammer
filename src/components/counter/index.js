import { useDispatch, useSelector } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/counter/actions";

const Counter = () => {
  const result = useSelector((store) => store.result);
  const dispatch = useDispatch();
  return (
    <>
      <p>{result}</p>
      <div>
        <button onClick={() => dispatch(addNumber(1))}>+</button>
        <button onClick={() => dispatch(subNumber(1))}>-</button>
      </div>
    </>
  );
};

export default Counter;
