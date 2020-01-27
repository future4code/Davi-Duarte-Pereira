import { AddressInfo } from 'net'
import app from './presentation'

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})


// TODOS: 
// - criar o jwt para autenticar os logins: check
// - implementar endpoint de login
// - implementar endpoint de criar receita
// - implementar endpoint de seguir usuário  