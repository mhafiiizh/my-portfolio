export default function About() {
  return (
    <>
      <div className='flex justify-center gap-20 pt-20'>
        <div>
          <img
            src='/images/about_illustration.svg'
            alt='About Illustration'
            width={400}
          />
        </div>
        <p className='text-base w-2/5 font-mono align-middle'>
          I am an enthusiastic student currently pursuing my S1 degree in
          Informatics at Singaperbangsa University of Karawang, class of 2021. I
          specialize in Front-End/Back-End Development and UI/UX Design,
          combining technical proficiency with a keen eye for creating intuitive
          user experiences. Alongside my technical skills, I excel in
          communication and cooperation, thriving in team environments and
          fostering productive collaboration. I am passionate about continuous
          learning and am eager to contribute to the field of informatics
          through innovative and impactful projects.
        </p>
      </div>
    </>
  );
}
