import React, { useRef } from "react";
import { animated, useSpring } from "react-spring";
import { useDrag } from "@use-gesture/react";

const Slide = () => {
  const containerRef = useRef(null);
  const dragElement = useRef(null);

  const [{ x, y, width, height }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    width: 200,
    height: 200,
  }));

  const bind = useDrag(
    (state) => {
      const isResizing = state?.event.target === dragElement.current;

      if (isResizing) {
        api.set({
          width: state.offset[0],
          height: state.offset[1],
        });
      } else {
        api.set({
          x: state.offset[0],
          y: state.offset[1],
        });
      }
    },
    {
      from: (event) => {
        const isResizing = event.target === dragElement.current;

        if (isResizing) {
          return [width.get(), height.get()];
        } else return [x.get(), y.get()];
      },
      bounds: (state) => {
        const isResizing = state?.event.target === dragElement.current;

        const containerWidth = containerRef.current?.clientWidth ?? 0;
        const containerHeight = containerRef.current?.clientHeight ?? 0;

        if (isResizing) {
          return {
            top: 70,
            left: 80,
            right: containerWidth - x.get(),
            bottom: containerHeight - y.get(),
          };
        } else {
          return {
            top: 0,
            left: 0,
            right: containerWidth - width.get(),
            bottom: containerHeight - height.get(),
          };
        }
      },
    }
  );

  return (
    <div
      ref={containerRef}
      className="flex shadow-md rounded-lg min-h-[780px] m-6 bg-white"
    >
      <animated.div
        style={{ x, y, width, height }}
        ref={dragElement}
        className="border-dashed border-black border absolute touch-none cursor-nwse-resize z-10"
        {...bind()}
      >
        <div className="cursor-move h-full w-full p-2 m-2">Enter the Text</div>
      </animated.div>
    </div>
  );
};

export default Slide;
