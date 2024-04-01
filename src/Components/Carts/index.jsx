import React from "react";
import CarsStyle from "./CarsStyle";

function Carts() {
  const data = [
    {
      name: "Basic",
      status: false,
      distance: "Monthly",
      increase: "Increase traffic 130%",
      secondp: "Backlink analysis",
      thirdp: "Organic traffic 215%",
      fourth: "10 Free Optimization",
      fiveth: "24/7 support",
      button: false,
    },
    {
      name: "Standard",
      status: true,
      bacground:
        "https://preview.uideck.com/items/appland/assets/images/price-shape.png",
      distance: "Monthly",
      increase: "Increase traffic 130%",
      secondp: "Backlink analysis",
      thirdp: "Organic traffic 215%",
      fourth: "10 Free Optimization",
      fiveth: "24/7 support",
      button: true,
    },
    {
      name: "Professional",
      status: false,
      distance: "Monthly",
      increase: "Increase traffic 130%",
      secondp: "Backlink analysis",
      thirdp: "Organic traffic 215%",
      fourth: "10 Free Optimization",
      fiveth: "24/7 support",
      button: false,
    },
  ];
  return (
    <div>
      <div className="grid justify-center text-center gap-4 mt-10">
        <p className="text-[35px] font-bold text-[#38424d]"> Choose a Plan.</p>
        <p className="text-center">
          Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor
          comprehensam at vis. <br /> Vel ut percipitur dignissim signiferumque.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 xl:w-[70%] md:w-[54%] lg:w-[90%] m-auto lg:grid-cols-3">
        {data.map((elem, ind) => (
          <CarsStyle
            key={ind + 1}
            name={elem.name}
            status={elem.status}
            bacground={elem.bacground}
            distance={elem.distance}
            increase={elem.increase}
            secondp={elem.secondp}
            thirdp={elem.thirdp}
            fourth={elem.fourth}
            fiveth={elem.fiveth}
            button={elem.button}
          />
        ))}
      </div>
    </div>
  );
}

export default Carts;
