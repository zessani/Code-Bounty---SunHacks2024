"use client"; // Add this line to ensure it's rendered on the client side

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
    if (!username || !password) {
      alert("Please fill in both username and password.");
      return;
    }
    // TODO: Implement the actual login functionality
    alert(`Logging in with username: ${username}`);
  };

  const handleForgotPassword = () => {
    if (!emailForReset) {
      alert("Please enter your email.");
      return;
    }
    // TODO: Send OTP to email
    alert(`Sending OTP to ${emailForReset}`);
    setIsOtpSent(true);
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }
    // TODO: Call API to reset the password with OTP
    alert("Password reset successfully");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
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
