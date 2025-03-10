"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export default function SiteUrlNotice() {
  return (
    <Alert className="mt-4 bg-yellow-50 border-yellow-200">
      <InfoIcon className="h-4 w-4 text-yellow-600" />
      <AlertTitle className="text-yellow-700">Email Redirect Issue</AlertTitle>
      <AlertDescription className="text-yellow-600">
        <p className="mb-2">
          Email verification links are redirecting to localhost instead of your
          deployed site. To fix this, you need to:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>
            Set the NEXT_PUBLIC_SITE_URL environment variable to your deployed
            URL
          </li>
          <li>
            Update your Supabase project's Site URL in the Authentication
            settings
          </li>
        </ol>
      </AlertDescription>
    </Alert>
  );
}
