// import { SignInButton, SignUpButton } from "@clerk/clerk-react";
// import backgroundImage from "./leave8.jpg"; // Import the image

// export default function Home() {
//   return (
//     <div
//       className="flex flex-col items-center justify-center min-h-screen text-white bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${backgroundImage})`, // Use the imported image
//       }}
//     >
//       <div className="text-center bg-white bg-opacity-25 backdrop-blur-md p-8 rounded-lg shadow-lg">
//         {/* Title */}
//         <h1 className="text-5xl font-bold mb-6 text-red-600">
//           Welcome to Stream Time
//         </h1>
//         <p className="text-lg text-black mb-10">
//           Upload, manage, and stream your videos seamlessly with our secure and
//           fast platform.
//         </p>

//         {/* Sign In and Sign Up Buttons */}
//         <div className="flex space-x-4">
//           <SignInButton>
//             <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
//               Sign In
//             </button>
//           </SignInButton>
//           <SignUpButton>
//             <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
//               Sign Up
//             </button>
//           </SignUpButton>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="mt-12 text-sm text-gray-900">
//         <p>
//           &copy; {new Date().getFullYear()} Stream Time. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }

import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import backgroundImage from "./leave8.jpg"; // Import the image
import { useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline"; // Updated Heroicon for clipboard in v2

export default function Home() {
  // State for managing the copied status
  const [copied, setCopied] = useState("");
  const [copiedField, setCopiedField] = useState(""); // To track which field was copied

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(text); // Show the copied text for feedback
    setCopiedField(field); // Show which field was copied
    setTimeout(() => {
      setCopied(""); // Reset after 2 seconds
      setCopiedField(""); // Reset the copied field
    }, 2000); // Reset after 2 seconds
  };

  const demoEmail = "demo.abdullah.dev@gmail.com";
  const demoPassword = "demo.abdullah.dev.1027";

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
      }}
    >
      {/* Flex container for centering both cards */}
      <div className="flex flex-col md:flex-row items-center justify-center space-x-10">
        {/* Main Content Card */}
        <div className="text-center bg-white bg-opacity-25 backdrop-blur-md p-8 rounded-lg shadow-lg mb-6 md:mb-0">
          <h1 className="text-5xl font-bold mb-6 text-red-600">
            Welcome to Stream Time
          </h1>
          <p className="text-lg text-black mb-10">
            Upload, manage, and stream your videos seamlessly with our secure
            and fast platform.
          </p>

          {/* Sign In and Sign Up Buttons */}
          <div className="flex space-x-4 mb-8">
            <SignInButton>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </div>

        {/* Demo Account Card */}
        <div className="w-96 p-6 bg-opacity-25 bg-white rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Copy both Credentials and Sign In
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between relative">
              <span className="text-gray-700">Email: </span>
              <span className="text-gray-900">{demoEmail}</span>
              <div className="relative">
                <ClipboardIcon
                  onClick={() => handleCopy(demoEmail, "email")}
                  className="h-5 w-5 text-blue-500 cursor-pointer hover:text-blue-600"
                />
                {copiedField === "email" && (
                  <p className="absolute -top-7 left-1/2 transform -translate-x-1/2 text-green-500 text-xs font-medium bg-white px-1 rounded-md shadow-md">
                    Copied!
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between relative">
              <span className="text-gray-700">Password: </span>
              <span className="text-gray-900">{demoPassword}</span>
              <div className="relative">
                <ClipboardIcon
                  onClick={() => handleCopy(demoPassword, "password")}
                  className="h-5 w-5 text-blue-500 cursor-pointer hover:text-blue-600"
                />
                {copiedField === "password" && (
                  <p className="absolute -top-7 left-1/2 transform -translate-x-1/2 text-green-500 text-xs font-medium bg-white px-1 rounded-md shadow-md">
                    Copied!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-900">
        <p>
          &copy; {new Date().getFullYear()} Stream Time. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
