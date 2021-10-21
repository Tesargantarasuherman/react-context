import React, { createContext, useState, useContext } from 'react'
import AppContext from './AppContext';

// createContext punya 1 param default value
//akan mereturn object yang di dalamnya ada 2 properti provide,consumer
// Provider
// Provider mempunyai 1 properti yakni value yang akan di baca oleh consumer
// jika tidak ada provider consumer akan menggunakan dari default value createContext
// single context
// const { Provider, Consumer } = createContext()
// multiple context
// const { Provider:LangProvider, Consumer:LangConsumer } = createContext()

const {LangContext,LangProvider,ThemeContext,ThemeProvider} =AppContext;

function ContextPage() {

    // const langState = [lang, changeLang]

    return (
        <LangProvider>
            <ThemeProvider>
                <Header />
                <hr />
                <Menu />
                <hr />
                <Content />
                <hr />
                <Footer />
                <hr />
            </ThemeProvider>
        </LangProvider>
    )
}
function Header() {
    return (
        <>
            ini header
        </>
    )
}
function Menu() {
    const props = LangContext
    const props_theme = useContext(ThemeContext)
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>
                    Languange<br />
                    <select value={props.lang} onChange={props.changeLang}>
                        <option value="EN"> 🇬🇧 English </option>
                        <option value="ID"> 🇮🇩 Indonesia </option>
                    </select>
                    Theme<br />
                    <select value={props_theme.theme} onChange={props_theme.changeTheme}>
                        <option value="dark"> 🕶 Dark </option>
                        <option value="light"> Light </option>
                    </select>
                </li>
            </ul>
        </div>
    )
}
function Content() {
    return (
        <>
            <i>----Content----</i>
            <p>Language</p>
        </>
    )
}
function Footer() {
    const props = useContext(LangContext)
    const theme_props = useContext(ThemeContext)

    return (
        <>
            <i>----Footer----</i>
            <p>Language : {props.lang}</p>
            <p>Theme: {theme_props.theme}</p>
        </>
    )
}

export default ContextPage