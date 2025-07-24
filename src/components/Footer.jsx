export const Footer = () => {
    return (
        <footer className="py-8 bg-gray-800 text-white text-center">
            <div className="container mx-auto px-4">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Vaibhav Sharma.
                </p>
                <p className="text-xs mt-2">
                    Built with ❤️ using React and Tailwind CSS
                </p>
            </div>
            <div className="mt-4">
                <a href="#hero" className="text-primary hover:underline">
                    Back to Top
                </a>
            </div>
        </footer>
    );
}