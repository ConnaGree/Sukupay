import { FaExchangeAlt } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { FiUsers, FiGlobe, FiMapPin } from "react-icons/fi";
import { TbCoin } from "react-icons/tb";
import StatWidget from "./stat-widget";
import { Plane } from "lucide-react";

export default function StatsCard() {
  const stats = [
    {
      icon: <FaExchangeAlt />,
      label: "Total of transactions",
      value: "3,464",
      highlight: true,
    },
    { icon: <IoMdTimer />, label: "Fastest transaction", value: "6s" },
    { icon: <FiUsers />, label: "Number of teams", value: 2290},
    { icon: <FiUsers />, label: "Total # of participants", value: 87 },
    { icon: <FiGlobe />, label: "Visited countries", value: 101 },
    {
      icon: <FiMapPin />,
      label: "Most visited country",
      value: "United States",
      subtext: "us",
    },
    {
      icon: <Plane />,
      label: "Total kms traveled by all dollars",
      value: "18,140,369",
      unit: "kms",
    },
    {
      icon: <TbCoin />,
      label: "Transaction Fees",
      value: "$0",
      subtext: "always $0!",
      highlight: true,
    },
  ];

  return (
    <div className="">
      <div className="relative w-fit border-dashed py-2 border-gray-200  max-w-lg mx-auto bg-white/5 text-green-400 rounded-2xl shadow-xl space-y-6">
        {/* Main Card */}
        <div className="p-6 rounded-2xl w-64">
          <h2 className="text-[3.5rem] font-mono font-medium text-live">
            3,464
          </h2>
          <div className="flex items-center space-x-2 text-white mt-2 text-sm">
            <FaExchangeAlt />
            <span className="text-[0.8rem]">Total of transactions</span>
          </div>
        </div>

        {/* Small Floating Card */}
        <div className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 bg-white/20 p-3 rounded-lg shadow-lg w-24">
          <p className="text-gray-400 text-xs">Fastest transaction</p>
          <p className="text-live text-lg font-mono font-semibold">6s</p>
        </div>
      </div>

      <div className="flex w-full items-start justify-between">
        {/* Pass index values to StatWidget */}
        <StatWidget
          icon={stats[2].icon} // Pass the icon from the stats array
          label={stats[2].label} // Pass the label
          value={stats[2].value} // Pass the value
        />

        <StatWidget
          icon={stats[3].icon} // Pass the icon from the stats array
          label={stats[3].label} // Pass the label
          value={stats[3].value} // Pass the value
        />
      </div>

      <div className="flex w-full items-start justify-between">
        <StatWidget
          icon={stats[6].icon} // Pass the icon from the stats array
          label={stats[6].label} // Pass the label
          value={stats[6].value} // Pass the value
        />
      </div>

      <div className="flex w-full items-start justify-between">
        <StatWidget
          icon={stats[7].icon} // Pass the icon from the stats array
          label={stats[7].label} // Pass the label
          value={stats[7].value} // Pass the value
        />
      </div>
    </div>
  );
}
