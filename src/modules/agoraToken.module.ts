import { RtcTokenBuilder, RtcRole } from 'agora-access-token';

const appID = '6aa13f4a132d45b785050432bfd98715';
const appCertificate = 'ce9bd3dc64ca4f108cba22955d7c634d';
const role = RtcRole.PUBLISHER;

const expirationTimeInSeconds = 7200

const currentTimestamp = Math.floor(Date.now() / 1000)

const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

export const generateToken = (channelName: string, account: string) => {
    return RtcTokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs)
};
