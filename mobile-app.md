# FeedbackHub - Aplicação Mobile
## App para Usuários Finais

---

## 📋 Descrição

Aplicação mobile desenvolvida em React Native com Expo para que usuários finais possam enviar e visualizar seus próprios feedbacks. O projeto segue **arquitetura modular por features** com importações usando alias `@` para melhor organização e escalabilidade.

---

## 🏗 Arquitetura Modular por Features

O projeto segue o padrão **modularizado por features/domínios**, facilitando a escalabilidade, manutenção e testabilidade. Cada feature é autocontida com seus próprios componentes, hooks, serviços e tipos.

### Organização dos Componentes de Features

Para manter o código limpo, modular e de fácil manutenção, os componentes de cada feature devem ser organizados da seguinte forma:

- **Cada componente em sua própria pasta** dentro de `components/` (ex: `login-form/`, `feedback-list/`, `star-rating/`)
- **Nomes de pastas e arquivos em minúsculo e kebab-case** (ex: `login-form`, `feedback-list`, `star-rating`)
- **Arquivo principal do componente chamado `index.tsx`**
- **Estilos separados em um arquivo `styles.ts`** na mesma pasta do componente
- **Nada de subpastas genéricas** (ex: não usar `components/LoginForm.tsx`, mas sim `components/login-form/index.tsx`)

### Exemplo de Estrutura Modular

```
src/
  features/
    auth/
      components/
        login-form/
          index.tsx
          styles.ts
        register-form/
          index.tsx
          styles.ts
      hooks/
        useAuth.ts
        useAuthValidation.ts
      services/
        authService.ts
        firebaseAuth.ts
      types/
        auth.types.ts
    feedback/
      components/
        feedback-form/
          index.tsx
          styles.ts
        feedback-list/
          index.tsx
          styles.ts
        feedback-item/
          index.tsx
          styles.ts
        star-rating/
          index.tsx
          styles.ts
      hooks/
        useFeedbacks.ts
        useFeedbackForm.ts
      services/
        feedbackService.ts
        firestoreService.ts
      types/
        feedback.types.ts
  shared/
    components/
      ui/
        button/
          index.tsx
          styles.ts
        input/
          index.tsx
          styles.ts
        loading/
          index.tsx
          styles.ts
        error-message/
          index.tsx
          styles.ts
    hooks/
      useNetwork.ts
      useAppState.ts
    services/
      firebase.ts
      api.ts
    utils/
      validation.ts
      dateUtils.ts
      constants.ts
    types/
      common.types.ts
  navigation/
    AppNavigator.tsx
    AuthNavigator.tsx
    MainNavigator.tsx
  styles/
    colors.ts
    typography.ts
    spacing.ts
    theme.ts
```

### Exemplo de Componente Modular

**src/features/feedback/components/feedback-form/index.tsx**

```tsx
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { useFeedbackForm } from '@/features/feedback/hooks/useFeedbackForm';
import { StarRating } from '@/features/feedback/components/star-rating';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';

const FeedbackForm = () => {
  const { form, handleSubmit, handleRatingChange } = useFeedbackForm();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Feedback</Text>
      <StarRating 
        rating={form.rating} 
        onRatingChange={handleRatingChange} 
      />
      <Input 
        value={form.comment}
        placeholder="Digite seu comentário..."
        multiline
      />
      <Button onPress={handleSubmit} title="Enviar Feedback" />
    </View>
  );
};

export default FeedbackForm;
```

**src/features/feedback/components/feedback-form/styles.ts**

```ts
import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@/styles';

export const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  title: {
    ...typography.h2,
    marginBottom: spacing.md,
  },
});
```

**Importação simplificada:**

```ts
import FeedbackForm from '@/features/feedback/components/feedback-form';
```

---

## 🎯 Funcionalidades

### 🔐 Autenticação
- **Firebase Authentication** com email e senha
- Tela de login/registro com validação em tempo real
- Persistência de sessão com AsyncStorage
- Logout funcional com limpeza de estado

### 📝 Envio de Feedback
- **Tela de criação** de novo feedback com formulário controlado
- **Sistema de avaliação** com 5 estrelas (obrigatório)
- **Campo de comentário** (mínimo 10 caracteres, obrigatório)
- **Validação em tempo real** dos campos com feedback visual
- **Estados de loading** e tratamento de erros

### 📋 Listagem de Feedbacks
- **Tela de histórico** dos feedbacks enviados pelo usuário
- **Ordenação por data** (mais recente primeiro)
- **Exibição completa** das informações:
  - Nota (estrelas)
  - Comentário
  - Data de envio formatada
- **Pull-to-refresh** para atualizar dados
- **Estados vazios** com mensagens amigáveis

