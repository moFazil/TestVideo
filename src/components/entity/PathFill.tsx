// PathFill.tsx
import React from "react";
import { HexColorPicker } from "react-colorful";

interface PathFillProps {
  onUpdateFill: (color: string) => void;
}

const PathFill: React.FC<PathFillProps> = ({ onUpdateFill }) => {
  return (
    <div>
      <HexColorPicker onChange={onUpdateFill} />
    </div>
  );
};

export default PathFill;
