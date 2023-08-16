import style from './Button.module.css';
import { Link } from 'react-router-dom';

export function Button({title, buttonTo, buttonType}) {
    return (
            <Link className={style.button} type={buttonType} to={buttonTo}>{title}</Link>
    );
  }