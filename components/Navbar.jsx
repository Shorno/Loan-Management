import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <header>
                <nav className={"flex flex-row justify-end gap-6 align-items-center p-5 bg-secondary-50 rounded-b-2xl shadow-2xl fixed z-0 w-full"}>
                    <div className={"flex-grow"}>
                        <p>Next.JS</p>
                    </div>
                    <ul className={"flex flex-row justify-end gap-6"}>
                        <Link href={"/"}>
                            <li>Home 🏠</li>
                        </Link>
                        <Link href={"/clients"}>
                            <li>Clients 👤</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        </>
    );
};
export default Navbar;