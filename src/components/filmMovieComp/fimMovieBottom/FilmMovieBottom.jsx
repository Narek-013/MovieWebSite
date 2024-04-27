
const FilmMovieBottom = ({state}) => {

    return (
      <div className="fimMovieBottom">
        <p>Год: {state.release_date}</p>
        <p>Страна: USA</p>
        <p>Жанр: <span>  Фильмы,</span> <span>Ужасы</span></p>
        <p>Качество: Трейлер</p>
        <p>Продолжительность: 104 мин.</p>
        <p>Премьера в New York:  26 октября 2023  </p>
        <p>Мировая премьера:  19 октября 2023 </p>
        <p>Режиссер: <span>Уильям Брент Белл</span></p>
        <p>В ролях: Энтон Саундерс, Иви Темплтон, Алекса Гудолл, Дэвид Лэнгхэм, Таппенс Мидлтон, Розалинд Марч, Ральф Айнесон, Джейн Вуд, Роберт Гудман, Мэтт Стокоу</p>
      </div>
    );
}

export default FilmMovieBottom;
