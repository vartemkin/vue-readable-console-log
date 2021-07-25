import { toRaw } from 'vue'

if (!console.oldLog) {
	console.oldLog = console.log;
	console.log = (...args) => {
		console.oldLog(...args.map((arg) => toRaw(arg)));
	}
}
