"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Github, ExternalLink } from "lucide-react";

export default function TempoGithubIntegration() {
  return (
    <Alert className="mt-4 bg-blue-50 border-blue-200">
      <Github className="h-4 w-4 text-blue-600" />
      <AlertTitle className="text-blue-700">
        Tempo GitHub Integration
      </AlertTitle>
      <AlertDescription className="text-blue-600">
        <p className="mb-2">
          Tempo should allow direct GitHub integration. Here's how to check if
          it's available:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>Look for the "Git" tab in the left sidebar</li>
          <li>If available, click on "Connect Repository" or similar option</li>
          <li>Follow the prompts to connect to GitHub</li>
          <li>
            After connecting, you should see options to commit and push changes
          </li>
        </ol>
        <p className="mt-2 text-sm">
          If you don't see these options, try these alternatives:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>Check the "Share" button for any GitHub-related options</li>
          <li>Look for a "Git" or "GitHub" option in the main menu</li>
          <li>
            Check if there's a "Version Control" section in project settings
          </li>
          <li>Contact Tempo support if the feature appears to be missing</li>
        </ol>
        <p className="mt-2 text-sm">
          Note: GitHub integration features may vary depending on your Tempo
          plan or project type.
        </p>
      </AlertDescription>
    </Alert>
  );
}
