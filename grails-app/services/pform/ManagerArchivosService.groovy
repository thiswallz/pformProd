package pform

class ManagerArchivosService {

	def grailsApplication
	
    def save(file) {
		def time = new Date().format("yyyyMMddhhmmss").toString()
		def fnombreArchivo = ""
		def fnombreOriginalArchivo = file.getOriginalFilename().toString()
		def dirGeneral = grailsApplication.config.pform_imgPath
		if(file.getOriginalFilename()){
			def f1extension = fnombreOriginalArchivo.split("\\.")[1]
			fnombreArchivo = 'imagen01_' + time + "." + f1extension
			file.transferTo(new File(dirGeneral+ fnombreArchivo))
		}
		return fnombreArchivo
    }
}
