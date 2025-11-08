import { Button, Input } from "@heroui/react";
import login from "../../assets/images/login.jpg";
const Login = () => {
  return (
    <div className="body-of-login flex flex-row h-screen items-center justify-center gap-20 bg-[#F5F7FF]">
      {/* Image Section */}
      <div className="image-section w-1/2">
        <img src={login} className="h-screen" alt="" />
      </div>

      {/* form section */}
      <div className="form-section w-1/2 flex flex-col items-start pr-[200px]">
        <h2 className="font-bold text-[33px] text-[#122C93]">Login</h2>

        <h2 className="font-semibold text-[20px] mt-20 text-[#122C93]">
          Username
        </h2>
        <Input
          variant="bordered"
          type="text"
          label="Username"
          className="mt-5"
        ></Input>
        <h2 className="font-semibold text-[20px] mt-5 text-[#122C93]">
          Password
        </h2>
        <Input
          variant="bordered"
          type="password"
          label="Password"
          className="mt-5"
        ></Input>
        <h2 className="text-[#122C93] text-[15px] font-light mt-5">
          Lupa Password ?{" "}
        </h2>
        <Button
          variant="solid"
          color="primary"
          size="lg"
          className="mt-10 w-full font-semibold bg-[#122C93]"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
