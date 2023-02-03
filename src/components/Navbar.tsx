import Link from "@/components/Link";
import headerNavLinks from "@/data/HeaderNavLinks";
import LogoApp from "@assets/images/logo.png";
import Image from "next/image";
import { Stack, Divider } from "@mui/material";

const Navbar = () => {

  const Logo = () => (
    <div className="px-12 py-4">
      <Link href="/">
        <Image src={LogoApp} alt="Logo" width={48} height={48} />
      </Link>
    </div>
  );

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      <Logo />
      {headerNavLinks.map((link) => (
        <div key={link.title} className="px-12 py-4">
   
          <Link
            href={link.href}
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            onClick={() => {
              console.log("clicked");
            }}
          >
            {link.title}
          </Link>
        
        </div>
      ))}
    </Stack>
  )
}

export default Navbar