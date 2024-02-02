import React from 'react'
import Style from './Footer.module.css'

export const Footer = () => {
	return (
		<footer className={Style['footer']}>
			<a href='#' className={Style['footer__logo']}>
        <span className={Style['footer__logo-name']}>pindie</span
        ><span className={Style['footer__logo-copy']}>, XXI век</span>
			</a>
			<ul className={Style['social-list']}>
				<li className={Style['social-list__item']}>
					<a href='#' className={`button ${Style['social-list__link']}`}>YT</a>
				</li>
				<li className={Style['social-list__item']}>
					<a href='#' className={`button ${Style['social-list__link']}`}>ВК</a>
				</li>
				<li className={Style['social-list__item']}>
					<a href='#' className={`button ${Style['social-list__link']}`}>TG</a>
				</li>
			</ul>
		</footer>
	)
}