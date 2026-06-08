import ProfileProvider from "@pages/profile/Provider/ProfileProvider";
import Profile from "@pages/profile/Profile";
const ProfilePage = () => {

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
