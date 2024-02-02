import Style from './CardsList.module.css'

export const PopularCardsFragment = () => {
	return (
		<>
			<li className={Style["cards-list__item"]}>
				<a href="/game-id" className={Style["card-list__link"]}>
					<article className={Style["card"]}>
						<img
							src="https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png"
							alt=""
							className={Style["card__image"]}
						/>
						<div className={Style["card__content-block"]}>
							<h3 className={Style["card__title"]}>Dungeons`n`Caves. Prologue</h3>
							<p className={Style["card__description"]}>
								Безымянный герой исследует пещеры и подземелья, чтобы найти больше информации о себе.
							</p>
							<div className={Style["card__info-container"]}>
								<p className={Style["card__author"]}>
									Автор: <span className={Style["card__accent"]}>F-Style</span>
								</p>
								<p className={Style["card__votes"]}>
									Голосов на сайте: <span className={Style["card__accent"]}>10</span>
								</p>
							</div>
						</div>
					</article>
				</a>
			</li>
			<li className={Style["cards-list__item"]}>
				<a href="/game-id" className={Style["card-list__link"]}>
					<article className={Style["card"]}>
						<img
							src="https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png"
							alt=""
							className={Style["card__image"]}
						/>
						<div className={Style["card__content-block"]}>
							<h3 className={Style["card__title"]}>Defence of Crystal</h3>
							<p className={Style["card__description"]}>
								Защищай магический кристалл от монстров и уничтожай кладбища, чтобы спасти Землю, которую поглотил мрак.
							</p>
							<div className={Style["card__info-container"]}>
								<p className={Style["card__author"]}>
									Автор: <span className={Style["card__accent"]}>MastWe</span>
								</p>
								<p className={Style["card__votes"]}>
									Голосов на сайте: <span className={Style["card__accent"]}>20</span>
								</p>
							</div>
						</div>
					</article>
				</a>
			</li>
		</>
	)
}