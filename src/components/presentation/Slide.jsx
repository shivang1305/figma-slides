import React from "react";
import { animated, useSpring } from "react-spring";
import { useDrag } from "@use-gesture/react";

const Slide = () => {
  const [{ x, y, width, height }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    width: 200,
    height: 200,
  }));

  const bind = useDrag((state) => {
    window.movement = state.movement;
    window.offset = state.offset;

    api.set(
      {
        x: state.offset[0],
        y: state.offset[1],
      },
      {
        from: () => {
          return [x.get(), y.get()];
        },
        bounds: () => {
          return {
            top: 0,
            left: 0,
          };
        },
      }
    );
  });

  return (
    <div className="flex justify-center items-center shadow-md rounded-lg min-h-[780px] m-6 bg-white">
      <animated.div
        style={{ x, y, width, height }}
        className="border-dashed border-black border absolute touch-none cursor-nwse-resize z-10"
        {...bind()}
      >
        <div className="cursor-move h-full w-full p-2 m-2">Enter the Text</div>
      </animated.div>
    </div>
  );
};

export default Slide;
