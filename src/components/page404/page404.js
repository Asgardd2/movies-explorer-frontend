import './page404.css';
import { Link } from "react-router-dom";


function page404(props) {
 
  return (
    <section className="page404">
       <h1 className="page404__title">404</h1>
       <h2 className="page404__subtitle">Страница не найдена</h2>
       <Link className="page404__button" onClick={props.onBack}>Назад</Link>
    </section>
  )
}

export default page404;
