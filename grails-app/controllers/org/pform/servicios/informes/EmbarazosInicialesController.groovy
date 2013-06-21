package org.pform.servicios.informes

import grails.converters.JSON
import org.pform.informes.EmbarazoInicial

class EmbarazosInicialesController {

	def jsonResponseOK = [success: true, data: []]
	def jsonResponseERROR = [success: false, message: "Error al procesar registro", failure: true]
	def dateParser = "dd/MM/yyyy HH:mm a"
	def hhDef = " 00:00 AM"
    def index() { }
	
	def save() {
		try {	
			//parseamos las fechas antes de pasarlas
			params.infoEgesFur = new Date().parse(dateParser, params.infoEgesFur + hhDef)
			params.diagnInfogenCitacion = new Date().parse(dateParser, params.diagnInfogenCitacion + hhDef)
			//nueva row
			def einicial = new EmbarazoInicial(params)
			einicial.rutPac = session.pac_rut
			println einicial.errors
			einicial.save()
			if(einicial.validate())
				render jsonResponseOK as JSON
			else
				render jsonResponseERROR as JSON
		}
		catch(Exception e){
			println e.message
			render jsonResponseERROR as JSON
		}
	}
	
	def get() {
		def einicial = EmbarazoInicial.get(params.id)
		
		if(einicial){
			jsonResponseOK.data =[id: einicial.id, infoEgesFur: einicial.infoEgesFur, infoEgesEg: einicial.infoEgesEg]
			render jsonResponseOK as JSON
		}else{
			throw new RuntimeException("Error.")
		}
	}

}
