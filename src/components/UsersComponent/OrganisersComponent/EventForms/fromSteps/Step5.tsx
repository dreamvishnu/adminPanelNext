import React from "react";
import EventDetails from "./EventDetails";

interface Step5Props {
  data: Record<string, any>;
  onDataChange: (data: Record<string, any>) => void;
}

const Step5: React.FC<Step5Props> = ({ data }) => {
  const acceptedRequests = data["Step4"]?.acceptedRequests || []; // Directly access if it's already an array
  console.log(acceptedRequests);

  const transformedData = JSON.stringify({
    name: data["Step1"]?.eventName || "Unknown Event",
    eventType: data["Step1"]?.eventCategory || "N/A",
    date: data["Step1"]?.startDate || "N/A",
    startTime: data["Step1"]?.startTime || "N/A",
    endTime: data["Step1"]?.endTime || "N/A",
    venueLocation: data["Step1"]?.location || "N/A",
    description: data["Step1"]?.description || "No description available.",
    bannerImage: data["Step2"]?.bannerImage || "",
    price: data["Step3"]?.eventType === "Free Event" ? "Free" : data["Step3"]?.ticketPrice || "N/A",
    
    // Find speaker, sponsor, venue, and food from acceptedRequests
    speakerName: acceptedRequests.find((req: any) => req.type === "Speakers")?.name || "Unknown Speaker",
    speakerImage: acceptedRequests.find((req: any) => req.type === "Speakers")?.image || "",
    
    sponsorName: acceptedRequests.find((req: any) => req.type === "Sponsors")?.name || "Unknown Sponsor",
    sponsorImage: acceptedRequests.find((req: any) => req.type === "Sponsors")?.image || "",
    
    venueName: acceptedRequests.find((req: any) => req.type === "Venue")?.name || "Unknown Venue",
    venueImage: acceptedRequests.find((req: any) => req.type === "Venue")?.image || "",
    
    foodName: acceptedRequests.find((req: any) => req.type === "Food")?.name || "Unknown Food",
    foodImage: acceptedRequests.find((req: any) => req.type === "Food")?.image || "",
  });

  return (
    <div>
      <EventDetails data={transformedData} onDataChange={() => {}} />
    </div>
  );
};

export default Step5;
