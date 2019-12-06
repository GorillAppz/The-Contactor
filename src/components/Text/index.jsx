import React from 'react';
import { Text } from 'react-native-elements';

import styles from './styles';
import { nodeType, oneOfTypeType, objectType, arrayType } from '../../types';

const CustomText = ({ children, style, ...props }) => (
	<Text {...props} style={{ ...styles.text, ...style }}>
		{children}
	</Text>
);

CustomText.propTypes = {
	children: nodeType,
	style: oneOfTypeType([objectType, arrayType])
};
export default CustomText;