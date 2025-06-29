// for checkout page
        let data =  1;
 
        //get amount
        let getPrice =  document.getElementById('price').innerHTML;  
        let getDeliveryCharge =  document.getElementById('deliveryCharge').innerHTML;  
 
        //insert quantity in input field
        document.getElementById('quantity').value = data;
 
        //creation of increment function
        function increment() {
            data = data + 1;
            document.getElementById('quantity').value = data;
 
            document.getElementById('price').innerHTML = (data * getPrice);  
            document.getElementById('subTotal').innerHTML = (data * getPrice);           
            document.getElementById('totalPayable').innerHTML = (data * getPrice) + parseInt(getDeliveryCharge);          
        }
 
        //creation of decrement function
        function decrement() {
            if(data > 1){
                data = data - 1;
                document.getElementById('quantity').value = data;
 
                document.getElementById('price').innerHTML = (data * getPrice);  
                document.getElementById('subTotal').innerHTML = (data * getPrice);           
                document.getElementById('totalPayable').innerHTML = (data * getPrice) + parseInt(getDeliveryCharge); 
            }else{
                alert('please insert value greater than one');
            } 
        }
