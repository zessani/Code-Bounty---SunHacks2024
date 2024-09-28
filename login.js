"use client"; // Add this line

import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailForReset, setEmailForReset] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleLogin = () => {
    alert(`Logging in with username: ${username} and password: ${password}`);
    // Here you can implement the actual login functionality
  };

  const handleGoogleLogin = () => {
    alert("Logging in with Google");
    // Implement Google Login API integration
  };

  const handleForgotPassword = () => {
    // Send OTP to email
    alert(`Sending OTP to ${emailForReset}`);
    setIsOtpSent(true);
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Password reset successfully");
      // Call API to reset the password with OTP
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-black p-8 rounded-lg shadow-lg w-96">
        {!isForgotPassword ? (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <input
              type="text"
              placeholder="Username / Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border w-full px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border w-full px-4 py-2 mb-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="bg-blue-500 w-full text-white py-2 rounded-md hover:bg-blue-600 transition-colors mb-4"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="bg-red-500 w-full text-white py-2 rounded-md hover:bg-red-600 transition-colors mb-4"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </button>
            <p
              className="text-sm text-blue-500 cursor-pointer text-center"
              onClick={() => setIsForgotPassword(true)}
            >
              Forgot Password?
            </p>
          </>
        ) : (
          <>
            {!isOtpSent ? (
              <>
                <h1 className="text-2xl font-bold mb-6 text-center">
                  Forgot Password
                </h1>
                <input
                  type="email"
                  placeholder="Email"
                  value={emailForReset}
                  onChange={(e) => setEmailForReset(e.target.value)}
                  className="border w-full px-4 py-2 mb-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  className="bg-blue-500 w-full text-white py-2 rounded-md hover:bg-blue-600 transition-colors mb-4"
                  onClick={handleForgotPassword}
                >
                  Send
                </button>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold mb-6 text-center">
                  Reset Password
                </h1>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="border w-full px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="border w-full px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border w-full px-4 py-2 mb-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  className="bg-blue-500 w-full text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
