/*
1. daug zodziu? sujungiam su "-" (minusu)
2. didziosios/marzosios raides - nesvarbu, todel suvienodiname i mazasias
3. ne anglu kalbos abeceles raidos keiciamos i artimiausia ju atitikmemi
4. spec zenklai istrinami
5. negali buti daugiau nei po 1 minusa is eiles
*/

// Labai ačiū! -> labai ačiū! -> labai-ačiū! -> labai-aciu! -> labai-aciu

export function slugify(text) {
    const letters = {
        'ą': 'a',
        'č': 'c',
        'ę': 'e',
        'ė': 'e',
        'į': 'i',
        'š': 's',
        'ų': 'u',
        'ū': 'u',
        'ž': 'z',
    };

    text = text.trim();

    for (const s in letters) {
        text = text.replaceAll(s, letters[s]);
    }
    text = text.replaceAll(' ', '-').toLowerCase();

    const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789-';

    let result = '';
    for (const s of text) {
        if (allowed.includes(s)) {
            result += s;
        }
    }

    let resultWithoutMinus = result[0];
    for (let i = 1; i < result.length; i++) {
        if (result[i] !== '-') {
            resultWithoutMinus += result[i];
        }
        if (result[i - 1] !== '-' && result[i] === '-') {
            resultWithoutMinus += '-';
        }
    }

    if (resultWithoutMinus[0] === '-') {
        resultWithoutMinus = resultWithoutMinus.slice(1);
    }

    if (resultWithoutMinus.at(-1) === '-') {
        resultWithoutMinus = resultWithoutMinus.slice(0, -1);
    }

    return resultWithoutMinus;
}