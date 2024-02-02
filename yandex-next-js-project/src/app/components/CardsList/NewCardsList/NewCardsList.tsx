import { NewCradsFragment } from '@/app/components/CardsList/NewCardsList/NewCradsFragment'
import Style from '../CardsList.module.css'

export const NewCardsList = () => {
	return (
		<section className={Style["list-section"]}>
			<h2 className={Style["list-section__title"]} id="new">
				Новинки
			</h2>
			<ul className={Style["cards-list"]}>
				<NewCradsFragment/>
			</ul>
		</section>
	)
}