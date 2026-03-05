# Simulador Ético: A Armadilha da Causa Nobre (Noble Cause Corruption)

![Versão](https://img.shields.io/badge/versão-1.0.0-blue)
![Categoria](https://img.shields.io/badge/categoria-ética%20aplicada-success)
![Referência](https://img.shields.io/badge/referência-STF%20%7C%20PPSC-orange)

## 🎯 Sobre o Simulador

Este simulador interativo coloca o usuário no papel de um(a) promotor(a) de justiça confrontado(a) com um dilema ético real: receber uma **prova robusta que inocenta o réu** em um caso de crime hediondo de grande comoção social. A partir de quatro decisões sequenciais, o sistema calcula o grau de exposição à **noble cause corruption** (corrupção pela causa nobre) e oferece feedback baseado em jurisprudência do STF e literatura especializada.

## 🧠 Conceito: Noble Cause Corruption

A "corrupção pela causa nobre" ocorre quando agentes do sistema de justiça, movidos pelo desejo legítimo de fazer justiça (proteger vítimas, punir culpados), **violam normas processuais ou éticas** acreditando que os fins justificam os meios.

> *"The greatest risk to justice is not the corrupt officer, but the well‑intentioned one who believes so strongly in his own rectitude that he no longer sees the procedural lines he crosses."* — PPSC (2019)

## ⚖️ O Dilema Proposto

**Caso**: Latrocínio com vítima criança (8 anos) - comoção nacional.  
**Prova excludente**: Câmera de segurança + testemunha + geolocalização provam que o acusado estava em outro local no momento do crime.

**Quatro momentos de decisão**:
1. O que fazer com a prova excludente?
2. Como reagir à pressão institucional (Procurador-Geral)?
3. Como lidar com a mãe da vítima?
4. O que fazer em plenário do Júri?

## 📊 Estrutura do Simulador


## 🎮 Como usar

1. **Abra o arquivo** `index.html` em qualquer navegador moderno
2. Leia a contextualização do caso e o dilema
3. Clique em "Iniciar Simulação"
4. Tome as 4 decisões sequenciais (cada escolha afeta sua pontuação)
5. Ao final, veja:
   - Seu perfil ético (Incontaminado, Ambíguo ou Causa Nobre)
   - Métricas de Noble Cause Corruption vs. Fidelidade ao Direito
   - Casos reais do STF relacionados
   - Feedback detalhado sobre cada decisão

## ⚙️ Lógica de Pontuação

Cada decisão contribui para duas métricas (0-100):

| Decisão | Opção | NCC | Direito |
|---------|-------|-----|---------|
| **1. Prova excludente** | Comunicar | 0 | +30 |
| | Ignorar | +30 | 0 |
| | Comunicar ao juiz (neutro) | +15 | +15 |
| **2. Pressão institucional** | Resistir | 0 | +25 |
| | Ceder | +25 | 0 |
| | Denunciar | 0 | +35 |
| **3. Mãe da vítima** | Explicar | 0 | +25 |
| | Omitir | +30 | 0 |
| | Silêncio | +10 | +10 |
| **4. Plenário do Júri** | Revelar prova | 0 | +40 |
| | Silenciar | +40 | 0 |
| | Discurso ambíguo | +20 | +20 |

## 📚 Casos Reais Citados

- **HC 180.144/SP (2020)** - Reconhecimento fotográfico irregular
- **HC 165.704/PR (2019)** - Prova excludente ignorada
- **AP 937 (Caso Battisti)** - Decisão política vs. prova técnica
- **RHC 134.534/MG (2018)** - Promotor que omitiu prova de álibi

## 🛡️ Salvaguardas Institucionais (base teórica)

O simulador foi desenvolvido com base nas salvaguardas propostas pelo PPSC (2019) e pela literatura sobre vieses cognitivos:

- **Cooling-off investigativo**: pausa antes de decisões finais
- **Registro obrigatório de hipóteses descartadas**
- **Separação entre acolhimento à vítima e investigação**
- **Checklists de verificação de vieses (CEAP Camada 2)**

## 📖 Referências Acadêmicas

- PPSC (Public Prosecution Service of Canada). (2019). *Pathways to Justice: Report on the Review of the Justice System*. Ottawa.
- Findley, K. A., & Scott, M. S. (2006). The multiple dimensions of tunnel vision in criminal cases. *Wisconsin Law Review*, 291.
- Elaad, E. (2022). Cognitive biases in legal decision making. *Psychology, Crime & Law*, 28(4), 389-408.

## 🧪 Objetivo Pedagógico

Este simulador não tem função diagnóstica individual, mas sim **pedagógica e reflexiva**. Ao confrontar o usuário com dilemas reais, busca-se:

1. Desenvolver consciência sobre vieses inconscientes
2. Estimular a reflexão ética antes da tomada de decisão
3. Demonstrar como pressões externas afetam julgamentos
4. Fornecer repertório jurídico (jurisprudência) para decisões difíceis

## 📝 Licença

Este trabalho está licenciado sob a **Creative Commons Attribution-NonCommercial 4.0 International License**.  
Você pode compartilhar e adaptar livremente, desde que com atribuição e sem fins comerciais.

---

**Citação sugerida**:  
Arquiteturas da Dúvida. (2025). Simulador Ético: A Armadilha da Causa Nobre.  
https://www.arquiteturasdaduvida.org/simulador-causa-nobre

---

*Desenvolvido como parte do projeto "Arquiteturas da Dúvida: vieses cognitivos e contaminação probatória no sistema de justiça".*
