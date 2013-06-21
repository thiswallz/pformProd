package org.pform.servicios.informes

import grails.converters.JSON
import org.pform.informes.PrimerTrimestre

class PrimerTrimestresController {

	def jsonResponseOK = [success: true, data: []]
	def jsonResponseERROR = [success: false, message: "Error al procesar registro", failure: true]
	def dateParser = "dd/MM/yyyy HH:mm a"
	def hhDef = " 00:00 AM"
	
    def index() { }
	
	def save() {
		try {	
			//parseamos las fechas antes de pasarlas
			params.infoEgesFur = new Date().parse(dateParser, params.infoEgesFur + hhDef)
			params.infoEgesFpp = new Date().parse(dateParser, params.infoEgesFpp + hhDef)
			params.infoEgesFechaEcoPrecoz = new Date().parse(dateParser, params.infoEgesFechaEcoPrecoz + hhDef)
			params.diagnCitacion = new Date().parse(dateParser, params.diagnCitacion + hhDef)
			//nueva row
			def ptrimestre = new PrimerTrimestre(params)
			ptrimestre.rutPac = session.pac_rut
			ptrimestre.save()
			println ptrimestre.errors
			if(ptrimestre.validate())
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
		def ptrimestre = PrimerTrimestre.get(params.id)
		
		if(ptrimestre){
			jsonResponseOK.data =[id: ptrimestre.id]
			render jsonResponseOK as JSON
		}else{
			throw new RuntimeException("Error.")
		}
	}
}
