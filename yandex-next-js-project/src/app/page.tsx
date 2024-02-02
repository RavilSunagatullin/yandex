import { Banner } from './components/Banner/Banner'
import { NewCardsList } from './components/CardsList/NewCardsList/NewCardsList'
import { PopularCardsList } from './components/CardsList/PopularCardsList/PopularCardsList'
import { Promo } from './components/Promo/Promo'

export default function Home() {
  return (
    <main className="main">
      <Banner/>
      <PopularCardsList/>
      <NewCardsList/>
      <Promo/>
    </main>
);
}
