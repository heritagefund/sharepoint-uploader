// MyAuthenticationProvider.ts
import { AuthenticationProvider } from "@microsoft/microsoft-graph-client";
const credentials = {
    client: {
        id: '',
        secret: ''
    },
    auth: {
        tokenHost: ''
    }
}
const oauth2 = require('simple-oauth2').create(credentials);

class MyAuthenticationProvider implements AuthenticationProvider {
	/**
	 * This method will get called before every request to the msgraph server
	 * This should return a Promise that resolves to an accessToken (in case of success) or rejects with error (in case of failure)
	 * Basically this method will contain the implementation for getting and refreshing accessTokens
	 */
	public async getAccessToken(): Promise<any> {

    }
}