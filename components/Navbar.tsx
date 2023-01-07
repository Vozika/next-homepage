import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link> | <Link href="/about">Обо мне</Link> |{" "}
      <Link href="/code">Код</Link> | <Link href="/design">Дизайн</Link>
    </div>
  );
};

export default Navbar;
