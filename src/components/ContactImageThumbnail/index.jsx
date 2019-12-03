import React from 'react';
import { Image, View } from 'react-native';
import tinyColor from 'tinycolor2';

import Text from '../Text';

import { LIGHT, DARK } from '../../styles/colors';
import styles from './styles';

const ContactImageThumbnail = ({ uri, name, isSelected }) => {
	const withImage = (
		<Image
			source={{ uri }}
			style={{ width: 50, height: 50 }}
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

		const initials = name.split(' ').map((x) => x.charAt(0).toUpperCase());

		return (
			<View style={{ ...styles.withoutImageTextContainer, backgroundColor: bgColor }}>
				<Text style={{ ...styles.withoutImageText, color: textColor }}>
					{initials}
				</Text>
			</View>
		);
	};

	const itemSelectedImage = (
		<View>
			<Text>
				{':)'}
			</Text>
		</View>
	);

	const thumbnailToRender = () => {
		if (isSelected) {
			return itemSelectedImage;
		}
		if (uri) {
			return withImage;
		}
		return withoutImage();
	};

	return (
		<View style={styles.container}>
			{thumbnailToRender()}
		</View>
	);
};

export default ContactImageThumbnail;