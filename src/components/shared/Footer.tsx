const Footer = () => {
  return (
    <footer className="w-full border-t border-[#1d2229] bg-[#080a0d]">
      <div className="container mx-auto flex min-h-[64px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left Side */}
        <div className="flex shrink-0 items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-lime-400" />

          <p className="text-[9px] font-bold tracking-[0.08em] text-white">
            FITLOG
          </p>
        </div>

        {/* Right Side */}
        <p className="text-right text-[7px] font-medium leading-3 text-[#5f636b] sm:text-[8px] md:text-[9px]">
          © 2026 FITLOG — Workout library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
