import React from "react";

interface Step4Props {
  data: string;
  onDataChange: (data: string) => void;
}

const Step4: React.FC<Step4Props> = ({ data, onDataChange }) => {
  return (
    <div>
      <label>Step 4 Input:</label>
      <input
        type="text"
        value={data || ""}
        onChange={(e) => onDataChange(e.target.value)}
      />
    </div>
  );
};

export default Step4;
