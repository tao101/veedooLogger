<?php 
    require('getProjectId.php');
    require('log.php');

    $fiberyHost = 'veedoo.fibery.io';
    // replace YOUR_TOKEN with your fibery token
    $fiberyToken = 'YOUR_TOKEN';
    // replace PROJECT_NAME your project name from fibery must match it
    $projectName = 'PROJECT_NAME';

    // getProjectId example start
    $projectId  = getProjectId($fiberyHost,$fiberyToken,$projectName)->projectId; // should be d7443b30-08d6-11ed-90a3-09ae86494235
    echo $projectId;
    // getProjectId example End

    // logError example start
     $logResults = logError($fiberyHost,$fiberyToken,'d7443b30-08d6-11ed-90a3-09ae86494235','Error PHP test') ;
     echo $logResults;
    // logError example End

    // logInfo example start
    $logResults = logInfo($fiberyHost,$fiberyToken,'d7443b30-08d6-11ed-90a3-09ae86494235','Info PHP test') ;
    echo $logResults;
    // logInfo example End
    
    // logWarning example start
    $logResults = logWarning($fiberyHost,$fiberyToken,'d7443b30-08d6-11ed-90a3-09ae86494235','Warning PHP test') ;
    echo $logResults;
    // logWarning example End