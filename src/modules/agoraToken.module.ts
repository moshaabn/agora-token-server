import { RtcTokenBuilder, RtcRole } from 'agora-access-token';
import config from '../config';

const appID = config.agora.appId;
const appCertificate = config.agora.appCertificate;
const role = RtcRole.PUBLISHER;

const expirationTimeInSeconds = config.agora.expireTimeInSeconds;

const currentTimestamp = Math.floor(Date.now() / 1000)

const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

export const generateToken = (channelName: string, account: string) => {
    return RtcTokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs)
};
