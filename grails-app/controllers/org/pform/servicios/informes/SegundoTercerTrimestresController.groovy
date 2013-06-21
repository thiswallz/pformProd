package org.pform.servicios.informes

import grails.converters.JSON
import org.pform.informes.SegundoTercerTrimestre

class SegundoTercerTrimestresController {

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
			def stercertrm = new SegundoTercerTrimestre(params)
			stercertrm.rutPac = session.pac_rut
			stercertrm.save()
			println stercertrm.errors
			if(stercertrm.validate())
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
		def stercertrm = SegundoTercerTrimestre.get(params.id)
		
		if(stercertrm){
			jsonResponseOK.data =[id: stercertrm.id]
			render jsonResponseOK as JSON
		}else{
			throw new RuntimeException("Error.")
		}
	}
}
