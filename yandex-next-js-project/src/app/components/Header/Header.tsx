import React from 'react'
import Style from './Header.module.css'

export const Header = () => {
	return (
		<header className={Style['header']}>
			<a href='#' className={Style['logo']}>
				<img className={Style['logo__image']} src='/images/logo.svg' alt='Логотип Pindie' />
			</a>
			<nav className={Style['menu']}>
				<ul className={Style['menu__list']}>
					<li className={Style['menu__item']}>
						<a href='#' className={Style['menu__link']}>Новинки</a>
					</li>
					<li className={Style['menu__item']}>
						<a href='#' className={Style['menu__link']}>Популярные</a>
					</li>
					<li className={Style['menu__item']}>
						<a href='#' className={Style['menu__link']}>Шутеры</a>
					</li>
					<li className={Style['menu__item']}>
						<a href='#' className={Style['menu__link']}>Ранеры</a>
					</li>
					<li className={Style['menu__item']}>
						<a href='#' className={Style['menu__link']}>Пиксельные</a>
					</li>
					<li className={Style['menu__item']}>
						<a href='#' className={Style['menu__link']}>TDS</a>
					</li>
				</ul>
				<div className={Style['auth']}>
					<button className={Style['auth__button']}>Войти</button>
				</div>
			</nav>
		</header>
	)
}