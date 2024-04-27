import { Link } from "react-router-dom";
import "./sectionLeft.css";
import { useContext } from "react";
import { ItemCard } from "../../../context/newContext";
import SectionLeftComp from "./SectionLeftComp/SectionLeftComp";
import SecItemComp from "./SecItemComp/SecItemComp";
import ComentComp from "./comentComp/ComentComp";

const SectionLeft = () => {

  const { popularMovie } = useContext(ItemCard);

  return (
    <div className="sectionLeft">
      <h4> Навигация</h4>
      <div className="hr"></div>
      <div className="types">
        <div className="typeLeft">
          <h3>Жанры</h3>
          <Link>Биографии</Link>
          <Link>Боевики</Link>
          <Link>Вестерны</Link>
          <Link>Военные</Link>
          <Link>Детективы</Link>
          <Link>Документальные</Link>
          <Link>Драмы</Link>
          <Link>Исторические</Link>
          <Link>Комедии</Link>
          <Link>Криминал</Link>
          <Link>Мелодрамы</Link>
          <Link>Мультфильмы</Link>
          <Link>Мелодрамы</Link>
          <Link>Приключения</Link>
          <Link>Семейные</Link>
          <Link>Триллеры</Link>
          <Link>Ужасы</Link>
          <Link>Фантастика</Link>
          <Link>Фан</Link>
          <Link>Фэнтези</Link>
          <Link>Ожидаемые фильмы</Link>
          <Link>Аниме</Link>
          <Link>Дорамы</Link>
          <Link>Детские</Link>
          <Link>Спортивные</Link>
          <Link>Реалити-шоу</Link>
        </div>
        <div className="typeRight">
          <h3>По году</h3>
          <Link>2014 года</Link>
          <Link>2015 года</Link>
          <Link>2016 года</Link>
          <Link>2017 года</Link>
          <Link>2018 года</Link>
          <Link>2019 года</Link>
          <Link>2020 года</Link>
          <Link>2021 года</Link>
          <Link>2022 года</Link>
          <Link className="yellow">2023 года</Link>
          <Link className="yellow">2024 года</Link>
          <div className="hT"></div>
          <div className="stranam">
            <h3>По странам</h3>
            <Link>Американские</Link>
            <Link>Британские</Link>
            <Link>Российские</Link>
            <Link>Индийские</Link>
            <Link>Немецкие</Link>
            <Link>Французские</Link>
            <Link>Казахстанские</Link>
            <Link>Украинские</Link>
            <div className="htT"></div>
          </div>
          <div className="serial">
            <h3>Сериалы</h3>
            <Link>Русские</Link>
            <Link>Зарубежные</Link>
            <Link>Турецкие</Link>
          </div>
        </div>
      </div>
      <div className="hrr"></div>
      {popularMovie && <SectionLeftComp popularMovie={popularMovie} />}
      <div className="hrs"></div>
      <p className="hrsP">Обновления сериалов</p>
      <div className="hrrr"></div>
      <SecItemComp />
      <p className="hrsP">Последние комментарии</p>
      <ComentComp />
    </div>
  );
};

export default SectionLeft;
