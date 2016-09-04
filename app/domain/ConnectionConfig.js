import mysql from 'mysql'
import utils from 'mysql-utilities'
import qs from 'query-string'
import {v4 as uuid} from 'uuid'

export default class ConnectionConfig {

	_connection = null

	constructor(data) {
		this.src = data
		if (typeof data == 'string') {
			/**
			 * [0] - Full DSN
			 * [1] - Username
			 * [2] - Password
			 * [3] - Host
			 * [4] - Database
			 * [5] - Query String
			 */
			const [
				,
				user,
				password,
				host,
				database,
				queryString,
			] = /(?:mysql:\/\/)?(\w{1,32})(?::(\w+))?@(.*?)(?:\/(\w+))?(?:\?(.*)$|$)/.exec(data) || []
			this.type = 'DSN'
			this.name = `${user}@${host}`
			this.connectionParam = {
				host,
				user,
				password,
				database,
				...(qs.parse(queryString) || {}),
			}
		} else {
			const {name, ...params} = data
			this.type = 'Advanced'
			this.name = name
			this.connectionParam = params
		}
		this.id = uuid()
	}

	get connection() {
		if (this._connection == null) {
			console.log(this.connectionParam)
			this._connection = mysql.createConnection(this.connectionParam)
			utils.upgrade(this._connection)
			utils.introspection(this._connection)
		}
		return this._connection
	}
}
