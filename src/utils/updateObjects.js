export const updateObject = (oldObject, updateValue) => {
	return {
		...oldObject,
		...updateValue,
	};
};

export default updateObject;
