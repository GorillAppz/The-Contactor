import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export const getPermission = async (permissionTypes) => {
	await Promise.all(permissionTypes.map(async (type) => Permissions.askAsync(type)));
};

export const selectFromCameraRoll = async () => {
	await getPermission([Permissions.CAMERA_ROLL]);
	const result = await ImagePicker.launchImageLibraryAsync({
		mediaTypes: ImagePicker.MediaTypeOptions.Images,
		quality: 0.1,
		base64: true,
		allowsEditing: true,
		aspect: [1, 1]
	});

	if (result.cancelled) { return ''; }
	return result.uri;
};

export const takePhoto = async () => {
	await getPermission([Permissions.CAMERA, Permissions.CAMERA_ROLL]);
	const result = await ImagePicker.launchCameraAsync({
		mediaTypes: ImagePicker.MediaTypeOptions.Images,
		quality: 0.1,
		base64: true,
		allowsEditing: true,
		aspect: [1, 1]
	});

	if (result.cancelled) { return ''; }
	return result.uri;
};