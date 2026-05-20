const BoutiqueData = [
    { id: 'sig8k', nome: 'Coleção Signature 8K', preco: 857.90, desc: 'A rotina definitiva...', sens: 'Essência Exclusiva' },
    { id: 'repair', nome: 'Banho Repair Master', preco: 102.90, desc: 'Limpeza inteligente...', sens: 'Essência Exclusiva (Açafrão, Jasmim, Âmbar)' },
    { id: 'ampola', nome: 'Ampola Ouro Repair Gloss', preco: 202.30, desc: 'Reconstrução intracelular...', sens: 'Essência Exclusiva (Açafrão, Jasmim, Âmbar)' },
    { id: 'baby', nome: 'Baby Queen 10 em 1', preco: 172.90, desc: 'Blindagem termoprotetora...', sens: 'Essência Exclusiva (Açafrão, Jasmim, Âmbar)' },
    { id: 'argan', nome: 'American Argan Oil', preco: 137.90, desc: 'Brilho espelhado instantâneo...', sens: 'Essência Exclusiva (Madeiras, Fava Tonka, Baunilha)' }
];

const Router = {
    init: () => {
        window.addEventListener('hashchange', Router.render);
        Router.render();
    },
    render: () => {
        const hash = window.location.hash || '#/home';
        const root = document.getElementById('app-root');
        // Aqui você renderiza a view correspondente
        if(hash === '#/homecare') {
            root.innerHTML = BoutiqueData.map(p => `<div>${p.nome} - R$${p.preco} - ${p.sens}</div>`).join('');
        }
    }
};
Router.init();
