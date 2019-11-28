import 'isomorphic-fetch'
import ClientCredentialsAuthenticationProvider from './clientCredentialsAuthenticationProvider'
import { Client } from "@microsoft/microsoft-graph-client";

const authProvider = new ClientCredentialsAuthenticationProvider()
const options = {
    authProvider
}
const client = Client.initWithMiddleware(options)
client.api(process.env.PUT_PATH!).get().then(x => console.log(x)).catch(e => console.log(e))
