import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#000] dark:bg-opacity-60 dark:backdrop-blur-3xl p-3 flex justify-center gap-8 items-center w-full transition-all">
      <p className="text-sm text-black dark:text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-purple-600 dark:hover:text-purple-400">
        © 2025 Veracity.AI™. All Rights Reserved.
      </p>
      <div className="flex space-x-6 text-black dark:text-white">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-purple-600 dark:hover:text-purple-400 text-xl transition-all duration-300 transform hover:scale-125" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-purple-600 dark:hover:text-purple-400 text-xl transition-all duration-300 transform hover:scale-125" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-purple-600 dark:hover:text-purple-400 text-xl transition-all duration-300 transform hover:scale-125" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-purple-600 dark:hover:text-purple-400 text-xl transition-all duration-300 transform hover:scale-125" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
