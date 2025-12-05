# Conversor CSV para TXT Tabulado (Posicional)

**Status:** Nova
**Prioridade:** Alta
**Data de Criação:** 2025-12-05

---

## Resumo Executivo

Sistema web para conversão de arquivos CSV em arquivos TXT tabulados (posicionais) com layout fixo. O usuário faz upload de um CSV, configura o mapeamento de campos via interface drag-and-drop, e o sistema gera um arquivo TXT com campos de tamanho fixo seguindo o layout de referência para integração com sistemas legados (OdontoPREV).

**Requisito Técnico:** Todo o projeto deve ser implementado em um único arquivo `index.html` contendo HTML, CSS e JavaScript embutidos.

---

## Contexto de Negócio

### Problema / Necessidade
Atualmente a conversão de arquivos CSV para o formato TXT posicional é feita manualmente, gerando **erros frequentes** de formatação e posicionamento dos campos. Isso impacta a integração com sistemas que exigem layout específico.

### Objetivo de Negócio
- Eliminar erros de conversão manual
- Padronizar o processo de geração de arquivos TXT posicionais
- Reduzir tempo gasto na preparação de arquivos para integração

### Métricas de Sucesso / KPIs
- Redução de 100% nos erros de formatação de arquivos
- Tempo de processamento de arquivo inferior ao processo manual
- Taxa de retrabalho próxima a zero

### Stakeholders
- **Usuários Finais:** Equipe de Operações
- **Frequência de Uso:** Mensal (fechamento)

---

## Usuários e Personas

### Persona: Analista de Operações
- **Perfil:** Profissional da equipe de operações que prepara arquivos mensais para envio a parceiros/sistemas externos
- **Necessidades:** Converter dados de CSV para formato TXT posicional de forma rápida e confiável
- **Dores:** Erros frequentes na conversão manual, retrabalho, falta de padronização
- **Objetivos:** Gerar arquivos corretos na primeira tentativa, economizar tempo

---

## Requisitos Funcionais

### RF01 - Upload de Arquivo CSV
**Descrição:** O sistema deve permitir que o usuário faça upload de um arquivo CSV do computador local.
**Prioridade:** Must Have

**Regras:**
- Aceitar arquivos com extensão `.csv`
- Tamanho máximo: 10 MB
- Encoding: UTF-8
- CSV sempre terá linha de cabeçalho (header)
- Usuário deve poder escolher o delimitador (vírgula, ponto-e-vírgula, etc.)

**Critérios de Aceitação:**
- [ ] **Dado** que estou na tela principal **Quando** clico em "Selecionar arquivo" e escolho um CSV válido **Então** o sistema carrega o arquivo e exibe as colunas disponíveis
- [ ] **Dado** que seleciono um arquivo maior que 10 MB **Quando** tento fazer upload **Então** o sistema exibe mensagem de erro informando o limite
- [ ] **Dado** que seleciono um arquivo não-CSV **Quando** tento fazer upload **Então** o sistema rejeita e informa o formato esperado

---

### RF02 - Configuração de Delimitador
**Descrição:** O sistema deve permitir que o usuário escolha qual delimitador o CSV utiliza.
**Prioridade:** Must Have

**Opções de Delimitador:**
- Vírgula (`,`)
- Ponto-e-vírgula (`;`)
- Tab (`\t`)
- Pipe (`|`)

**Critérios de Aceitação:**
- [ ] **Dado** que faço upload de um CSV **Quando** seleciono o delimitador correto **Então** o sistema separa as colunas corretamente
- [ ] **Dado** que seleciono delimitador errado **Quando** visualizo as colunas **Então** percebo que estão incorretas e posso trocar o delimitador

---

### RF03 - Mapeamento de Campos (Drag-and-Drop)
**Descrição:** O sistema deve exibir uma interface drag-and-drop onde o usuário arrasta colunas do CSV para os campos do TXT.
**Prioridade:** Must Have

**Comportamento:**
- Lado esquerdo: Lista de colunas do CSV (baseado no header)
- Lado direito: Lista de campos do TXT com suas posições e tamanhos
- Usuário arrasta coluna CSV para campo TXT correspondente
- Campos mapeados ficam visualmente destacados
- Permitir remover mapeamento (desfazer)

