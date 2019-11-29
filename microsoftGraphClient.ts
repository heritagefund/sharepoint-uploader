import 'isomorphic-fetch'
import ClientCredentialsAuthenticationProvider from './clientCredentialsAuthenticationProvider'
import { Client, LargeFileUploadTask } from "@microsoft/microsoft-graph-client";
import * as fs from 'fs';
const authProvider = new ClientCredentialsAuthenticationProvider()
const options = {
    authProvider
}
const client = Client.initWithMiddleware(options)
const fileName = 'file.txt'
const file =  fs.readFileSync('file.txt')

async function largeFileUpload(client: Client, file: Buffer, fileName: string) {
    try {
        const requestUrl = `/drives/${process.env.DRIVE_ID}/items/${process.env.ITEM_ID}:/${fileName}:/createUploadSession`;
        const payload = {
            item: {
                "@microsoft.graph.conflictBehavior": "rename",
                name: fileName
            }
        }
        const fileObject = {
            size: file.byteLength,
            content: file,
            name: fileName
        }
        const uploadSession = await LargeFileUploadTask.createUploadSession(client, requestUrl, payload)
        const uploadTask = new LargeFileUploadTask(client, fileObject, uploadSession)
        const response = await uploadTask.upload()
        return response
    } catch (err) {
        console.log(err)
        throw err
    }
}

largeFileUpload(client, file, fileName).then(console.log)