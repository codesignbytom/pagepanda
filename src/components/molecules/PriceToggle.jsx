function PriceToggle({ isMonthly, setIsMonthly }) {
  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`toggle-monthly ${
          isMonthly
            ? "bg-primary-500 text-black -mr-4"
            : "bg-white/10 text-white/40 pr-6 "
        } 
                        rounded-full flex items-center justify-center py-0.5 px-4 text-sm font-medium cursor-pointer select-none`}
        onClick={handleToggle}
      >
        Monthly
      </div>
      <div
        className={`toggle-annually ${
          isMonthly
            ? "bg-white/10 text-white/40 pl-6"
            : "bg-primary-500 text-black -ml-4"
        } 
                        rounded-full  flex items-center justify-center py-0.5 px-4 text-sm font-medium cursor-pointer select-none`}
        onClick={handleToggle}
      >
        Annually
      </div>
    </div>
  );
}

export default PriceToggle;
