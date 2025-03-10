"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import Link from "next/link";

export default function EmailVerificationNotice() {
  return (
    <Alert className="mt-4 bg-blue-50 border-blue-200">
      <InfoIcon className="h-4 w-4 text-blue-600" />
      <AlertTitle className="text-blue-700">Email Verification</AlertTitle>
      <AlertDescription className="text-blue-600">
        <p className="mb-2">
          If you don't receive a verification email, check your spam folder or
          try these options:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Request a new verification email by signing in again</li>
          <li>
            <Link
              href="https://supabase.com/dashboard"
              className="underline"
              target="_blank"
            >
              Configure SMTP in your Supabase project settings
            </Link>
          </li>
        </ul>
      </AlertDescription>
    </Alert>
  );
}
