import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
        <StaticImage
            src="../images/art-cat-side@2x.png"
            loading="lazy"
            placeholder="none"
            width={400}
            quality={95}
            formats={["auto", "webp", "png"]}
            alt=""
        />
        <StaticImage
            src="../images/map-syros.png"
            loading="lazy"
            placeholder="none"
            width={300}
            quality={25}
            formats={["auto", "jpg", "webp", "png"]}
            alt=""
        />

        <p>© Le 5ème Chat / The 5th Cat {new Date().getFullYear()}</p>
        <p lang="fr">ASSOCIATION À BUT NON LUCRATIF Déclaré en France — n°W883005877</p>
        <p lang="en">NON-PROFIT CHARITY Registered in France — n°W883005877</p>
    </footer>
)

export default Footer
