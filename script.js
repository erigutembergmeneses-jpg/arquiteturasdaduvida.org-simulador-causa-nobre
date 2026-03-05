/**
 * script.js · Simulador Ético: A Armadilha da Causa Nobre
 * 
 * Baseado em casos reais do STF e literatura sobre noble cause corruption
 * Referências: PPSC (2019); Findley & Scott (2006); Elaad (2022)
 */

class SimuladorCausaNobre {
    constructor() {
        this.respostas = {
            decisao1: null,
            decisao2: null,
            decisao3: null,
            decisao4: null
        };
        
        this.pontuacao = {
            ncc: 0, // Noble Cause Corruption (0-100)
            direito: 0 // Fidelidade ao Direito (0-100)
        };
        
        this.screens = [
            'intro-screen',
            'decision1-screen',
            'decision2-screen',
            'decision3-screen',
            'decision4-screen',
            'results-screen'
        ];
        
        this.currentScreen = 0;
        this.init();
    }

    init() {
        this.bindElements();
        this.attachEventListeners();
        this.showScreen(0);
    }

    bindElements() {
        // Telas
        this.screens.forEach(id => {
            this[`screen_${id}`] = document.getElementById(id);
        });

        // Botões de navegação
        this.startBtn = document.getElementById('start-simulator');
        
        // Decisão 1
        this.nextDecision1 = document.getElementById('next-decision1');
        this.decision1Options = document.querySelectorAll('#decision1-screen .option-card');
        
        // Decisão 2
        this.prevTo1 = document.getElementById('prev-to1');
        this.nextDecision2 = document.getElementById('next-decision2');
        this.decision2Options = document.querySelectorAll('#decision2-screen .option-card');
        
        // Decisão 3
        this.prevTo2 = document.getElementById('prev-to2');
        this.nextDecision3 = document.getElementById('next-decision3');
        this.decision3Options = document.querySelectorAll('#decision3-screen .option-card');
        
        // Decisão 4
        this.prevTo3 = document.getElementById('prev-to3');
        this.finishBtn = document.getElementById('finish-simulator');
        this.decision4Options = document.querySelectorAll('#decision4-screen .option-card');
        
        // Resultados
        this.restartBtn = document.getElementById('restart');
        this.shareBtn = document.getElementById('share');
        this.printBtn = document.getElementById('print');
    }

    attachEventListeners() {
        // Iniciar
        this.startBtn?.addEventListener('click', () => this.showScreen(1));

        // Decisão 1
        this.decision1Options.forEach(opt => {
            opt.addEventListener('click', (e) => {
                const value = opt.dataset.value;
                this.selectOption('decisao1', value, this.decision1Options);
                this.respostas.decisao1 = value;
                this.nextDecision1.disabled = false;
            });
        });
        this.nextDecision1?.addEventListener('click', () => this.showScreen(2));

        // Decisão 2
        this.decision2Options.forEach(opt => {
            opt.addEventListener('click', (e) => {
                const value = opt.dataset.value;
                this.selectOption('decisao2', value, this.decision2Options);
                this.respostas.decisao2 = value;
                this.nextDecision2.disabled = false;
            });
        });
        this.nextDecision2?.addEventListener('click', () => this.showScreen(3));
        this.prevTo1?.addEventListener('click', () => this.showScreen(1));

        // Decisão 3
        this.decision3Options.forEach(opt => {
            opt.addEventListener('click', (e) => {
                const value = opt.dataset.value;
                this.selectOption('decisao3', value, this.decision3Options);
                this.respostas.decisao3 = value;
                this.nextDecision3.disabled = false;
            });
        });
        this.nextDecision3?.addEventListener('click', () => this.showScreen(4));
        this.prevTo2?.addEventListener('click', () => this.showScreen(2));

        // Decisão 4
        this.decision4Options.forEach(opt => {
            opt.addEventListener('click', (e) => {
                const value = opt.dataset.value;
                this.selectOption('decisao4', value, this.decision4Options);
                this.respostas.decisao4 = value;
                this.finishBtn.disabled = false;
            });
        });
        this.finishBtn?.addEventListener('click', () => {
            this.calcularPontuacao();
            this.mostrarResultados();
            this.showScreen(5);
        });
        this.prevTo3?.addEventListener('click', () => this.showScreen(3));

        // Resultados
        this.restartBtn?.addEventListener('click', () => this.resetSimulador());
        this.shareBtn?.addEventListener('click', () => this.compartilhar());
        this.printBtn?.addEventListener('click', () => window.print());
    }

    selectOption(decisao, value, options) {
        options.forEach(opt => {
            opt.classList.remove('selected');
            if (opt.dataset.value === value) {
                opt.classList.add('selected');
            }
        });
    }

