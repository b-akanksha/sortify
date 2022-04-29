import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/actions";

const Algorithm = () => {
  const { algorithm, sortingArray } = useSelector((state) => state.sort);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className="algorithm-div">
      {sortingArray.length === 0 ? (
        <p>
          Enter the input array or click on generate button to create a random
          array.{" "}
        </p>
      ) : null}
    </div>
  );
};

export default Algorithm;
