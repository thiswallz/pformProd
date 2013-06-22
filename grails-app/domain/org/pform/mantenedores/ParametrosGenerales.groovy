package org.pform.mantenedores

class ParametrosGenerales {
	String informe
	String tipo
	String valor
	Integer inputValue
	static transients = ['S', 'D']
	Integer getS() {
		return valor.split(",")[0].toString().toInteger()
	}
	Integer getD(){
		def val = new Double(((valor.split(",")[1].toString().toInteger() / 10) * 7 ))
		return val.round().toInteger()
	}

    static constraints = {
    }
}
