function encodeToBase64(input) {
    const encodedUri = encodeURIComponent(input);
    return Buffer.from(encodedUri).toString('base64');
}

function decodeFromBase64(base64) {
    const decodedBase64 = Buffer.from(base64, 'base64').toString('utf-8');
    return decodeURIComponent(decodedBase64);
}

export default { encodeToBase64, decodeFromBase64 };
