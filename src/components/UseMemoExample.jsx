import { useRef, useEffect, useState, useMemo } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  //const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        onChange={(e) => setNumber(e.target.value)}
        type="number"
        value={number}
        className="form-control w-25"
      />
      <button className="btn btn-primary" onClick={onClick}>
        Re Render
      </button>
      <h2 className="my-2">
        The aqrt of {number} is {sqrt}
      </h2>
      <h1>Count: {inc}</h1>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
}

function getSqrt(n) {
  for (let i = 1; i <= 10000; i++) {
    console.log(i);
  }
  return Math.sqrt(n);
}

export default UseMemoExample;
