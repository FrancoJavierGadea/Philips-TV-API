import crypto from "node:crypto";

const SECRET_KEY = Buffer.from('ZmVay1EQVFOaZhwQ4Kv81ypLAZNczV9sG4KkseXWn1NEk6cXmPKO/MCa9sryslvLCFMnNe4Z4CPXzToowvhHvA==', 'base64');  // La clave AES de 16 bytes


export function cbcDecode(data) {

    if (!data) return '';
    
    // Decodificar la cadena base64 a bytes
    const raw = Buffer.from(data, 'base64');
    
    if (raw.length < 16) {

        throw new Error(`Length of data too short: '${data}'`);
    }

    //Extraer el IV de los primeros 16 bytes
    const iv = raw.subarray(0, 16);

    //Crear el descifrador AES en modo CBC con PKCS7 padding
    const decipher = crypto.createDecipheriv('aes-128-cbc', SECRET_KEY.subarray(0, 16), iv);
    
    // Descifrar los datos (omitimos los primeros 16 bytes del IV)
    let decrypted = decipher.update(raw.subarray(16));

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString('utf8');
}



