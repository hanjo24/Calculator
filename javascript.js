let output = document.getElementById(`display`);
        let output2 = document.getElementById(`display2`);
        
        function display(num) {
            output.value += num
        }
        function Clear(){
            output.value = ``;
            output2.value = ``;
        }
        function Delete(){
            output.value = output.value.slice(0,-1);
        }
        function calc(){
            try{
                let his = `${output.value} = ${eval(output.value)}`;
               output.value = eval(output.value)
               output2.value = his
            }   
            catch(err){
                output.value = "Error"
            }
        }