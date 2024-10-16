export default function Cabecalho() {
    return (
        <header className="flex bg-emerald-400 h-16 justify-around items-center">
            <h1 className="text-4xl ">Logo</h1>
            <ul className="flex gap-6 items-center ">
                <li>Home</li>
                <li>Contato</li>
                <li>Sobre</li>
            </ul>
        </header>
    )
}