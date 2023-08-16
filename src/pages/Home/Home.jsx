import { Button } from '../../components/Button';
import style from './Home.module.css';

export function Home() {
    return (
        <div className={style.homePage}>
          <img className={style.logo} src='../../public/logo.png' alt='Logo' />
          <h1>Want to meet Simas?</h1>
          <Button buttonTo="/feature1 "title="Get started"/>
        </div>
    );
  }
  
