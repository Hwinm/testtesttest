import DashboardNavbar from "@/components/dashboard-navbar";
import { InfoIcon, UserCircle, ShoppingCart, Calculator } from "lucide-react";
import { redirect } from "next/navigation";
import { createClient } from "../../../supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <>
      <DashboardNavbar />
      <main className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
          {/* Header Section */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="bg-secondary/50 text-sm p-3 px-4 rounded-lg text-muted-foreground flex gap-2 items-center">
              <InfoIcon size="14" />
              <span>
                Welcome to your dashboard. Access the cash register system from
                here.
              </span>
            </div>
          </header>

          {/* Quick Actions Section */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <ShoppingCart size={24} className="text-blue-600" />
                </div>
                <h2 className="font-semibold text-xl">Cash Register</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Access the cash register system to process sales and manage
                transactions.
              </p>
              <Link href="/dashboard/register">
                <Button className="w-full">Open Cash Register</Button>
              </Link>
            </div>

            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <UserCircle size={24} className="text-green-600" />
                </div>
                <h2 className="font-semibold text-xl">User Profile</h2>
              </div>
              <p className="text-muted-foreground mb-4">{user.email}</p>
              <div className="bg-muted/50 rounded-lg p-4 overflow-hidden">
                <pre className="text-xs font-mono max-h-24 overflow-auto">
                  {JSON.stringify(user, null, 2)}
                </pre>
              </div>
            </div>
          </section>

          {/* System Overview */}
          <section className="bg-card rounded-xl p-6 border shadow-sm">
            <h2 className="font-semibold text-xl mb-4">Cash Register System</h2>
            <p className="text-muted-foreground mb-4">
              A streamlined cash register application that allows you to:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <ShoppingCart size={12} className="text-blue-600" />
                </div>
                <span>Select products from a clean, organized list</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Calculator size={12} className="text-green-600" />
                </div>
                <span>
                  Automatically calculate totals as you add or remove items
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <InfoIcon size={12} className="text-purple-600" />
                </div>
                <span>
                  Complete transactions with a simple, intuitive interface
                </span>
              </li>
            </ul>
            <Link href="/dashboard/register">
              <Button variant="outline">Get Started</Button>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
