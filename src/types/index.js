/* Centralized PropTypes Declaration */
import PropTypes from 'prop-types';

const { shape, number, string, bool, arrayOf, func, node, oneOfType, object, array } = PropTypes;

export const idType = shape({
	id: string.isRequired
});

export const phoneNumberType = shape({
	label: string.isRequired,
	phone: string.isRequired
});

export const dataType = shape({
	image: string.isRequired,
	name: string.isRequired,
	phoneNumber: arrayOf(phoneNumberType).isRequired
});

export const contactType = shape({
	id: idType,
	data: dataType.isRequired
});

export const contactsType = arrayOf(
	contactType
);

export const UpdateContactsType = func;

export const submitHandlerType = func;
export const cancelHandlerType = func;
export const inputHandlerType = func;
export const openAddContactModalHandlerType = func;
export const importContactsHandlerType = func;
export const isVisibleType = bool;

export const stringType = string;
export const numberType = number;
export const funcType = func;
export const boolType = bool;
export const nodeType = node;
export const oneOfTypeType = oneOfType;
export const arrayType = array;
export const objectType = object;