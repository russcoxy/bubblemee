import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TroubleSigningIn = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <AuthLayout showTerms={false}>
      <h1 className="mb-2 text-center text-3xl font-bold">Trouble signing in?</h1>
      <p className="mb-8 text-center text-muted-foreground">
        Enter the email address you signed up with. We'll send you a link to get back into your account.
      </p>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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

        <Button className="h-14 w-full rounded-2xl bg-primary text-lg font-semibold text-primary-foreground hover:bg-primary/90">
          Send Reset Link
        </Button>
      </form>

      <button
        onClick={() => navigate("/login")}
        className="mt-6 block w-full text-center text-sm text-muted-foreground"
      >
        ← Back to login
      </button>
    </AuthLayout>
  );
};

export default TroubleSigningIn;
