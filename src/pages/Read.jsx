import { useEmployeeContext } from "../contexts/employeeContext";

import { Link } from "react-router-dom";
const Read = () => {
  const {
    employee,
    setEmployee,
    setId,
    setName,
    setDate,
    setGender,
    setEmail,
    setAddress,
  } = useEmployeeContext();
  const handleSetValue = (id, name, gender, date, email, address) => {
    setId(id);
    setName(name);
    setDate(date);
    setGender(gender);
    setEmail(email);
    setAddress(address);
  };
    const handleDelete = (id,name) => {
    const newEmployee = employee.filter((item) => item.id !== id);
    window.confirm(`Bạn có chắc muốn xóa nhân viên ${name} không?`) && setEmployee(newEmployee);  
    
    }
  return (
    <>
      <h1 className="text-2xl font-bold text-red-400 text-center mb-5">
        Danh sách nhân viên
      </h1>
      <button className="w-20 px-2 py-0.5 bg-amber-700 rounded-lg text-white hover:text-slate-200 font-bold mb-1 cursor-pointer">
        <Link to="/create"> + Add </Link>
      </button>
      <div className="w-full h-full overflow-auto ">
        <table className="w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Address</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((item) => (
              <tr key={item.id} className="text-center">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{new Date(item.date).toLocaleDateString("vi-VN")}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>
                  <Link
                    onClick={() =>
                      handleSetValue(
                        item.id,
                        item.name,
                        item.gender,
                        item.date,
                        item.email,
                        item.address
                      )
                    }
                    to={`/edit/${item.id}`}
                  >
                    Update
                  </Link>
                </td>
                <td onClick={()=>handleDelete(item.id,item.name)} className="text center">
                  <img
                    className="w-4 cursor-pointer invert inline-block"
                    src="/bin_icon.svg"
                    alt="bin"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Read;
