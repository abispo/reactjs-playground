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

<!-- 001 -->

<!-- Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw== -->

2. After this, Right click `files` container and choose `Get Shared Access Signature` option in the menu. We will need this key for list and upload files into the azurite emulator. The `Shared Access Signature` windows will be open. In the permissions section, 2 permissions are default choosed: `Read` and `List`. Add the following permissions: `Add`, `Create`, `Write` and `Delete`. So click in `Create` button. As Default, this signature expires after 24 hours passed. You can choose the Expiry time as you want.

<!-- 002 -->

3. After clicked in the `Create` button, a new window will be shown. Copy que Query string, so create a new `.env` file in the project's root dir. The file must be contains the following content:

```
REACT_APP_AZURE_CONTAINER_SHARED_ACCESS_SIGNATURE=<query_string>
```

You must substitute the `<query_string>` with the query string generated in the Storage Explorer that you copied.


#### 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
