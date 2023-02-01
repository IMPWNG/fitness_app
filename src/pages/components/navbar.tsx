import Link from "@components/Link";
import headerNavLinks from "@/data/HeaderNavLinks";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-center">
      {headerNavLinks.map((link) => (
        <div key={link.title} className="px-12 py-4">
          <Link
            href={link.href}
            className="text-2xl font-bold tracking-widest text-gray-900 uppercase rounded hover:bg-gray-100 hover:text-gray-900"
            onClick={() => {
              console.log("clicked");
            }}
          >
            {link.title}
          </Link>
        </div>
      ))}
    </nav>

  
  )
}

