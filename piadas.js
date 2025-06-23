import fetch from "node-fetch";

export default async function traduzir(texto, idioma) {
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
    const data = await res.json();
    return data.translatedText;
}