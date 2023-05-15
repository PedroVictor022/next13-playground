
type NavbarProps = {
   children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
   return (
      <nav className="flex flex-wrap gap-6 text-2xl">
         { children }
      </nav>
   )
}

export default Navbar;