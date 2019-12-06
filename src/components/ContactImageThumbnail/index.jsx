import React from 'react';
import { Image, View } from 'react-native';
import tinyColor from 'tinycolor2';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Text from '../Text';
import { LIGHT, DARK } from '../../styles/colors';
import styles from './styles';
import { stringType, numberType } from '../../types/index';

const ContactImageThumbnail = ({ uri, name, width, height, fontSize }) => {
	const withImage = (
		<Image
			source={{ uri }}
			style={{ width, height }}
		/>
	);
	const withoutImage = () => {
		const [bgColor, setBgColor] = React.useState('transparent');
		const [textColor, setTextColor] = React.useState('transparent');

		React.useEffect(() => {
			setBgColor(tinyColor.random().toHexString());
		}, []);

		React.useEffect(() => {
			setTextColor(tinyColor(bgColor).isDark() ? LIGHT : DARK);
		}, [bgColor]);

		const initials = name.length ? name.split(' ').map((x) => x.charAt(0).toUpperCase()) : '';

		return (
			<View style={{ ...styles.withoutImageTextContainer, backgroundColor: bgColor }}>
				{initials.length
					? <Text style={{ color: textColor, fontSize }}>{initials}</Text>
					: <Icon name="user-astronaut" size={height - 10} iconStyle={{ color: textColor }} />}
			</View>
		);
	};

	return (
		<View style={{ ...styles.container, width, height, borderRadius: height }}>
			{uri ? withImage : withoutImage()}
		</View>
	);
};

ContactImageThumbnail.propTypes = {
	uri: stringType,
	name: stringType,
	height: numberType,
	width: numberType,
	fontSize: numberType
};

export default ContactImageThumbnail;