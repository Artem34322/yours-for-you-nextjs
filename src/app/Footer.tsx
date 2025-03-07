export default function Footer() {
    return (
        <div>
            <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="index.html"
                        className="hover:underline">YFY™</a>
                    </span>
                    <ul
                        className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="/about-us" className="hover:underline me-4 md:me-6">About Us</a>
                        </li>
                        <li>
                            <a href="contact.html" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}