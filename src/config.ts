import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT || 4000,
    agora: {
        appId: process.env.AGORA_APP_ID as string,
        appCertificate: process.env.AGORA_APP_CERTIFICATE as string,
        expireTimeInSeconds: 7200 * 1000
    }
};

export default config;
