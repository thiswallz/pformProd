package org.pform.servicios.informes

import grails.converters.JSON
import org.pform.informes.*

class EcoGinecologicasController {

	def jsonResponseOK = [success: true, data: []]
	def jsonResponseERROR = [success: false, message: "Error al procesar registro", failure: true]
	def dateParser = "dd/MM/yyyy HH:mm a"
	def hhDef = " 00:00 AM"
	
	def index() { }
	
	def save() {
		try {
			
			def embInicial = EmbarazoInicial.get(params.idEmbarazoInicial)
			//parseamos las fechas antes de pasarlas
			params.infoEgesFur = new Date().parse(dateParser, params.infoEgesFur + hhDef)
			params.diagnCitacion = new Date().parse(dateParser, params.diagnCitacion + hhDef)
			//nueva row
			def ecoginecologica = new EcoGinecologica(params)
			ecoginecologica.rutPac = session.pac_rut
			ecoginecologica.embarazoInicial = embInicial
			ecoginecologica.save()
			println ecoginecologica.errors
			if(ecoginecologica.validate())
				render jsonResponseOK as JSON
			else
				render jsonResponseERROR as JSON
		}
		catch(Exception e){
			println e.message
			render jsonResponseERROR as JSON
		}
	}
	def getFields() {
		def ecoginecologica = EcoGinecologica.get(params.id)
		
		if(ecoginecologica){
			jsonResponseOK.data = ecoginecologica
			render jsonResponseOK as JSON
		}else{
			throw new RuntimeException("Error.")
		}
	}
}
