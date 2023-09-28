import './Banner.css'

export const Banner = () => {
    //JSX é uma forma de criar elementos no dom para serem utilizadas como templates de aplicaçõos React, ele parece html, mas não é.
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="O banner principal da página organo" />

        </header>
    )
}

