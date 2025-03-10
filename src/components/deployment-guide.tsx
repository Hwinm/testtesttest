"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function DeploymentGuide() {
  return (
    <Alert className="mt-4 bg-blue-50 border-blue-200">
      <Github className="h-4 w-4 text-blue-600" />
      <AlertTitle className="text-blue-700">
        Tempo to GitHub Deployment Guide
      </AlertTitle>
      <AlertDescription className="text-blue-600">
        <p className="mb-2">
          If your GitHub repository is empty after connecting, follow these
          steps:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>Click the "Share" button in the top-right corner</li>
          <li>Click "Connect to GitHub" (if not already connected)</li>
          <li>Select your repository</li>
          <li>Click "Commit & Push" to push your code to GitHub</li>
          <li>Enter a commit message like "Initial commit"</li>
          <li>Click "Push" to send your code to GitHub</li>
        </ol>
        <p className="mt-2 text-sm">
          After pushing your code, you can deploy to Vercel:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>
            <Link
              href="https://vercel.com/new"
              className="flex items-center gap-1 text-blue-700 hover:underline"
              target="_blank"
            >
              Go to Vercel <ExternalLink size={12} />
            </Link>
          </li>
          <li>Import your GitHub repository</li>
          <li>
            Configure your environment variables (NEXT_PUBLIC_SITE_URL, etc.)
          </li>
          <li>Deploy your project</li>
        </ol>
      </AlertDescription>
    </Alert>
  );
}