    showScreen(index) {
        // Esconder todas as telas
        this.screens.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.remove('active');
        });

        // Mostrar a tela atual
        const targetScreen = document.getElementById(this.screens[index]);
        if (targetScreen) {
            targetScreen.classList.add('active');
            this.currentScreen = index;
        }

        // Atualizar botões de navegação baseado no estado
        this.updateNavigationState();
    }

    updateNavigationState() {
        // Função para habilitar/desabilitar botões baseado nas respostas
        if (this.currentScreen === 1) {
            this.nextDecision1.disabled = !this.respostas.decisao1;
        } else if (this.currentScreen === 2) {
            this.nextDecision2.disabled = !this.respostas.decisao2;
        } else if (this.currentScreen === 3) {
            this.nextDecision3.disabled = !this.respostas.decisao3;
        } else if (this.currentScreen === 4) {
            this.finishBtn.disabled = !this.respostas.decisao4;
        }
    }

    calcularPontuacao() {
        // Reiniciar pontuações
        this.pontuacao.ncc = 0;
        this.pontuacao.direito = 0;

        // Decisão 1: O que fazer com a prova
        if (this.respostas.decisao1 === 'comunicar') {
            this.pontuacao.direito += 30;
        } else if (this.respostas.decisao1 === 'ignorar') {
            this.pontuacao.ncc += 30;
        } else if (this.respostas.decisao1 === 'juiz') {
            this.pontuacao.ncc += 15;
            this.pontuacao.direito += 15; // Meio termo
        }

        // Decisão 2: Pressão do Procurador-Geral
        if (this.respostas.decisao2 === 'resiste') {
            this.pontuacao.direito += 25;
        } else if (this.respostas.decisao2 === 'cede') {
            this.pontuacao.ncc += 25;
        } else if (this.respostas.decisao2 === 'denuncia') {
            this.pontuacao.direito += 35; // Atitude ética reforçada
        }

        // Decisão 3: Encontro com a mãe
        if (this.respostas.decisao3 === 'explica') {
            this.pontuacao.direito += 25;
        } else if (this.respostas.decisao3 === 'omite') {
            this.pontuacao.ncc += 30;
        } else if (this.respostas.decisao3 === 'acolhe_silêncio') {
            this.pontuacao.ncc += 10;
            this.pontuacao.direito += 10; // Neutro, mas omissão parcial
        }

        // Decisão 4: Plenário do Júri
        if (this.respostas.decisao4 === 'confessa') {
            this.pontuacao.direito += 40;
        } else if (this.respostas.decisao4 === 'silencia') {
            this.pontuacao.ncc += 40;
        } else if (this.respostas.decisao4 === 'absolvição_sutil') {
            this.pontuacao.ncc += 20;
            this.pontuacao.direito += 20; // Ambíguo
        }

        // Normalizar para 0-100
        const maxPossivel = 130; // Soma máxima possível de direito
        const maxPossivelNCC = 125; // Soma máxima possível de NCC
        
        this.pontuacao.direito = Math.min(100, Math.round((this.pontuacao.direito / maxPossivel) * 100));
        this.pontuacao.ncc = Math.min(100, Math.round((this.pontuacao.ncc / maxPossivelNCC) * 100));
    }

    mostrarResultados() {
        const title = document.getElementById('result-title');
        const profileBadge = document.getElementById('profile-badge');
        const analysis = document.getElementById('analysis');
        const casesList = document.getElementById('cases-list');
        const feedback = document.getElementById('feedback');
        
        // Determinar perfil
        let perfil = '';
        let descricaoPerfil = '';
        
        if (this.pontuacao.direito >= 80) {
            perfil = '⚖️ Promotor(a) Incontaminado(a)';
            descricaoPerfil = 'incorruptivel';
            analysis.innerHTML = `<p>Você demonstrou uma conduta ética exemplar, priorizando a justiça sobre a condenação a qualquer custo. Manteve-se fiel ao direito mesmo sob pressão institucional e emocional. Este é o perfil que o sistema de justiça democrático espera de seus agentes.</p>`;
        } else if (this.pontuacao.ncc >= 70) {
            perfil = '🔥 Portador(a) da Causa Nobre (Noble Cause Corruption)';
            descricaoPerfil = 'causa-nobre';
            analysis.innerHTML = `<p>Você sucumbiu à armadilha da causa nobre: priorizou a condenação em detrimento da verdade processual. A pressão por justiça (para a vítima) ofuscou o dever de imparcialidade. Em casos reais, condutas como essa levam a anulações de julgamentos no STF e, em situações extremas, à responsabilização criminal do agente.</p>`;
        } else {
            perfil = '🤔 Perfil Ambíguo - Em Conflito';
            descricaoPerfil = 'ambiguo';
            analysis.innerHTML = `<p>Suas escolhes oscilaram entre o dever legal e a pressão por condenação. Você sente o conflito, mas ainda não desenvolveu uma posição ética consolidada. Este perfil é comum em profissionais expostos a alta carga emocional sem suporte institucional adequado. Recomenda-se supervisão e treinamento em ética aplicada.</p>`;
        }

        title.textContent = perfil;
        profileBadge.textContent = perfil;
        profileBadge.className = `profile-badge ${descricaoPerfil}`;

        // Atualizar métricas
        document.getElementById('ncc-meter').style.width = `${this.pontuacao.ncc}%`;
        document.getElementById('direito-meter').style.width = `${this.pontuacao.direito}%`;
        document.getElementById('ncc-level').textContent = `${this.pontuacao.ncc}%`;
        document.getElementById('direito-level').textContent = `${this.pontuacao.direito}%`;

        // Casos reais do STF
        casesList.innerHTML = this.getCasosReais();

        // Feedback detalhado por decisão
        feedback.innerHTML = this.getFeedbackDetalhado();
    }

    getCasosReais() {
        return `
            <div class="case-item">
                <strong>HC 180.144/SP (2020):</strong> Reconhecimento fotográfico irregular + confissão extrajudicial sob pressão. STF anulou condenação por violação ao devido processo legal.
            </div>
            <div class="case-item">
                <strong>HC 165.704/PR (2019):</strong> Prova excludente ignorada pela acusação. STF concedeu habeas corpus de ofício e determinou soltura imediata.
            </div>
            <div class="case-item">
                <strong>AP 937 (Caso Battisti):</strong> Decisão política vs. prova técnica. STF priorizou critérios legais sobre pressão diplomática.
            </div>
            <div class="case-item">
                <strong>RHC 134.534/MG (2018):</strong> Promotor que omitiu prova de álibi foi investigado pela Corregedoria do MP.
            </div>
        `;
    }

    getFeedbackDetalhado() {
        let feedback = '<h3>📋 Análise das suas decisões:</h3><ul>';
        
        // Decisão 1
        feedback += `<li><strong>Prova excludente:</strong> `;
        if (this.respostas.decisao1 === 'comunicar') {
            feedback += `✅ Você agiu corretamente. O art. 156 do CPP impõe à acusação o dever de apresentar provas tanto de culpa quanto de inocência.`;
        } else if (this.respostas.decisao1 === 'ignorar') {
            feedback += `❌ Omitir prova de inocência viola o princípio da paridade de armas e pode configurar crime de prevaricação (art. 319 CP).`;
        } else {
            feedback += `⚠️ Repassar ao juiz sem se posicionar é uma forma de evasão de responsabilidade. O promotor é parte, não mero expectador.`;
        }
        feedback += '</li>';

        // Decisão 2
        feedback += `<li><strong>Pressão institucional:</strong> `;
        if (this.respostas.decisao2 === 'resiste') {
            feedback += `✅ Resistir a pressões hierárquicas é essencial para a autonomia funcional do MP.`;
        } else if (this.respostas.decisao2 === 'cede') {
            feedback += `❌ Submeter-se a orientações políticas viola a independência funcional (art. 127 CF).`;
        } else {
            feedback += `✅ Denunciar à corregedoria é o caminho correto. A pressão institucional é ilegal.`;
        }
        feedback += '</li>';

        // Decisão 3
        feedback += `<li><strong>Relação com a vítima:</strong> `;
        if (this.respostas.decisao3 === 'explica') {
            feedback += `✅ Empatia não exige omissão. Explicar a verdade com humanidade é o ideal.`;
        } else if (this.respostas.decisao3 === 'omite') {
            feedback += `❌ Mentir ou omitir para confortar a vítima é manipulação e viola a boa-fé processual.`;
        } else {
            feedback += `⚠️ O silêncio pode ser interpretado como conivência com a condenação injusta.`;
        }
        feedback += '</li>';

        // Decisão 4
        feedback += `<li><strong>Plenário do Júri:</strong> `;
        if (this.respostas.decisao4 === 'confessa') {
            feedback += `✅ Corrigir o erro em plenário demonstra caráter e compromisso com a justiça real.`;
        } else if (this.respostas.decisao4 === 'silencia') {
            feedback += `❌ Deixar um inocente ser condenado é a forma mais grave de noble cause corruption.`;
        } else {
            feedback += `⚠️ Discursos ambíguos não substituem a apresentação da prova. A omissão persiste.`;
        }
        feedback += '</li>';

        feedback += '</ul>';
        return feedback;
    }

    resetSimulador() {
        this.respostas = {
            decisao1: null,
            decisao2: null,
            decisao3: null,
            decisao4: null
        };
        
        this.pontuacao = {
            ncc: 0,
            direito: 0
        };

        // Limpar seleções visuais
        document.querySelectorAll('.option-card').forEach(opt => {
            opt.classList.remove('selected');
        });

        // Resetar botões
        this.nextDecision1.disabled = true;
        this.nextDecision2.disabled = true;
        this.nextDecision3.disabled = true;
        this.finishBtn.disabled = true;

        // Voltar à introdução
        this.showScreen(0);
    }

    compartilhar() {
        const perfil = document.getElementById('result-title').textContent;
        const texto = `Fiz o Simulador Ético da Causa Nobre e meu perfil foi: ${perfil}. Faça também!`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Simulador Ético - Causa Nobre',
                text: texto,
                url: window.location.href
            }).catch(console.error);
        } else {
            alert('Copie o texto: ' + texto);
        }
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    window.simulador = new SimuladorCausaNobre();
});