### 📱 UX/UI
- **Design nativo** e intuitivo seguindo guidelines do iOS/Android
- **Navegação fluida** entre telas com transições suaves
- **Estados de loading** e feedback visual consistente
- **Tratamento de erros** amigável com retry options
- **Acessibilidade** com suporte a leitores de tela

---

## ⚒ Stack Tecnológica

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **React Native** | 0.72+ | Framework mobile |
| **Expo** | 49+ | Plataforma de desenvolvimento |
| **TypeScript** | 5+ | Tipagem estática |
| **Firebase** | 10+ | Autenticação e banco |
| **React Navigation** | 6+ | Navegação entre telas |
| **AsyncStorage** | - | Persistência local |
| **StyleSheet** | - | Estilização nativa |
| **ESLint** | 8+ | Linting |
| **Prettier** | 3+ | Formatação |

---

## 📁 Estrutura do Projeto Atualizada

```
test-mobile-leve-saude/
├── app.json
├── App.tsx
├── src/
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── login-form/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── styles.ts
│   │   │   │   └── register-form/
│   │   │   │       ├── index.tsx
│   │   │   │       └── styles.ts
│   │   │   ├── hooks/
│   │   │   │   ├── useAuth.ts
│   │   │   │   └── useAuthValidation.ts
│   │   │   ├── services/
│   │   │   │   ├── authService.ts
│   │   │   │   └── firebaseAuth.ts
│   │   │   └── types/
│   │   │       └── auth.types.ts
│   │   └── feedback/
│   │       ├── components/
│   │       │   ├── feedback-form/
│   │       │   │   ├── index.tsx
│   │       │   │   └── styles.ts
│   │       │   ├── feedback-list/
│   │       │   │   ├── index.tsx
│   │       │   │   └── styles.ts
│   │       │   ├── feedback-item/
│   │       │   │   ├── index.tsx
│   │       │   │   └── styles.ts
│   │       │   └── star-rating/
│   │       │       ├── index.tsx
│   │       │       └── styles.ts
│   │       ├── hooks/
│   │       │   ├── useFeedbacks.ts
│   │       │   └── useFeedbackForm.ts
│   │       ├── services/
│   │       │   ├── feedbackService.ts
│   │       │   └── firestoreService.ts
│   │       └── types/
│   │           └── feedback.types.ts
│   ├── shared/
│   │   ├── components/
│   │   │   └── ui/
│   │   │       ├── button/
│   │   │       │   ├── index.tsx
│   │   │       │   └── styles.ts
│   │   │       ├── input/
│   │   │       │   ├── index.tsx
│   │   │       │   └── styles.ts
│   │   │       ├── loading/
│   │   │       │   ├── index.tsx
│   │   │       │   └── styles.ts
│   │   │       └── error-message/
│   │   │           ├── index.tsx
│   │   │           └── styles.ts
│   │   ├── hooks/
│   │   │   ├── useNetwork.ts
│   │   │   └── useAppState.ts
│   │   ├── services/
│   │   │   ├── firebase.ts
│   │   │   └── api.ts
│   │   ├── utils/
│   │   │   ├── validation.ts
│   │   │   ├── dateUtils.ts
│   │   │   └── constants.ts
│   │   └── types/
│   │       └── common.types.ts
│   ├── navigation/
│   │   ├── AppNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   └── MainNavigator.tsx
│   └── styles/
│       ├── colors.ts
│       ├── typography.ts
│       ├── spacing.ts
│       └── theme.ts
├── package.json
├── tsconfig.json
├── .eslintrc.js
├── .prettierrc
├── eas.json
└── README.md
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Expo CLI (`npm install -g @expo/cli`)
- Conta Firebase configurada
- Expo Go app no dispositivo/emulador

### Instalação
```bash
# Clone o repositório
git clone <repository-url>
cd test-mobile-leve-saude

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas credenciais do Firebase

# Execute em modo desenvolvimento
npx expo start
```

### EAS Build (Desenvolvimento)
```bash
# Configure o EAS
npx eas build:configure

