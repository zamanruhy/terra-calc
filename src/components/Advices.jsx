import advice1Img from '../images/lc-advice-1.jpg?jpg;webp;avif'
import advice2Img from '../images/lc-advice-2.jpg?jpg;webp;avif'
import advice3Img from '../images/lc-advice-3.jpg?jpg;webp;avif'

import Image from './Image'

import './Advices.css'

const items = [
  {
    src: advice1Img,
    title: `Разбираемся, как делать расчет освещения в DIALux`
  },
  {
    src: advice2Img,
    title: `Энергосбережение на предприятии: эффективные способы`
  },
  {
    src: advice3Img,
    title: `Как выбрать освещение на складе для комфортной работы`
  }
]

export default function Advices() {
  return (
    <div class="lc-advices">
      <h2 className="lc-title lc-advices__title">
        Светотехнический расчет в программе DIALux и советы
      </h2>
      <div className="lc-advices__items">
        {items.map((item) => (
          <div className="lc-advices__item">
            <div className="lc-advices__item-block">
              <Image
                class="lc-advices__item-img"
                src={item.src}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <a
                href="#"
                className="lc-advices__item-title"
                innerHTML={item.title}
              ></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
