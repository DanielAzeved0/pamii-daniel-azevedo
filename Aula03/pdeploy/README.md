
# Aula 03 – API de Login com Next.js (Exemplo Real)

## Objetivo
Criar uma API de autenticação simples usando Next.js (API Route), uma tela de login (SignIn) que consome essa API e realizar o deploy na Vercel.

---

## 1. Rodando o projeto

```bash
npm install
npm run dev
```
Acesse: [http://localhost:3000/signin](http://localhost:3000/signin)

---

## 2. API de Login (código real)

Arquivo: `src/app/api/login/route.ts`

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const { email, password } = await request.json();

	if (email === "admin@teste.com" && password === "123456") {
		return NextResponse.json({ message: "Login realizado com sucesso!" }, { status: 200 });
	}

	return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
}
```

---

## 3. Tela de Login (SignIn) – código real

Arquivo: `src/app/signin/page.tsx`

```tsx
'use client';

import { useState } from "react";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");

	async function handleLogin(e: React.FormEvent) {
		e.preventDefault();
		try {
			const res = await fetch("/api/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password })
			});
			const data = await res.json();
			setMsg(data.message || data.error);
		} catch (err) {
			setMsg("Erro ao conectar com o servidor");
		}
	}

	return (
		<div style={{ padding: 20 }}>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
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
					onChange={(e) => setPassword(e.target.value)}
				/><br/>
				<button type="submit">Entrar</button>
			</form>
			{msg && <p>{msg}</p>}
		</div>
	);
}
```

---

## 4. Testando

1. Acesse `/signin` e faça login com:
	 - **Email:** admin@teste.com
	 - **Senha:** 123456
2. Veja a mensagem de sucesso ou erro.

---

## 5. Deploy na Vercel

1. Instale a Vercel CLI:
	 ```bash
	 npm install -g vercel
	 ```
2. Faça login e rode:
	 ```bash
	 vercel
	 ```
3. Siga as instruções para publicar seu projeto.

---

## Estrutura de Pastas Importante

- `src/app/api/login/route.ts` – API de autenticação
- `src/app/signin/page.tsx` – Tela de login

---

## Créditos
Exemplo criado para aula prática de Backend com Next.js.
