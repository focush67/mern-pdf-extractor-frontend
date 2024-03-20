import { SignUp, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  if (isSignedIn) {
    navigate("/dashboard");
    return;
  }
  return (
    <div className="flex gap-x-3 items-center justify-center mt-auto bg-gray-200 h-screen">
      <SignUp afterSignInUrl={"/dashboard"} />
    </div>
  );
};

export default RegisterForm;
