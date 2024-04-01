import React from "react";

function CarsStyle({
  name,
  status,
  bacground,
  distance,
  increase,
  secondp,
  thirdp,
  fourth,
  fiveth,
  button,
}) {
  return (
    <div>
      <div
        className={`border backgorund-[${bacground}] p-5 shadow-[0_0_11px_0_rgba(154,154,154,.16)] text-center mt-14`}
      >
        <div>
          <p className="text-[25px] text-[#38424d] text-center">{name}</p>
        </div>
        <div className="mt-6">
          <p
            className={` font-semibold ${
              status ? "text-[#0898e7]" : "text-[#38424d]"
            } text-[35px] text-center`}
          >
            {status ? "$99" : "$49"}
          </p>
          <p className="text-[18px] mt-2">{distance}</p>
        </div>
        <div className="grid gap-4 text-[#747e88] mt-10">
          <p>{increase}</p> <p>{secondp}</p> <p>{thirdp}</p> <p>{fourth}</p>
          <p>{fiveth}</p>
        </div>
        <button
          className={` font-semibold px-8 py-4 mt-10 rounded ${
            button ? "bg-[#0898e7] text-white" : "border-[1px] border-black"
          } text-[px] text-center`}
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
}

export default CarsStyle;
