import IconBuilding from '../icons/building-shield.svg?component'
import IconLayers from '../icons/layers.svg?component'
import IconNetwork from '../icons/network.svg?component'

import './Advantages.css'

const items = [
  {
    Icon: IconBuilding,
    name: `Освещаем по нормам`,
    text: `Знаем и учитываем требования СП, СНиП и СанПиН. Даем практические рекомендации.`
  },
  {
    Icon: IconLayers,
    name: `Имеем опыт решения <br>сложных задач`,
    text: `Освещали объекты в сжатые сроки с особыми требованиями к освещению. Примеры работ: <a href="#">производство лекарств</a>, <a href="#">склад запчастей</a>.`
  },
  {
    Icon: IconNetwork,
    name: `С 2013 года освещаем предприятия РФ`,
    text: `Среди наших клиентов: Wildberries, Почта Банк, Ростелеком, Шишкин Лес, Газпром, Физприбор.`
  }
]

export default function Advantages() {
  return (
    <div class="lc-advantages">
      <h2 class="lc-title lc-advantages__title">
        Подольский завод – профессионал в освещении
      </h2>
      <div class="lc-advantages__items">
        {items.map(({ Icon, name, text }) => (
          <div class="lc-advantages__item">
            <div className="lc-advantages__item-inner">
              <div className="lc-advantages__item-pic">
                <Icon class="lc-advantages__item-icon" />
              </div>
              <h3 className="lc-advantages__item-name" innerHTML={name}></h3>
              <div className="lc-advantages__item-text" innerHTML={text}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
