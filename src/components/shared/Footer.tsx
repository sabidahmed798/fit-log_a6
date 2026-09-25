import Image from "next/image";
import footerLogo from "../../assets/footer.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#1d2229] bg-[#080a0d]">
      <div className="container mx-auto flex h-[101px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left Side */}
        <div className="flex shrink-0 items-center gap-1.5">
          <Image src={footerLogo} alt="FITLOG Logo" width={20} height={20} />

          <p className="text-[14px] font-bold tracking-[0.08em] text-white">
            FITLOG
          </p>
        </div>

        {/* Right Side */}
        <p className="text-right text-[12px] font-medium leading-3 text-[#6B7280] sm:text-[8px] md:text-[9px]">
          © 2026 FITLOG — Workout library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
