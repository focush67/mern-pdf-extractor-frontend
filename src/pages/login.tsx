import { SignIn, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    navigate("/dashboard");
  }
  return (
    <div className="flex gap-x-3 items-center justify-center mt-auto bg-gray-200 h-screen">
      <SignIn />
    </div>
  );
};

export default LoginForm;
