import React from "react";

interface Step5Props {
  data: string;
  onDataChange: (data: string) => void;
}

const Step5: React.FC<Step5Props> = ({ data, onDataChange }) => {
  return (
    <div>
      <label>Step 5 Input:</label>
      <input
        type="text"
        value={data || ""}
        onChange={(e) => onDataChange(e.target.value)}
      />
    </div>
  );
};

export default Step5;
