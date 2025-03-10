"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function VercelGithubGuide() {
  return (
    <Alert className="mt-4 bg-blue-50 border-blue-200">
      <Github className="h-4 w-4 text-blue-600" />
      <AlertTitle className="text-blue-700">
        Connect Vercel to GitHub
      </AlertTitle>
      <AlertDescription className="text-blue-600">
        <p className="mb-2">
          To manually connect your Vercel deployment to GitHub:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>
            <Link
              href="https://github.com/new"
              className="flex items-center gap-1 text-blue-700 hover:underline"
              target="_blank"
            >
              Create a new GitHub repository <ExternalLink size={12} />
            </Link>
          </li>
          <li>
            <Link
              href="https://vercel.com/dashboard"
              className="flex items-center gap-1 text-blue-700 hover:underline"
              target="_blank"
            >
              Go to your Vercel dashboard <ExternalLink size={12} />
            </Link>
          </li>
          <li>Find and click on your project</li>
          <li>Go to "Settings" tab</li>
          <li>Scroll down to "Git" section</li>
          <li>Click "Connect to Git Repository"</li>
          <li>Select GitHub and authorize Vercel if prompted</li>
          <li>Select the repository you created</li>
          <li>Configure your build settings if needed</li>
          <li>Click "Connect"</li>
        </ol>
        <p className="mt-2 text-sm">
          After connecting, you'll need to push your code to GitHub:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>Download your code from Tempo (Share → Download)</li>
          <li>
            Initialize a Git repository locally:{" "}
            <code className="bg-blue-100 px-1 rounded">git init</code>
          </li>
          <li>
            Add your GitHub repo as remote:{" "}
            <code className="bg-blue-100 px-1 rounded">
              git remote add origin https://github.com/yourusername/yourrepo.git
            </code>
          </li>
          <li>
            Add files:{" "}
            <code className="bg-blue-100 px-1 rounded">git add .</code>
          </li>
          <li>
            Commit:{" "}
            <code className="bg-blue-100 px-1 rounded">
              git commit -m "Initial commit"
            </code>
          </li>
          <li>
            Push:{" "}
            <code className="bg-blue-100 px-1 rounded">
              git push -u origin main
            </code>
          </li>
        </ol>
        <p className="mt-2 text-sm">
          Vercel will automatically deploy when you push to GitHub. Future
          changes in Tempo can be downloaded and pushed to GitHub to trigger new
          deployments.
        </p>
      </AlertDescription>
    </Alert>
  );
}
