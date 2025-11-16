---
title: 'Política de Privacidade'
description: 'Política de Privacidade do Glitch Text Generator - Saiba como protegemos sua privacidade e como coletamos e usamos dados'
date: '2025-11-16'
author: 'Admin'
tags: ['política de privacidade', 'proteção de dados', 'privacidade do usuário']
language: 'pt'
---

**Data de vigência: 16 de novembro de 2025**

Bem-vindo ao Glitch Text Generator (doravante denominado "o Site" ou "nós"). Levamos muito a sério a proteção de sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações.

## 1. Visão Geral da Coleta de Informações

### 1.1 Informações que NÃO Coletamos

**O Site se compromete a:**

- ❌ **Não armazenar nenhum conteúdo de texto que você insere**: Todo o conteúdo que você insere no gerador de texto é processado localmente apenas em seu navegador e nunca é carregado em nossos servidores
- ❌ **Não exigir registro ou login**: Você pode usar todos os recursos sem criar uma conta
- ❌ **Não coletar informações de identificação pessoal**: Não coletamos seu nome, e-mail, número de telefone ou outras informações pessoais
- ❌ **Não usar Cookies para armazenar dados pessoais**: Não armazenamos nenhuma informação pessoalmente identificável através de Cookies

### 1.2 Dados Anônimos que Coletamos

Para melhorar a qualidade do serviço e a experiência do usuário, coletamos as seguintes informações estatísticas anônimas através de ferramentas de análise de terceiros:

**Coletado via Google Analytics:**

- Visualizações de página e caminhos de navegação
- Tipos de dispositivos usados (desktop, móvel, tablet, etc.)
- Tipo e versão do navegador
- Informações do sistema operacional
- Localização geográfica (nível de país/região e cidade)
- Fontes de tráfego (mecanismos de busca, acesso direto, links externos, etc.)
- Tempo gasto nas páginas
- Tipos de geradores usados (Zalgo, Cursed, Flip, etc.)

**Coletado via Microsoft Clarity:**

- Reproduções de sessão anônimas (para analisar padrões de interação do usuário)
- Dados de mapas de calor (cliques, comportamento de rolagem)
- Métricas de desempenho de página
- Logs de erros JavaScript

**Nota importante:** Todos esses dados são anônimos e não estão vinculados à sua identidade pessoal. Não podemos identificar usuários individuais específicos através desses dados.

## 2. Métodos de Processamento de Dados

### 2.1 Processamento Local

Todas as funções de conversão de texto são concluídas localmente em seu navegador:

- **Conversão de caracteres Unicode**: Implementado usando JavaScript frontend puro, nenhum envolvimento do servidor necessário
- **Visualização em tempo real**: Todos os efeitos de visualização são renderizados no lado do cliente
- **Cópia de texto**: A função de cópia usa a API nativa de área de transferência do navegador

**Implementação técnica:**

- Usa a biblioteca `unicode-text-decorator` para conversão de símbolos alfanuméricos matemáticos
- Usa a biblioteca `confusables` para ofuscação de caracteres
- Dicionários de mapeamento de caracteres personalizados para efeitos especiais (Zalgo, Cursed, Glitch, etc.)

Isso significa que o conteúdo do seu texto nunca sai do seu dispositivo; não podemos ver ou armazenar o que você insere.

### 2.2 Sem Armazenamento em Servidor

O Site é implantado no Cloudflare usando Geração de Site Estático (SSG):

- O site consiste em páginas HTML estáticas pré-renderizadas
- Sem servidor backend ou banco de dados
- Nenhuma possibilidade de armazenar dados do usuário

## 3. Serviços de Terceiros

### 3.1 Google Analytics

**Propósito:** Análise de tráfego do site e estatísticas de comportamento do usuário

**Tipos de dados coletados:**

- Estatísticas de visita anônimas
- Métricas de desempenho de página
- Informações de dispositivo e navegador do usuário
- Localização geográfica (nível de país/cidade)

**Período de retenção de dados:** De acordo com as configurações padrão do Google Analytics, os dados são retidos por 26 meses

**Controles de privacidade:** Você pode optar por não participar do rastreamento do Google Analytics:

