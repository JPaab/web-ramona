"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useRef, useState } from "react";

type DraggableStickerProps = {
  className?: string;
  initialX?: number;
  initialY?: number;
  showPosition?: boolean;
};

export default function DraggableSticker({
  className = "",
  initialX = 0,
  initialY = 0,
  showPosition = false,
}: DraggableStickerProps) {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  const dragStartPositionRef = useRef({ x: initialX, y: initialY });

  return (
    <>
      <motion.div
        drag
        dragElastic={0}
        dragMomentum={false}
        onHoverStart={() => setIsActive(true)}
        onHoverEnd={() => setIsActive(false)}
        onDragStart={() => {
          setIsActive(true);
          dragStartPositionRef.current = position;
        }}
        onDrag={(_, info) => {
          setPosition({
            x: dragStartPositionRef.current.x + info.offset.x,
            y: dragStartPositionRef.current.y + info.offset.y,
          });
        }}
        onDragEnd={(_, info) => {
          setIsActive(false);
          setPosition({
            x: dragStartPositionRef.current.x + info.offset.x,
            y: dragStartPositionRef.current.y + info.offset.y,
          });
        }}
        className={`absolute z-20 cursor-grab active:cursor-grabbing ${className}`}
        style={{
          x: position.x,
          y: position.y,
          touchAction: "none",
        }}
      >
        <div className="relative w-[230px] select-none">
          <Image
            src={
              isActive
                ? "/images/logo/sticker_hover.svg"
                : "/images/logo/sticker.svg"
            }
            alt="Sticker La Ramona"
            width={230}
            height={90}
            draggable={false}
            className="pointer-events-none h-auto w-full"
          />
        </div>
      </motion.div>

      {showPosition ? (
        <div className="absolute left-3 top-3 z-50 rounded-md bg-black/80 px-3 py-2 text-xs text-white">
          x: {Math.round(position.x)} | y: {Math.round(position.y)}
        </div>
      ) : null}
    </>
  );
}
