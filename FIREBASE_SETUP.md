# 🔧 Configuração do Firebase - Leve Saúde App

## 📋 Problemas Identificados

1. **❌ Firebase Authentication não habilitado**
2. **❌ Firestore Database não habilitado**
3. **❌ APIs não ativadas no Google Cloud**

## 🚀 Solução Passo a Passo

### **Passo 1: Habilitar Firebase Authentication**

1. **Acesse o Firebase Console:**
   ```
   https://console.firebase.google.com/project/leve-saude-app-631d4/authentication
   ```

2. **Clique em "Get started" ou "Começar"**

3. **Habilite os métodos de autenticação:**
   - ✅ **Email/Password** (obrigatório)
   - ✅ **Email link (passwordless sign-in)** (opcional)

4. **Configure as configurações:**
   - **Authorized domains**: Adicione `localhost` para desenvolvimento
   - **User actions**: Mantenha as configurações padrão

### **Passo 2: Habilitar Firestore Database**

1. **Acesse o Firestore:**
   ```
   https://console.firebase.google.com/project/leve-saude-app-631d4/firestore
   ```

2. **Clique em "Create database" ou "Criar banco de dados"**

3. **Escolha o modo de segurança:**
   - **Start in test mode** (para desenvolvimento)
   - **Start in locked mode** (para produção)

4. **Escolha a localização:**
   - **us-central1** (recomendado para Brasil)

### **Passo 3: Configurar Regras do Firestore**

1. **Vá para as regras do Firestore:**
   ```
   https://console.firebase.google.com/project/leve-saude-app-631d4/firestore/rules
   ```

2. **Substitua as regras por:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Usuários podem ler/escrever seus próprios dados
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Usuários podem criar/ler seus próprios feedbacks
    match /feedbacks/{feedbackId} {
      allow read, write: if request.auth != null && 
        (request.auth.uid == resource.data.userId || request.auth.uid == request.resource.data.userId);
    }
    
    // Regra temporária para desenvolvimento (remover em produção)
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

### **Passo 4: Ativar APIs no Google Cloud**

1. **Acesse o Google Cloud Console:**
   ```
   https://console.developers.google.com/apis/api/firestore.googleapis.com/overview?project=leve-saude-app-631d4
   ```

2. **Clique em "Enable" ou "Ativar"**

3. **Aguarde alguns minutos** para a propagação

### **Passo 5: Verificar Configuração**

1. **Execute o script de verificação:**
   ```bash
   node setup-firebase.js
   ```

2. **Resultado esperado:**
   ```
   🎉 FIREBASE CONFIGURADO COM SUCESSO!
   ✅ O registro de usuários está funcionando
   ✅ O app pode ser usado normalmente
   ```

## 🧪 Teste no App

Após a configuração:

1. **Abra o app:**
   ```bash
   npx expo start --web
   ```

2. **Vá para a tela de registro**

3. **Teste o registro:**
   - Nome: "João Silva"
   - Email: "joao@exemplo.com"
   - Senha: "senha123"
   - Confirmar Senha: "senha123"

4. **Verifique os logs no console**

## 📱 Estrutura do Banco de Dados

### **Coleção: users**
```javascript
{
  "userId": {
    "name": "João Silva",
    "email": "joao@exemplo.com",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### **Coleção: feedbacks**
```javascript
{
  "feedbackId": {
    "userId": "userId",
    "rating": 5,
    "comment": "Ótimo app!",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## 🔒 Segurança

### **Para Desenvolvimento:**
- Use regras permissivas para facilitar o desenvolvimento
- Teste todas as funcionalidades

### **Para Produção:**
- Configure regras restritivas
- Habilite apenas os métodos de autenticação necessários
- Configure domínios autorizados

## 🚨 Troubleshooting

### **Erro: "auth/configuration-not-found"**
- ✅ Verifique se o Authentication está habilitado
- ✅ Verifique se o método "Email/Password" está ativo

### **Erro: "permission-denied"**
- ✅ Verifique se o Firestore está habilitado
- ✅ Verifique se as regras estão configuradas
- ✅ Aguarde alguns minutos após habilitar as APIs

### **Erro: "network-error"**
- ✅ Verifique a conexão com a internet
- ✅ Verifique se as APIs estão ativadas no Google Cloud

## 📞 Suporte

Se ainda houver problemas:

1. **Verifique os logs do Firebase Console**
2. **Execute o script de diagnóstico:**
   ```bash
   node setup-firebase.js
   ```
3. **Verifique a documentação oficial:**
   ```
   https://firebase.google.com/docs
   ``` 