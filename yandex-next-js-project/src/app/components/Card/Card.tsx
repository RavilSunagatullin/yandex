import Style from './Card.module.css'

export const Card = () => {
	return (
		<article className={Style['card']}>
			<img
				src="https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png"
				alt=""
				className="{Styles.card__image}"
			/>
			<div className="{Styles.card__content-block}">
				<h3 className="{Style.card__title}">Crystal Keeper</h3>
				<p className="{Style.card__description}">
					Управляй боевым дроном, чтобы любой ценой защитить кристалл от враждебных космо-слизней.
				</p>
				<div className="{Style.card__info-container}">
					<p className="{Style.card__author}">
						Автор: <span className="{Style.card__accent}">Lonely Baobab</span>
					</p>
					<p className="{Style.card__votes}">
						Голосов на сайте: <span className="{Style.card__accent}">20</span>
					</p>
				</div>
			</div>
		</article>
	)
}