# Build para desenvolvimento
npx eas build --platform android --profile development
npx eas build --platform ios --profile development
```

---

## 🔧 Configurações

### TypeScript Path Mapping
Configurar alias `@` no `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/features/*": ["src/features/*"],
      "@/shared/*": ["src/shared/*"],
      "@/navigation/*": ["src/navigation/*"],
      "@/styles/*": ["src/styles/*"]
    }
  }
}
```

### Firebase
- Configurar projeto no Firebase Console
- Habilitar Authentication (email/password)
- Configurar Firestore Database
- Adicionar credenciais no arquivo `.env`

### Expo
- Criar conta no Expo
- Configurar projeto no EAS
- Configurar `eas.json` para builds

### EAS Build
```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  }
}
```

---

## 📱 Telas da Aplicação

### 1. Tela de Login (`@/features/auth/components/login-form`)
- Campos: Email e Senha com validação
- Botão: "Entrar" com estado de loading
- Link: "Criar conta" para navegação
- Tratamento de erros de autenticação

### 2. Tela de Registro (`@/features/auth/components/register-form`)
- Campos: Nome, Email e Senha com validação
- Validação de força da senha
- Botão: "Cadastrar" com estado de loading
- Feedback de sucesso/erro

### 3. Tela Principal (Feedbacks) (`@/features/feedback/components/feedback-list`)
- Lista de feedbacks do usuário com pull-to-refresh
- Botão flutuante: "+" para novo feedback
- Estados vazios e de loading
- Menu: Logout com confirmação

### 4. Tela de Novo Feedback (`@/features/feedback/components/feedback-form`)
- Sistema de estrelas (1-5) obrigatório
- Campo de comentário com contador de caracteres
- Validação em tempo real
- Botões: "Cancelar" e "Enviar" com estados

---

## 📝 Critérios de Qualidade

- ✅ **TypeScript**: Uso adequado de tipos e interfaces
- ✅ **Arquitetura Modular**: Features autocontidas e organizadas
- ✅ **Importações com @**: Alias para imports limpos e organizados
- ✅ **Componentização**: Componentes reutilizáveis e modulares
- ✅ **Performance**: Otimizações de renderização e memoização
- ✅ **Acessibilidade**: Suporte a leitores de tela e navegação por teclado
- ✅ **UX**: Interface intuitiva e responsiva
- ✅ **Clean Code**: Código limpo, bem documentado e testável
- ✅ **Separação de Responsabilidades**: Lógica, UI e estilos separados

---

## 🎨 Design System

### Cores (`@/styles/colors.ts`)
```ts
export const colors = {
  primary: '#007AFF',
  secondary: '#8E8E93',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  background: '#FFFFFF',
  surface: '#F2F2F7',
  text: '#000000',
  textSecondary: '#8E8E93',
  border: '#C6C6C8',
} as const;
```

### Tipografia (`@/styles/typography.ts`)
```ts
export const typography = {
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  caption: {
    fontSize: 14,
    fontWeight: '300',
  },
} as const;
```

### Espaçamento (`@/styles/spacing.ts`)
```ts
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;
```

### Componentes UI (`@/shared/components/ui/`)
- **Button**: Botão reutilizável com variantes e estados
- **Input**: Campo de entrada com validação e estados
- **Loading**: Indicador de carregamento consistente
- **ErrorMessage**: Exibição de erros padronizada
- **StarRating**: Sistema de 5 estrelas interativo
- **FeedbackCard**: Card para exibição de feedbacks
- **FloatingButton**: Botão flutuante para ações principais

---

## 🔄 Fluxo de Dados

1. **Autenticação** → Firebase Auth → AsyncStorage
2. **Envio de Feedback** → Validação → Firestore
3. **Listagem** → Firestore (filtrado por usuário) → Cache local
4. **Sincronização** → Tempo real com Firestore
5. **Estados** → Gerenciados por hooks customizados

---

## 🧪 Testes e Qualidade

### Estrutura de Testes
```
src/
  __tests__/
    features/
      auth/
        components/
        hooks/
        services/
      feedback/
        components/
        hooks/
        services/
    shared/
      components/
      hooks/
      utils/
```

### Ferramentas de Qualidade
- **ESLint**: Linting com regras específicas para React Native
- **Prettier**: Formatação automática de código
- **TypeScript**: Verificação de tipos em tempo de compilação
- **Husky**: Git hooks para qualidade de código

---

## 📊 Funcionalidades Futuras

- [ ] **Testes Unitários**: Jest + React Native Testing Library
- [ ] **Testes E2E**: Detox para testes de integração
- [ ] **Notificações push**: Firebase Cloud Messaging
- [ ] **Edição de feedbacks**: Funcionalidade de edição
- [ ] **Categorização**: Tags e filtros por categoria
- [ ] **Upload de imagens**: Anexar fotos aos feedbacks
- [ ] **Modo offline**: Sincronização quando online
- [ ] **Temas**: Suporte a tema claro/escuro
- [ ] **Animações**: Transições e micro-interações
- [ ] **Internacionalização**: Suporte a múltiplos idiomas
- [ ] **Analytics**: Tracking de eventos e métricas
- [ ] **Crashlytics**: Monitoramento de crashes

---

## 📚 Documentação Adicional

- **Guia de Contribuição**: Como contribuir para o projeto
- **Padrões de Código**: Convenções e boas práticas
- **Arquitetura**: Documentação técnica detalhada
- **API Reference**: Documentação dos serviços e hooks
- **Deploy**: Guia de deploy e CI/CD 