import user from '../../../images/user.png'
import './comComp.css';

const ComComp = () => {

  const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,]

    return (
      <div className="comComp">
        {
          array.map(el => {
            return (
              <div key={el} className='items'>
                <img src={user} alt="#" />
                <ul>
                  <li>Андрей</li>
                  <li>
                    Этот фильм, просто шедевр для меня.После просмотра мне
                    хочется еще раз и еще раз его пересматривать. Я в жизни не
                    видел настолько красиво сыгранную историю. А актёры просто
                    идеально вписываются в свои роли. Очень хотелось бы видеть
                    продолжение этого потрясающего фильма с теми же актерами и
                    узнать что будет дальше. Не с терпением жду продолжения)))
                  </li>
                </ul>
              </div>
            );
          })
        }
        {/* <img src={user} alt="#" />
        <ul >
          <li>Андрей</li>
          <li>
            Этот фильм, просто шедевр для меня.После просмотра мне хочется еще
            раз и еще раз его пересматривать. Я в жизни не видел настолько
            красиво сыгранную историю. А актёры просто идеально вписываются в
            свои роли. Очень хотелось бы видеть продолжение этого потрясающего
            фильма с теми же актерами и узнать что будет дальше. Не с терпением
            жду продолжения)))
          </li>
        </ul> */}
      </div>
    );
}

export default ComComp;
