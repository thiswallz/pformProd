package org.pform.servicios.informes

import grails.converters.JSON
import org.pform.mantenedores.*

class ParametrosGeneralesController {
	
	def jsonResponseOK = [success: true, data: []]
	def jsonResponseERROR = [success: false, message: "Error al procesar registro", failure: true]
	def dateParser = "dd/MM/yyyy HH:mm a"
	def hhDef = " 00:00 AM"
    def index() { }
	
	def getParametrosByCodigo() {
		def parametros = ParametrosGenerales.findByInformeAndTipoAndInputValue(params.informe, params.tipo, params.valor)
		
		if(parametros){
			jsonResponseOK.data =[S: parametros.getS(), D: parametros.getD()]
			render jsonResponseOK as JSON
		}else{
			render jsonResponseERROR as JSON
		}
		
	}
}
