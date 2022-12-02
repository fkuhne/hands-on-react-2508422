import { useState } from "react";

const Support = () => {
  const [count, setCount] = useState(0);
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {
        // this is ugly
        /* {(() => {
        if (count === 0) {
          return "Click to support";
        } else {
          return `Supported ${count} times`;
        }
      })()} */
      }
      {/* this is a little less ugly then: */}
      {count === 0 ? "Click to support" : `Supported ${count} times`}
    </button>
  );
};

export default Support;
