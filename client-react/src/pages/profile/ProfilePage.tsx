import avatar from "../../assets/avatar.png";
const ProfilePage = () => {
    
  return (
    <div className="md:ml-20 max-md:my-16 p-10 flex">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="text-xl">@{localStorage.getItem("username")}</div>
    </div>
  );
};

export default ProfilePage;
