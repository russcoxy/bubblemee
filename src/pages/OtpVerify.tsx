import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as { email?: string })?.email || "your@email.com";

  return (
    <AuthLayout showTerms={false}>
      <h1 className="mb-2 text-center text-3xl font-bold">Enter Code</h1>
      <p className="mb-1 text-center text-muted-foreground">We sent a 6-digit code to</p>
      <p className="mb-8 text-center font-semibold">{email}</p>

      <div className="flex justify-center mb-8">
        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
          <InputOTPGroup className="gap-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <InputOTPSlot
                key={i}
                index={i}
                className="h-14 w-12 rounded-xl border-0 bg-muted text-lg"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>

      <Button
        onClick={() => navigate("/home")}
        className="h-14 w-full rounded-2xl bg-primary text-lg font-semibold text-primary-foreground hover:bg-primary/90"
        disabled={otp.length < 6}
      >
        Verify
      </Button>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        Didn't receive a code?{" "}
        <button className="font-semibold text-accent">Resend</button>
      </p>

      <button
        onClick={() => navigate(-1)}
        className="mt-4 block w-full text-center text-sm text-muted-foreground"
      >
        ← Back
      </button>
    </AuthLayout>
  );
};

export default OtpVerify;
