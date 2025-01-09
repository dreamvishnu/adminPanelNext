import React, { useState, useEffect } from "react";
import Request from "../fromSteps/RequestForm";

interface Step4Props {
  data: string | object;  // Expecting either string or object
  onDataChange: (data: string) => void;
}

const Step4: React.FC<Step4Props> = ({ data, onDataChange }) => {
  const [acceptedRequests, setAcceptedRequests] = useState<any[]>([]);

  const handleAcceptRequest = (requestData: any) => {
    const updatedRequests = [...acceptedRequests, requestData];
    setAcceptedRequests(updatedRequests);

    // Check if data is a string and parse it, else use it directly
    const existingData = typeof data === "string" ? JSON.parse(data) : data;
    const updatedData = { ...existingData, acceptedRequests: updatedRequests };
    onDataChange(updatedData); // Pass the updated object directly
  };

  useEffect(() => {
    console.log("Accepted Requests:", acceptedRequests);
  }, [acceptedRequests]);

  return (
    <div>
      <Request onAccept={handleAcceptRequest} />
      <div>
        <ul>
          {acceptedRequests.map((request, index) => (
            <li key={index}>
              {request.name} ({request.type})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Step4;
