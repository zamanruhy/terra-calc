import example1Img from '../images/lc-example-1.jpg?jpg;webp;avif'
import example2Img from '../images/lc-example-2.jpg?jpg;webp;avif'
import example3Img from '../images/lc-example-3.jpg?jpg;webp;avif'
import example4Img from '../images/lc-example-4.jpg?jpg;webp;avif'
import example5Img from '../images/lc-example-5.jpg?jpg;webp;avif'

import Image from './Image'

import './Examples.css'

const items = [
  { src: example1Img, title: `Проект освещения школы согласно нормам СанПиН` },
  { src: example2Img, title: `Модернизация освещения в&nbsp;швейном цеху` },
  { src: example3Img, title: `Освещение склада фармацевтической компании` },
  { src: example4Img, title: `Освещение производства лекарств` },
  { src: example5Img, title: `Освещение помещения конного спортивного клуба` }
]

export default function Examples() {
  return (
    <div class="lc-examples">
      <h2 className="lc-title lc-examples__title">
        примеры светотехнических расчетов и их реализация
      </h2>
      <div className="lc-examples__items">
        {items.map((item) => (
          <div className="lc-examples__item">
            <div className="lc-examples__item-block">
              <Image
                class="lc-examples__item-img"
                src={item.src}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <a
                href="#"
                className="lc-examples__item-title"
                innerHTML={item.title}
              ></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
