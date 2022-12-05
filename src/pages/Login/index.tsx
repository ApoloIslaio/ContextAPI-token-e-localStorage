import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Login = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  
  const handleLogin = async () => {
    if(email && password){
      const isLogged = await auth.signin(email, password)
      if(isLogged) {
        navigate('/private')
      }else{
        alert('Login failed')
      }
    }
  }
  return(
    <div>
      <h2>Página fechada</h2>

      <input 
        type="text" 
        value={email} 
        onChange={handleEmailInput}
        placeholder="Seu email" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={handlePasswordInput}
        placeholder="Sua senha"
      />

      <button onClick={handleLogin}>Logar</button>
    </div>
  )
}