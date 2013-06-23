package org.pform.servicios.informes

import grails.converters.JSON
import org.pform.informes.*

class DistociasController {

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
			params.infoEgesFpp = new Date().parse(dateParser, params.infoEgesFpp + hhDef)
			params.infoEgesFechaEcoPrecoz = new Date().parse(dateParser, params.infoEgesFechaEcoPrecoz + hhDef)
			params.diagnCitacion = new Date().parse(dateParser, params.diagnCitacion + hhDef)
			//nueva row
			def distocia = new Distocia(params)
			distocia.rutPac = session.pac_rut
			distocia.embarazoInicial = embInicial
			distocia.save()
			println distocia.errors
			if(distocia.validate())
				render jsonResponseOK as JSON
			else
				render jsonResponseERROR as JSON
		}
		catch(Exception e){
			println e.message
			render jsonResponseERROR as JSON
		}
	}
}
