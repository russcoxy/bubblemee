import logo from "@/assets/logo.jpeg";

interface AuthLayoutProps {
  children: React.ReactNode;
  showTerms?: boolean;
}

const AuthLayout = ({ children, showTerms = true }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-6 py-12">
      <img src={logo} alt="Bubblemee" className="mb-6 h-20 w-20 object-contain" />
      <div className="w-full max-w-sm flex-1">{children}</div>
      {showTerms && (
        <p className="mt-auto pt-8 text-center text-sm text-muted-foreground">
          By signing in, you agree to our{" "}
          <a href="#" className="underline">Terms</a> and{" "}
          <a href="#" className="underline">Privacy Policy</a>
        </p>
      )}
    </div>
  );
};

export default AuthLayout;
