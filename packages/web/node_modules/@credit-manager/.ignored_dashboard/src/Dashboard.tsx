import { useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { GlobalContext } from "@credit-manager/core";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Button,
  Badge,
} from "@credit-manager/ui";
import { Wallet, IndianRupee, CheckCircle2, XCircle } from "lucide-react";

function Dashboard() {
  const ctx = useContext(GlobalContext);
  if (!ctx) return null;

  const { state, dispatch } = ctx;

  const totalBalance = useMemo(() => {
    return state.accounts.reduce((acc: number, cur) => acc + cur.balance, 0);
  }, [state.accounts]);

  return (
    <div className="pt-32 space-y-8">
      {/* Total balance section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-gradient-to-br from-blue-300 to-indigo-700 rounded-2xl shadow-xl text-white"
      >
        <h2 className="text-2xl font-bold">Total Balance</h2>
        <div className="flex items-center gap-2 mt-2 text-4xl font-extrabold">
          <IndianRupee className="h-8 w-8" />
          {totalBalance.toLocaleString("en-IN")}
        </div>
      </motion.div>

      {/* Account Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {state.accounts.map((acc: any, index: number) => (
          <motion.div
            key={acc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-blue-600" />
                  {acc.type} Account
                </CardTitle>

                <Badge
                  className={`${
                    acc.isActive
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-red-500 hover:bg-red-600"
                  } text-white ml-auto`}
                >
                  {acc.isActive ? (
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-4 w-4" /> Active
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <XCircle className="h-4 w-4" /> Inactive
                    </span>
                  )}
                </Badge>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600">Balance</p>
                <p className="text-2xl font-semibold flex items-center gap-1">
                  <IndianRupee className="h-5 w-5 text-gray-700" />
                  {acc.balance.toLocaleString("en-IN")}
                </p>
              </CardContent>

              <CardFooter>
                <Button
                  onClick={() =>
                    dispatch({
                      type: acc.isActive
                        ? "DEACTIVATE_ACCOUNT"
                        : "ACTIVATE_ACCOUNT",
                      payload: acc.id,
                    })
                  }
                  className={`w-full rounded-xl ${
                    acc.isActive
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {acc.isActive ? "Deactivate" : "Activate"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
