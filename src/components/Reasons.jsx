import accountingImg from '../images/reason-accounting.png?png;webp;avif'
import handshakeImg from '../images/reason-handshake.png?png;webp;avif'
import electricianImg from '../images/reason-electrician.png?png;webp;avif'
import emblemImg from '../images/reason-emblem.png?png;webp;avif'

import './Reasons.css'
import Image from './Image'

const items = [
  {
    src: accountingImg,
    name: `Понять бюджет на&nbsp;освещение объекта`
  },
  {
    src: handshakeImg,
    name: `Согласовать светильник с&nbsp;заказчиком`
  },
  {
    src: electricianImg,
    name: `Выбрать правильные светильники при&nbsp;проектировании`
  },
  {
    src: emblemImg,
    name: `Подобрать оптимальное освещение согласно нормам СанПиН`
  }
]

export default function Reasons() {
  return (
    <div class="lc-reasons">
      <h2 class="lc-title lc-reasons__title">
        Зачем делают светотехнический расчет
      </h2>
      <div class="lc-reasons__items">
        {items.map((item) => (
          <div class="lc-reasons__item">
            <div className="lc-reasons__item-inner">
              <div className="lc-reasons__item-pic">
                <Image
                  class="lc-reasons__item-icon"
                  src={item.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="lc-reasons__item-name" innerHTML={item.name}></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
