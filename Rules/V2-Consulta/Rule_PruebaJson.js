/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Rule_PruebaJson(context) {

	var clientData = context.evaluateTargetPath("#Page:TheParentPage_Name/#ClientData");

	if (!clientData.listpick) {

		clientData.listpick = [];

	}

	clientData.listpick.push({

		"Valor": context.getPageProxy().evaluateTargetPath('#Control:fc_ValorFormatos/#Value'),

		"Titulo": context.getPageProxy().evaluateTargetPath('#Control:fc_TituloFormatos/#Value'),

		"Id_vista": context.getPageProxy().evaluateTargetPath('#Control:fc_IdVistaFormatos/#Value')

	});
}