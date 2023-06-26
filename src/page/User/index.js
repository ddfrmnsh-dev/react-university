import React, { useState } from "react";
import User from "../../models/User";

export default function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isFieldError, setIsFieldError] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-br from-sky-300 to-blue-400 min-h-screen">
        <div className="max-w-7xl mx-auto p-6 lg:p-8 text-white text-center">
          <p>hahahahhaha</p>
        </div>
        <div className=" mt-16">
          <div className="grid grid-cols-1 gap-2 justify-center justify-items-center">
            <div className="bg-slate-400 w-72 rounded-md">
              <div className="my-2 mx-2">
                <div>
                  <label
                    htmlFor="input"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    error={isFieldError && !name}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="input"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email:
                  </label>
                  <input
                    value={email}
                    error={isFieldError && !email}
                    placeholder={"Email"}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="input"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password:
                  </label>
                  <input
                    placeholder={"Password"}
                    error={isFieldError && !password}
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="mt-3">
                  <button
                    className="bg-white p-2 rounded"
                    onClick={async () => {
                      setError(null);
                      setIsFieldError(false);
                      if (!name) {
                        return setError("Nama harus diisi");
                      }
                      if (!email) {
                        return setError("Email harus diisi");
                      }
                      if (!password) {
                        return setError("Password harus diisi");
                      } else {
                        try {
                          const res = await User.userRegister({
                            name,
                            email,
                            password,
                          });
                          console.log(res);
                        } catch (e) {
                          setError(e.message);
                          console.log(e);
                        }
                      }
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
