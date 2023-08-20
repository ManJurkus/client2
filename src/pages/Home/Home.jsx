import { Button } from '../../components/Button';
import style from './Home.module.css';
import Logo from '../../assets/logo.png'
import { useContext  } from 'react';
import { UserContext } from '../../context/UserContext';


export function Home() {
    const ctx = useContext(UserContext);
    const userLoggedIn = ctx.user.loggedIn;
    console.log(userLoggedIn);

    const noLogged = (
      <div>Not Loggined</div>
    );

    const yesLogged = (
      <div>Yes Loggined</div>
    );


    return (
        <div className={style.homePage}>
          <div className={style.header}>
            <img className={style.logo} src={Logo} alt='logo'/>
            {userLoggedIn ? yesLogged : noLogged}
          </div>
          
          <h1>Want to meet Simas?</h1>
          <Button buttonTo="/feature1 "title="Get started"/>
        </div>
    );
  }
  
