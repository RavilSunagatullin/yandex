import Style from './Promo.module.css'

export const Promo = () => {
	return (
		<section className={Style["promo"]}>
			<div className={Style["promo__description-block"]}>
				<h2 className={Style["promo__title"]}>Твой промо-код</h2>
				<p className={Style["promo__description"]}>Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</p>
				<button className={`button ${Style["promo__button"]}`}>Получить код</button>
			</div>
			<img src='/images/promo-illustration.svg' alt="Собака" className={Style["promo__image"]}/>
		</section>
	)
}