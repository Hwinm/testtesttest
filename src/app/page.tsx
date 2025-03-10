import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  Calculator,
  DollarSign,
  ShoppingCart,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { createClient } from "../../supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Simple Cash Register{" "}
                <span className="text-blue-600">System</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                A streamlined cash register application that makes managing
                transactions quick and easy. Perfect for small businesses and
                retail shops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                  Open Register
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium"
                >
                  Dashboard
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-6 pb-4 border-b">
                    <h3 className="text-xl font-bold">Cash Register Demo</h3>
                    <span className="text-green-600 font-semibold">$24.99</span>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <ShoppingCart size={16} className="text-blue-600" />
                        </span>
                        <span>Coffee</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                          x2
                        </span>
                        <span className="font-medium">$7.98</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <ShoppingCart size={16} className="text-green-600" />
                        </span>
                        <span>Sandwich</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                          x1
                        </span>
                        <span className="font-medium">$8.99</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <ShoppingCart size={16} className="text-purple-600" />
                        </span>
                        <span>Muffin</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                          x2
                        </span>
                        <span className="font-medium">$8.02</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t pt-4 flex justify-between items-center">
                    <span className="font-bold">Total</span>
                    <span className="text-xl font-bold text-green-600">
                      $24.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our cash register system is designed to be simple yet powerful,
              with all the features you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingCart className="w-6 h-6" />,
                title: "Product Management",
                description:
                  "Easily browse and select products from a clean, organized list",
              },
              {
                icon: <Calculator className="w-6 h-6" />,
                title: "Instant Calculations",
                description:
                  "Automatically calculate totals as you add or remove items",
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "Transaction Tracking",
                description:
                  "Keep track of all sales with a simple, intuitive interface",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Fast & Responsive",
                description:
                  "Lightning-fast performance with real-time updates",
              },
              {
                icon: <ArrowUpRight className="w-6 h-6" />,
                title: "One-Click Checkout",
                description: "Complete transactions quickly with minimal steps",
              },
              {
                icon: <Calculator className="w-6 h-6" />,
                title: "Quantity Controls",
                description: "Easily adjust quantities with intuitive controls",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Simplify Your Sales?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with our easy-to-use cash register system today.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center px-6 py-3 text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Open Cash Register
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
