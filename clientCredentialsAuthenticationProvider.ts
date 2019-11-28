// MyAuthenticationProvider.ts
import { AuthenticationProvider } from "@microsoft/microsoft-graph-client";
require('dotenv').config()
import * as request from 'request-promise-native'

export default class ClientCredentialsAuthenticationProvider implements AuthenticationProvider {

    public async getAccessToken(): Promise<any> {
        const r = await request.post(`https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`, {
            form: {
                grant_type: "client_credentials",
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                scope: 'https://graph.microsoft.com/.default'
            }
        }).catch(e => { console.log(e) })
        return JSON.parse(r).access_token
    }
}

