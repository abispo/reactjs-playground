# Azure Blob Storage Example

This repository contains a example of list and upload files to Azure Blob Storage service using a React Application. We will use Azurite for local development.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Configuring local environment

After cloning the project, we will need 2 tools: [Azurite](https://github.com/Azure/Azurite) and [Microsoft Azure Storage Explorer](https://azure.microsoft.com/en-us/features/storage-explorer/)

### Azurite
Azurite is a emulator for Azure Blob Storage than we will use during development. We can install it as a Visual Studio Code extension or as a command-line tool. I recommend install as a command-line tool. You can see details of installation and running on the [Azurite repository](https://github.com/Azure/Azurite).

### Microsoft Azure Storage Explorer
Microsoft Azure Storage Explorer is a tool to manage your cloud storage resources from your desktop. We will use it for configure azurite. After installation, we will need do the following steps (Azurite must be running):

1. In `Storage Accounts` menu, there is a `(Emulator - Default Ports) (Key)` option. Opening this menu the Storage Explorer must automatically connect with Azurite, showing 3 options: `Blob Containers, Queues and Tables`. Right Click in the `Blob Containers` and choose `Create Blob Container`. Create a new blob with `files` name.

![](https://github.com/abispo/reactjs-playground/blob/assets/001.png?raw=true)

<!-- Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw== -->

2. After this, Right click `files` container and choose `Get Shared Access Signature` option in the menu. We will need this key for list and upload files into the azurite emulator. The `Shared Access Signature` windows will be open. In the permissions section, 2 permissions are default choosed: `Read` and `List`. Add the following permissions: `Add`, `Create`, `Write` and `Delete`. So click in `Create` button. As Default, this signature expires after 24 hours passed. You can choose the Expiry time as you want.

![002](https://github.com/abispo/reactjs-playground/blob/assets/002.png?raw=true)

3. After clicked in the `Create` button, a new window will be shown. Copy que Query string, so create a new `.env` file in the project's root dir. The file must be contains the following content:

```
# You must substitute the <query_string> with the query string generated in the Storage Explorer that you copied.
REACT_APP_AZURE_CONTAINER_SHARED_ACCESS_SIGNATURE=<query_string>
```


![003](https://github.com/abispo/reactjs-playground/blob/assets/003.png?raw=true)

Now you be able to run the project, list and upload files to azurite container.