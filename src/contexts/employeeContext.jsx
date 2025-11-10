import { useState, createContext, useContext } from "react";
import { data } from "../data/data.js";

const EmployeeContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [employee, setEmployee] = useState(data);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const value = {
    employee,
    setEmployee,
    id,
    setId,
    name,
    setName,
    date,
    setDate,
    gender,
    setGender,
    email,
    setEmail,
    address,
    setAddress,
  };
  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => useContext(EmployeeContext);
