"use client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface RegForm {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const [seePassword, setSeePassword] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const [regForm, setRegForm] = useState<RegForm>({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const clearForm = () => {
    setRegForm({
      name: "",
      email: "",
      password: "",
    });
  };

  const changeHandler = (field: string, value: string) => {
    setRegForm({ ...regForm, [field]: value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regForm),
      });

      const json = await response.json();

      console.log(json);

      if (response.ok) {
        toast.success(json.message, {
          position: "top-left",
        });
        clearForm();
        setLoading(false);
        router.push("/login");
      } else {
        toast.error(json.error, {
          position: "top-left",
        });
        clearForm();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Register">
      <div className="grid place-items-center h-screen bg-cream">
        <div className="bg-white shadow-lg p-5 min-w-[60%] border-t-4 border-harvest_gold">
          <div className="flex flex-row">
            <button
              onClick={() => {
                router.push("/");
              }}
              className="text-4xl text-harvest_gold hover:text-harvest_gold-300
          "
            >
              <MdKeyboardArrowLeft />
            </button>
            <h1 className="text-xl font-bold my-4 text-center">Register</h1>
          </div>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name"
              className="input-md"
              data-testid=""
              value={regForm.name}
              onChange={(e) => {
                changeHandler("name", e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Email"
              className="input-md"
              data-testid=""
              value={regForm.email}
              onChange={(e) => {
                changeHandler("email", e.target.value);
              }}
            />
            <input
              type={seePassword ? "text" : "password"}
              placeholder="Password"
              className="input-md"
              data-testid=""
              value={regForm.password}
              onChange={(e) => {
                changeHandler("password", e.target.value);
              }}
            />
            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                className="checkbox checkbox-xs mr-2"
                onClick={() => {
                  setSeePassword(!seePassword);
                }}
              />{" "}
              Show Password
            </div>
            <button
              onClick={() => {
                // setLoading(true);
              }}
              className="btn bg-harvest_gold text-black font-bold cursor-pointer py-2 hover:bg-harvest_gold-300  w-full rounded-none"
              data-testid=""
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                "Register"
              )}
            </button>
            <Link className="text-sm mt-3 text-center" href={"/login"}>
              {"Already have an account?"}{" "}
              <span className="text-cerulean">Login</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
