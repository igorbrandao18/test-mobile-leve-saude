# test-mobile-leve-saude

## 📱 FeedbackHub - Aplicação Mobile

Aplicação mobile desenvolvida em React Native com Expo para que usuários finais possam enviar e visualizar seus próprios feedbacks. O projeto segue **arquitetura modular por features** com importações usando alias `@` para melhor organização e escalabilidade.

## 🏗 Arquitetura Modular por Features

O projeto segue o padrão **modularizado por features/domínios**, facilitando a escalabilidade, manutenção e testabilidade. Cada feature é autocontida com seus próprios componentes, hooks, serviços e tipos.

### Organização dos Componentes de Features

Para manter o código limpo, modular e de fácil manutenção, os componentes de cada feature devem ser organizados da seguinte forma:

- **Cada componente em sua própria pasta** dentro de `components/` (ex: `login-form/`, `feedback-list/`, `star-rating/`)
- **Nomes de pastas e arquivos em minúsculo e kebab-case** (ex: `login-form`, `feedback-list`, `star-rating`)
- **Arquivo principal do componente chamado `index.tsx`**
- **Estilos separados em um arquivo `styles.ts`** na mesma pasta do componente
- **Nada de subpastas genéricas** (ex: não usar `components/LoginForm.tsx`, mas sim `components/login-form/index.tsx`)

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

## 🎨 Design System

### Cores
- **Primária**: `#fb4c02` (Laranja vibrante)
- **Secundária**: `#5a1043` (Roxo escuro)
- **Background**: `#FFFFFF` (Branco)
- **Texto**: `#2C3E50` (Azul escuro)

### Componentes UI
- **Button**: Botão reutilizável com variantes e estados
- **Input**: Campo de entrada com validação e estados
- **Loading**: Indicador de carregamento consistente
- **ErrorMessage**: Exibição de erros padronizada
- **StarRating**: Sistema de 5 estrelas interativo

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

## 📁 Estrutura do Projeto

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

## 🔄 Fluxo de Dados

1. **Autenticação** → Firebase Auth → AsyncStorage
2. **Envio de Feedback** → Validação → Firestore
3. **Listagem** → Firestore (filtrado por usuário) → Cache local
4. **Sincronização** → Tempo real com Firestore
5. **Estados** → Gerenciados por hooks customizados

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

## 📚 Documentação Adicional

- **Guia de Contribuição**: Como contribuir para o projeto
- **Padrões de Código**: Convenções e boas práticas
- **Arquitetura**: Documentação técnica detalhada
- **API Reference**: Documentação dos serviços e hooks
- **Deploy**: Guia de deploy e CI/CD 