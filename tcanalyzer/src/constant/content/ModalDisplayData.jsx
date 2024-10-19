import React from "react";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";

const ModalDisplayData = ({ modalData, result }) => {
  return (
    <div>
      <AlertDialog.Root>
        {/* Trigger the Modal */}
        <AlertDialog.Trigger asChild>
          <Button
            onClick={modalData}
            style={{
              backgroundColor: "#0D1520",
              cursor: "pointer",
              padding: "1rem",
            }}
          >
            Click To Analyze The Complexity
          </Button>
        </AlertDialog.Trigger>

        {/* Modal Content */}
        <AlertDialog.Content maxWidth="650px" height="30rem">
          <AlertDialog.Title
            style={{
              fontFamily: "sans-serif",
              fontSize: "2rem",
              fontWeight: "bolder",
            }}
          >
            {/* Time Complexity Analysis */}
          </AlertDialog.Title>

          <AlertDialog.Description
            size="2"
            style={{
              color: "black",
              fontFamily: "sans-serif",
              fontSize: "1.5rem",
              fontWeight: "bolder",
            }}
          >
            {result || "No result available"} {/* Ensure result displays */}
          </AlertDialog.Description>

          {/* Close Button */}
          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="red">
                Close
              </Button>
            </AlertDialog.Cancel>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  );
};

export default ModalDisplayData;