**Campos do TXT (Layout de Referência):**

| Campo | Posição | Tamanho | Obrigatório |
|-------|---------|---------|-------------|
| Espaço inicial | 1 | 45 | Não |
| Identificação | 46 | - | Não |
| Espaço | - | 2 | Não |
| DataNascimento | - | 10 | Não |
| TelefoneComercial | - | 20 | Não |
| Endereco | - | 40 | Não |
| Cidade | - | 30 | Não |
| UF | - | 2 | Não |
| CEP | - | 9 | Não |
| TelefoneResidencial | - | 15 | Não |
| RG | - | 20 | Não |
| EstadoCivil | - | 10 | Não |
| Espaço | - | 20 | Não |
| Espaço | - | 20 | Não |
| Parentesco | - | 10 | Não |
| Carteirinha | - | 9 | Não |
| Acao | - | - | Não |
| Matricula | - | 18 | Não |
| CPF | - | 11 | **Sim** |
| Sexo | - | 1 | Não |
| NomeMae | - | 70 | Não |
| Espaço | - | 11 | Não |
| DataAdesao | - | 10 | Não |
| CodigoDaEmpresa | - | 20 | Não |
| Espaço | - | 20 | Não |
| Bairro | - | 20 | Não |
| Espaço | - | 38 | Não |
| Espaço | - | 1 | Não |
| Email | - | 50 | Não |
| Espaço | - | 107 | Não |
| DataExclusao | - | 10 | Não |
| Espaço | - | 18 | Não |
| Espaço | - | 20 | Não |
| Espaço | - | 2 | Não |
| Espaço | - | 1 | Não |
| Espaço | - | 4 | Não |
| Espaço | - | 6 | Não |
| Espaço | - | 11 | Não |
| Espaço | - | 3 | Não |
| Espaço | - | 3 | Não |
| Complemento | - | 20 | Não |
| Espaço | - | 1 | Não |
| Espaço | - | 45 | Não |
| Espaço | - | 45 | Não |
| Espaço | - | 45 | Não |
| Espaço | - | 45 | Não |
| Espaço | - | 45 | Não |
| OrgaoRG | - | 30 | Não |
| Espaço | - | 151 | Não |
| Nome | - | 70 | **Sim** |
| CodigoPlano | - | 4 | Não |
| Espaços finais | - | ~82 | Não |

**Critérios de Aceitação:**
- [ ] **Dado** que o CSV foi carregado **Quando** visualizo a tela de mapeamento **Então** vejo todas as colunas do CSV listadas à esquerda
- [ ] **Dado** que estou na tela de mapeamento **Quando** arrasto uma coluna CSV para um campo TXT **Então** o mapeamento é estabelecido e fica visualmente indicado
- [ ] **Dado** que um campo está mapeado **Quando** clico para remover o mapeamento **Então** o campo volta a ficar disponível

---

### RF04 - Salvar Configurações de Mapeamento
**Descrição:** O sistema deve permitir salvar e nomear configurações de mapeamento para reutilização futura.
**Prioridade:** Must Have

**Comportamento:**
- Botão "Salvar Configuração"
- Solicitar nome para a configuração
- Armazenar no localStorage do navegador
- Listar configurações salvas para carregar
- Permitir excluir configurações

**Critérios de Aceitação:**
- [ ] **Dado** que configurei um mapeamento **Quando** clico em "Salvar Configuração" e informo um nome **Então** a configuração é salva e aparece na lista
- [ ] **Dado** que tenho configurações salvas **Quando** acesso o sistema **Então** posso selecionar e carregar uma configuração existente
- [ ] **Dado** que seleciono uma configuração salva **Quando** clico em "Carregar" **Então** o mapeamento é restaurado automaticamente

---

### RF05 - Validações de Dados
**Descrição:** O sistema deve validar os dados do CSV antes de gerar o TXT.
**Prioridade:** Must Have

**Validações Obrigatórias:**

