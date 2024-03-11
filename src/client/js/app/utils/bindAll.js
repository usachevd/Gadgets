export default function bindAll(targetClass = null, methodNames = []) {
	const
		thisClass = targetClass || this,
		allMethods = thisClass => {
			const
				props = Object.getOwnPropertyNames(Object.getPrototypeOf(thisClass));
				props.splice(props.indexOf('constructor'), 1);

			return props;
		}

	for (const name of !methodNames.length ? allMethods(thisClass) : methodNames) {
		thisClass[name] = thisClass[name].bind(thisClass)
	}
}
