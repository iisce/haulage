import LoginForm from "@/components/forms/login-form";
import { Suspense } from "react";

export default function SignInPage() {
     return (
          <Suspense>
               <LoginForm />
          </Suspense>
     );
}
