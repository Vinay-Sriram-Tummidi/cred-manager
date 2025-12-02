import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Shield, CreditCard, Cloud } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="flex items-center justify-center pt-32 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0 px-6 max-w-5xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center gap-6"
        >
          <h1 className="text-5xl font-bold tracking-tight">
            SmartCloud Banking Platform
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            A modern cloud‑native banking dashboard to manage customers, transactions,
            and credit limits — built with React, Remix, and DevOps best practices.
          </p>

          <Button size="lg" className="rounded-2xl shadow-md">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 flex flex-col items-center text-center gap-3">
              <Cloud className="h-10 w-10" />
              <h3 className="font-semibold text-xl">Cloud Native</h3>
              <p className="text-gray-600 text-sm">
                Built with scalable cloud and DevOps principles including CI/CD and
                infrastructure automation.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 flex flex-col items-center text-center gap-3">
              <Shield className="h-10 w-10" />
              <h3 className="font-semibold text-xl">Secure Transactions</h3>
              <p className="text-gray-600 text-sm">
                Implements modern authentication and secure credit‑limit workflows.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 flex flex-col items-center text-center gap-3">
              <CreditCard className="h-10 w-10" />
              <h3 className="font-semibold text-xl">Smart Credit Engine</h3>
              <p className="text-gray-600 text-sm">
                Manage domestic/international limits with dynamic risk rules.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 py-6">© 2025 SmartCloud Banking</p>
      </div>
    </main>
  );
}
