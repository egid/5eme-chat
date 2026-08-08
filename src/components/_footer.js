import * as React from "react"
// import { Link } from "gatsby"

const Footer = () => (
    <footer
        style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
        }}
    >
        <div lang="fr">
            <p>
                Fondé en 2021, Le 5ème chat vise à aider les chats des rues en Grèce, particulièrement à Syros et à Athènes. Avec l’aide d’une équipe locale et un réseau de solidarité internationale qui organise des programmes de capture, de stérilisation, de vaccination et de remise en liberté (TNVR), des sauvetages et des adoptions.
            </p>
        </div>
        <div lang="en">
            <p>
                Founded in 2021, The 5th Cat aims to help street cats in Greece, particularly in Syros and Athens. This is accomplished with the help of a local and international solidarity network that organizes trap, neuter, vaccinate and release (TNVR) programs, rescues and adoptions.
            </p>
        </div>
        <p>© Le Cinquieme Chat / The Fifth Cat {new Date().getFullYear()}</p>
        <p>ASSOCIATION À BUT NON LUCRATIF Déclaré en France — n°W883005877</p>
        <p>NON-PROFIT CHARITY Registered in France — n°W883005877</p>
    </footer>
)

export default Footer
