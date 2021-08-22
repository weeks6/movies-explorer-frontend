import { useState } from "react"
import "./Profile.css"

function Profile() {

  const [name, setName] = useState('Игорь')
  const [email, setEmail] = useState('bridcarp1@gmail.com')

  return (
    <main className="main profile">
      <div className="wrap-container">
        <div className="wrap-container__header">
          <h1 className="wrap-container__heading">Привет, {name}!</h1>
        </div>
        <div className="wrap-container__body">
          <div className="profile__info">
            <ul className="profile__info-list">
              <li className="profile__list-item">
                <span className="profile__list-key">Имя</span>
                <span className="profile__list-value">{name}</span>
              </li>
              <li className="profile__list-item">
                <span className="profile__list-key">E-mail</span>
                <span className="profile__list-value">{email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap-container__footer">
          <div className="profile__actions">
            <button className="profile__btn">Редактировать</button>
            <button className="profile__btn profile__btn_accent">Выйти из аккаунта</button>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Profile
