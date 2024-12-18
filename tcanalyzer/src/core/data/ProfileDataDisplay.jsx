import React, { useContext } from "react";
import { GlobalContext } from "../../Context/AnalyxerContext";
import DialogBox from "../../ui/DialogBox";

const ProfileDataDisplay = () => {
  const { userData } = useContext(GlobalContext);
  return (
    <div className="">
      {userData ? (
        <div className="user-profile  cursor-pointer ">
          <DialogBox userData={userData} />
        </div>
      ) : (
        <>
          <p>error</p>
        </>
      )}
    </div>
  );
};

export default ProfileDataDisplay;
