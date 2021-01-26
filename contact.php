<?php
    $message_sent = false;
    if(isset($_POST['email']) && $_POST['email'] !='') {

        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        // submit the form
        $userName = $_POST['name'];
        $userEmail = $_POST['email'];
        $userCompanyName = $_POST['company-name'];
        $userPhoneNumber = $_POST['phone-number'];
        $userMessage = $_POST['message'];
    
        $to = "michaelvisque@outlook.com";
        $body = "";
    
        $body .= "From: ".$userName. "\r\n";
        $body .= "Email: ".$userEmail. "\r\n";
        $body .= "Company-Name: ".$userCompanyName. "\r\n";
        $body .= "Phone-Number: ".$userPhoneNumber. "\r\n";
        $body .= "Message: ".$message. "\r\n";
    
        mail($to,$userCompanyName,$body);

        $message_sent = true;
        }
        else{
            $invaid_class_name = "form-invalid";
        }
    }
?>