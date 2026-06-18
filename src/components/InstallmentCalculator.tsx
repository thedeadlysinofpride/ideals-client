import { useMemo, useState } from "react";
import { formatGHS } from "@/lib/format";

type Deposit = 40 | 60;
type Plan = "weekly" | "monthly";

export type InstallmentSelection = {
  deposit: Deposit;
  plan: Plan;
  depositAmount: number;
  balance: number;
  perPayment: number;
  installments: number;
};

export default function InstallmentCalculator({
  price,
  onChange,
}: {
  price: number;
  onChange?: (s: InstallmentSelection) => void;
}) {
  const [deposit, setDeposit] = useState<Deposit>(40);
  const [plan, setPlan] = useState<Plan>("monthly");

  const data = useMemo<InstallmentSelection>(() => {
    const depositAmount = (price * deposit) / 100;
    const balance = price - depositAmount;
    const installments = plan === "weekly" ? 12 : 3;
    const perPayment = balance / installments;
    return { deposit, plan, depositAmount, balance, perPayment, installments };
  }, [price, deposit, plan]);

  useMemo(() => onChange?.(data), [data, onChange]);

  return (
    <div className="rounded-3xl border border-gray-100 bg-gray-50/30 p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold">Installment plan</h3>
        <span className="text-[11px] uppercase tracking-wider text-gray-500">
          Pay over time
        </span>
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-xs text-gray-500">Deposit</label>
          <div className="mt-2 grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-full">
            {[40, 60].map((d) => (
              <button
                key={d}
                onClick={() => setDeposit(d as Deposit)}
                className={`h-9 rounded-full text-sm font-medium transition-all ${
                  deposit === d
                    ? "bg-white text-primary shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {d}%
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs text-gray-500">Schedule</label>
          <div className="mt-2 grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-full">
            {[
              { v: "weekly", label: "Weekly · 12 wks" },
              { v: "monthly", label: "Monthly · 3 mo" },
            ].map((p) => (
              <button
                key={p.v}
                onClick={() => setPlan(p.v as Plan)}
                className={`h-9 rounded-full text-xs font-medium transition-all ${
                  plan === p.v
                    ? "bg-white text-primary shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-primary-soft p-5">
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Deposit" value={formatGHS(data.depositAmount)} />
            <Stat label="Balance" value={formatGHS(data.balance)} />
          </div>
          <div className="mt-4 pt-4 border-t border-primary/15">
            <div className="text-xs text-gray-600">
              {plan === "weekly" ? "Per week" : "Per month"} (
              {data.installments} payments)
            </div>
            <div className="text-3xl font-semibold text-primary mt-1 tracking-tight">
              {formatGHS(data.perPayment)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] text-gray-500 uppercase tracking-wider">
        {label}
      </div>
      <div className="text-lg font-semibold mt-0.5">{value}</div>
    </div>
  );
}
