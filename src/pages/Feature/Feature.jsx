import { Button } from '../../components/Button';
import style from './Feature.module.css';
import { BiCircle } from 'react-icons/bi';

export function Feature({data}) {

    return (
        <div className={style.featurePage}>
          {/* <div >{data.icon}</div> */}
          <img className={style.img} src={`../../img/${data.icon}`} alt="" />
          <h2>{data.title}</h2>
          <p>{data.text}</p>
          <div className={style.bubble}>
          <BiCircle />
          <BiCircle />
          <BiCircle />

          </div>
          <Button buttonTo={data.buttonTo} title={data.buttonTitle} />
        </div>
    );
  }