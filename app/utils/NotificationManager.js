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

	defaultParams() {
		return {
			position: 'br',
		}
	}

	add(message, level, title) {
		this._notify.addNotification({
			...this.defaultParams(),
			message,
			level,
			title,
		})
	}

	success(message, title) {
		this.add(message, 'success', title)
	}
}

export default new NotificationManager
