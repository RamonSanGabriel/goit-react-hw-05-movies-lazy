import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footerContainer}>
      &copy; {new Date().getFullYear()}
      {''}
      <a
        className={css.footerLink}
        href="https://www.linkedin.com/in/ramon-san-gabriel-9a0b9b62/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        Ramon San Gabriel
      </a>
    </footer>
  );
};

export default Footer;
