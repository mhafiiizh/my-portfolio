import Image from "next/image";

export default function Nav() {
  return (
    <nav className='flex flex-row justify-around'>
      <Image
        src={"/images/iso.png"}
        width={60}
        height={60}
      ></Image>
      <ul className='flex flex-row items-center gap-8'>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a>Project</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
