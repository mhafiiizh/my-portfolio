import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <div className='pt-10 flex flex-col pl-10 gap-2 justify-center'>
        <h1 className='text-3xl'>Contact</h1>
        <div className='border-b-2 w-48 mb-3'></div>
        <div>
          <FontAwesomeIcon
            icon={faLinkedin}
            className='pr-2'
          />
          <a
            href='https://www.linkedin.com/in/muhammad-hafizh-ihsan/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faSquareGithub}
            className='pr-2'
          />
          <a
            href='https://github.com/mhafiiizh'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faEnvelope}
            className='pr-2'
          />
          <a
            href='https://mail.google.com/mail/?view=cm&fs=1&to=muhammadhafizhihsan@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            muhammadhafizhihsan@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
