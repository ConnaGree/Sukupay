import { useState } from "react";
import { Blocks, Search } from "lucide-react";

const teamsData = [
  {
    name: "Vibrando afri...",
    countries: 59,
    progress: 80,
    color: "bg-green-400",
  },
  {
    name: "Rafa Nadal...",
    countries: 56,
    progress: 70,
    color: "bg-yellow-400",
  },
  { name: "S.U.R.0545...", countries: 53, progress: 60, color: "bg-blue-400" },
  { name: "joch...", countries: 49, progress: 50, color: "bg-gray-400" },
  { name: "S.U.R.0545...", countries: 53, progress: 60, color: "bg-blue-400" },
  { name: "S.U.R.0545...", countries: 53, progress: 60, color: "bg-blue-400" },
];

export default function TopTeamsLeaderboard() {
  const [search, setSearch] = useState("");

  const filteredTeams = teamsData.filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-md p-6 bg-white/5 text-white mt-[4rem] rounded-2xl shadow-lg">
      <h2 className="text-[1rem] flex items-center gap-x-2 font-semibold mb-4">
        <Blocks className="text-white" size={20} /> Top 100 teams
      </h2>

      <div className="space-y-4 h-[300px] overflow-y-scroll">
        {filteredTeams.map((team, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <p className="truncate max-w-[120px] text-[0.75rem]">
                {team.name}
              </p>
              <span className="text-[0.625rem] text-gray-400">
                {team.countries} Countries
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-bgPrimary rounded-full overflow-hidden">
                <div
                  className={`h-full ${team.color}`}
                  style={{ width: `${team.progress}%` }}
                ></div>
              </div>
              <span className="text-[0.75rem]">{team.progress}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-6">
        <input
          type="text"
          placeholder="Search your team position..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 pl-10 text-[0.9rem] rounded-[50px] bg-[#09312E] text-white placeholder-gray-400 outline-none"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>

      <div className="mt-6 text-[0.625rem] text-gray-400">
        IN COLLABORATION WITH: polygon ⚪ alchemy ⚪ Privy
      </div>
    </div>
  );
}
