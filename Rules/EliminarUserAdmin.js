export default function EliminarUserAdmin(clientAPI) {
	let dialogs = clientAPI.nativescript.uiDialogsModule;
	return dialogs.confirm("Eliminar Usuario?").then((result) => {
		if (result === true) {
			return clientAPI.executeAction('/SkyCM_V2/Actions/OData/EliminarAdminUser.action').then(
				(success) => Promise.resolve(success),
				(failure) => Promise.reject('Error al eliminar usuario ' + failure));
		} else {
			return Promise.reject('User Deferred');
		}
	});
}