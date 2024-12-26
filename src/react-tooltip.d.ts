declare module "react-tooltip" {
    import React from "react";
  
    const ReactTooltip: React.ComponentType<{
      place?: string;
      type?: string;
      effect?: string;
      className?: string;
      id?: string;
      getContent?: () => React.ReactNode;
    }>;
  
    export default ReactTooltip;
  }
  