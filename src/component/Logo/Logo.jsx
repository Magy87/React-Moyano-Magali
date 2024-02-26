import logoLibra from './assets/libra.png'
import classes from './Logo.module.css'

const Logo = () =>{

    return(
        <a className='d-flex flex-column justify-content-center align-items-center'>
            <div>
                <img className={classes.imgLogo}  src={logoLibra} alt="Logo Libra"  />
            </div>
            <p className={classes.nameLogo}></p>
        </a>
    )
}

export default Logo