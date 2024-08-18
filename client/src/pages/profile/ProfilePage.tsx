import { Navigate, useNavigate, useParams } from "react-router-dom";
import ProfileProvider from "./Provider/ProfileProvider";
import Profile from "./Profile";
import { useEffect } from "react";
const ProfilePage = () => {
  const params = useParams();

  return (
    <ProfileProvider>
      <div
        className="w-full content-center flex justify-center"
        children={<Profile />}
      />
    </ProfileProvider>
  );
};

export default ProfilePage;
