import {isArray, filter, find, clone} from 'lodash'

export default context => {
	const params = {}
	const domain = {}
	let capturedContext = clone(context)
	let Type = null
	let key = null

	domain.where = (k, v) => {
		params[k] = v
		return domain
	}
	domain.key = k => {
		key = k
		return domain
	}
	domain.as = type => {
		Type = type
		return domain
	}

	domain.all = () => {
		let data = context
		if (!isArray(data)) {
			data = Object.values(data)
		}
		data = filter(data, params)
		if (Type != null) {
			return data.map(r => new Type(r))
		} else {
			return data
		}
	}

	domain.get = () => {
		let val = null
		if (key != null) {
			val = context[key]
		} else {
			val = find(context, params)
		}
		if (Type != null) {
			return new Type(val)
		} else {
			return val
		}
	}

	return domain
}
