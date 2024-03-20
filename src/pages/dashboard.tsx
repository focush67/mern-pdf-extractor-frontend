import AllPDFs from "@/components/others/allPdfs";
import PDFUpload from "@/components/others/pdf-upload";
import { Profile } from "@/components/others/profile-card";
import { usePdfs } from "@/hooks/usePdfs";
import { useUser as useCurrentUser } from "@/hooks/useUser";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { profile } = useCurrentUser();
  const [_, setReload] = useState(false);
  const { pdfs } = usePdfs();
  const { isSignedIn } = useUser();

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex">
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-4">Dashboard!</h1>
        </div>
        <div className="p-8">
          <Profile />
        </div>
      </div>

      <PDFUpload id={profile?.id!} setReload={setReload} />
      <div className="flex flex-col w-full mt-2 items-center">
        <AllPDFs pdfs={pdfs || []} ownerId={profile?.id!} />
      </div>
    </div>
  );
};

export default Dashboard;
