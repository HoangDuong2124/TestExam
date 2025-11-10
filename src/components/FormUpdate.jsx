import { useNavigate } from "react-router-dom";
import { useEmployeeContext } from "../contexts/employeeContext";

const FormUpdate = ({ title }) => {
    const navigate = useNavigate();
  const {
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
  } = useEmployeeContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployee((prev) =>
      prev.map((emp) =>
        emp.id === id
          ? { id, name, date, gender, email, address }
          : emp
      )
    );
    navigate("/");
    alert("Cập nhật thành công!");
  };
  return (
    <div className="w-full h-full ">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-2xl font-bold text-red-400 text-center mb-5">
            {title}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="id"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="Nhập ID"
                  className="w-full px-4 py-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập họ và tên"
                  className="w-full px-4 py-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* date of Birth */}
              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={date}
                  onChange={(date) => setDate(date.target.value)}
                  className="w-full px-4 py-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* gender */}
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                >
                  <option value="">Chọn giới tính</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* address */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                placeholder="Nhập địa chỉ đầy đủ"
                className="w-full px-4 py-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition transform hover:scale-105 shadow-lg"
            >
              Cập Nhật Thông Tin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormUpdate;
