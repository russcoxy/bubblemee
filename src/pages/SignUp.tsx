import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import ProgressBar from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

type AccountType = "user" | "creator" | null;

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState<AccountType>(null);

  // Basic info
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);

  // Creator profile
  const [pageName, setPageName] = useState("");
  const [creatorUsername, setCreatorUsername] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [agreedCreatorTerms, setAgreedCreatorTerms] = useState(false);
  const [optInUpdates, setOptInUpdates] = useState(false);

  const totalSteps = accountType === "creator" ? 3 : 2;

  const renderStep1 = () => (
    <>
      <h2 className="mb-2 text-center text-xl font-bold">Choose Account Type</h2>
      <p className="mb-6 text-center text-sm text-muted-foreground">
        Select the type of account you want to create
      </p>

      <div className="space-y-4">
        <button
          onClick={() => setAccountType("user")}
          className={`w-full rounded-2xl border-2 p-5 text-left transition-colors ${
            accountType === "user"
              ? "border-accent bg-accent/5"
              : "border-border"
          }`}
        >
          <p className="font-semibold">Regular User</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Browse content, follow creators, and subscribe to memberships
          </p>
        </button>

        <button
          onClick={() => setAccountType("creator")}
          className={`w-full rounded-2xl border-2 p-5 text-left transition-colors ${
            accountType === "creator"
              ? "border-accent bg-accent/5"
              : "border-border"
          }`}
        >
          <p className="font-semibold">Creator</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Upload content, create memberships, and earn money from your audience
          </p>
        </button>
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <h2 className="mb-6 text-center text-xl font-bold">Basic Information</h2>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <Label>Email address <span className="text-destructive">*</span></Label>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 border-0 bg-muted"
          />
        </div>
        <div className="space-y-1.5">
          <Label>Full Name <span className="text-destructive">*</span></Label>
          <Input
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="h-12 border-0 bg-muted"
          />
        </div>
        <div className="space-y-1.5">
          <Label>Username <span className="text-destructive">*</span></Label>
          <Input
            placeholder="Choose a unique username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-12 border-0 bg-muted"
          />
        </div>
        <div className="space-y-1.5">
          <Label>Date of Birth <span className="text-destructive">*</span></Label>
          <Input
            type="date"
            placeholder="Select date of birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="h-12 border-0 bg-muted"
          />
        </div>

        {accountType === "user" && (
          <div className="flex items-start gap-2 pt-2">
            <Checkbox
              id="terms"
              checked={agreedTerms}
              onCheckedChange={(c) => setAgreedTerms(c === true)}
            />
            <label htmlFor="terms" className="text-sm leading-tight">
              I agree to the{" "}
              <a href="#" className="font-medium text-accent underline">Terms and Conditions</a>
            </label>
          </div>
        )}
      </div>
    </>
  );

  const renderStep3Creator = () => (
    <>
      <h2 className="mb-1 text-center text-xl font-bold">Creator Profile</h2>
      <p className="mb-6 text-center text-sm text-muted-foreground">
        Tell your audience about yourself
      </p>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <Label>Page Name</Label>
          <Input
            placeholder="Your creator page"
            value={pageName}
            onChange={(e) => setPageName(e.target.value)}
            className="h-12 border-0 bg-muted"
          />
        </div>
        <div className="space-y-1.5">
          <Label>Username <span className="text-destructive">*</span></Label>
          <Input
            placeholder="Choose a unique username"
            value={creatorUsername}
            onChange={(e) => setCreatorUsername(e.target.value)}
            className="h-12 border-0 bg-muted"
          />
        </div>
        <div className="space-y-1.5">
          <Label>Location</Label>
          <Input
            placeholder="City, Country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="h-12 border-0 bg-muted"
          />
        </div>
        <div className="space-y-1.5">
          <Label>Website / Social Media</Label>
          <Input
            placeholder="https://your-website.com"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="h-12 border-0 bg-muted"
          />
        </div>
        <div className="space-y-1.5">
          <Label>Bio</Label>
          <Textarea
            placeholder="Tell your audience about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="min-h-[100px] border-0 bg-muted resize-none"
          />
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-start gap-2">
            <Checkbox
              id="creator-terms"
              checked={agreedCreatorTerms}
              onCheckedChange={(c) => setAgreedCreatorTerms(c === true)}
            />
            <label htmlFor="creator-terms" className="text-sm leading-tight">
              I agree to the{" "}
              <a href="#" className="font-medium text-accent underline">Terms and Conditions</a>
            </label>
          </div>
          <div className="flex items-start gap-2">
            <Checkbox
              id="updates"
              checked={optInUpdates}
              onCheckedChange={(c) => setOptInUpdates(c === true)}
            />
            <label htmlFor="updates" className="text-sm leading-tight">
              I'd like to receive updates about new features and creator opportunities
            </label>
          </div>
        </div>
      </div>
    </>
  );

  const isLastStep = step === totalSteps;
  const canContinue =
    (step === 1 && accountType !== null) ||
    (step === 2 && email && fullName && username && dob) ||
    (step === 3);

  return (
    <AuthLayout showTerms={false}>
      <h1 className="mb-1 text-center text-3xl font-bold">Create Account</h1>
      <p className="mb-3 text-center text-sm text-muted-foreground">
        Step {step} of {totalSteps}
      </p>
      <div className="mb-6">
        <ProgressBar current={step} total={totalSteps} />
      </div>

      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && accountType === "creator" && renderStep3Creator()}

      <div className="mt-6 flex gap-3">
        <Button
          variant="secondary"
          className="h-14 flex-1 rounded-2xl text-base font-semibold"
          onClick={() => (step === 1 ? navigate("/login") : setStep(step - 1))}
        >
          ← Back
        </Button>
        <Button
          className="h-14 flex-1 rounded-2xl bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90"
          disabled={!canContinue}
          onClick={() => {
            if (isLastStep) {
              // Submit
            } else {
              setStep(step + 1);
            }
          }}
        >
          {isLastStep ? "Create Account" : "Continue"}
        </Button>
      </div>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <button onClick={() => navigate("/login")} className="font-semibold text-accent">
          Sign in
        </button>
      </p>
    </AuthLayout>
  );
};

export default SignUp;
