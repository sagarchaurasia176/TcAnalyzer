import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import React, { useContext } from "react";
import { GlobalContext } from "../Context/AnalyxerContext";

// Dialog box
const DialogBox = ({ userData }) => {
  const { LoogedOut } = useContext(GlobalContext);
  return (
    <div>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button
            style={{
              backgroundColor: "#0D1520",
              cursor: "pointer",
            }}
          >
            <img
              src={userData.profilePicture}
              style={{ width: "40px", borderRadius: "50%" }}
              onError={(e) => {
                e.target.src = userData.profilePicture;
              }}
            />
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Revoke access</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure? This application will no longer be accessible and any
            existing sessions will be expired.
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button onClick={() => LoogedOut()} variant="solid" color="red">
                Log-out
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  );
};

export default DialogBox;
