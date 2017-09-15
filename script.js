function alertIMC(){
            var formulario = document.getElementById("formulario");

            var peso = formulario.peso.value;
            var altura = formulario.altura.value;
            var sexo = formulario.sexo.value;

            
            var imc = peso/(altura*altura);
            
            if(sexo = "masculino"){
                if(imc<=20.7){
                    alert("Seu IMC: "+imc+"\nAbaixo do peso");
                }
                else if(imc>20.7 && imc<=26.4){
                    alert("Seu IMC: "+imc+"\nPeso normal");
                }
                else if(imc>26.4 && imc<=27.8){
                    alert("Seu IMC: "+imc+"\nLeve sobrepeso");
                }
                else if(imc>27.8 && imc<=31.1){
                    alert("Seu IMC: "+imc+"\nAcima do peso ideal");
                }
                else if(imc>31.1){
                    alert("Seu IMC: "+imc+"\nObeso\nProcure orientação médica imediatamente!");
                }
                
            }
            else{
                if(imc<=19.1){
                    alert("Seu IMC: "+imc+"\nAbaixo do peso");
                }
                else if(imc>19.1 && imc<=25.8){
                    alert("Seu IMC: "+imc+"\nPeso normal");
                }
                else if(imc>25.8 && imc<=27.3){
                    alert("Seu IMC: "+imc+"\nLeve sobrepeso");
                }
                else if(imc>27.3 && imc<=32.3){
                    alert("Seu IMC: "+imc+"\nAcima do peso ideal");
                }
                else if(imc>32.3){
                    alert("Seu IMC: "+imc+"\nObeso\nProcure orientação médica imediatamente!");
                }
            }
}