- Instalando o [Complemento de navegador de desativação do Google Analytics](https://tools.google.com/dlpage/gaoptout)
- Ativando "Não rastrear" em seu navegador
- Usando o modo de privacidade/anônimo do seu navegador

**Mais informações:** [Política de Privacidade do Google Analytics](https://policies.google.com/privacy)

### 3.2 Microsoft Clarity

**Propósito:** Análise de experiência do usuário e otimização do site

**Tipos de dados coletados:**

- Reproduções de sessão anônimas
- Mapas de calor e mapas de rolagem
- Análise de padrões de cliques
- Dados de desempenho de página

**Processamento de dados:** O Microsoft Clarity não coleta nenhuma informação pessoalmente identificável (PII); todos os dados são anônimos

**Proteção de privacidade:** O Clarity mascara automaticamente informações confidenciais (como conteúdo de campos de entrada de senha)

**Mais informações:** [Política de Privacidade do Microsoft Clarity](https://privacy.microsoft.com/privacystatement)

### 3.3 Cloudflare

**Propósito:** Hospedagem de site e Rede de Entrega de Conteúdo (CDN)

**Dados que o Cloudflare pode coletar:**

- Endereços IP (para proteção de segurança e análise de tráfego)
- Tipo e versão do navegador
- Carimbos de data/hora de acesso
- URLs de página solicitadas

**Recursos de segurança:**

- Proteção DDoS
- Criptografia SSL/TLS
- Firewall de Aplicativo Web (WAF)

**Mais informações:** [Política de Privacidade da Cloudflare](https://www.cloudflare.com/privacypolicy/)

## 4. Uso de Cookies

### 4.1 Cookies que Usamos

O Site usa Cookies mínimos para fornecer funcionalidade básica:

**Cookies Essenciais (não podem ser desativados):**

- Configurações de preferência de tema (modo claro/escuro)
- Preferência de seleção de idioma (10 opções de idioma: en, zh, es, fr, de, ja, ko, ru, pt, id)
- Manutenção do estado da sessão

**Cookies Analíticos (opcionais):**

- Cookies do Google Analytics (\_ga, \_gid, \_gat)
- Cookies do Microsoft Clarity (\_clck, \_clsk)

### 4.2 Como Gerenciar Cookies

Você pode gerenciar ou excluir Cookies através das configurações do navegador:

- **Chrome:** Configurações > Privacidade e segurança > Cookies e outros dados do site
- **Firefox:** Opções > Privacidade e Segurança > Cookies e Dados de Sites
- **Safari:** Preferências > Privacidade > Gerenciar Dados de Sites
- **Edge:** Configurações > Privacidade, pesquisa e serviços > Permissões de cookies e sites

**Nota:** Desativar os Cookies pode afetar certas funcionalidades do site, como configurações de tema e preferências de idioma.

## 5. Segurança de Dados

### 5.1 Medidas de Proteção Técnica

Implementamos as seguintes medidas de segurança para proteger suas informações:

- **Criptografia HTTPS:** Todas as transmissões de dados são criptografadas via SSL/TLS
- **CDN Cloudflare:** Fornece proteção DDoS e Firewall de Aplicativo Web
- **Arquitetura de site estático:** Sem banco de dados ou backend, reduzindo riscos de violação de dados
- **Processamento local:** A conversão de texto é concluída inteiramente em seu navegador; os dados nunca saem do seu dispositivo

### 5.2 Segurança de Serviços de Terceiros

Os serviços de terceiros que usamos (Google Analytics, Microsoft Clarity, Cloudflare) são todos provedores líderes do setor com padrões de segurança rigorosos e medidas de proteção de privacidade.

## 6. Proteção da Privacidade de Crianças

O Site não coleta intencionalmente informações pessoais de crianças menores de 13 anos. Se você é pai ou responsável e descobre que seu filho nos forneceu informações pessoais, entre em contato conosco e excluiremos imediatamente as informações relevantes.

## 7. Transferências Internacionais de Dados

O Site é servido através da rede CDN global da Cloudflare, e seus dados podem ser transferidos entre servidores em diferentes países/regiões. Garantimos que todas as transferências de dados estejam em conformidade com as leis de proteção de dados aplicáveis.

**Regiões aplicáveis:**

- Usuários da UE: Cumprimos o Regulamento Geral de Proteção de Dados (GDPR)
- Usuários dos EUA: Cumprimos a Lei de Privacidade do Consumidor da Califórnia (CCPA)
- Outras regiões: Cumprimos as leis locais de proteção de dados aplicáveis

## 8. Seus Direitos

### 8.1 Acesso e Controle de Dados

Como não coletamos nem armazenamos seus dados pessoais:

- ✅ **Direito de acesso:** Não temos dados pessoais sobre você para acessar
- ✅ **Direito de exclusão:** O texto que você insere nunca é armazenado e não requer exclusão
- ✅ **Direito à portabilidade de dados:** Todo o texto gerado pode ser livremente copiado e usado
- ✅ **Direito de oposição:** Você pode desativar Cookies analíticos através das configurações do navegador

### 8.2 Controle de Dados Analíticos

Você pode controlar a coleta de dados analíticos através de:

1. **Desativar Google Analytics:**
   - Instalar a extensão de navegador de desativação do Google Analytics
   - Ativar o recurso "Não rastrear" do seu navegador

2. **Desativar Microsoft Clarity:**
   - Bloquear o domínio clarity.ms em seu navegador
   - Usar o modo de privacidade/anônimo para navegação

3. **Limpar Cookies:**
   - Limpar regularmente os Cookies do navegador
   - Usar os recursos de aprimoramento de privacidade do seu navegador

## 9. Atualizações da Política de Privacidade

Podemos atualizar esta Política de Privacidade periodicamente. Mudanças significativas serão comunicadas através de:

- Anúncios proeminentes na página inicial do site
- Atualização da "Data de Vigência" no topo desta página
- Lembretes através do sistema de notificação do site

**Recomendação:** Revise esta Política de Privacidade regularmente para entender como protegemos suas informações.

## 10. Notificação de Violação de Dados

Embora não armazenemos dados do usuário, se ocorrer um incidente de segurança envolvendo serviços de terceiros, nós:

1. Investigaremos imediatamente o escopo e o impacto do incidente
2. Publicaremos um anúncio no site para notificar os usuários
3. Cooperaremos com os provedores de serviços relevantes para implementar medidas corretivas
4. Relataremos às autoridades reguladoras conforme exigido por lei

## 11. Notas de Uso Específicas da Plataforma

### 11.1 Usuários do Discord

Se você usar texto gerado por este site no Discord:

- O texto gerado está sujeito à política de privacidade do Discord
- O Discord pode armazenar o conteúdo de suas mensagens
- Cumpra as Diretrizes da Comunidade e os Termos de Serviço do Discord

### 11.2 Usuários do Roblox

Se você usar texto gerado por este site no Roblox:

- O texto gerado está sujeito à política de privacidade do Roblox
- O Roblox pode filtrar ou registrar o conteúdo do chat
- Cumpra a Política de Conteúdo e os Termos de Uso do Roblox

### 11.3 Usuários do Minecraft

Se você usar texto gerado por este site no Minecraft:

- Os servidores podem registrar o histórico de chat
- Diferentes servidores podem ter diferentes políticas de privacidade
- Cumpra as regras do servidor e o EULA do Minecraft

## 12. Entre em Contato Conosco

Se você tiver alguma dúvida, comentário ou reclamação sobre esta Política de Privacidade, entre em contato conosco através de:

- Visite nossa [página Sobre](/about) para obter informações de contato
- Envie uma mensagem através do formulário de contato fornecido no site

**Tempo de resposta:** Responderemos dentro de 7 dias úteis após o recebimento de sua solicitação.

## 13. Conformidade Legal

### 13.1 Leis Aplicáveis

Esta Política de Privacidade é regida pelas seguintes leis e regulamentos:

- Regulamento Geral de Proteção de Dados (GDPR) - aplicável a usuários da UE
- Lei de Privacidade do Consumidor da Califórnia (CCPA) - aplicável a residentes da Califórnia
- Outras leis internacionais e regionais de proteção de dados aplicáveis

### 13.2 Resolução de Disputas

Quaisquer disputas decorrentes desta Política de Privacidade devem primeiro ser resolvidas através de negociação amigável. Se a negociação falhar, as disputas devem ser submetidas a um tribunal de jurisdição competente.

## 14. Resumo

**Nossos Compromissos de Privacidade:**

✅ **Processamento totalmente local**: O conteúdo do seu texto nunca sai do seu navegador  
✅ **Sem necessidade de registro**: Use sem fornecer informações pessoais  
✅ **Análise anônima**: Apenas dados estatísticos anônimos coletados para melhorar o serviço  
✅ **Transparência**: Explicação clara dos dados que coletamos e como os usamos  
✅ **Controle do usuário**: Você pode desativar recursos analíticos a qualquer momento  
✅ **Segurança de dados**: Transmissão de dados protegida via HTTPS e Cloudflare

**Em termos simples:** Não sabemos qual texto você insere e não armazenamos nenhuma de suas informações pessoais. Coletamos apenas estatísticas anônimas de uso do site para melhorar a experiência do usuário.

---

**Última atualização: 16 de novembro de 2025**

Obrigado por usar o Glitch Text Generator! Estamos comprometidos em proteger sua privacidade enquanto fornecemos a melhor experiência de geração de texto.
