"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function TempoDeploymentGuide() {
  return (
    <Alert className="mt-4 bg-blue-50 border-blue-200">
      <ExternalLink className="h-4 w-4 text-blue-600" />
      <AlertTitle className="text-blue-700">Tempo Deployment Guide</AlertTitle>
      <AlertDescription className="text-blue-600">
        <p className="mb-2">
          If you only see "Deploy" options in the Share button, follow these
          steps:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>Click the "Share" button in the top-right corner</li>
          <li>Click "Deploy" to deploy your application</li>
          <li>After deployment completes, you'll get a unique URL</li>
          <li>
            Click "Claim this deployment" to connect it to your Vercel account
          </li>
          <li>In your Vercel dashboard, you can then:</li>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Set up a custom domain</li>
            <li>Configure environment variables</li>
            <li>Connect to your GitHub repository manually</li>
          </ul>
        </ol>
        <p className="mt-2 text-sm">
          For consistent deployments with the same URL:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>After claiming your deployment in Vercel</li>
          <li>Set up a custom domain in Vercel project settings</li>
          <li>
            Set the NEXT_PUBLIC_SITE_URL environment variable to your domain
          </li>
          <li>
            Update your Supabase project's Site URL in Authentication settings
          </li>
        </ol>
        <p className="mt-2 text-sm">
          For future updates, you'll need to deploy again from Tempo, but you
          can configure Vercel to always use your custom domain.
        </p>
      </AlertDescription>
    </Alert>
  );
}
