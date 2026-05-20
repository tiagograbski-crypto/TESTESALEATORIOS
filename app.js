/**
 * GL PRO | Core Application Logic
 * Arquiteto: Código-Mestre 600
 */

const App = {
    // Banco de Dados da Boutique (Unificado e Corrigido)
    products: [
        { id: 'sig8k', nome: 'Coleção Signature 8K', preco: 857.90, desc: 'A rotina definitiva...', sens: 'Essência Aromática Exclusiva' },
        { id: 'repair', nome: 'Banho Repair Master', preco: 102.90, desc: 'Limpeza inteligente...', sens: 'Essência Aromática Exclusiva (Açafrão, Jasmim, Âmbar)' },
        { id: 'ampola', nome: 'Ampola Ouro Repair Gloss', preco: 202.30, desc: 'Reconstrução intracelular...', sens: 'Essência Aromática Exclusiva (Açafrão, Jasmim, Âmbar)' },
        { id: 'baby', nome: 'Baby Queen 10 em 1', preco: 172.90, desc: 'Blindagem termoprotetora...', sens: 'Essência Aromática Exclusiva (Açafrão, Jasmim, Âmbar)' },
        { id: 'argan', nome: 'American Argan Oil', preco: 137.90, desc: 'Brilho espelhado...', sens: 'Essência Aromática Exclusiva (Madeiras, Fava Tonka, Baunilha)' }
    ],

    // Roteador de Views (Conteúdo)
    router: function() {
        const hash = window.location.hash || '#/home';
        const root = document.getElementById('app-root');
        
        // Disparo para o Analytics (GTM)
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({'event': 'page_view', 'page_path': hash});

        switch(hash) {
            case '#/homecare':
                root.innerHTML = this.renderBoutique();
                break;
            case '#/home':
                root.innerHTML = '<h1>Home</h1>'; // Insira aqui o HTML da Home
                break;
            default:
                root.innerHTML = '<h2>Em construção</h2>';
        }
        
        // Re-inicializa ícones/animações
        if(typeof lucide !== 'undefined') lucide.createIcons();
    },

    // Renderizador da Boutique
    renderBoutique: function() {
        return `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
                ${this.products.map(p => `
                    <div class="platinum-card p-6">
                        <h3 class="text-xl font-bold">${p.nome}</h3>
                        <p class="text-gold">R$ ${p.preco.toFixed(2)}</p>
                        <small class="opacity-60">${p.sens}</small>
                    </div>
                `).join('')}
            </div>
        `;
    }
};

// Inicialização
window.addEventListener('hashchange', () => App.router());
document.addEventListener('DOMContentLoaded', () => App.router());
