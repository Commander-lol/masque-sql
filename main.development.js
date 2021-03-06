import {app, BrowserWindow, Menu, shell} from 'electron'

let menu
let mainWindow = null


if (process.env.NODE_ENV === 'development') {
	require('electron-debug')() // eslint-disable-line global-require
}


app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})


const installExtensions = async() => {
	if (process.env.NODE_ENV === 'development') {
		const installer = require('electron-devtools-installer') // eslint-disable-line global-require

		const extensions = [
			'REACT_DEVELOPER_TOOLS',
			'REDUX_DEVTOOLS',
		]
		const forceDownload = !!process.env.UPGRADE_EXTENSIONS
		for (const name of extensions) {
			try {
				await installer.default(installer[name], forceDownload)
			} catch (e) {
			} // eslint-disable-line
		}
	}
}

app.on('ready', async() => {
	await installExtensions()

	mainWindow = new BrowserWindow({
		show: false,
		width: 1024,
		height: 728,
		frame: false,
	})

	mainWindow.loadURL(`file://${__dirname}/app/app.html`)

	mainWindow.webContents.on('did-finish-load', () => {
		mainWindow.show()
		mainWindow.focus()
	})

	mainWindow.on('closed', () => {
		mainWindow = null
	})

	if (process.env.NODE_ENV === 'development') {
		mainWindow.openDevTools()
		mainWindow.webContents.on('context-menu', (e, props) => {
			const {x, y} = props

			Menu.buildFromTemplate([{
				label: 'Inspect element',
				click() {
					mainWindow.inspectElement(x, y)
				},
			}]).popup(mainWindow)
		})
	}
})