| Validação | Regra | Mensagem de Erro |
|-----------|-------|------------------|
| Campos Obrigatórios | CPF e Nome devem estar preenchidos | "Linha X: Campo [CAMPO] é obrigatório" |
| Formato CPF | 11 dígitos + dígitos verificadores válidos | "Linha X: CPF inválido" |
| Formato Data | Apenas dd/MM/yyyy | "Linha X: Data em formato inválido (esperado dd/MM/yyyy)" |
| Tamanho Nome | Máximo 70 caracteres | "Linha X: Nome excede 70 caracteres" |

**Comportamento em Erro:**
- Parar processamento ao encontrar erro
- Exibir lista completa de todos os erros encontrados
- Informar linha e campo com problema
- Não gerar arquivo até correção

**Critérios de Aceitação:**
- [ ] **Dado** que o CSV tem linha com CPF inválido **Quando** processo o arquivo **Então** o sistema exibe erro indicando a linha e o problema
- [ ] **Dado** que existem múltiplos erros **Quando** processo o arquivo **Então** o sistema lista todos os erros de uma vez
- [ ] **Dado** que há erros de validação **Quando** tento gerar o TXT **Então** o sistema bloqueia a geração até correção

---

### RF06 - Transformações de Dados
**Descrição:** O sistema deve aplicar transformações automáticas nos dados durante o processamento.
**Prioridade:** Must Have

**Transformações:**

| Transformação | Descrição | Exemplo |
|---------------|-----------|---------|
| Formatar Datas | Converter para dd/MM/yyyy | 2024-01-15 → 15/01/2024 |
| Converter Sexo | M/F para 1/3 | M → 1, F → 3 |
| Truncar Campos | Cortar textos que excedem tamanho máximo | "Nome muito grande..." → "Nome muito g" |
| Padding | Preencher com espaços até tamanho fixo | "ABC" (tam 10) → "ABC       " |
| Remover Acentos | Normalizar caracteres especiais | "José" → "Jose" |

**Critérios de Aceitação:**
- [ ] **Dado** que um campo de data está em formato ISO **Quando** processo **Então** o sistema converte para dd/MM/yyyy
- [ ] **Dado** que o campo Sexo contém "M" **Quando** processo **Então** o sistema grava "1" no TXT
- [ ] **Dado** que um nome tem 80 caracteres **Quando** processo **Então** o sistema trunca para 70 caracteres

---

### RF07 - Prévia do Resultado
**Descrição:** O sistema deve exibir uma prévia das primeiras 10 linhas do TXT antes da geração final.
**Prioridade:** Must Have

**Comportamento:**
- Botão "Visualizar Prévia"
- Exibir as primeiras 10 linhas processadas
- Mostrar em formato monospace para visualização posicional
- Permitir voltar e ajustar mapeamento se necessário

**Critérios de Aceitação:**
- [ ] **Dado** que configurei o mapeamento **Quando** clico em "Visualizar Prévia" **Então** vejo as primeiras 10 linhas do resultado
- [ ] **Dado** que estou na prévia **Quando** identifico erro no mapeamento **Então** posso voltar e ajustar

---

### RF08 - Geração e Download do TXT
**Descrição:** O sistema deve gerar o arquivo TXT posicional e disponibilizar para download.
**Prioridade:** Must Have

**Comportamento:**
- Botão "Gerar Arquivo"
- Processar todas as linhas do CSV
- Gerar arquivo TXT com layout posicional
- Nome automático: `OdontoPREV[MMYYYY].txt` (baseado na data atual)
- Iniciar download automaticamente

**Critérios de Aceitação:**
- [ ] **Dado** que o mapeamento está correto e validações passaram **Quando** clico em "Gerar Arquivo" **Então** o sistema processa e inicia download do TXT
- [ ] **Dado** que gero um arquivo em dezembro/2024 **Quando** o download inicia **Então** o nome do arquivo é "OdontoPREV122024.txt"

---

### RF09 - Barra de Progresso
**Descrição:** O sistema deve exibir uma barra de progresso durante o processamento.
**Prioridade:** Must Have

