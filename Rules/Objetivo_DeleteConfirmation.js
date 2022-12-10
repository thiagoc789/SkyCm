export default function DeleteConfirmation(clientAPI) {
	let dialogs = clientAPI.nativescript.uiDialogsModule;
	return dialogs.confirm("Eliminar objetivo?").then((result) => {
		if (result === true) {
			return clientAPI.executeAction('/SkyCM_V2/Actions/OData/Eliminar_objetivo.action').then(
				(success) => Promise.resolve(success),
				(failure) => Promise.reject('Error al eliminar objetivo ' + failure));
		} else {
			return Promise.reject('User Deferred');
		}
	});
}