import Image from "next/image";
import styles from "./Hero.css";

export default function Hero() {
  return (
    <div className='hero flex justify-between px-24 pt-20'>
      <div className='left-side flex flex-col justify-center'>
        <div className='text-4xl'>
          <h1>Hi!</h1>
          <h1>I'm Hafizh</h1>
          <h1>Web Developer</h1>
        </div>
        <div className='text-base pt-2'>
          <h3>Front End/Back End Developer</h3>
        </div>
        <div className='mt-6'>
          <a
            href='https://mail.google.com/mail/?view=cm&fs=1&to=muhammadhafizhihsan@gmail.com'
            className='border-2 pt-2 p-3 hover:bg-white hover:text-black cursor-pointer'
          >
            Contact Me!
          </a>
        </div>
      </div>
      <div className='flex justify-center align-middle border-2 rounded-full'>
        <Image
          src={"/images/me_square.png"}
          height={252}
          width={252}
          className='rounded-full'
        ></Image>
      </div>
    </div>
  );
}