**Comportamento:**
- Exibir durante o processamento
- Mostrar porcentagem concluída
- Indicar quantidade de linhas processadas / total

**Critérios de Aceitação:**
- [ ] **Dado** que inicio o processamento de um arquivo grande **Quando** o sistema processa **Então** vejo a barra de progresso atualizando
- [ ] **Dado** que o processamento está em andamento **Quando** olho a barra **Então** vejo a porcentagem e contagem de linhas

---

## Jornada do Usuário

### Fluxo Principal (Happy Path)

```
1. Usuário acessa o sistema (index.html)
   ↓
2. Seleciona delimitador do CSV
   ↓
3. Faz upload do arquivo CSV
   ↓
4. Sistema exibe colunas do CSV e campos do TXT
   ↓
5. Usuário configura mapeamento via drag-and-drop
   (ou carrega configuração salva)
   ↓
6. Usuário clica em "Visualizar Prévia"
   ↓
7. Sistema exibe primeiras 10 linhas
   ↓
8. Usuário confirma e clica em "Gerar Arquivo"
   ↓
9. Sistema valida todos os dados
   ↓
10. Sistema processa (com barra de progresso)
    ↓
11. Download do TXT é iniciado automaticamente
    ↓
12. (Opcional) Usuário salva configuração para uso futuro
```

### Fluxos de Exceção

| Cenário | Comportamento |
|---------|---------------|
| Arquivo muito grande (>10MB) | Exibir erro e não carregar |
| Arquivo não é CSV | Exibir erro e solicitar arquivo correto |
| Erros de validação | Listar todos os erros com linha e campo |
| Campos obrigatórios não mapeados | Alertar antes de gerar |
| CPF inválido | Incluir na lista de erros com detalhes |

---

## Regras de Negócio

### RN01 - Layout Posicional Fixo
**Descrição:** Cada campo do TXT tem posição e tamanho fixos conforme layout de referência.
**Exemplo:** Campo Nome sempre terá 70 caracteres, preenchido com espaços à direita se necessário.

### RN02 - Conversão de Sexo
**Descrição:** O campo Sexo deve ser convertido de M/F para código numérico.
**Regra:** M = 1, F = 3

### RN03 - Formato de Data de Saída
**Descrição:** Todas as datas no TXT devem estar no formato dd/MM/yyyy.
**Exemplo:** 15/01/2024

### RN04 - Campos Obrigatórios
**Descrição:** CPF e Nome são obrigatórios e devem estar mapeados e preenchidos.
**Ação:** Bloquear geração se não estiverem presentes.

### RN05 - Validação de CPF
**Descrição:** CPF deve ter 11 dígitos e passar na validação de dígitos verificadores.
**Ação:** Rejeitar CPFs inválidos.

### RN06 - Nomenclatura do Arquivo
**Descrição:** Nome do arquivo segue padrão `OdontoPREV[MMYYYY].txt`.
**Exemplo:** OdontoPREV122024.txt para dezembro de 2024.

---

## Critérios de Aceitação (Geral)

### Funcionalidade
- [ ] Upload de CSV funciona corretamente
- [ ] Mapeamento drag-and-drop é intuitivo e funcional
- [ ] Configurações podem ser salvas e carregadas
- [ ] Validações bloqueiam arquivo inválido
- [ ] Prévia exibe resultado correto
- [ ] TXT gerado segue layout posicional especificado
- [ ] Download funciona em navegadores modernos

### Usabilidade
- [ ] Interface clara e auto-explicativa
- [ ] Feedback visual para todas as ações
- [ ] Mensagens de erro detalhadas e úteis
- [ ] Barra de progresso durante processamento

### Performance
- [ ] Processa arquivos de até 10 MB
- [ ] Suporta até 10.000 linhas

---

## Restrições Técnicas

- **Implementação:** Arquivo único `index.html` com CSS e JavaScript embutidos
- **Dependências:** Nenhuma dependência externa (vanilla JS)
- **Armazenamento:** localStorage para configurações salvas
- **Processamento:** 100% client-side (no browser)
- **Autenticação:** Não requer (acesso livre)

---

