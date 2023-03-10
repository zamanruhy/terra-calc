import certifImg from '../images/extra-certif.png?png;webp;avif'
import CheckIcon from '../icons/check-big.svg?component'
import Image from './Image'
import Button from './Button'
import './Extra.css'

export default function Extra() {
  return (
    <div class="lc-extra">
      <h2 className="lc-title lc-extra__title">
        Стоимость проекта освещения – бесплатно. <br />
        В&nbsp;добавок вы получите:
      </h2>
      <div className="lc-extra__content">
        <Image
          class="lc-extra__img"
          src={certifImg}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <div className="lc-extra__main">
          <ul className="lc-extra__list">
            <li className="lc-extra__list-item">
              <CheckIcon class="lc-extra__list-icon" />
              <div className="lc-extra__list-text">
                <b>Консультацию:</b> расскажем про нюансы, на которые важно
                обратить внимание
              </div>
            </li>
            <li className="lc-extra__list-item">
              <CheckIcon class="lc-extra__list-icon" />
              <div className="lc-extra__list-text">
                <b>Коммерческое предложение</b> с 2-3 вариантами оборудования на
                выбор
              </div>
            </li>
            <li className="lc-extra__list-item">
              <CheckIcon class="lc-extra__list-icon" />
              <div className="lc-extra__list-text">
                <b>Документы</b> и техническую информацию по светильникам
              </div>
            </li>
          </ul>
          <Button
            class="lc-extra__button"
            as="a"
            href="#"
            variant="primary"
            size="md"
          >
            Оставить заявку на проект
          </Button>
        </div>
      </div>
    </div>
  )
}
