import { ReactNode } from "react";

type StatWidgetProps = {
  icon: ReactNode; // Can accept any ReactNode (including JSX elements like icons)
  label: string;
  value: string | number;
};

const StatWidget = ({ icon, label, value }: StatWidgetProps) => {
  return (
    <div className="stat-widget mt-5">
      <div className="flex items-center gap-x-3">
        <div className="w-[40px] shrink-0 h-[40px] flex text-white items-center justify-center rounded-full bg-white/5">
          {icon}
        </div>
        <p className="text-white text-[.7rem]">{label}</p>
      </div>

      <h2 className="font-mono text-live text-[2rem] sm:text-[4rem] flex justify-center">
        {value}
      </h2>
    </div>
  );
};

export default StatWidget;
