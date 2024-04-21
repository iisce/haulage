import React from "react";
import { Button } from "../ui/button";

export default function TyreButton({ tyre }: any) {
  const [clicked, setClicked] = React.useState(true);
  return (
    <div>
      <Button
        onClick={() => setClicked(!clicked)}
        className={
          clicked
            ? ` text-black hover:text-white h-6 font-semibold text-[12px] px-[20px] bg-white rounded-full cursor-pointer `
            : `text-white bg-black rounded-full cursor-pointer h-6 font-semibold text-[12px] px-[20px]`
        }
      >
        {tyre}
      </Button>
    </div>
  );
}
