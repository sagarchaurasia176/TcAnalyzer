import React from "react";
import { AlertDialog, Button, Spinner } from "@radix-ui/themes";
import { CiLocationArrow1 } from "react-icons/ci";

const ModalDisplayData = ({ modalData, result, loading }) => {
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
              padding: "2rem",
              borderRadius: "2rem",
            }}
          >
            Click To Analyze
            <span className="flex items-center text-2xl animate-bounce">
              <CiLocationArrow1 />
            </span>
          </Button>
        </AlertDialog.Trigger>

        {/* Modal Content */}
        <AlertDialog.Content
          style={{
            backgroundColor: "white", // Background color of the content
            color: "black", // Text color inside the content
            borderColor: "gray", // Border color for the content
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for depth effect
            padding: "1.5rem", // Padding inside the content
            borderRadius: "10px", // Rounded corners for the dialog

            // Set responsive width and max-width
            width: "90%", // Take up most of the screen width on small screens
            maxWidth: "600px", // Limit to 600px on larger screens
            margin: "0 auto", // Center the modal

            // Responsive design using media queries
            "@media (max-width: 768px)": {
              fontSize: "1rem", // Smaller font on mobile
              padding: "1rem", // Less padding on mobile
            },
          }}
        >
          <AlertDialog.Title
            style={{
              fontFamily: "sans-serif",
              fontSize: "1rem",
              color:"red",
              borderBottom:"2px solid blue",
              marginBottom: "1rem",
              textAlign: "center", // Center the title text
            }}
          >
            Time Complexity Analysis
          </AlertDialog.Title>

          <AlertDialog.Description
            size="2"
            style={{
              textTransform: "capitalize",
              color: "black",
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              wordSpacing: "4px",
              fontFamily: "sans-serif",
            }}
          >
            {loading ? (
              <Spinner className="size-32 m-auto flex justify-center" />
            ) : (
              <p>{result}</p>
            )}
          </AlertDialog.Description>

          <br />

          <AlertDialog.Cancel>
            <Button
              variant="soft"
              style={{
                borderRadius: "12px",
                cursor: "pointer",
                padding: "1rem",
                width: "100%", // Full width for mobile devices
              }}
              color="gray"
            >
              Close
            </Button>
          </AlertDialog.Cancel>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  );
};

export default ModalDisplayData;
