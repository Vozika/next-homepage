import React from "react";
import Image from "next/image";

const Logo = () => {
  return <div>
    <Image
          src="/logo.svg"
          alt="Logo"
          width={330}
          height={126}
          priority
        />
  </div>;
};

export default Logo;
