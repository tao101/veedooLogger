<?php 

function veedooLog($fiberyHost,$fiberyToken,$fiberyProjectId,$logType='warn',$message){
    $curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://veedoo.dev/api/log',
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
    "fiberyProjectId": "'.$fiberyProjectId.'",
    "logType": "'.$logType.'",
    "message": "'.$message.'"
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
//$response = json_decode($response);

return  $response;

};

function logError($fiberyHost,$fiberyToken,$fiberyProjectId,$message){
    return veedooLog($fiberyHost,$fiberyToken,$fiberyProjectId,'error',$message);

};
function logInfo($fiberyHost,$fiberyToken,$fiberyProjectId,$message){
    return veedooLog($fiberyHost,$fiberyToken,$fiberyProjectId,'info',$message);

};
function logWarning($fiberyHost,$fiberyToken,$fiberyProjectId,$message){
    return veedooLog($fiberyHost,$fiberyToken,$fiberyProjectId,'warn',$message);
};