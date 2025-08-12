# Configuração do EmailJS para Formulário de Contato

## Passo 1: Criar conta no EmailJS

1. Acesse: https://www.emailjs.com/
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu email

## Passo 2: Adicionar Serviço de Email

1. No dashboard, clique em "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Configure seguindo as instruções
5. Anote o **Service ID** gerado

## Passo 3: Criar Template de Email

1. Clique em "Email Templates"
2. Clique em "Create New Template"
3. Configure o template com estas variáveis:

```
Subject: Nova mensagem do site - {{from_name}}

Conteúdo:
Olá {{to_name}},

Você recebeu uma nova mensagem através do site:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}

Mensagem:
{{message}}

---
Enviado automaticamente pelo site fluirengenhariainstalacoes.com.br
```

4. Anote o **Template ID** gerado

## Passo 4: Obter Chave Pública

1. Vá em "Account" > "General"
2. Copie sua **Public Key**

## Passo 5: Atualizar o código

No arquivo `index.html`, substitua estas linhas:

```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Substitua pela sua Public Key
```

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

Substitua:
- `YOUR_PUBLIC_KEY` pela sua Public Key
- `YOUR_SERVICE_ID` pelo Service ID do Passo 2
- `YOUR_TEMPLATE_ID` pelo Template ID do Passo 3

## Exemplo Final:

```javascript
emailjs.init("user_abc123def456"); 
emailjs.send('service_gmail123', 'template_contact456', templateParams)
```

## Teste

1. Salve as alterações
2. Abra o site
3. Preencha o formulário de contato
4. Clique em "Enviar Mensagem"
5. Verifique se recebeu o email

## Limites Gratuitos

- 200 emails por mês
- Para mais emails, considere o plano pago

## Alternativa Simples (Mailto)

Se preferir uma solução mais simples (que abre o cliente de email do usuário), posso implementar usando `mailto:`.
