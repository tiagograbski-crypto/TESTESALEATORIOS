/**
 * GL PRO | Core Engine - VERSÃO COMPLETA
 * Contém toda a estrutura e conteúdo de todas as abas.
 */

const App = {
    // Banco de Dados da Boutique (DNA Corrigido)
    products: [
        { id: 'sig8k', nome: 'Coleção Signature 8K', preco: 857.90, desc: 'A rotina definitiva de engenharia cosmética. Exclusividade em 4 passos. Inclui [GL.] Passport.', sens: 'Essência Aromática Exclusiva' },
        { id: 'repair', nome: 'Banho Repair Master', preco: 102.90, desc: 'Limpeza inteligente que não dilata a cutícula; prepara a fibra para infusão.', sens: 'Essência Aromática Exclusiva (Açafrão, Jasmim, Âmbar)' },
        { id: 'ampola', nome: 'Ampola Ouro Repair Gloss', preco: 202.30, desc: 'Reconstrução do cimento intercelular; tranca a hidratação.', sens: 'Essência Aromática Exclusiva (Açafrão, Jasmim, Âmbar)' },
        { id: 'baby', nome: 'Baby Queen 10 em 1', preco: 172.90, desc: 'Escudo termoprotetor absoluto; ação antifrizz indomável e blindagem.', sens: 'Essência Aromática Exclusiva (Açafrão, Jasmim, Âmbar)' },
        { id: 'argan', nome: 'American Argan Oil', preco: 137.90, desc: 'Brilho espelhado instantâneo, sela pontas duplas, toque de veludo.', sens: 'Essência Aromática Exclusiva (Madeiras, Fava Tonka, Baunilha)' }
    ],

    // Views Completas (Conteúdo Integrado)
    views: {
        '#/home': `
            <section class="py-20 px-6 text-center">
                <h1 class="font-editorial text-5xl italic mb-6">Bio-Engenharia Capilar</h1>
                <p class="max-w-2xl mx-auto opacity-70 mb-12">A precisão de laboratório aplicada à estética. Transforme a estrutura do seu fio.</p>
                <div class="glass-panel p-8 max-w-lg mx-auto">
                    <h2 class="text-xl font-bold mb-4">Avaliação de Viabilidade</h2>
                    <button class="bg-[#C5A059] text-black w-full py-4 rounded-xl font-bold">Iniciar Diagnóstico</button>
                </div>
            </section>
        `,
        '#/trends': `
            <section class="py-20 px-6 max-w-5xl mx-auto">
                <h2 class="text-4xl uppercase tracking-[0.2em] mb-12">Tendências</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="platinum-card p-8">Cortes de Alta Precisão</div>
                    <div class="platinum-card p-8">Curadoria Sazonal</div>
                </div>
            </section>
        `,
        '#/homecare': `
            <section class="py-20 px-6 max-w-6xl mx-auto">
                <h2 class="text-3xl font-bold mb-10 text-center">Boutique VIP</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="boutique-root"></div>
            </section>
        `,
        '#/studios': `
            <section class="py-20 px-6 text-center">
                <h2 class="text-3xl mb-10">Nossos Estúdios</h2>
                <div class="space-y-6">
                    <p>Chapecó | Seara | Xanxerê</p>
                    <a href="#" class="inline-block px-8 py-3 border border-white">Agendar Consultoria</a>
                </div>
            </section>
        `,
        '#/partnership': `
            <section class="py-20 px-6 max-w-lg mx-auto text-center">
                <h2 class="text-xl uppercase tracking-[0.3em] mb-6">Área de Parcerias</h2>
                <form class="space-y-4">
                    <input type="text" placeholder="Seu Nome" class="w-full bg-white/5 p-4 border border-white/10 rounded-lg">
                    <button class="w-full bg-white text-black p-4 rounded-lg font-bold">Enviar Auditoria</button>
                </form>
            </section>
        `
    },

    render: function() {
        const hash = window.location.hash || '#/home';
        const root = document.getElementById('app-root');
        
        root.innerHTML = this.views[hash] || this.views['#/home'];

        if(hash === '#/homecare') {
            const bRoot = document.getElementById('boutique-root');
            bRoot.innerHTML = this.products.map(p => `
                <div class="platinum-card p-6 border border-white/10 rounded-2xl hover:border-[#C5A059] transition-all">
                    <h3 class="text-xl font-bold mb-2">${p.nome}</h3>
                    <p class="text-sm opacity-60 mb-4 h-12">${p.desc}</p>
                    <p class="text-[#C5A059] font-bold text-lg mb-2">R$ ${p.preco.toFixed(2)}</p>
                    <small class="block text-[10px] uppercase opacity-40">${p.sens}</small>
                </div>
            `).join('');
        }
    }
};

window.addEventListener('hashchange', () => App.render());
App.render();
