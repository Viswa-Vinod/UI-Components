
function handleMouse(e) {

			if (e.innerHTML == "Add to Cart") {
				e.style.cursor = "pointer"	;
			} else {
				e.style.cursor = "auto";
			}
			
		}	

		function addToCart(e) {			

			if (e.innerHTML == "Add to Cart") { 
				e.mouseover		 
			 	e.innerHTML = 1;
				e.style.border = "none";
				e.style.borderTop = "1px solid black";
				e.style.borderBottom = "1px solid black";
				
				e.previousElementSibling.style.visibility = "visible";
			  	e.nextElementSibling.style.visibility = "visible";
			  	e.nextElementSibling.nextElementSibling.style.visibility = "visible";
			  	
			}
	 	}

	 	function increment(e) {
	 		
	 		e.previousElementSibling.innerHTML = +e.previousElementSibling.innerHTML + 1;
	 	}

	 	function decrement(e) {
	 	
	 		let qtyContent = e.nextElementSibling;
	 		if (qtyContent.innerHTML > 1) {
	 			qtyContent.innerHTML = +qtyContent.innerHTML - 1;	
	 		} else {
	 			qtyContent.innerHTML = "Add to Cart";
	 			qtyContent.style.border = "1px solid black";
	 			e.style.visibility = "hidden";
	 			qtyContent.nextElementSibling.style.visibility = "hidden";
	 			qtyContent.nextElementSibling.nextElementSibling.style.visibility = "hidden";
	 		}
	 	}

	 	function handleCancelIncr(e) {
	 		
	 		let qtyContent = e.previousElementSibling.previousElementSibling;
	 			qtyContent.innerHTML = "Add to Cart";
	 			qtyContent.style.border = "1px solid black";
	 			e.style.visibility = "hidden";
	 			qtyContent.nextElementSibling.style.visibility = "hidden";
	 			qtyContent.previousElementSibling.style.visibility = "hidden";
	 			
	 	}
