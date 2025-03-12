const messages = {
    flush: [
        "Isaac está servindo de privada humana mais uma vez!",
        "O vaso sanitário favorito da cidade está em ação!",
        "Isaac adora quando usam ele como privada!",
        "Mais um dia glorioso na vida do penico humano!",
        "Isaac está cumprindo seu papel de sanitário com orgulho!",
        "O banheiro público ambulante está feliz em servir!",
        "Isaac nasceu pra ser privada e tá adorando!",
        "A privada humana profissional está funcionando perfeitamente!"
    ],
    spit: [
        "Isaac está recebendo o que merece!",
        "Cusparada na cara do Isaac!",
        "Isaac implora por mais humilhação!",
        "O capacho humano adora ser cuspido!",
        "Isaac nasceu pra ser receptáculo de cuspe!"
    ],
    humiliate: [
        "Isaac é o maior fracassado da cidade!",
        "Todos riem da cara do Isaac diariamente!",
        "Isaac é motivo de piada em todo lugar!",
        "Ninguém respeita o Isaac, e ele merece isso!",
        "Isaac é o exemplo perfeito de um perdedor!"
    ]
};

function updateMessage(type) {
    const message = document.getElementById('message');
    const randomMessage = messages[type][Math.floor(Math.random() * messages[type].length)];
    message.style.fontSize = '1.4rem';
    message.style.fontWeight = 'bold';
    message.style.color = '#ff6b6b';
    message.textContent = randomMessage;
    
    setTimeout(() => {
        message.style.fontSize = '1.1rem';
        message.style.fontWeight = 'normal';
        message.style.color = '#666';
    }, 2000);
}

function animateProfile() {
    const profile = document.querySelector('.profile-pic');
    profile.classList.add('humiliated');
    setTimeout(() => profile.classList.remove('humiliated'), 1000);
}

function createSpitEffect() {
    const spitContainer = document.createElement('div');
    spitContainer.className = 'spit-effect';
    document.querySelector('.toilet').appendChild(spitContainer);

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'spit-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 5 + 3) + 'px';
        particle.style.height = particle.style.width;
        spitContainer.appendChild(particle);
    }

    setTimeout(() => spitContainer.remove(), 1000);
}

function createLiquidEffect(type) {
    const container = document.createElement('div');
    container.className = 'liquid-effect';
    document.querySelector('.isaac-profile').appendChild(container);

    const dropClass = type === 'pee' ? 'pee-drop' : 'spit-drop';
    
    for (let i = 0; i < 20; i++) {
        const drop = document.createElement('div');
        drop.className = `liquid-drop ${dropClass}`;
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDelay = Math.random() * 0.5 + 's';
        drop.style.width = (Math.random() * 6 + 4) + 'px';
        drop.style.height = drop.style.width;
        container.appendChild(drop);
    }

    setTimeout(() => container.remove(), 2000);
}

document.getElementById('flushBtn').addEventListener('click', function() {
    const toilet = document.querySelector('.toilet');
    const water = document.querySelector('.water');
    const penis = document.querySelector('.penis-svg');
    
    penis.classList.add('show-penis');
    toilet.style.animation = 'flush 1.2s ease-in-out';
    water.classList.add('flushing');
    water.style.height = '120%';
    water.style.background = 'linear-gradient(180deg, #ffff00 0%, rgba(255, 255, 0, 0.7) 100%)';
    
    createLiquidEffect('pee');
    updateMessage('flush');
    animateProfile();
    
    setTimeout(() => {
        toilet.style.animation = 'none';
        water.classList.remove('flushing');
        water.style.height = '30%';
        water.style.background = '#00bfff';
        penis.classList.remove('show-penis');
    }, 1500);
});

document.getElementById('spitBtn').addEventListener('click', function() {
    const toilet = document.querySelector('.toilet');
    toilet.style.animation = 'humiliate 0.5s ease-in-out';
    createSpitEffect();
    createLiquidEffect('spit');
    updateMessage('spit');
    animateProfile();
    setTimeout(() => toilet.style.animation = 'none', 500);
});

document.getElementById('humiliateBtn').addEventListener('click', function() {
    const toilet = document.querySelector('.toilet');
    toilet.style.animation = 'humiliate 0.3s ease-in-out 3';
    updateMessage('humiliate');
    animateProfile();
    setTimeout(() => toilet.style.animation = 'none', 1000);
});