<?php 

function getProjectId ($fiberyHost,$fiberyToken,$projectName){
    $api_url = 'https://veedoo.dev/api/getProjectIdByName';
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => $api_url,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "fiberyHost": "'.$fiberyHost.'",
    "fiberyToken": "'.$fiberyToken.'",
    "projectName": "'.$projectName.'"
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

$response = json_decode($response);

return $response;
}