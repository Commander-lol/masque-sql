// @flow

export type Config = DSNConfig | ObjectConfig

export type DSNConfig = string

export type ObjectConfig = {
	host: string,
	port: number,
}
