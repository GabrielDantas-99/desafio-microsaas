const Footer = () => {
    return (
        <footer className="w-full p-8 bg-gray-800 text-white flex justify-between items-center text-sm">
            <span>© {new Date().getFullYear()} Phantom tecnologia. Todos os direitos reservados.</span>
            <span>Desenvolvido por Gabriel Dantas</span>
        </footer>
    );
}

export default Footer;