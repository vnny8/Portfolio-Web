# Estágio 1 
# Imagem Node.js completa para ter todas as ferramentas de build
FROM node:18-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de manifesto de pacotes
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Instala as dependências
# --frozen-lockfile garante que as mesmas versões sejam instaladas
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Copia o resto do código do projeto para o container
COPY . .

# Executa o script de build do Next.js
RUN npm run build

# ---

# Estágio 2: Runner - Onde a aplicação vai rodar
# Imagem Node.js mais leve, pois não é necessário as ferramentas de build
FROM node:18-alpine AS runner

WORKDIR /app

# Cria um usuário não-root para rodar a aplicação (melhor prática de segurança)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia os artefatos de build do estágio 'builder'
# Apenas o que é necessário para rodar a aplicação em produção
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Muda o proprietário dos arquivos para o usuário não-root
RUN chown -R nextjs:nodejs .

# Define o usuário que vai rodar o processo
USER nextjs

# Expõe a porta que o Next.js usa
EXPOSE 3000

# Define a variável de ambiente para produção
ENV NODE_ENV=production

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
