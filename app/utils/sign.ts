import crypto from 'crypto';

function generateSign(params:{[key:string]:string|number}, key: string):string{
    const sortedParams = Object.entries(params)
        .filter(([k, v]) => k !== 'sign' && k !== 'sign_type' && v !== null)
        .sort((a, b) => a[0].localeCompare(b[0]));
    const signStr = sortedParams.map(([k, v]) => `${k}=${v}`).join('&');
    const signStrWithKey = signStr + key;
    const sign = crypto.createHash('md5').update(signStrWithKey, 'utf-8').digest('hex');
    return sign;
}
export default generateSign