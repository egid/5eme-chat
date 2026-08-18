import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/_footer.module.css"

const Footer = () => {
	return (
		<footer
			style={{
				// marginTop: `var(--space-5)`,
				// fontSize: `var(--font-sm)`,
			}}
			className={styles.footer}
		>
			<div className={styles.aboutSection}>
				<p className={styles.about} lang="en">
					Founded in 2021, <strong>The 5th Cat aims to help street cats in Greece</strong>, particularly in Syros and Athens. This is accomplished with the <strong>help of a local and international solidarity network</strong> that organizes trap, neuter, vaccinate and release (TNVR) programs, <strong>rescues and adoptions</strong>.
				</p>
				<div className={styles.mapCat}>
					<StaticImage
						className={styles.footerMap}
						src="../images/map-syros.png"
						loading="lazy"
						placeholder="none"
						width={200}
						quality={25}
						formats={["auto", "jpg", "webp", "png"]}
						alt=""
						/>
					<StaticImage
						className={styles.footerCat}
						src="../images/art-cat-side@2x.png"
						loading="lazy"
						placeholder="none"
						width={300}
						quality={95}
						formats={["auto", "webp", "png"]}
						alt=""
						/>
					</div>
			</div>
			<p className={styles.copyright}>© Le 5ème Chat / The 5th Cat {new Date().getFullYear()}</p>
			<div className={styles.charityInfo}>
				<p lang="fr">ASSOCIATION À BUT NON LUCRATIF Déclaré en France — n°W883005877</p>
				<p lang="en">NON-PROFIT CHARITY Registered in France</p>
			</div>
		</footer>
	)
}

export default Footer
