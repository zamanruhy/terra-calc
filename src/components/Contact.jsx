import avaImg from '../images/person-ava.png?png;webp;avif'
import Button from './Button'
import Image from './Image'
import './Contact.css'

export default function Contact() {
  return (
    <div class="lc-contact">
      <div className="lc-contact__side">
        <div className="lc-contact__person">
          <div className="lc-contact__ava-wrap">
            <Image
              class="lc-contact__ava"
              src={avaImg}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3 className="lc-contact__name">Алексей Колтун</h3>
          <p className="lc-contact__position">
            Менеджер по работе с&nbsp;проектами
          </p>
        </div>
        <div className="lc-contact__plea">Жду от вас информацию</div>
        <Button
          class="lc-contact__button"
          as="a"
          href="mailto:proekt@terra-led.ru"
          variant="primary"
          size="md"
        >
          на proekt@terra-led.ru
        </Button>
      </div>

      <div className="lc-contact__main">
        <h3 className="lc-title lc-contact__title">
          Для подготовки проекта пришлите:
        </h3>
        <ul className="lc-contact__list">
          <li className="lc-contact__list-item">
            <div className="lc-contact__list-text">
              <b>Габаритные размеры или план помещения</b>
            </div>
          </li>
          <li className="lc-contact__list-item">
            <div className="lc-contact__list-text">
              <b>Назначение помещения</b> <br />
              (какая деятельность будет вестись внутри)
            </div>
          </li>
          <li className="lc-contact__list-item">
            <div className="lc-contact__list-text">
              <b>Планировку внутри</b> <br />
              (стеллажи, рабочие места, зоны погрузки и хранения)
            </div>
          </li>
        </ul>
        <p className="lc-contact__note">
          Если хотите, прикрепите пожелания по требуемой освещенности,
          расположению и количеству светильников, способу установки,
          необходимому сроку эксплуатации.
        </p>
      </div>
    </div>
  )
}
