const spanPwd = document.getElementsByClassName('validationMsg')[0];
		const spanCPwd = document.getElementsByClassName('confirmMsg')[0];
		const inputPwd = document.getElementById('pwdEntry');
		const inputCPwd = document.getElementById('confirmPwd');
		const pwdDiv = document.getElementsByClassName('pwdDiv')[0];
		const cpwdDiv = document.getElementsByClassName('cpwdDiv')[0];
		let validPwd = false;

		const caps = /[A-Z]+/;
		const nums = /[0-9]+/;
		
		function resetCpwd() {
			spanCPwd.innerHTML="";
		}

		function validatePwd(i) {
			validPwd = false;
			pwdDiv.style.flexDirection = "column";
			spanPwd.style.fontSize = "12px";
			pwd = i.value;
			inputCPwd.value = "";
			spanPwd.style.display = "inline";
			spanCPwd.innerHTML = "";

			if (pwd.length==0) {
				spanPwd.innerHTML="";
				spanPwd.style.display = "none";
				return
			}

			if (pwd.length < 6 || pwd.length > 15) {
					spanPwd.innerHTML = "password must be between 6-15 characters long";
					spanPwd.style.color = "red";
			} else if (!caps.test(pwd) || !nums.test(pwd))  {
					spanPwd.innerHTML = "password must have atleast one capital letter and one number";
					spanPwd.style.color = "red";
			} else 	if (!pwdContainsSpecialChars(pwd)) {
					spanPwd.innerHTML = "password must have atleast one special character";
					spanPwd.style.color = "red";
			} else {
				pwdDiv.style.flexDirection = "row";
				spanPwd.innerHTML = "&#10004";
				spanPwd.style.fontSize = "30px";
				spanPwd.style.color = "green";
				// inputPwd.style.display = "inline";
				validPwd = !validPwd;
			}
				
			
		}

		function validateConfirmPwd(i) {

			const cPwd = i.value;
			const pwd = inputPwd.value;
			spanCPwd.style.display = "inline";
			cpwdDiv.style.flexDirection = "column";
			spanCPwd.style.fontSize = "12px";

			if (!validPwd) {
				i.value="";
				
				spanCPwd.innerHTML="please enter a valid password before entering a confirmation"
				spanCPwd.style.color = "red";
				return;
			}
					

			if (i.value!== pwd) {
				spanCPwd.innerHTML = "passwords do not match"
				spanCPwd.style.color = "red";
			} else {
				// inputCPwd.style.display = "inline";
				cpwdDiv.style.flexDirection = "row";
				spanCPwd.innerHTML = "&#10004";
				spanCPwd.style.color = "green";
				spanCPwd.style.fontSize = "30px";

			}
		}

		function pwdContainsSpecialChars(pwd) {
			for (let i=0; i< pwd.length; i++) {
				if ((pwd.charCodeAt(i) >= 32 && pwd.charCodeAt(i) <= 47) ||
        		   (pwd.charCodeAt(i) >= 58 && pwd.charCodeAt(i) <= 64) || 
        		   (pwd.charCodeAt(i) >= 91 && pwd.charCodeAt(i) <= 96))
					return true;
			}

			return false;
		}