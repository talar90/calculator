$(document).ready(function(){
    var inputs=[""];
    var totalString;
    var operators1 = ["+", "-", "/", "*"];
    var operators2 = ["."];
    var nums = [0,1,2,3,4,5,6,7,8,9];




    function getValue(input){
        if(operators2.includes(inputs[inputs.length-1]===true && input===".")){
            console.log("Duplicat '.' ");
        }
        else if(inputs.length===1 && operation1.includes(input)===false){
            inputs.push(input);

        }
        else if(operations1.includes(inputs[inputs.length-1])===false){
            inputs.push(input);
        }
        else if(num.includes(Number(input))){
            inputs.push(input);
        }
        update();
    }
    function update(){
        totalString = inputs.join("");
        $("#steps").html(totalString);

    }
    function getTotal(){
        totalString = inputs.join("");
        $("#steps").html(eval(totalString));

    }
    $("a").on("click", function(){
        if(this.id==="deleteAll"){
            inputs=[""];
            update();

        }
        else if(this.id==="backOne"){
            inputs.pop();
            update();
        }
        else if(this.id==="total"){
            getTotal();
        }
        else{
            if(inputs[inputs.length-1].indexOf("+", "-", "*", "/")===-1){
                getValue(this.id);
            }
            else{
                getValue(this.id);
            }
        }
});


//     function getValue(input){
//         if(operators2.includes(inputs[inputs.length-1]===true) && input==="."){
//             console.log("Dublicat '.' ");
//         }
//         else if(inputs.length===1 && operators1.includes(input)===false){
//             inputs.push(input);
//         }
//         else if(operators1.includes(inputs[inputs.length-1]===false)){
//             inputs.push(input);
//         }
//         else if(nums.includes(Number(input))){
//             inputs.push(input);
//         }
//         update();

//     }
//     function update(){
//         totalString = inputs.join("");
//         $("#steps").html(totalString);
//     }
//     function getTotal(){
//         totalString = input.join("");
//         $("#steps").html(eval(totalString));
//     }

//     $("a").on("click", function(){
//         if(this.id==="deleteAll"){
//             inputs=[""];
//             update();
//         }
//         else if(this.id==="back"){
//             inputs.pop();
//             update();
//         }
//         else if(this.id==="total"){
//             getTotal();
//         }
//         else{
//             if(inputs[inputs.length-1].indexOf("+", "-", "/", "*" )===-1){
//             getValue(this.id);
//             }
//             else{
//                 getValue(this.id);
//             }
//         }
    
// });
 

// });
