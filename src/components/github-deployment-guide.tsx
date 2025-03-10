"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon, Github } from "lucide-react";

export default function GitHubDeploymentGuide() {
  return (
    <Alert className="mt-4 bg-blue-50 border-blue-200">
      <Github className="h-4 w-4 text-blue-600" />
      <AlertTitle className="text-blue-700">GitHub Deployment Guide</AlertTitle>
      <AlertDescription className="text-blue-600">
        <p className="mb-2">
          Connect to GitHub for automatic deployments with a consistent URL:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>Click the "Share" button in the top-right corner</li>
          <li>Select "Connect to GitHub" and authorize Tempo</li>
          <li>Choose or create a repository for your project</li>
          <li>
            In Vercel, set up a custom domain or use the provided production URL
          </li>
          <li>
            Set the NEXT_PUBLIC_SITE_URL environment variable in Vercel to your
            production URL
          </li>
          <li>
            Update your Supabase project's Site URL in Authentication settings
          </li>
        </ol>
        <p className="mt-2 text-sm">
          After connecting, each commit will automatically deploy to your
          consistent URL.
        </p>
      </AlertDescription>
    </Alert>
  );
}
