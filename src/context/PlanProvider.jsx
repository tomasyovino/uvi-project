import { createContext, useContext, useState } from "react";

const PlanContext = createContext();

const PlanProvider = ({ children }) => {
    const [plan, setPlan] = useState("");

    return <PlanContext.Provider
        value={{
            plan,
            setPlan
        }}
    >
        {children}
    </PlanContext.Provider>
};

export const PlanState = () => useContext(PlanContext);
export default PlanProvider;