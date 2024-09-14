// Logo.js
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import logoLight from '../public/xplogo-light.png';
import logoDark from '../public/xplogo4.png';

const Logo = () => {
  const { theme } = useTheme();
  
  // Choose the logo based on the current theme
  const logo = theme === 'dark' ? logoDark : logoLight;

  return (
    <Link href="/">
      <Image src={logo} alt="logo" width={800} height={300} className="h-16 w-48" />
    </Link>
  );
};

export default Logo;
