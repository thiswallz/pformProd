package org.pform.servicios.informes

import grails.converters.JSON
import org.pform.informes.EmbarazoInicial
import pform.ManagerArchivosService

class EmbarazosInicialesController {

	def jsonResponseOK = [success: true, data: []]
	def jsonResponseERROR = [success: false, message: "Error al procesar registro", failure: true]
	def dateParser = "dd/MM/yyyy HH:mm a"
	def hhDef = " 00:00 AM"
	ManagerArchivosService managerArchivosService
	
    def index() { }
	
	def save() {
		//println request.getFile('imagen01').inputStream.text
		try {	
			//grabamos las imagenes
			def f1name = managerArchivosService.save(request.getFile('imagen01'))
			def f2name = managerArchivosService.save(request.getFile('imagen02'))
			def f3name = managerArchivosService.save(request.getFile('imagen03'))
			
			//parseamos las fechas antes de pasarlas
			params.infoEgesFur = new Date().parse(dateParser, params.infoEgesFur + hhDef)
			params.diagnInfogenCitacion = new Date().parse(dateParser, params.diagnInfogenCitacion + hhDef)
			//nuevo registro
			def einicial = new EmbarazoInicial(params)
			einicial.rutPac = session.pac_rut
			if(f1name)
				einicial.imgPath01 = f1name
			if(f2name)
				einicial.imgPath02 = f2name
			if(f3name)
				einicial.imgPath03 = f3name
				
			einicial.save()
			println einicial.errors
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
	def getFields() {
		def einicial = EmbarazoInicial.get(params.id)
		
		if(einicial){
			jsonResponseOK.data = einicial
			render jsonResponseOK as JSON
		}else{
			throw new RuntimeException("Error.")
		}
	}
}
