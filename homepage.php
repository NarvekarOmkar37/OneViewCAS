


<?php

// A list of permitted file extensions
$allowed = array('png', 'jpg', 'gif', 'jpeg','pdf');

if(isset($_FILES['upl']) && $_FILES['upl']['error'] == 0){

	$extension = pathinfo($_FILES['upl']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
    echo ("<script>
    window.alert('Error: File not supported!');
    window.location.href='homepage.html';
    </script>");
		exit;
	}

	if(move_uploaded_file($_FILES['upl']['tmp_name'], 'uploads/'.$_FILES['upl']['name'])){
		echo ("<script>
    window.alert('Success: Uploaded!');
    window.location.href='homepage.html';
    </script>");
    // header("Location: homepage.html", true, 301);
		
    // $command = escapeshellcmd('python main.py');
	  // $output = shell_exec($command);
	  // echo $output;
	}
}


?>