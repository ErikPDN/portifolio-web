import Image from "next/image";

import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, I am Erik</h1>
        <h2>Software Developer</h2>
      </div>
      <Image
        src="/perfil.jpg"
        alt="Me photo"
        width={1000}
        height={410}
        priority
      />
    </div>
  )
}
