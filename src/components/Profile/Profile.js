import './Profile.css';

function Profile() {
  return (
    <section className="profile">
       
        <form name="auth" className="profile__form">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div className="profile__name">
        <p className="profile__name-label">Имя</p>
        <input
          id="name"
          name="name"
          placeholder="Name"
          required
          className="profile__input"
        />
        </div>
       <div className="profile__email">
       <p className="profile__email-label">E-mail</p>
        <input
          id="email"
          name="email"
          placeholder="Почта"
          type="email"
          required
          className="profile__input"
        />
       </div>
        
        <button type="submit" className="profile__edit-button">
          Редактировать
        </button>
        <button className="profile__exit-button">Выйти из аккаунта</button>
      </form>
    </section>
  )
}

export default Profile;
