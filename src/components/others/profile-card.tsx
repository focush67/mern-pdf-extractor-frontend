import { UserButton } from "@clerk/clerk-react";
export function Profile() {
  return <UserButton afterSignOutUrl="/login" />;
}
