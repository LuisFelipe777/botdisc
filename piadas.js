const fetch = require('node-fetch');

async function traduzir(texto, idioma) {
    const res = await fetch('https://libretranslate.com/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            q: texto,
            source: 'auto',
            target: idioma,
            format: 'text'
        })
    })
    const data = res.json();
    return data.translatedText;
}