## Restrições e Limitações

- Sistema NÃO suporta múltiplos layouts de TXT (apenas o de referência)
- Sistema NÃO processa múltiplos arquivos simultaneamente
- Sistema NÃO tem agendamento automático
- Sistema NÃO exporta para outros formatos além de TXT
- Dados NÃO são enviados para servidor (processamento local)

---

## Riscos e Premissas

### Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| CSVs com formatação inconsistente | Média | Alto | Permitir escolha de delimitador, validações robustas |
| Mudanças no layout do TXT | Baixa | Alto | Documentar layout atual, facilitar manutenção do código |
| Erros de mapeamento pelo usuário | Média | Médio | Prévia antes de gerar, validações claras |
| Compatibilidade de navegadores | Baixa | Médio | Testar em Chrome, Firefox, Edge |

### Premissas

- Layout do TXT de referência não mudará no curto prazo
- Arquivos CSV sempre terão linha de cabeçalho
- Usuários têm conhecimento básico sobre CSV e mapeamento de dados
- Usuários utilizam navegadores modernos e atualizados

---

## Funcionalidades Futuras (Backlog)

As seguintes funcionalidades foram identificadas para versões futuras:

1. **Múltiplos layouts de TXT** - Suportar diferentes formatos de saída
2. **Processamento em lote** - Processar vários CSVs de uma vez
3. **Agendamento automático** - Processar arquivos automaticamente
4. **Exportar para outros formatos** - Além de TXT, exportar para outros

---

## Notas e Observações

- O código de referência fornecido (Angular) serve como base para o layout posicional do TXT
- O novo sistema será standalone (arquivo único HTML) para facilitar distribuição e uso
- Toda a lógica de transformação e geração do arquivo posicional deve seguir o padrão do código de referência

---

## Referência Técnica - Tamanhos dos Campos

Baseado no código de referência (`gerarLinhaPosicional`):

```
Posição | Tamanho | Campo
--------|---------|------
1       | 45      | Espaço
46      | var     | Identificação
-       | 2       | Espaço
-       | 10      | DataNascimento
-       | 20      | TelefoneComercial
-       | 40      | Endereco
-       | 30      | Cidade
-       | 2       | UF
-       | 9       | CEP
-       | 15      | TelefoneResidencial
-       | 20      | RG
-       | 10      | EstadoCivil
-       | 20      | Espaço
-       | 20      | Espaço
-       | 10      | Parentesco
-       | 9       | Carteirinha
-       | var     | Acao
-       | 18      | Matricula
-       | 11      | CPF
-       | 1       | Sexo (1=M, 3=F)
-       | 70      | NomeMae
-       | 11      | Espaço
-       | 10      | DataAdesao
-       | 20      | CodigoDaEmpresa
-       | 20      | Espaço
-       | 20      | Bairro
-       | 38      | Espaço
-       | 1       | Espaço
-       | 50      | Email
-       | 107     | Espaço
-       | 10      | DataExclusao
-       | 18      | Espaço
-       | 20      | Espaço
-       | 2       | Espaço
-       | 1       | Espaço
-       | 4       | Espaço
-       | 6       | Espaço
-       | 11      | Espaço
-       | 3       | Espaço
-       | 3       | Espaço
-       | 20      | Complemento
-       | 1       | Espaço
-       | 45      | Espaço
-       | 45      | Espaço
-       | 45      | Espaço
-       | 45      | Espaço
-       | 45      | Espaço
-       | 30      | OrgaoRG
-       | 151     | Espaço
-       | 70      | Nome
-       | 4       | CodigoPlano
-       | 20      | Espaço
-       | 15      | Espaço
-       | 3       | Espaço
-       | 7       | Espaço
-       | 1       | Espaço
-       | 5       | Espaço
-       | 1       | Espaço
-       | 30      | Espaço
-       | 11      | Espaço
-       | 20      | Espaço
-       | 9       | Espaço
-       | 1       | Espaço
-       | 4       | Espaço
-       | 1       | Espaço
```

---

*Documentação gerada em 2025-12-05*
*Analista: Claude (Business Requirements Analyst)*
