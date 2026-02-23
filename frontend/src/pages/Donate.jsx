import React from "react";
import DonationForm from "../components/DonateForm";

const Donate = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="container py-12">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">Donate</p>
            <h1 className="text-3xl font-bold text-slate-900">Give items to someone who needs them</h1>
            <p className="text-gray-600 max-w-2xl">
              List books, stationery, and essentials you no longer need. We highlight donations to nearby students first.
            </p>
          </div>
          <DonationForm />
        </div>
      </div>
    </div>
  );
};

export default Donate;
