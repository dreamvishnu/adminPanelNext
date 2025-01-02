import React, { useState } from "react";
import Step1 from "./fromSteps/Step1";
import Step2 from "./fromSteps/Step2";
import Step3 from "./fromSteps/Step3";
import Step4 from "./fromSteps/Step4";
import Step5 from "./fromSteps/Step5";
import styles from "../../OrganisersStyles/EventFormsStyles/ProgressBar.module.scss";

interface ProgressBarProps {
  steps: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({}); // Holds data from all steps

  // Handle navigation
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Final Form Data:", formData);
    setFormData({}); // Reset the formData after submission
    setCurrentStep(0); // Reset to the first step
  };

  const handleStepData = (stepName: string, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [stepName]: data,
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return  <Step1
        data={formData["Step1"] || {}} // Dynamically pass an empty object if undefined
        onDataChange={(data) => handleStepData("Step1", data)}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />;
      case 1:
        return <Step2 data={formData["Step2"]} onDataChange={(data) => handleStepData("Step2", data)} />;
      case 2:
        return <Step3 data={formData["Step3"]} onDataChange={(data) => handleStepData("Step3", data)} />;
      case 3:
        return <Step4 data={formData["Step4"]} onDataChange={(data) => handleStepData("Step4", data)} />;
      case 4:
        return <Step5 data={formData["Step5"]} onDataChange={(data) => handleStepData("Step5", data)} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.progressBar}>
      <h2 className={styles.title}>Create a New Event</h2>
      <div className={styles.barContainer}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${styles.step} ${index <= currentStep ? styles.active : ""}`}
          >
            <div className={styles.marker}>
              <div className={styles.circle}></div>
              {index < steps.length - 1 && <div className={styles.line}></div>}
            </div>
            <span className={styles.label}>{step}</span>
          </div>
        ))}
      </div>

      <div className={styles.stepContent}>{renderStep()}</div>

      <div className={styles.stepbuttons}>
        <button onClick={handlePrevious} disabled={currentStep === 0} className={styles.StepButton}>
          Previous
        </button>
        {currentStep === steps.length - 1 ? (
          <button onClick={handleSubmit} className={styles.StepButton}>Submit</button>
        ) : (
          <button onClick={handleNext} className={styles.StepButton}>Next</button>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
