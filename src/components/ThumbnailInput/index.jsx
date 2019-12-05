import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';

import Text from '../Text';

import styles from './styles';

import { stringType, funcType } from '../../types';

const ThumbnailInput = ({ currImage, errorMsg, inputHandler }) => {
	const _takePhotoHandler = async () => {
		inputHandler(await takePhoto());
	};

	const _cameraRollHandler = async () => {
		inputHandler(await selectFromCameraRoll());
	};

	return (
		<View style={styles.container}>
			<Text h6 style={styles.label}>Select Thumbnail</Text>
			<Text style={styles.errorMsg}>{errorMsg}</Text>
			{
				currImage.length
					? (
						<Image
							style={styles.image}
							source={currImage.length
								? { uri: currImage }
								: null}
						/>
					)
					: null
			}
			<View style={styles.buttonsContainer}>
				<Button
					style={styles.button}
					icon={{ name: 'camera-alt', color: 'grey', size: 45 }}
					onPress={async () => _takePhotoHandler()}
					type="outline"
				/>
				<Button
					style={styles.button}
					icon={{ name: 'insert-photo', color: 'grey', size: 45 }}
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
	inputHandler: funcType.isRequired
};

export default ThumbnailInput;