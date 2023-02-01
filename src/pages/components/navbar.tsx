import Link from "@components/Link";
import headerNavLinks from "@/data/HeaderNavLinks";

export default function Navbar() {
  return (
    <nav className="fixed mt-8 h-full">
      {headerNavLinks.map((link) => (
        <div key={link.title} className="px-12 py-4">
          <Link
            href={link.href}
            className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
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

