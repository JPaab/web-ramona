"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

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

  return (
    <>
      <motion.div
        drag
        dragElastic={0.18}
        dragMomentum
        onHoverStart={() => setIsActive(true)}
        onHoverEnd={() => setIsActive(false)}
        onDragStart={() => setIsActive(true)}
        onDragEnd={(_, info) => {
          setIsActive(false);
          setPosition({
            x: initialX + info.offset.x,
            y: initialY + info.offset.y,
          });
        }}
        onDrag={(_, info) => {
          setPosition({
            x: initialX + info.offset.x,
            y: initialY + info.offset.y,
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
                ? "/images/stickers/no-es-la-tipica-active.png"
                : "/images/stickers/no-es-la-tipica-normal.png"
            }
            alt="No es la típica"
            width={230}
            height={90}
            priority
            draggable={false}
            className="pointer-events-none h-auto w-full"
          />
        </div>
      </motion.div>

      {showPosition ? (
        <div className="absolute bottom-3 left-3 z-30 rounded-md bg-black/75 px-2 py-1 text-xs text-white">
          x: {Math.round(position.x)} | y: {Math.round(position.y)}
        </div>
      ) : null}
    </>
  );
}
