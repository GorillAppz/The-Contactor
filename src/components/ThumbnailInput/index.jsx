import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';

import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import Text from '../Text';
import styles from './styles';
import { stringType, inputHandlerType } from '../../types';
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
					: <ContactImageThumbnail width={150} height={150} fontSize={30} name={contactName} />
			}
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
	inputHandler: inputHandlerType.isRequired,
	contactName: stringType
};

export default ThumbnailInput;