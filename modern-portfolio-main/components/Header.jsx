import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/">
  <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
    said <span style={{ fontWeight: 'normal', color: '#bbb' }}>hafiz<span style={{ color: 'red' }}>.</span></span>
  </span>
</Link>


          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
