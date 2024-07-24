import Link from 'next/link';
import logo from '../public/xpertslogo2.png';
import Image from 'next/image';

const Logo = () => {
  return (
   <Link href="/">
  <Image src={logo} alt="logimage" width={500} height={214} layout="fixed" className="h-14 w-36" />
   </Link>
  )
}

export default Logo
