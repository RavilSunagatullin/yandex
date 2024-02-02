import Style from '../CardsList.module.css'
import { PopularCardsFragment } from './PopularCardsFragment'

export const PopularCardsList = () => {
	return (
		<section className={Style["list-section"]}>
			<h2 className={Style["list-section__title"]} id="popular">
				Популярное
			</h2>
			<ul className={Style["cards-list"]}>
				{/* <li className="cards-list__item"> */}
				{/* 	<a href="/game-id" className="card-list__link"> */}
				{/* 		<Card/> */}
				{/* 	</a> */}
				{/* </li> */}
				<PopularCardsFragment/>
			</ul>
		</section>
	)
}