import certifImg from '../images/light-certif.jpg?jpg;webp;avif'
import CheckIcon from '../icons/check.svg?component'
import Button from './Button'
import Image from './Image'

import './Intro.css'

export default function Intro() {
  return (
    <div class="lc-intro">
      <Image
        class="lc-intro__img"
        src={certifImg}
        alt=""
        fetchpriority="high"
      />
      <div class="lc-intro__content">
        <h2 className="lc-intro__title">светотехнический расчет</h2>
        <p className="lc-intro__subtitle">для вашего объекта</p>
        <div className="lc-intro__meta">
          <Button
            class="lc-intro__button"
            as="a"
            href="#"
            variant="secondary"
            size="md"
          >
            Заказать
          </Button>
          <p className="lc-intro__slogan">
            <CheckIcon />
            бесплатно сделаем за&nbsp;1&nbsp;день
          </p>
        </div>
      </div>
    </div>
  )
}
