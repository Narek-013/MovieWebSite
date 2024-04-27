import user from '../../../../images/user.png'

import './comentComp.css';



const ComentComp = () => {
    return (
      <div className="comentComp">
        <div className="user">
          <div className="imgs">
            <img src={user} alt="#" />
          </div>
          <div className="comment">
            <p className="name">Marvall</p>
            <p>
              Уровень кринжа зашкаливает. Более дикую хрень нужно еще и
              поискать.
            </p>
          </div>
        </div>
        <div className="user">
          <div className="commentt">
            <div className="imgss">
              <img src={user} alt="#" />
            </div>
            <p className="name">Marvel</p>
            <p>
              Хорошая режиссерская работа,замечательные персонажи актёров,Фролов
              и Хабаров ещё раз доказали свою
            </p>
          </div>
        </div>
        <div className="user">
          <div className="imgs">
            <img src={user} alt="#" />
          </div>
          <div className="comment">
            <p className="name">Гость ДИМА</p>
            <p>
              Уровень кринжа зашкаливает. Более дикую хрень нужно еще и
              поискать.
            </p>
          </div>
        </div>
        <div className="user">
          <div className="commentt">
            <div className="imgss">
              <img src={user} alt="#" />
            </div>
            <p className="name">Гость Валерий</p>
            <p>
              Уровень кринжа зашкаливает. Более дикую хрень нужно еще и
              поискать.
            </p>
          </div>
        </div>
        <div className="user">
          <div className="imgs">
            <img src={user} alt="#" />
          </div>
          <div className="comment">
            <p className="name">Луки</p>
            <p>
              очень странный и кринжовый, красив лишь в качестве съёмки и всей
              атмосферой, вот тут они умеют,
            </p>
          </div>
        </div>
      </div>
    );
}

export default ComentComp;
