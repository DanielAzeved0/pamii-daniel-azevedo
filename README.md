# pamii-Eduardo-Pessoa
Aulas de Programação de Aplicativos Mobile II com o professor João Siles

# Aula 04 — Criando API Routes com Next.js e Tela de SignIn

    http://localhost:3000









     export default function handler(req, res) {

        



        return res.status(200).json({ message: "Login realizado com sucesso!" });

        

        }
        
	    return res.status(401).json({ error: "Credenciais inválidas" });
    
	    }
    

	    return res.status(405).json({ error: "Método não permitido" });


	    }



  

O que o código faz:


 - Recebe requisições HTTP.
 - Se o método for POST, extrai email e password do corpo.
 - Se as credenciais forem válidas, retorna status 200 com mensagem de
   sucesso.
 - Caso contrário, retorna status 401 com mensagem de erro.
 - Para outros métodos, responde com status 405.

**Testando o endpoint**

Você pode usar Postman, Insomnia ou até um fetch no navegador para testar:


Endpoint: POST http://localhost:3000/api/login

    

    "email": "admin@teste.com",

    
    }
    
    Resposta esperada – Sucesso:
    
    { "message": "Login realizado com sucesso!" }
    Resposta esperada – Erro:
    
    { "error": "Credenciais inválidas" }
## Criando a tela de SignIn

Crie um arquivo pages/signin.js:


    import { useState } from "react";

    

    import axios from "axios";
    
    export default function SignIn() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    
    async function handleLogin(e) {
    e.preventDefault();
    try {
    const res = await axios.post("/api/login", { email, password });
    setMsg(res.data.message);
    } catch (err) {
    setMsg(err.response.data.error);
    }
    }
    
    return (
    <div  style={{  padding:  20  }}>
    
    <h1>Login</h1>
    
    <form  onSubmit={handleLogin}>
    
    <input
    
    type="email"
    
    placeholder="Digite seu email"
    
    value={email}
    
    onChange={(e) => setEmail(e.target.value)}
    
    /><br/>
    <input
    
    type="password"
    
    placeholder="Digite sua senha"
    

    value={password}


    

    <button  type="submit">Entrar</button>

    

    {msg && <p>{msg}</p>}

    </div>

    );

    }

Explicação:

 - Usa useState para armazenar email, password e msg (mensagem de
   retorno). 
 - Envia os dados para o endpoint /api/login usando axios.
 - Exibe a mensagem retornada pelo backend (sucesso ou erro).

**Acessando Endpoints no App**
Com o servidor rodando em npm run dev, abra em:
http://localhost:3000/signin

Preencha as credenciais e teste o login:

Email: admin@teste.com
Senha: 123456

Observe a mensagem exibida após clicar em Entrar.

Realizando o Deploy

Para colocar o backend no ar:

 1. Crie uma conta gratuita em Vercel
 2. Instale a Vercel CLI

    npm install -g vercel

 3. Na pasta do projeto, execute:

    vercel

Siga as instruções interativas: 

 1. Faça login.
 2. Escolha o repositório.
 3. Confirme as configurações.
 4. Após o deploy, a Vercel fornecerá um link público para seu projeto.

  

