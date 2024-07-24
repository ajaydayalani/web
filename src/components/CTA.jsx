import { Link } from "react-router-dom";
import { socialLinks } from '../constants'


const CTA = () => {
  return (
    <section className='cta '>
        <p className='cta-text'>
          Have a project in mind? <br className='sm:block hidden' />
          Let’s build something together!
        </p>
        <NavLink to='/contact' className='btn h-1/2'>
          Contact
        </NavLink>

      <div className='flex  flex-row gap-6 justify-center items-center mt-5'>

        {socialLinks.map((link) => (
          <Link
            to={link.link}
            key={link.name}
            className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
          >
            <img
              src={link.iconUrl}
              alt={link.name}
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>

    </section>
  );
};

export default CTA;