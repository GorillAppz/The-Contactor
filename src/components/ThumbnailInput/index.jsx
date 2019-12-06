import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import Text from '../Text';
import styles from './styles';
import { stringType, funcType } from '../../types';
import ContactImageThumbnail from '../ContactImageThumbnail/index';

const ThumbnailInput = ({ currImage, errorMsg, inputHandler, contactName }) => {
	const _takePhotoHandler = async () => {
		inputHandler(await takePhoto());
	};

	const _cameraRollHandler = async () => {
		inputHandler(await selectFromCameraRoll());
	};

	return (
		<View style={styles.container}>
			<ContactImageThumbnail uri={currImage} width={200} height={200} fontSize={50} name={contactName} />
			<Text style={styles.errorMsg}>{errorMsg}</Text>
			<View style={styles.buttonsContainer}>
				<Button
					buttonStyle={styles.button}
					title="Take Photo"
					titleStyle={styles.title}
					onPress={async () => _takePhotoHandler()}
					type="outline"
				/>
				<Button
					buttonStyle={styles.button}
					title="Add Photo"
					titleStyle={styles.title}
					type="outline"
					onPress={async () => _cameraRollHandler()}
				/>
			</View>
		</View>
	);
};

ThumbnailInput.propTypes = {
	currImage: stringType.isRequired,
	errorMsg: stringType,
	inputHandler: funcType.isRequired,
	contactName: stringType
};

export default ThumbnailInput;