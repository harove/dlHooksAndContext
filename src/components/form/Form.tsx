import { useContext } from 'react' 
import useInput from '../../hooks/useInput'
import CountContext from '../../store/CountContext'

interface Props {
    lang:string,
    toggleLang:()=>void
}

const Form = ({lang,toggleLang}: Props) => {
    const [email, setEmail] = useInput("")
    const [password, setPassword] = useInput("")
    const {count,setCount}=useContext(CountContext)

    return (
        <div>
            <div>{lang}</div>
            <button className="btn btn-primary" onClick={e=>toggleLang()}>ToggleLang</button>
            <form>
                <input id="email" type="email" value={email} onChange={setEmail}  />
                <input id="password" type="password" value={password} onChange={setPassword}  />
                <div>{count}</div>
            </form>
            <button className="btn btn-primary" onClick={e=>setCount(count+1)} >counter by context</button>
        </div>
    )
}

export default Form
