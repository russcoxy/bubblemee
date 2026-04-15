import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      navigate("/otp", { state: { email } });
    }
  };

  return (
    <AuthLayout>
      <h1 className="mb-2 text-center text-3xl font-bold">Welcome back</h1>
      <p className="mb-8 text-center text-muted-foreground">
        We'll send a code to your email to sign in
      </p>

      <form onSubmit={handleSendCode} className="space-y-6">
        <div className="space-y-2">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 border-0 bg-muted"
          />
        </div>

        <Button
          type="submit"
          className="h-14 w-full rounded-2xl bg-primary text-lg font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Send Code
        </Button>
      </form>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => navigate("/trouble")}
          className="text-sm text-muted-foreground"
        >
          Trouble signing in?
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="text-sm font-semibold text-accent"
        >
          Sign up
        </button>
      </div>

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <span className="text-sm text-muted-foreground">or</span>
        <div className="h-px flex-1 bg-border" />
      </div>
    </AuthLayout>
  );
};

export default Login;
