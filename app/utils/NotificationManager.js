import store from 'store'

class NotificationManager {
	constructor() {
		this._notify = null
		store.subscribe(() => {
			const { notifier } = store.getState()
			if (notifier !== this._notify) {
				this._notify = notifier
			}
		})
	}

	add() {
		this._notify.addNotification({
			message: 'Notification message',
			level: 'success',
		})
	}
}

export default new NotificationManager
