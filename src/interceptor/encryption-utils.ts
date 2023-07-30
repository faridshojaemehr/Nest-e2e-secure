import * as CryptoJS from 'crypto-js';

export const EncryptData = (data: string, secretKey: string): string => {
  const encryptedData = CryptoJS.AES.encrypt(data, secretKey).toString();
  return encryptedData;
};

export const DecryptData = (
  encryptedData: string,
  secretKey: string,
): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
};
