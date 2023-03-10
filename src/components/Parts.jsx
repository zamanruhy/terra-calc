import part1Img from '../images/lc-part-1.png?png;webp;avif'
import part2Img from '../images/lc-part-2.png?png;webp;avif'
import part3Img from '../images/lc-part-3.png?png;webp;avif'
import part4Img from '../images/lc-part-4.png?png;webp;avif'

import NextIcon from '../icons/next.svg?component'

import Image from './Image'
import './Parts.css'

const items = [
  {
    src: part1Img,
    name: `План расположения светильников`
  },
  {
    src: part2Img,
    name: `Расчет количества светильников с учетом их характеристик и норм освещенности`
  },
  {
    src: part3Img,
    name: `Паспорт светильников`
  },
  {
    src: part4Img,
    name: `Освещение помещения в изолиниях`
  }
]

export default function Parts() {
  return (
    <div class="lc-parts lc-parts_start">
      <h2 class="lc-title lc-parts__title">Светорасчет включает в себя:</h2>

      <div className="lc-parts__viewport">
        <button className="lc-parts__prev" type="button">
          <NextIcon />
        </button>
        <button className="lc-parts__next" type="button">
          <NextIcon />
        </button>
        <div className="lc-parts__container">
          {[...items, ...items].map((item) => (
            <div className="lc-parts__item">
              <div className="lc-parts__item-pic">
                <Image
                  className="lc-parts__item-img"
                  src={item.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="lc-parts__item-name">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
