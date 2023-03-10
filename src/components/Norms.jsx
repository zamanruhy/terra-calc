import norm1Img from '../images/norm-1.jpg?jpg;webp;avif'
import norm2Img from '../images/norm-2.jpg?jpg;webp;avif'
import norm3Img from '../images/norm-3.jpg?jpg;webp;avif'
import CheckIcon from '../icons/check-bold.svg?component'
import Image from './Image'

import './Norms.css'

const items = [
  {
    src: norm1Img,
    text: `Для складов, цехов, <br>кладовых, производственных помещений`
  },
  {
    src: norm2Img,
    text: `Для офисов, школ, больниц, жилых помещений`
  },
  {
    src: norm3Img,
    text: `Для парковок и&nbsp;прилегающих территорий`
  }
]

export default function Norms() {
  return (
    <div class="lc-norms">
      <h2 className="lc-title lc-norms__title">
        при расчете освещения учтем нормы санпин по&nbsp;освещенности помещений
      </h2>
      <ul className="lc-norms__items">
        {items.map((item) => (
          <li className="lc-norms__item">
            <div className="lc-norms__item-cell">
              <div className="lc-norms__item-pic">
                <Image
                  className="lc-norms__item-img"
                  src={item.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <span className="lc-norms__item-check">
                  <CheckIcon />
                </span>
              </div>
              <div className="lc-norms__item-text" innerHTML={item.text}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
